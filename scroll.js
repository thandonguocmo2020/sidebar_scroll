function scoll_sidebar($block_content, $id_my_element) {

    // get element parent and block element
    $block_element = $($block_content);
    $my_element_scoll = $($id_my_element);


    if (
        typeof $block_element == "object" && $block_element !== null &&
        typeof $my_element_scoll == "object" && $my_element_scoll !== null
    ) {

        // diem bat dau chay
        const $block_start = $block_element.offset().top;
        const $block_stop = $block_start + $block_element.outerHeight(true);


        $(window).scroll(function () {
            // khoang cach margin-top
            $margin_top = ($(this).scrollTop() - $block_start);

            if ($(this).scrollTop() > $block_start) {
                $($my_element_scoll).stop().animate({
                    marginTop: $margin_top + 'px'
                }, 1000);

                if ($(this).scrollTop() > $block_stop) {

                    $($my_element_scoll).stop().animate({
                        marginTop: 0
                    }, 1000);
                }

            } else {
                $($my_element_scoll).stop().animate({
                    marginTop: 0
                }, 1000);
            }
        });
    }
}
;

// 2 tham so truyen vao la


// <script>
// // slishow
// $(document).ready(function () {
//     scoll_sidebar(".content", ".sticky_item");
// });
// </script>

/*-- html -botstrap */
 /*
 <section class="content">
 <div class="row">
 <div class="col-sm-12">
 <aside id="sidebar" class="col-sm-12 col-md-3">
 <div id="element_scoll">
 <div class="col-sm-12" style="position: relative">
 <div id="sticky_item" class="sticky_item list-group table-of-contents" style="position: relative; margin-top: 0px;">
 <a class="list-group-item active" href="#navbar">Navbar</a>
 <a class="list-group-item" href="#buttons">Buttons</a>
 <a class="list-group-item" href="#typography">Typography</a>
 <a class="list-group-item" href="#tables">Tables</a>
 <a class="list-group-item" href="#forms">Forms</a>
 <a class="list-group-item" href="#navs">Navs</a>
 <a class="list-group-item" href="#indicators">Indicators</a>
 <a class="list-group-item" href="#progress-bars">Progress bars</a>
 <a class="list-group-item" href="#containers">Containers</a>
 <a class="list-group-item" href="#dialogs">Dialogs</a>
 </div>
 </div>
 </div>                    </aside>

 <article class="col-sm-12 col-md-9">
 <ol class="breadcrumb">
 <li><a href="http://quang.com">Trang chủ</a></li>
 <li><a href="javascript:void(0)">
 </a></li>
 <li class="active">
 </li>
 </ol>
 <div id="exTab2">
 <ul class="nav nav-tabs">
 <li class="active">
 <a href="#1" data-toggle="tab">Sản Phẩm Mới</a>
 </li>
 <li><a href="#2" data-toggle="tab">Sản Phẩm Mua Nhiều</a>
 </li>
 <li><a href="#3" data-toggle="tab">Khuyễn Mãi</a>
 </li>
 </ul>

 <div class="tab-content ">
 <div class="tab-pane active" id="1">
 <div class="col-md-4 text-center product">
 <img src="http://quang.com/img/slider-1.jpg" class="img-thumbnail">
 <h5 class="h6 text-success ">
 <a href="#" title="" class="text-capitalize">Vũ nữ Sharry </a>
 </h5>
 <p>
 <strong>250.000 đ</strong>
 </p>
 <button class="btn btn-danger btn-sm my-cart-btn" data-id="" data-name="product" data-summary="summary" data-price="250000" data-quantity="1" data-image="http://quang.com/img/slider-1.jpg">Thêm Vào Giỏ
 </button>

 <a href="/chi-tiet" class="btn btn-sm btn-info">Chi Tiết</a>
 </div>
 <div class="col-md-4 text-center product">
 <img src="http://quang.com/img/slider-1.jpg" class="img-thumbnail">
 <h5 class="h6 text-success ">
 <a href="#" title="" class="text-capitalize">Vũ nữ Sharry </a>
 </h5>
 <p>
 <strong>250.000 đ</strong>
 </p>
 <button class="btn btn-danger btn-sm my-cart-btn" data-id="" data-name="product" data-summary="summary" data-price="250000" data-quantity="1" data-image="http://quang.com/img/slider-1.jpg">Thêm Vào Giỏ
 </button>

 <a href="/chi-tiet" class="btn btn-sm btn-info">Chi Tiết</a>
 </div>
 <div class="col-md-4 text-center product">
 <img src="http://quang.com/img/slider-1.jpg" class="img-thumbnail">
 <h5 class="h6 text-success ">
 <a href="#" title="" class="text-capitalize">Vũ nữ Sharry </a>
 </h5>
 <p>
 <strong>250.000 đ</strong>
 </p>
 <button class="btn btn-danger btn-sm my-cart-btn" data-id="" data-name="product" data-summary="summary" data-price="250000" data-quantity="1" data-image="http://quang.com/img/slider-1.jpg">Thêm Vào Giỏ
 </button>

 <a href="/chi-tiet" class="btn btn-sm btn-info">Chi Tiết</a>
 </div>
 <div class="col-md-4 text-center product">
 <img src="http://quang.com/img/slider-1.jpg" class="img-thumbnail">
 <h5 class="h6 text-success ">
 <a href="#" title="" class="text-capitalize">Vũ nữ Sharry </a>
 </h5>
 <p>
 <strong>250.000 đ</strong>
 </p>
 <button class="btn btn-danger btn-sm my-cart-btn" data-id="" data-name="product" data-summary="summary" data-price="250000" data-quantity="1" data-image="http://quang.com/img/slider-1.jpg">Thêm Vào Giỏ
 </button>

 <a href="/chi-tiet" class="btn btn-sm btn-info">Chi Tiết</a>
 </div>
 <div class="col-md-4 text-center product">
 <img src="http://quang.com/img/slider-1.jpg" class="img-thumbnail">
 <h5 class="h6 text-success ">
 <a href="#" title="" class="text-capitalize">Vũ nữ Sharry </a>
 </h5>
 <p>
 <strong>250.000 đ</strong>
 </p>
 <button class="btn btn-danger btn-sm my-cart-btn" data-id="" data-name="product" data-summary="summary" data-price="250000" data-quantity="1" data-image="http://quang.com/img/slider-1.jpg">Thêm Vào Giỏ
 </button>

 <a href="/chi-tiet" class="btn btn-sm btn-info">Chi Tiết</a>
 </div>
 <div class="col-md-4 text-center product">
 <img src="http://quang.com/img/slider-1.jpg" class="img-thumbnail">
 <h5 class="h6 text-success ">
 <a href="#" title="" class="text-capitalize">Vũ nữ Sharry </a>
 </h5>
 <p>
 <strong>250.000 đ</strong>
 </p>
 <button class="btn btn-danger btn-sm my-cart-btn" data-id="" data-name="product" data-summary="summary" data-price="250000" data-quantity="1" data-image="http://quang.com/img/slider-1.jpg">Thêm Vào Giỏ
 </button>

 <a href="/chi-tiet" class="btn btn-sm btn-info">Chi Tiết</a>
 </div>
 <div class="col-md-4 text-center product">
 <img src="http://quang.com/img/slider-1.jpg" class="img-thumbnail">
 <h5 class="h6 text-success ">
 <a href="#" title="" class="text-capitalize">Vũ nữ Sharry </a>
 </h5>
 <p>
 <strong>250.000 đ</strong>
 </p>
 <button class="btn btn-danger btn-sm my-cart-btn" data-id="" data-name="product" data-summary="summary" data-price="250000" data-quantity="1" data-image="http://quang.com/img/slider-1.jpg">Thêm Vào Giỏ
 </button>

 <a href="/chi-tiet" class="btn btn-sm btn-info">Chi Tiết</a>
 </div>
 <div class="col-md-4 text-center product">
 <img src="http://quang.com/img/slider-1.jpg" class="img-thumbnail">
 <h5 class="h6 text-success ">
 <a href="#" title="" class="text-capitalize">Vũ nữ Sharry </a>
 </h5>
 <p>
 <strong>250.000 đ</strong>
 </p>
 <button class="btn btn-danger btn-sm my-cart-btn" data-id="" data-name="product" data-summary="summary" data-price="250000" data-quantity="1" data-image="http://quang.com/img/slider-1.jpg">Thêm Vào Giỏ
 </button>

 <a href="/chi-tiet" class="btn btn-sm btn-info">Chi Tiết</a>
 </div>
 <div class="col-md-4 text-center product">
 <img src="http://quang.com/img/slider-1.jpg" class="img-thumbnail">
 <h5 class="h6 text-success ">
 <a href="#" title="" class="text-capitalize">Vũ nữ Sharry </a>
 </h5>
 <p>
 <strong>250.000 đ</strong>
 </p>
 <button class="btn btn-danger btn-sm my-cart-btn" data-id="" data-name="product" data-summary="summary" data-price="250000" data-quantity="1" data-image="http://quang.com/img/slider-1.jpg">Thêm Vào Giỏ
 </button>

 <a href="/chi-tiet" class="btn btn-sm btn-info">Chi Tiết</a>
 </div>
 </div>
 <div class="tab-pane" id="2">
 <div class="col-md-4 text-center product">
 <img src="http://quang.com/img/slider-1.jpg" class="img-thumbnail">
 <h5 class="h6 text-success text-capitalize">
 <a href="#" title="" class="text-capitalize">Vũ nữ Sharry Baby 2</a>
 </h5>
 <p>
 <strong>250.000 đ</strong>
 </p>
 <button class="btn btn-danger btn-sm my-cart-btn" data-id="2" data-name="product 2" data-summary="summary 2" data-price="250000" data-quantity="1" data-image="http://quang.com/img/slider-1.jpg">Thêm Vào Giỏ
 </button>

 <a href="#" class="btn btn-sm btn-info">Chi Tiết</a>
 </div>
 <div class="col-md-4 text-center product">
 <img src="http://quang.com/img/slider-1.jpg" class="img-thumbnail">
 <h5 class="h6 text-success text-capitalize">
 <a href="#" title="" class="text-capitalize">Vũ nữ Sharry Baby 2</a>
 </h5>
 <p>
 <strong>250.000 đ</strong>
 </p>
 <button class="btn btn-danger btn-sm my-cart-btn" data-id="2" data-name="product 2" data-summary="summary 2" data-price="250000" data-quantity="1" data-image="http://quang.com/img/slider-1.jpg">Thêm Vào Giỏ
 </button>

 <a href="#" class="btn btn-sm btn-info">Chi Tiết</a>
 </div>
 <div class="col-md-4 text-center product">
 <img src="http://quang.com/img/slider-1.jpg" class="img-thumbnail">
 <h5 class="h6 text-success text-capitalize">
 <a href="#" title="" class="text-capitalize">Vũ nữ Sharry Baby 2</a>
 </h5>
 <p>
 <strong>250.000 đ</strong>
 </p>
 <button class="btn btn-danger btn-sm my-cart-btn" data-id="2" data-name="product 2" data-summary="summary 2" data-price="250000" data-quantity="1" data-image="http://quang.com/img/slider-1.jpg">Thêm Vào Giỏ
 </button>

 <a href="#" class="btn btn-sm btn-info">Chi Tiết</a>
 </div>
 <div class="col-md-4 text-center product">
 <img src="http://quang.com/img/slider-1.jpg" class="img-thumbnail">
 <h5 class="h6 text-success text-capitalize">
 <a href="#" title="" class="text-capitalize">Vũ nữ Sharry Baby 2</a>
 </h5>
 <p>
 <strong>250.000 đ</strong>
 </p>
 <button class="btn btn-danger btn-sm my-cart-btn" data-id="2" data-name="product 2" data-summary="summary 2" data-price="250000" data-quantity="1" data-image="http://quang.com/img/slider-1.jpg">Thêm Vào Giỏ
 </button>

 <a href="#" class="btn btn-sm btn-info">Chi Tiết</a>
 </div>
 <div class="col-md-4 text-center product">
 <img src="http://quang.com/img/slider-1.jpg" class="img-thumbnail">
 <h5 class="h6 text-success text-capitalize">
 <a href="#" title="" class="text-capitalize">Vũ nữ Sharry Baby 2</a>
 </h5>
 <p>
 <strong>250.000 đ</strong>
 </p>
 <button class="btn btn-danger btn-sm my-cart-btn" data-id="2" data-name="product 2" data-summary="summary 2" data-price="250000" data-quantity="1" data-image="http://quang.com/img/slider-1.jpg">Thêm Vào Giỏ
 </button>

 <a href="#" class="btn btn-sm btn-info">Chi Tiết</a>
 </div>
 <div class="col-md-4 text-center product">
 <img src="http://quang.com/img/slider-1.jpg" class="img-thumbnail">
 <h5 class="h6 text-success text-capitalize">
 <a href="#" title="" class="text-capitalize">Vũ nữ Sharry Baby 2</a>
 </h5>
 <p>
 <strong>250.000 đ</strong>
 </p>
 <button class="btn btn-danger btn-sm my-cart-btn" data-id="2" data-name="product 2" data-summary="summary 2" data-price="250000" data-quantity="1" data-image="http://quang.com/img/slider-1.jpg">Thêm Vào Giỏ
 </button>

 <a href="#" class="btn btn-sm btn-info">Chi Tiết</a>
 </div>
 <div class="col-md-4 text-center product">
 <img src="http://quang.com/img/slider-1.jpg" class="img-thumbnail">
 <h5 class="h6 text-success text-capitalize">
 <a href="#" title="" class="text-capitalize">Vũ nữ Sharry Baby 2</a>
 </h5>
 <p>
 <strong>250.000 đ</strong>
 </p>
 <button class="btn btn-danger btn-sm my-cart-btn" data-id="2" data-name="product 2" data-summary="summary 2" data-price="250000" data-quantity="1" data-image="http://quang.com/img/slider-1.jpg">Thêm Vào Giỏ
 </button>

 <a href="#" class="btn btn-sm btn-info">Chi Tiết</a>
 </div>
 <div class="col-md-4 text-center product">
 <img src="http://quang.com/img/slider-1.jpg" class="img-thumbnail">
 <h5 class="h6 text-success text-capitalize">
 <a href="#" title="" class="text-capitalize">Vũ nữ Sharry Baby 2</a>
 </h5>
 <p>
 <strong>250.000 đ</strong>
 </p>
 <button class="btn btn-danger btn-sm my-cart-btn" data-id="2" data-name="product 2" data-summary="summary 2" data-price="250000" data-quantity="1" data-image="http://quang.com/img/slider-1.jpg">Thêm Vào Giỏ
 </button>

 <a href="#" class="btn btn-sm btn-info">Chi Tiết</a>
 </div>
 <div class="col-md-4 text-center product">
 <img src="http://quang.com/img/slider-1.jpg" class="img-thumbnail">
 <h5 class="h6 text-success text-capitalize">
 <a href="#" title="" class="text-capitalize">Vũ nữ Sharry Baby 2</a>
 </h5>
 <p>
 <strong>250.000 đ</strong>
 </p>
 <button class="btn btn-danger btn-sm my-cart-btn" data-id="2" data-name="product 2" data-summary="summary 2" data-price="250000" data-quantity="1" data-image="http://quang.com/img/slider-1.jpg">Thêm Vào Giỏ
 </button>

 <a href="#" class="btn btn-sm btn-info">Chi Tiết</a>
 </div>
 </div>
 <div class="tab-pane" id="3">
 <div class="col-md-4 text-center product">
 <img src="http://quang.com/img/slider-1.jpg" class="img-thumbnail">
 <h5 class="h6 text-success text-capitalize">
 <a href="#" title="" class="text-capitalize">Vũ nữ Sharry Baby 3</a>
 </h5>
 <p>
 <strong>250.000 đ</strong>
 </p>
 <button class="btn btn-danger btn-sm my-cart-btn" data-id="2" data-name="product 2" data-summary="summary 2" data-price="250000" data-quantity="1" data-image="http://quang.com/img/slider-1.jpg">Thêm Vào Giỏ
 </button>

 <a href="#" class="btn btn-sm btn-info">Chi Tiết</a>
 </div>
 <div class="col-md-4 text-center product">
 <img src="http://quang.com/img/slider-1.jpg" class="img-thumbnail">
 <h5 class="h6 text-success text-capitalize">
 <a href="#" title="" class="text-capitalize">Vũ nữ Sharry Baby 3</a>
 </h5>
 <p>
 <strong>250.000 đ</strong>
 </p>
 <button class="btn btn-danger btn-sm my-cart-btn" data-id="2" data-name="product 2" data-summary="summary 2" data-price="250000" data-quantity="1" data-image="http://quang.com/img/slider-1.jpg">Thêm Vào Giỏ
 </button>

 <a href="#" class="btn btn-sm btn-info">Chi Tiết</a>
 </div>
 <div class="col-md-4 text-center product">
 <img src="http://quang.com/img/slider-1.jpg" class="img-thumbnail">
 <h5 class="h6 text-success text-capitalize">
 <a href="#" title="" class="text-capitalize">Vũ nữ Sharry Baby 3</a>
 </h5>
 <p>
 <strong>250.000 đ</strong>
 </p>
 <button class="btn btn-danger btn-sm my-cart-btn" data-id="2" data-name="product 2" data-summary="summary 2" data-price="250000" data-quantity="1" data-image="http://quang.com/img/slider-1.jpg">Thêm Vào Giỏ
 </button>

 <a href="#" class="btn btn-sm btn-info">Chi Tiết</a>
 </div>
 <div class="col-md-4 text-center product">
 <img src="http://quang.com/img/slider-1.jpg" class="img-thumbnail">
 <h5 class="h6 text-success text-capitalize">
 <a href="#" title="" class="text-capitalize">Vũ nữ Sharry Baby 3</a>
 </h5>
 <p>
 <strong>250.000 đ</strong>
 </p>
 <button class="btn btn-danger btn-sm my-cart-btn" data-id="2" data-name="product 2" data-summary="summary 2" data-price="250000" data-quantity="1" data-image="http://quang.com/img/slider-1.jpg">Thêm Vào Giỏ
 </button>

 <a href="#" class="btn btn-sm btn-info">Chi Tiết</a>
 </div>
 <div class="col-md-4 text-center product">
 <img src="http://quang.com/img/slider-1.jpg" class="img-thumbnail">
 <h5 class="h6 text-success text-capitalize">
 <a href="#" title="" class="text-capitalize">Vũ nữ Sharry Baby 3</a>
 </h5>
 <p>
 <strong>250.000 đ</strong>
 </p>
 <button class="btn btn-danger btn-sm my-cart-btn" data-id="2" data-name="product 2" data-summary="summary 2" data-price="250000" data-quantity="1" data-image="http://quang.com/img/slider-1.jpg">Thêm Vào Giỏ
 </button>

 <a href="#" class="btn btn-sm btn-info">Chi Tiết</a>
 </div>
 <div class="col-md-4 text-center product">
 <img src="http://quang.com/img/slider-1.jpg" class="img-thumbnail">
 <h5 class="h6 text-success text-capitalize">
 <a href="#" title="" class="text-capitalize">Vũ nữ Sharry Baby 3</a>
 </h5>
 <p>
 <strong>250.000 đ</strong>
 </p>
 <button class="btn btn-danger btn-sm my-cart-btn" data-id="2" data-name="product 2" data-summary="summary 2" data-price="250000" data-quantity="1" data-image="http://quang.com/img/slider-1.jpg">Thêm Vào Giỏ
 </button>

 <a href="#" class="btn btn-sm btn-info">Chi Tiết</a>
 </div>
 <div class="col-md-4 text-center product">
 <img src="http://quang.com/img/slider-1.jpg" class="img-thumbnail">
 <h5 class="h6 text-success text-capitalize">
 <a href="#" title="" class="text-capitalize">Vũ nữ Sharry Baby 3</a>
 </h5>
 <p>
 <strong>250.000 đ</strong>
 </p>
 <button class="btn btn-danger btn-sm my-cart-btn" data-id="2" data-name="product 2" data-summary="summary 2" data-price="250000" data-quantity="1" data-image="http://quang.com/img/slider-1.jpg">Thêm Vào Giỏ
 </button>

 <a href="#" class="btn btn-sm btn-info">Chi Tiết</a>
 </div>
 <div class="col-md-4 text-center product">
 <img src="http://quang.com/img/slider-1.jpg" class="img-thumbnail">
 <h5 class="h6 text-success text-capitalize">
 <a href="#" title="" class="text-capitalize">Vũ nữ Sharry Baby 3</a>
 </h5>
 <p>
 <strong>250.000 đ</strong>
 </p>
 <button class="btn btn-danger btn-sm my-cart-btn" data-id="2" data-name="product 2" data-summary="summary 2" data-price="250000" data-quantity="1" data-image="http://quang.com/img/slider-1.jpg">Thêm Vào Giỏ
 </button>

 <a href="#" class="btn btn-sm btn-info">Chi Tiết</a>
 </div>
 <div class="col-md-4 text-center product">
 <img src="http://quang.com/img/slider-1.jpg" class="img-thumbnail">
 <h5 class="h6 text-success text-capitalize">
 <a href="#" title="" class="text-capitalize">Vũ nữ Sharry Baby 3</a>
 </h5>
 <p>
 <strong>250.000 đ</strong>
 </p>
 <button class="btn btn-danger btn-sm my-cart-btn" data-id="2" data-name="product 2" data-summary="summary 2" data-price="250000" data-quantity="1" data-image="http://quang.com/img/slider-1.jpg">Thêm Vào Giỏ
 </button>

 <a href="#" class="btn btn-sm btn-info">Chi Tiết</a>
 </div>
 </div>
 </div>
 </div>
 </article>

 </div>
 </div>
 </section>
 */
