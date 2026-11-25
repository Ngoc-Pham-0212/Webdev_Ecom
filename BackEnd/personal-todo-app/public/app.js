let tasks = [];
let viewMode = 'today'; // 'today' hoặc 'all'
let statusChartInstance = null;
let categoryChartInstance = null;

const todayStr = new Date().toISOString().split('T')[0];

// Khởi tạo ứng dụng
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('current-date').textContent = `Hôm nay: ${new Date().toLocaleDateString('vi-VN')}`;
    fetchTasks();
    setupEventListeners();
});

async function fetchTasks() {
    const res = await fetch('/api/tasks');
    tasks = await res.json();
    renderTasks();
    updateAnalytics();
}

function renderTasks() {
    const listEl = document.getElementById('task-list');
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    const statusFilter = document.getElementById('filter-status').value;
    const priorityFilter = document.getElementById('filter-priority').value;

    const filtered = tasks.filter(task => {
        const matchDate = viewMode === 'all' || task.dueDate === todayStr;
        const matchSearch = task.title.toLowerCase().includes(searchQuery) || task.description.toLowerCase().includes(searchQuery);
        const matchStatus = statusFilter === 'all' || (statusFilter === 'completed' ? task.completed : !task.completed);
        const matchPriority = priorityFilter === 'all' || task.priority === priorityFilter;
        return matchDate && matchSearch && matchStatus && matchPriority;
    });

    if (filtered.length === 0) {
        listEl.innerHTML = `<p style="text-align:center; color:#64748b; padding: 30px;">Không có công việc nào phù hợp.</p>`;
        return;
    }

    const priorityLabels = { high: 'Cao', medium: 'Trung bình', low: 'Thấp' };

    listEl.innerHTML = filtered.map(task => `
        <div class="task-card ${task.completed ? 'completed' : ''}">
            <div class="task-left">
                <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} onchange="toggleComplete('${task.id}', ${!task.completed})">
                <div class="task-info">
                    <h3>${task.title}</h3>
                    ${task.description ? `<p class="task-desc">${task.description}</p>` : ''}
                    <div class="task-meta">
                        <span class="badge badge-${task.priority}">${priorityLabels[task.priority]}</span>
                        <span class="badge badge-cat">${task.category}</span>
                        <span style="color:#64748b">📅 ${task.dueDate}</span>
                    </div>
                </div>
            </div>
            <div class="task-actions">
                <button class="icon-btn" onclick="openEditModal('${task.id}')">Sửa</button>
                <button class="icon-btn delete" onclick="deleteTask('${task.id}')">Xóa</button>
            </div>
        </div>
    `).join('');
}

// CRUD Operations
async function toggleComplete(id, completed) {
    await fetch(`/api/tasks/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed })
    });
    fetchTasks();
}

async function deleteTask(id) {
    if (!confirm('Bạn có chắc muốn xóa công việc này?')) return;
    await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
    fetchTasks();
}

document.getElementById('task-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = document.getElementById('task-id').value;
    const payload = {
        title: document.getElementById('task-title').value,
        description: document.getElementById('task-desc').value,
        dueDate: document.getElementById('task-date').value,
        priority: document.getElementById('task-priority').value,
        category: document.getElementById('task-category').value
    };

    if (id) {
        await fetch(`/api/tasks/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
    } else {
        await fetch('/api/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
    }

    closeModal();
    fetchTasks();
});

// Modal Controls
function openAddModal() {
    document.getElementById('modal-title').textContent = 'Thêm công việc mới';
    document.getElementById('task-form').reset();
    document.getElementById('task-id').value = '';
    document.getElementById('task-date').value = todayStr;
    document.getElementById('task-modal').classList.add('open');
}

function openEditModal(id) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;
    document.getElementById('modal-title').textContent = 'Chỉnh sửa công việc';
    document.getElementById('task-id').value = task.id;
    document.getElementById('task-title').value = task.title;
    document.getElementById('task-desc').value = task.description;
    document.getElementById('task-date').value = task.dueDate;
    document.getElementById('task-priority').value = task.priority;
    document.getElementById('task-category').value = task.category;
    document.getElementById('task-modal').classList.add('open');
}

function closeModal() {
    document.getElementById('task-modal').classList.remove('open');
}

// Analytics & Charts
function updateAnalytics() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const pending = total - completed;
    const rate = total > 0 ? Math.round((completed / total) * 100) : 0;

    document.getElementById('stat-total').textContent = total;
    document.getElementById('stat-completed').textContent = completed;
    document.getElementById('stat-rate').textContent = `${rate}%`;

    // Biểu đồ Trạng thái
    const ctxStatus = document.getElementById('statusChart').getContext('2d');
    if (statusChartInstance) statusChartInstance.destroy();
    statusChartInstance = new Chart(ctxStatus, {
        type: 'doughnut',
        data: {
            labels: ['Đã hoàn thành', 'Đang thực hiện'],
            datasets: [{
                data: [completed, pending],
                backgroundColor: ['#10b981', '#f59e0b']
            }]
        }
    });

    // Biểu đồ Danh mục
    const categories = ['Công việc', 'Cá nhân', 'Học tập', 'Sức khỏe'];
    const catCounts = categories.map(cat => tasks.filter(t => t.category === cat).length);

    const ctxCat = document.getElementById('categoryChart').getContext('2d');
    if (categoryChartInstance) categoryChartInstance.destroy();
    categoryChartInstance = new Chart(ctxCat, {
        type: 'bar',
        data: {
            labels: categories,
            datasets: [{
                label: 'Số lượng task',
                data: catCounts,
                backgroundColor: '#2563eb',
                borderRadius: 6
            }]
        },
        options: { scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } } }
    });
}

// Event Listeners
function setupEventListeners() {
    // Chuyển Tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.view-section').forEach(v => v.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(btn.dataset.tab).classList.add('active');
            if (btn.dataset.tab === 'stats-view') updateAnalytics();
        });
    });

    // Chuyển Hôm nay / Tất cả
    document.getElementById('btn-today').addEventListener('click', (e) => {
        viewMode = 'today';
        e.target.classList.add('active');
        document.getElementById('btn-all').classList.remove('active');
        document.getElementById('view-title').textContent = 'Công việc hôm nay';
        renderTasks();
    });

    document.getElementById('btn-all').addEventListener('click', (e) => {
        viewMode = 'all';
        e.target.classList.add('active');
        document.getElementById('btn-today').classList.remove('active');
        document.getElementById('view-title').textContent = 'Tất cả công việc';
        renderTasks();
    });

    // Search & Filter
    ['search-input', 'filter-status', 'filter-priority'].forEach(id => {
        document.getElementById(id).addEventListener('input', renderTasks);
    });

    document.getElementById('btn-open-modal').addEventListener('click', openAddModal);
    document.getElementById('btn-close-modal').addEventListener('click', closeModal);
}