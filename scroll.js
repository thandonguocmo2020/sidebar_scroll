function scroll_sidebar($block_scroll, $block_height_stop) {

    $block_scroll = $($block_scroll); // khối cần scroll chạys
    $block_right = $($block_height_stop); // khối chiều cao cần dừng


    if ($block_scroll !== null && $block_right !== null) {

        // khối lấy vị trí top bắt đầu chạy
        $block_start = $block_scroll.offset().top;
        // chieu cao của khối đó
        $block_start_height = $block_scroll.outerHeight(true);
        // chiều cao khối cần dừng chạy
        $block_end = $block_right.outerHeight();
        // tính cự ly chạy
        $block_stop = $block_start + ( $block_end - $block_start_height);

        // check sự kiện
        $(window).scroll(function () {
            // nếu cuộn chuột lớn hơn vị trí của khối cần chạy $block_start
            // console.log($(this).scrollTop());

            if ($(this).scrollTop() > $block_start) {
                // tính khoảng cách dãn ra.
                $margin_top = ($(this).scrollTop() - $block_start);

                // dãn margin-top
                $block_scroll.stop().animate({
                    marginTop: $margin_top + 'px'
                }, 1000);
            }

           if ($(this).scrollTop() <= $block_start) {
                $block_scroll.stop().animate({
                    marginTop: 0 + 'px'
                }, 1000);
            }
            
            // bắt dừng chạy
            if ($(this).scrollTop() > $block_stop) {
                $block_scroll.stop().animate({
                    marginTop: 0 + 'px'
                }, 1000);
            }
        });

    }
};
