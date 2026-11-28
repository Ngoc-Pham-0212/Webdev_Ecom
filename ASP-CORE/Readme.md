# 🎬 Hệ Thống Quản Lý & Bán Vé Xem Phim Trực Tuyến (Movie E-Commerce)

Dự án ứng dụng web thương mại điện tử bán vé/đĩa phim được xây dựng trên nền tảng **ASP.NET Core MVC (.NET 10)**, hỗ trợ quản lý danh mục phim, thể loại, giỏ hàng lưu trữ qua Session, quy trình đặt hàng (Checkout) và gửi email xác nhận tự động.

* **Sinh viên thực hiện:** Phạm Bảo Ngọc
* **MSSV:** 31241027390
* **Môn học:** Phát triển ứng dụng Thương mại Điện tử

---

## 🛠️ Công nghệ sử dụng

* **Framework:** ASP.NET Core MVC (.NET 10.0)
* **ORM & Database:** Entity Framework Core, Microsoft SQL Server (hỗ trợ chạy LocalDB và hosting Somee)
* **Quản lý trạng thái:** ASP.NET Core Session (`System.Text.Json` xử lý tuần tự hóa đối tượng phức tạp với `ReferenceHandler.IgnoreCycles`)
* **Xác thực người dùng:** ASP.NET Core Identity
* **Gửi Email tự động:** `System.Net.Mail` (Google SMTP)
* **Giao diện (Frontend):** Razor Views (`.cshtml`), Bootstrap 5, HTML5/CSS3

---

## ✨ Chức năng chính

1. **Quản lý Danh mục Phim & Thể loại (CRUD):**
   * Thêm, xem, sửa, xóa thông tin phim (`Movies`) và thể loại (`Genres`).
   * Hỗ trợ tải lên hình ảnh poster trực tiếp vào thư mục `wwwroot/images` và hiển thị động trên giao diện.
   * Ràng buộc kiểm tra dữ liệu đầu vào (Custom Validation cho ngày phát hành và thể loại).
2. **Giỏ hàng thông minh (Shopping Cart):**
   * Thêm phim vào giỏ hàng, tự động cộng dồn số lượng và tính tổng tiền.
   * Xóa từng sản phẩm khỏi giỏ hàng.
   * Lưu trữ trạng thái giỏ hàng xuyên suốt phiên làm việc bằng **Session**.
3. **Thanh toán & Xử lý Đơn hàng (Checkout):**
   * Thu thập thông tin giao hàng (`ShippingDetails`: Họ tên, Địa chỉ, Số điện thoại, Email).
   * Lưu trữ hóa đơn (`HoaDons`) và chi tiết hóa đơn (`ChiTietHoaDons`) vào cơ sở dữ liệu SQL Server.
   * Gửi email hóa đơn chi tiết tự động đến hộp thư của khách hàng qua Gmail SMTP.
   * Tự động làm trống giỏ hàng sau khi đặt hàng thành công.

---

### 💡 Thêm file `.gitignore` cho dự án .NET
Để đảm bảo không bao giờ đẩy nhầm thư mục `bin/`, `obj/`, `publish/` lên GitHub khi nộp bài, bạn hãy kiểm tra file `.gitignore` ở thư mục gốc của project có chứa các dòng sau:

```text
bin/
obj/
publish/
.vs/
*.user
*.suo

## 📁 Cấu trúc thư mục dự án


31241027390_PhamBaoNgoc/
├── Controllers/
│   ├── GenresController.cs       # Xử lý CRUD thể loại phim
│   ├── HomeController.cs         # Trang chủ và thông tin chung
│   └── MoviesController.cs       # Quản lý phim, giỏ hàng (AddToCart, RemoveFromCart) & Checkout
├── Data/
│   └── ApplicationDbContext.cs   # Cấu hình DbContext và các bảng dữ liệu EF Core
├── Extension/
│   └── SessionExtension.cs       # Mở rộng ISession hỗ trợ lưu/đọc object JSON (IgnoreCycles)
├── Migrations/                   # Lịch sử khởi tạo và cập nhật cấu trúc CSDL
├── Models/
│   ├── ChiTietHoaDon.cs          # Model chi tiết từng sản phẩm trong hóa đơn
│   ├── Genre.cs                  # Model thể loại phim
│   ├── HoaDon.cs                 # Model hóa đơn tổng
│   ├── Movie.cs                  # Model thông tin phim & file upload
│   └── ShippingDetail.cs         # Model thông tin giao hàng của khách
├── Validation/                   # Các lớp kiểm tra ràng buộc dữ liệu tùy chỉnh
├── Views/
│   ├── Genres/                   # Giao diện quản lý thể loại
│   ├── Movies/                   # Giao diện danh sách phim, giỏ hàng (AddToCart), Checkout
│   └── Shared/                   # Layout chung, giỏ hàng thu gọn (Summary.cshtml)
├── wwwroot/
│   └── images/                   # Thư mục lưu trữ ảnh poster phim được upload
├── appsettings.json              # File cấu hình chuỗi kết nối SQL và SMTP Email
└── Program.cs                    # Cấu hình dịch vụ (Session, DbContext, Identity) & Middleware
