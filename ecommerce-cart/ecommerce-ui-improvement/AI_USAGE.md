# AI Usage Log

## 1. Công cụ AI
Tên công cụ: Gemini

## 2. Mục đích sử dụng
Phân tích giao diện website hiện có, tạo mã nguồn và giải thích HTML/CSS, đề xuất bố cục cải tiến khu vực giỏ hàng cho website.

## 3. Prompt đã sử dụng
### Prompt Phân tích website:
Bạn là chuyên gia phân tích nghiệp vụ và thiết kế trải nghiệm người dùng
cho website thương mại điện tử.

Tôi đang khảo sát website: GrimmDC - https://grimmdc.com/
Hãy giúp tôi lập bảng phân tích các khu vực:
1. Trang chủ.
2. Danh mục sản phẩm.
3. Chi tiết sản phẩm.
4. Tìm kiếm.
5. Giỏ hàng.

Với mỗi khu vực, hãy nêu:
- Mục đích của chức năng.
- Thành phần giao diện cần có.
- Điểm thuận tiện đối với khách hàng.
- Một vấn đề có thể phát sinh.
- Một đề xuất cải tiến.

### Prompt Cải tiến
Tôi đang thực hiện bài tập phát triển giao diện website thương mại điện tử
bằng HTML5 và CSS3.

Tôi muốn cải tiến khu vực: Thiết kế phần tóm tắt giỏ hàng (Slide-out Cart)
Đối tượng sử dụng: khách hàng mua sắm trực tuyến tại Việt Nam.

Hãy đề xuất:
1. Bố cục giao diện.
2. Các thành phần HTML cần sử dụng.
3. Cách tổ chức CSS.
4. Cách hiển thị trên máy tính và điện thoại.
5. Những điểm cần kiểm tra về khả năng sử dụng.

Trước tiên, hãy giải thích phương án thiết kế.
Chưa tạo toàn bộ mã nguồn cho đến khi tôi yêu cầu.

### Prompt tạo mã nguồn
Dựa trên phương án đã thống nhất, hãy tạo một trang giao diện
thương mại điện tử bằng HTML5 và CSS3.

Yêu cầu:
- Giao diện có tiêu đề và khu vực sản phẩm.
- Có tối thiểu 4 sản phẩm mẫu.
- Mỗi sản phẩm có hình ảnh, tên, giá và nút thao tác.
- Bố cục phù hợp với màn hình máy tính và điện thoại.
- Mã HTML có cấu trúc rõ ràng.
- CSS được tách thành file riêng.
- Không sử dụng backend hoặc cơ sở dữ liệu.
- Không đưa thư viện hoặc thành phần không cần thiết vào dự án.

Giải thích cách chạy trang web và những phần tôi cần kiểm tra.

## 4. Kết quả AI đề xuất
- **Về phân tích:** AI nhận diện tốt cấu trúc chức năng thương mại điện tử, chỉ ra rủi ro gián đoạn quy trình thanh toán nếu khách hàng không thể chỉnh sửa size/màu trong giỏ hàng. 
- **Về kiến trúc giao diện:** AI đề xuất cấu trúc 5 khối cho Drawer (`Header`, `Freeship Banner`, `Cart Body List`, `Cross-sell Section`, `Footer Checkout CTA`).
- **Về kỹ thuật lập trình:** AI cung cấp khung HTML ngữ nghĩa (`<aside>`, `<header>`, `<ul>`, `<li>`, `<footer>`) và giải pháp chuyển động mượt bằng `transform: translateX(100%)` sang `translateX(0)`.

## 5. Kiểm tra, đối chiếu và điều chỉnh của sinh viên
- **Loại bỏ thông tin chưa chính xác:** AI ban đầu đưa ra nhận định chung chung rằng website chưa có giỏ hàng mini. Khi kiểm tra thực tế trên web Grimm DC, hãng đã có drawer mini trượt ngang, điểm hạn chế thực sự là thiếu tính năng đổi size trực tiếp và thiếu gợi ý phụ kiện thông minh. Sinh viên đã điều chỉnh lại đúng bản chất thực tế của website. Ngoài ra, AI có nhầm lẫn khi UI của website gốc ở bản mobile đã tối ưu ở các thanh BST (không bị quá dài hay quá to) nhưng AI đưa ra nhận định là không fit giao diện mobile dẫn đến các thanh BST che hết màn hình.
- **Cá nhân hóa dữ liệu cho Grimm DC:** Thay thế các sản phẩm chung chung của AI bằng đúng sản phẩm đặc trưng của hãng: *Áo thun Bùi Thị Xuân, Nón thêu Thủ Đô, Áo wash Độc Lập - Tự Do - Hạnh Phúc*, và phụ kiện mua kèm là *Miếng dán gai (Velcro Patch) 70.000₫*.
- **Tự sửa và bổ sung mã nguồn:**
  - Bổ sung đơn vị `100dvh` (Dynamic Viewport Height) cho CSS mobile thay vì chỉ dùng `100vh` để tránh bị thanh địa chỉ trình duyệt trên điện thoại đè che mất nút thanh toán.
  - Bổ sung `padding-bottom: calc(16px + env(safe-area-inset-bottom))` bảo vệ vùng phím điều hướng cử chỉ của iOS/Android.
  - Tự thiết lập `overscroll-behavior: contain;` ở phần cuộn sản phẩm để ngăn hiện tượng cuộn giật lây lan ra trang web nền.

## 6. Phần sinh viên hiểu và có thể tự giải thích
1. **Kiến trúc Semantic HTML5 & Accessibility:**
   - Thẻ `<aside role="dialog" aria-modal="true">`: Định danh ngăn kéo là một hộp thoại nổi tách biệt với luồng trang chính, hỗ trợ tốt cho trình đọc màn hình.
   - Thẻ `<select class="variant-select">` kết hợp `<option>`: Cho phép khách hàng đổi size ngay tại giỏ hàng mà không cần tải lại trang.
2. **Kỹ thuật CSS Flexbox & Drawer Layout:**
   - Cặp thuộc tính `flex-shrink: 0` (cho Header, Freeship Banner, Footer) và `flex-grow: 1; overflow-y: auto;` (cho phần thân chứa danh sách sản phẩm) đảm bảo giao diện luôn cố định 2 đầu nút bấm quan trọng và cuộn mượt ở giữa.
3. **Hiệu năng chuyển động (GPU Rendering):**
   - Sử dụng `transform: translateX(100%)` kết hợp thuộc tính `will-change: transform` giúp trình duyệt dựng hình bằng card đồ họa phần cứng, tránh kích hoạt lại quy trình tính toán Layout/Repaint đắt đỏ so với cách dùng `right: -440px`.
4. **Tư duy kinh doanh E-commerce áp dụng vào kỹ thuật:**
   - Cơ chế Freeship Progress Bar và Dynamic Cross-sell tác động trực tiếp vào tâm lý tránh phí vận chuyển của người mua hàng Việt Nam, giúp tối ưu chỉ số AOV (Average Order Value) của website.
