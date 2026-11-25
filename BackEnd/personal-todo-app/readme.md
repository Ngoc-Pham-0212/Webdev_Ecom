# ✅ TaskFlow - Personal TODO & Analytics App

Ứng dụng quản lý công việc cá nhân đơn giản, trực quan được xây dựng bằng **Node.js (Express)**, **HTML5**, **CSS3** và **Vanilla JavaScript**.

## 🚀 Tính năng chính

1. **Quản lý công việc theo ngày:**
   - Mặc định hiển thị danh sách công việc cần làm trong **ngày hôm nay**, hỗ trợ chuyển đổi nhanh sang chế độ xem toàn bộ công việc.
   - **Tìm kiếm & Lọc:** Tìm kiếm theo từ khóa (tiêu đề, mô tả) kết hợp bộ lọc theo trạng thái (Đang thực hiện / Đã hoàn thành) và mức độ ưu tiên (Cao / Trung bình / Thấp).
2. **Thao tác CRUD đầy đủ:**
   - Thêm mới công việc với các thuộc tính: Tiêu đề, Mô tả, Ngày thực hiện, Mức độ ưu tiên và Danh mục.
   - Đánh dấu hoàn thành nhanh chóng bằng checkbox.
   - Chỉnh sửa thông tin qua hộp thoại Modal và xóa công việc.
3. **Trang Thống kê (Analytics Dashboard):**
   - Hiển thị các chỉ số KPI: Tổng số task, số task đã hoàn thành, tỷ lệ hoàn thành (%).
   - Trực quan hóa dữ liệu bằng biểu đồ tròn (Tỷ lệ trạng thái) và biểu đồ cột (Phân bổ công việc theo danh mục) thông qua thư viện Chart.js.

## 🛠️ Công nghệ sử dụng

- **Backend:** Node.js, Express.js
- **Database:** Local JSON File (`data/tasks.json`) kèm sẵn dữ liệu mẫu (Mock Data).
- **Frontend:** HTML5, CSS3, JavaScript (ES6+), Chart.js.

