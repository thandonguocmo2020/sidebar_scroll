function scoll_sidebar($block_content, $id_my_element, $margin_top) {

    // block chứa
    // id cần scroll
    // margin-top mặc định
    $block_element = $($block_content);

    $my_element_scoll = $($id_my_element);


    if (
        typeof $block_element == "object" && $block_element !== null &&
        typeof $my_element_scoll == "object" && $my_element_scoll !== null
    ) {

        // chiều cao khối chứa sidebar và content
        //  $block_element height
        $block_element = $block_element.outerHeight();
        // event_scroll
        $(window).scroll(function () {
            $start = $my_element_scoll.offset().top;
            $end = ($start / 2) + $block_element;

//                console.log($start);
            if ($(this).scrollTop() > $start) {

                if (typeof $margin_top == "undefined") {
                    $margin_top = 50;
                }

                console.log($margin_top);
                $($my_element_scoll).stop().animate({
                    marginTop: ($(this).scrollTop() - $start) + $margin_top
                });

                if ($(this).scrollTop() > $end) {
                    $($my_element_scoll).stop().animate({
                        marginTop: 0
                    });
                }

            }else{
                $($my_element_scoll).stop().animate({
                    marginTop: 0
                });
            }

        });

    }

}
;
