const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'data', 'tasks.json');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Đảm bảo thư mục data và file tasks.json luôn tồn tại
if (!fs.existsSync(path.join(__dirname, 'data'))) {
    fs.mkdirSync(path.join(__dirname, 'data'));
}
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, '[]', 'utf8');
}

// Hàm đọc/ghi dữ liệu
const readTasks = () => JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
const writeTasks = (tasks) => fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2), 'utf8');

// API: Lấy danh sách toàn bộ task
app.get('/api/tasks', (req, res) => {
    const tasks = readTasks();
    res.json(tasks);
});

// API: Thêm task mới
app.post('/api/tasks', (req, res) => {
    const tasks = readTasks();
    const newTask = {
        id: Date.now().toString(),
        title: req.body.title,
        description: req.body.description || '',
        dueDate: req.body.dueDate || new Date().toISOString().split('T')[0],
        priority: req.body.priority || 'medium',
        category: req.body.category || 'Cá nhân',
        completed: false
    };
    tasks.unshift(newTask);
    writeTasks(tasks);
    res.status(201).json(newTask);
});

// API: Cập nhật task (sửa nội dung hoặc đổi trạng thái completed)
app.put('/api/tasks/:id', (req, res) => {
    const tasks = readTasks();
    const index = tasks.findIndex(t => t.id === req.params.id);
    if (index === -1) return res.status(404).json({ message: 'Không tìm thấy task' });

    tasks[index] = { ...tasks[index], ...req.body };
    writeTasks(tasks);
    res.json(tasks[index]);
});

// API: Xóa task
app.delete('/api/tasks/:id', (req, res) => {
    let tasks = readTasks();
    tasks = tasks.filter(t => t.id !== req.params.id);
    writeTasks(tasks);
    res.json({ message: 'Đã xóa thành công' });
});

app.listen(PORT, () => {
    console.log(`Server đang chạy tại: http://localhost:${PORT}`);
});