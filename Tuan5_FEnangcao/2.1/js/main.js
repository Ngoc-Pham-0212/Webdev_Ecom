$(document).ready(function () {
  const FREESHIP_THRESHOLD = 800000;

  function formatCurrency(num) {
    return num.toLocaleString('vi-VN') + '₫';
  }

  /* ========================================================================
     1. GIỎ HÀNG TRƯỢT (SLIDE-OUT CART) & THANH FREESHIP
     ======================================================================== */
  function openCart() {
    $('#cart-drawer, #cart-backdrop').addClass('is-open');
    $('body').addClass('body-lock-scroll');
  }

  function closeCart() {
    $('#cart-drawer, #cart-backdrop').removeClass('is-open');
    $('body').removeClass('body-lock-scroll');
  }

  function updateCartSummary() {
    if (!$('#cart-item-list').length) return;

    let totalQty = 0;
    let subtotal = 0;

    $('#cart-item-list .cart-item').each(function () {
      const price = parseInt($(this).data('price'), 10);
      const qty = parseInt($(this).find('.qty-input').val(), 10);
      totalQty += qty;
      subtotal += price * qty;
    });

    $('#cart-badge-count').text(totalQty);
    $('#cart-count-label').text(`(${totalQty} món)`);
    $('#cart-subtotal, #btn-checkout-price').text(formatCurrency(subtotal));

    if (subtotal >= FREESHIP_THRESHOLD) {
      $('#freeship-text').html('Chúc mừng! Đơn hàng của bạn được <strong>Miễn phí vận chuyển</strong>');
      $('#freeship-progress-fill').css('width', '100%');
    } else {
      const remaining = FREESHIP_THRESHOLD - subtotal;
      const percent = Math.min(100, Math.round((subtotal / FREESHIP_THRESHOLD) * 100));
      $('#freeship-text').html(
        `Mua thêm <strong class="highlight-price">${formatCurrency(remaining)}</strong> để được <strong>Miễn phí vận chuyển</strong>`
      );
      $('#freeship-progress-fill').css('width', percent + '%');
    }
  }

  function addItemToCart(name, price, variant, img, qtyToAdd = 1) {
    let existingItem = null;

    $('#cart-item-list .cart-item').each(function () {
      if ($(this).data('name') === name && $(this).data('variant') === variant) {
        existingItem = $(this);
        return false;
      }
    });

    if (existingItem) {
      const input = existingItem.find('.qty-input');
      input.val(parseInt(input.val(), 10) + qtyToAdd);
    } else {
      const newItemHtml = `
        <li class="cart-item" data-price="${price}" data-name="${name}" data-variant="${variant}">
          <img class="cart-item-img" src="${img}" alt="${name}">
          <div class="cart-item-info">
            <h3 class="cart-item-name">${name}</h3>
            <div class="cart-item-pricing"><span class="price">${formatCurrency(price)}</span></div>
            <div class="cart-item-variant"><span class="variant-fixed">${variant}</span></div>
            <div class="cart-item-actions">
              <div class="quantity-control">
                <button type="button" class="qty-btn btn-qty-minus" aria-label="Giảm số lượng">-</button>
                <input type="number" class="qty-input" value="${qtyToAdd}" min="1" max="10" readonly>
                <button type="button" class="qty-btn btn-qty-plus" aria-label="Tăng số lượng">+</button>
              </div>
              <button type="button" class="item-remove-btn">Xóa</button>
            </div>
          </div>
        </li>`;
      $('#cart-item-list').append(newItemHtml);
    }

    updateCartSummary();
    openCart();
  }

  $('#open-cart-btn').on('click', function (e) {
    if ($('#cart-drawer').length) {
      e.preventDefault();
      openCart();
    }
  });

  $('#close-cart-btn, #continue-shopping-btn, #cart-backdrop').on('click', closeCart);

  $(document).on('click', '.btn-add-card, .btn-add-cross', function () {
    addItemToCart(
      $(this).data('name'),
      parseInt($(this).data('price'), 10),
      $(this).data('variant'),
      $(this).data('img'),
      1
    );
  });

  $(document).on('click', '.btn-qty-plus', function () {
    const input = $(this).siblings('.qty-input');
    input.val(parseInt(input.val(), 10) + 1);
    updateCartSummary();
  });

  $(document).on('click', '.btn-qty-minus', function () {
    const input = $(this).siblings('.qty-input');
    const val = parseInt(input.val(), 10);
    if (val > 1) {
      input.val(val - 1);
      updateCartSummary();
    }
  });

  $(document).on('click', '.item-remove-btn', function () {
    $(this).closest('.cart-item').remove();
    updateCartSummary();
  });

  /* ========================================================================
     2. LỌC SẢN PHẨM THEO DANH MỤC (TRANG INDEX.HTML)
     ======================================================================== */
  $('.nav-filter').on('click', function (e) {
    e.preventDefault();
    const filter = $(this).data('filter');

    $('.nav-filter').removeClass('active');
    $(`.nav-filter[data-filter="${filter}"]`).addClass('active');

    if (filter === 'all') {
      $('.product-card').fadeIn(200);
      $('#catalog-title').text('Tất cả sản phẩm');
    } else {
      $('.product-card').hide();
      $(`.product-card[data-category="${filter}"]`).fadeIn(200);
      const labelText = $(this).clone().children().remove().end().text().trim();
      $('#catalog-title').text(labelText);
    }
  });

  /* ========================================================================
     3. TRANG CHI TIẾT SẢN PHẨM: XZOOM, CHỌN SIZE & VIẾT ĐÁNH GIÁ
     ======================================================================== */
  if ($.fn.xzoom && $('.xzoom').length) {
    $('.xzoom, .xzoom-gallery').xzoom({
      zoomWidth: 400,
      title: true,
      tint: '#333',
      Xoffset: 15
    });
  }

  $('.size-selector .btn').on('click', function () {
    if ($(this).is('[disabled]')) return;
    $('.size-selector .btn').removeClass('active');
    $(this).addClass('active');
  });

  $('#btn-detail-add-cart').on('click', function () {
    const name = $(this).data('name');
    const price = parseInt($(this).data('price'), 10);
    const img = $(this).data('img');
    const selectedSize = $('.size-selector .btn.active').text().trim() || 'M';
    const selectedColor = $('#detail-color').val() || 'Trắng kem';
    const qty = parseInt($('#detail-qty').val(), 10) || 1;

    addItemToCart(name, price, `Màu: ${selectedColor} / Size: ${selectedSize}`, img, qty);
  });

  $('#toggle-review-btn').on('click', function () {
    $('#new-review-box').slideToggle(200);
  });

  $('#submit-review-btn').on('click', function () {
    const reviewerName = $('#reviewer-name').val().trim() || 'Khách hàng Grimm DC';
    const reviewText = $('#reviewer-comment').val().trim();
    const starValue = $('#user-star-input').val() || 5;

    if (!reviewText) {
      alert('Vui lòng nhập nội dung đánh giá!');
      return;
    }

    const newReviewHtml = `
      <hr>
      <div class="row">
        <div class="col-md-12">
          <input class="rating-dynamic" value="${starValue}" data-min="0" data-max="5" data-step="0.5" data-size="xs" data-readonly="true" data-show-clear="false" data-show-caption="false">
          <strong>${reviewerName}</strong> <span class="pull-right text-muted">Vừa xong</span>
          <p class="text-muted" style="font-size: 12px;">Từ <em>Việt Nam</em></p>
          <p>${reviewText}</p>
        </div>
      </div>`;

    $('#review-list').prepend(newReviewHtml);
    $('.rating-dynamic').rating();
    $('#reviewer-comment').val('');
    $('#new-review-box').slideUp(200);
  });

  /* ========================================================================
     4. TRANG TRẠNG THÁI ĐƠN HÀNG (ECOMMERCE-STATUS.HTML)
     ======================================================================== */
  $('.order-filter-btn').on('click', function (e) {
    e.preventDefault();
    $('.order-filter-btn').removeClass('active');
    $(this).addClass('active');

    const status = $(this).data('status');
    if (status === 'all') {
      $('.order-item-row').fadeIn(200);
    } else {
      $('.order-item-row').hide();
      $(`.order-item-row[data-status="${status}"]`).fadeIn(200);
    }
  });
});
// [THÊM MỚI] Tìm kiếm nhanh sản phẩm theo tên trên Desktop & Mobile
  $('#search-input-desktop, #search-input-mobile').on('keyup', function () {
    const keyword = $(this).val().toLowerCase().trim();
    $('.product-card').each(function () {
      const productName = $(this).find('.product-name').text().toLowerCase();
      $(this).toggle(productName.indexOf(keyword) > -1);
    });
  });

  // [THÊM MỚI] Xử lý form đăng nhập trong Modal (#myModal)
  $('#login-form').on('submit', function (e) {
    e.preventDefault();
    const email = $('#login-email').val();
    alert('Đăng nhập thành công với tài khoản: ' + email);
    $('#myModal').modal('hide');
  });
  // Bật/tắt menu điều hướng trên Mobile
  $('#mobile-menu-toggle').on('click', function () {
    $('#main-nav').toggleClass('is-open');
  });

  // Tự động đóng menu mobile sau khi chọn danh mục
  $('#main-nav a').on('click', function () {
    $('#main-nav').removeClass('is-open');
  });