# BUỔI 1

## 1. Giới thiệu
Dự án thực hiện khảo sát cấu trúc, chức năng và trải nghiệm người dùng trên website thương mại điện tử thực tế Grimm DC (thương hiệu thời trang đường phố Local Brand Việt Nam). Từ kết quả khảo sát, dự án tập trung thiết kế và xây dựng giải pháp cải tiến giao diện cho khu vực **Ngăn kéo giỏ hàng trượt ngang (Slide-out Cart / Mini Cart)** kết hợp thanh tiến trình miễn phí vận chuyển (**Freeship Progress Bar**) và khối bán chéo sản phẩm phụ trợ (**Dynamic Cross-sell**) bằng HTML5 và CSS3 chuẩn Semantic, tối ưu hiển thị Responsive trên đa thiết bị.

## 2. Website tham khảo
- **Tên website:** Grimm DC
- **URL:** [https://grimmdc.com/](https://grimmdc.com/)
- **Nhóm ngành hàng:** Thời trang đường phố và phụ kiện Local Brand Việt Nam mang đậm yếu tố văn hóa - lịch sử (Áo thun, sơ mi, nón thêu, khăn lụa, túi xách, miếng dán gai - Velcro Patch,...).
- **Khách hàng mục tiêu:** Giới trẻ (Gen Z, Millennials) tại Việt Nam yêu thích phong cách năng động, cá tính và tôn vinh giá trị văn hóa dân tộc.
- **Khu vực đã khảo sát:** 
  1. Trang chủ (Hero banner, Storytelling blocks, thẻ sản phẩm nổi bật).
  2. Danh mục sản phẩm (Hệ thống phân cấp BST/Collab, lưới hiển thị, bộ lọc thuộc tính).
  3. Chi tiết sản phẩm (Thư viện ảnh, mô tả thiết kế, chọn biến thể size/màu, nút CTA).
  4. Tìm kiếm (Ô tìm kiếm Header, dropdown gợi ý nhanh, xử lý từ đồng nghĩa).
  5. Giỏ hàng (Ngăn kéo mini-cart, tóm tắt đơn hàng, trải nghiệm điều chỉnh và bán chéo).

## 3. Chức năng chính của giao diện cải tiến
- **Ngăn kéo giỏ hàng trượt mượt mà (Slide-out Drawer):** Đóng/mở trượt ngang từ mép phải với hiệu ứng GPU transition và lớp nền mờ (Backdrop Blur), không gây chuyển trang (Zero-page reload).
- **Thanh tiến trình Freeship thông minh:** Tính toán trực quan số tiền còn thiếu để đạt mốc Miễn phí vận chuyển (800.000₫); tự động chuyển sang trạng thái chúc mừng (màu xanh lá) khi đủ điều kiện.
- **Danh sách sản phẩm tương tác cao:** Hiển thị ảnh, tên mã, đơn giá, dropdown cho phép đổi nhanh kích thước (Size) trực tiếp và bộ tăng giảm số lượng (- / +), nút xóa sản phẩm.
- **Khối gợi ý bán chéo động (Dynamic Cross-sell):** Đề xuất các món phụ kiện vừa vặn túi tiền (như Miếng dán gai Velcro 70.000₫) kèm nút thêm 1 chạm (+ Thêm) để kích thích tăng giá trị đơn hàng (AOV).
- **Thiết kế Responsive & Thumb-friendly:** Tương thích chuẩn xác trên Desktop (ngăn kéo 440px cố định) và Mobile (toàn màn hình 100vw, chiều cao 100dvh chống che khuất thanh trình duyệt, vùng chạm nút bấm lớn).

## 4. Công nghệ sử dụng
- **HTML5:** Cấu trúc ngữ nghĩa chuẩn (Semantic Tags: `<aside role="dialog">`, `<header>`, `<section>`, `<ul/li>`, `<footer>`), tích hợp thuộc tính trợ năng Accessibility (`aria-modal`, `aria-labelledby`, `aria-label`).
- **CSS3:** Sử dụng CSS Custom Properties (CSS Variables) quản lý Theme màu và Spacing, Flexbox Layout, Transform GPU Acceleration, Viewport dynamic (`100dvh`), Media Queries và Scroll Isolation (`overscroll-behavior: contain`).

## 5. Cách chạy dự án
1. **Chạy trực tiếp trên máy cục bộ (Local):**
   - Tải hoặc clone repository về máy tính.
   - Nhấp đúp chuột vào file `index.html` hoặc chuột phải chọn mở bằng trình duyệt web (Google Chrome, Microsoft Edge, Firefox, Safari).
   - *(Khuyến nghị)* Sử dụng extension **Live Server** trên VS Code để có trải nghiệm hot-reload tốt nhất.
2. **Xem trực tiếp qua GitHub Pages:**
   - Truy cập liên kết GitHub Pages: `https://ngoc-pham-0212.github.io/Webdev_Ecom/ecommerce-cart/ecommerce-ui-improvement/`

## 6. Cải tiến đã thực hiện
- **Vấn đề ban đầu của website:**
  - Ngăn kéo giỏ hàng hiện tại chỉ mang tính liệt kê thụ động, thiếu tính linh hoạt: Người dùng muốn đổi kích cỡ/màu sắc phải xóa hẳn món đồ và quay lại trang chi tiết sản phẩm để chọn lại từ đầu.
  - Bỏ lỡ cơ hội bán kèm: Chưa có thanh báo hiệu ngưỡng Freeship và chưa tận dụng các món phụ kiện giá nhỏ để thúc đẩy tăng giá trị giỏ hàng trung bình.
- **Giải pháp và thay đổi đã thực hiện:**
  - Thiết kế lại bố cục Slide-out Cart thành 5 khối chức năng liền mạch: Header cố định -> Thanh Freeship Banner -> Body cuộn độc lập -> Khối Cross-sell phụ kiện -> Footer cố định chốt tổng tiền và CTA thanh toán.
  - Tích hợp Dropdown thay đổi Size S/M/L/XL ngay tại từng thẻ sản phẩm trong giỏ.
  - Định dạng chuẩn tiền tệ Việt Nam có dấu chấm phân cách hàng nghìn rõ ràng.

## 7. Hỗ trợ từ AI
- **Phần AI hỗ trợ:**
  - Hỗ trợ xây dựng khung tiêu chí đánh giá nghiệp vụ theo chuẩn UX E-commerce cho 5 khu vực khảo sát.
  - Đề xuất kiến trúc Semantic HTML5, cách đặt tên Class CSS và ý tưởng tích hợp Freeship Progress Bar kết hợp Cross-sell.
  - Gợi ý giải pháp kỹ thuật tối ưu transition bằng `transform: translateX()` thay vì thay đổi thuộc tính `right` để tránh giật lag.
- **Phần sinh viên tự kiểm tra, điều chỉnh và hoàn thiện:**
  - Đối chiếu thực tế website Grimm DC: Loại bỏ các nhận xét sai của AI về việc Grimm DC không có giỏ hàng trượt (thực tế web đã có nhưng còn đơn điệu).
  - Tự bổ sung các đặc trưng riêng của Grimm DC vào nội dung: Sản phẩm miếng dán gai (Velcro patch), nón thêu, các mốc giá thực tế (ngưỡng Freeship 800.000₫, giá patch 70.000₫).
  - Tinh chỉnh CSS: Thêm `100dvh` cho Mobile, bổ sung vùng an toàn `env(safe-area-inset-bottom)` cho iPhone và thiết lập `overflow: hidden` khi mở ngăn kéo để chống cuộn trang nền.

# BUỔI 2
## Báo cáo kiểm thử

### 1. Thông tin chung

| Mục | Nội dung |
|---|---|
| Dự án | Grimm DC Concept Store – giao diện TMĐT (HTML5 + CSS3) |
| Ngày kiểm thử | 03/11/2026 |
| Trình duyệt | Cốc Cốc |
| Công cụ | Chrome DevTools (Elements, Network, Device Toolbar, Rendering) |
| Tệp chính | `index.html`, `css/style.css`, thư mục `images/` |

### 2. Phạm vi kiểm thử

- Hiển thị trang chủ: header, danh sách 8 sản phẩm, ngăn kéo giỏ hàng.
- Bố cục responsive: Flexbox (header, thẻ sản phẩm, giỏ hàng) và CSS Grid (danh sách sản phẩm).
- Hiệu ứng `:hover`, `:focus-visible`, `:active` và `prefers-reduced-motion`.
- Khả năng truy cập bằng bàn phím và độ tương phản màu.

Ngoài phạm vi: thêm sản phẩm vào giỏ, đổi số lượng, lọc danh mục (cần JavaScript); trang `checkout.html`.

### 3. Bảng kiểm thử

| Nội dung kiểm tra | Kết quả | Ghi chú |
|---|---|---|
| Trang HTML mở được | Đạt | Cấu trúc hợp lệ (`lang`, `charset`, `viewport`), các thẻ đóng đầy đủ. |
| CSS được áp dụng | Đạt | `css/style.css` được tải thành công (tab Network không báo lỗi 404). |
| Hình ảnh hiển thị đúng | Đạt | 8 ảnh `.webp` hiển thị trong khung tỷ lệ cố định, không bị méo nhờ `aspect-ratio` và `object-fit: cover`. |
| Liên kết hoạt động | Đạt (có giới hạn) | Icon giỏ hàng mở/đóng được ngăn kéo sau khi thêm script. Menu danh mục dùng `href="#"` làm giữ chỗ; `checkout.html` chưa thực hiện. |
| Bố cục không bị tràn nghiêm trọng | Đạt | Grid 4 cột (trên 992px), 2 cột (từ 992px trở xuống); không có thanh cuộn ngang ở các độ rộng 320, 600, 992 và 1200px. |
| Hover/focus hoạt động | Đạt | Nút, menu, icon giỏ, nút trong giỏ hàng đều có hover và vòng focus khi dùng phím Tab. |
| Đã tự sửa ít nhất một vấn đề | Đạt | Đã sửa 6 vấn đề, xem mục 4. |

### 4. Lỗi phát hiện và cách khắc phục

| # | Vấn đề | Cách khắc phục | Kết quả sau sửa |
|---|---|---|---|
| 1 | Không có JavaScript nên bấm icon giỏ hàng không mở được ngăn kéo. | Thêm script nhỏ bật/tắt các class `is-open` và `body-lock-scroll`; hỗ trợ đóng bằng nút ×, nền mờ và phím Esc. | Ngăn kéo mở và đóng bình thường. |
| 2 | Ngăn kéo khi đóng chỉ bị đẩy ra ngoài màn hình, phím Tab vẫn đi vào các nút ẩn. | Thêm `visibility: hidden` cho `.cart-drawer`, chuyển `visible` khi mở. | Tab bỏ qua ngăn kéo khi đóng. |
| 3 | `:focus-visible` mới có ở nút "Thêm vào giỏ". | Thêm quy tắc chung cho `.btn`, liên kết menu, icon giỏ, nút ×, nút số lượng, nút xóa, ô chọn size. | Mọi điều khiển đều có vòng focus rõ. |
| 4 | Nhãn giảm giá sai so với giá: 380.000₫/450.000₫ giảm khoảng 16%; 70.000₫/89.000₫ giảm khoảng 21%. | Sửa `-15%` thành `-16%` (SP 1), `-22%` thành `-21%` (SP 7, SP 8). | Nhãn khớp với giá. |
| 5 | Chữ đỏ `#e53935` có tương phản khoảng 4,0–4,2:1, chưa đạt mức 4,5:1 cho chữ nhỏ. | Đổi `--color-accent` thành `#c62828`. | Tương phản khoảng 5,3–5,6:1. |
| 6 | `transition` thừa dấu `;;` và còn comment hướng dẫn trong CSS. | Dọn lại cú pháp, viết lại comment mô tả. | Mã CSS gọn và đúng cú pháp. |

### 5. Hạn chế và việc chưa thực hiện

- Chưa có JavaScript cho: thêm sản phẩm vào giỏ, tăng giảm số lượng, xóa sản phẩm, lọc danh mục, cập nhật tạm tính và thanh freeship (hiện là giá trị tĩnh).
- Trang `checkout.html` chưa được tạo.
- Dưới 600px menu danh mục bị ẩn và chưa có menu thay thế (ví dụ menu hamburger).
- Chưa kiểm thử trên trình duyệt di động thật hoặc trình đọc màn hình.

### 6. Kết luận

Giao diện hiển thị đúng, bố cục responsive ổn định và hiệu ứng hover/focus hoạt động trên các thành phần chính. Các lỗi về mở giỏ hàng, truy cập bàn phím, nhãn giảm giá và độ tương phản đã được khắc phục. Các chức năng cần JavaScript và trang thanh toán là hướng phát triển tiếp theo.

### 7. Ghi chú về việc dùng AI

Công cụ AI (Claude) được dùng để rà soát mã và gợi ý cách sửa. Toàn bộ thay đổi được tự áp dụng và kiểm tra lại trên trình duyệt. Chi tiết xem trong `AI_usage_log`.