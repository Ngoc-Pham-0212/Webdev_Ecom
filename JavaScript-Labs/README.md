# JavaScript Labs (Lab 08 – Lab 10)

Kho lưu trữ tổng hợp các bài thực hành lập trình JavaScript phía máy khách thuộc học phần **Phát triển Ứng dụng Thương mại Điện tử**, biên soạn theo giáo trình *Fundamentals of Web Development (2nd Edition)*.

---

## 1. Thông tin sinh viên

- **Họ và tên:** `[Điền Họ và Tên sinh viên]`
- **Mã số sinh viên:** `[Điền MSSV]`
- **Lớp / Nhóm học phần:** `[Điền Lớp / Nhóm]`
- **Tài khoản GitHub:** [Ngoc-Pham-0212](https://github.com/Ngoc-Pham-0212)
- **Repository:** [Webdev_Ecom / JavaScript-Labs](https://github.com/Ngoc-Pham-0212/Webdev_Ecom/tree/main/JavaScript-Labs)

---

## 2. Mục tiêu thực hiện 03 bài Lab

- **Nắm vững nền tảng JavaScript (Lab 08):** Hiểu và vận dụng cú pháp cơ bản, biến, kiểu dữ liệu, cấu trúc điều khiển, vòng lặp, hàm, mảng và đối tượng để xử lý dữ liệu phía trình duyệt.
- **Làm chủ DOM & Xử lý sự kiện (Lab 09):** Biết cách truy xuất, thay đổi cấu trúc và thuộc tính phần tử HTML thông qua cây DOM; lắng nghe sự kiện người dùng, gỡ lỗi bằng trình duyệt DevTools và xây dựng chức năng kiểm tra tính hợp lệ của biểu mẫu (Form Validation).
- **Ứng dụng thư viện jQuery & AJAX (Lab 10):** Sử dụng thành thạo bộ chọn jQuery, xử lý sự kiện, tạo hiệu ứng chuyển động giao diện và gửi yêu cầu bất đồng bộ (`GET` / `jqXHR`) để tải dữ liệu động mà không cần tải lại trang.
- **Vận dụng vào Thương mại Điện tử:** Tạo nền tảng kỹ thuật để phát triển các tính năng thực tế trên website bán hàng như xác thực thông tin đăng ký/đăng nhập, cập nhật giỏ hàng tức thì, hiệu ứng xem trước sản phẩm và tải danh mục dữ liệu động.

---

## 3. Cấu trúc thư mục

```text
JavaScript-Labs/
├── Lab 08/                         # Thực hành JavaScript 1: Language Foundations
│   ├── css/                        # Tệp định dạng giao diện Lab 08
│   ├── flags/                      # Hình ảnh quốc kỳ dùng cho bài tập
│   ├── images/                     # Hình ảnh du lịch (travel photos)
│   ├── js/                         # Mã nguồn JavaScript (hello.js, travel-data.js, walkthrough06–11.js)
│   ├── ex8-01.html                 # Exercise 8.1 – 8.3
│   ├── lab08-walkthrough02.html    # Exercise 8.2 – 8.5
│   ├── lab08-walkthrough06.html    # Exercise 8.6
│   ├── lab08-walkthrough07.html    # Exercise 8.7
│   ├── lab08-walkthrough08.html    # Exercise 8.8
│   ├── lab08-walkthrough09.html    # Exercise 8.9
│   ├── lab08-walkthrough10.html    # Exercise 8.10
│   ├── lab08-walkthrough11.html    # Exercise 8.11
│   ├── Lab08.pdf                   # Tài liệu hướng dẫn thực hành Lab 08
│   ├── index.html                  # Trang mục lục điều hướng các bài tập Lab 08
│   └── README.md                   # Mô tả chi tiết Lab 08
│
├── Lab 09/                         # Thực hành JavaScript 2: DOM and Events
│   ├── css/                        # Tệp định dạng giao diện Lab 09
│   ├── flags/                      # Hình ảnh quốc kỳ
│   ├── images/                     # Hình ảnh minh họa sản phẩm / du lịch
│   ├── js/                         # Mã nguồn JavaScript (walkthrough01–08.js)
│   ├── lab09-walkthrough01.html    # Exercise 9.1
│   ├── lab09-walkthrough02.html    # Exercise 9.2
│   ├── lab09-walkthrough03.html    # Exercise 9.3
│   ├── lab09-walkthrough04.html    # Exercise 9.4
│   ├── lab09-walkthrough05.html    # Exercise 9.5 & 9.6
│   ├── lab09-walkthrough07.html    # Exercise 9.7
│   ├── lab09-walkthrough08.html    # Exercise 9.8
│   ├── Lab09.pdf                   # Tài liệu hướng dẫn thực hành Lab 09
│   ├── index.html                  # Trang mục lục điều hướng các bài tập Lab 09
│   └── README.md                   # Mô tả chi tiết Lab 09
│
├── Lab 10/                         # Thực hành JavaScript 3: jQuery
│   ├── css/                        # Tệp định dạng giao diện Lab 10
│   ├── images/                     # Hình ảnh và biểu tượng loading
│   ├── js/                         # Thư viện jQuery cục bộ & mã nguồn (walkthrough02–10.js)
│   ├── lab10-walkthrough01.html    # Exercise 10.1 & 10.2
│   ├── lab10-walkthrough03.html    # Exercise 10.3
│   ├── lab10-walkthrough04.html    # Exercise 10.4
│   ├── lab10-walkthrough05.html    # Exercise 10.5
│   ├── lab10-walkthrough06.html    # Exercise 10.6
│   ├── lab10-walkthrough07.html    # Exercise 10.7
│   ├── lab10-walkthrough08.html    # Exercise 10.8
│   ├── lab10-walkthrough09.html    # Exercise 10.9
│   ├── lab10-walkthrough10.html    # Exercise 10.10
│   ├── Lab10.pdf                   # Tài liệu hướng dẫn thực hành Lab 10
│   ├── index.html                  # Trang mục lục điều hướng các bài tập Lab 10
│   └── README.md                   # Mô tả chi tiết Lab 10
│
├── css/                            # Tệp định dạng dùng chung
├── js/                             # Tệp kịch bản dùng chung
├── index.html                      # Trang chủ tổng hợp điều hướng tới Lab 08, 09, 10
└── README.md                       # Tài liệu mô tả tổng quan thư mục JavaScript-Labs