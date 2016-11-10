# sidebar_scroll
trôi sidebar 

Một function mà nhận khối cần trôi và khối cần so sánh.


Bước 1 : Lấy vị trí top khối cần trôi cho biết điểm bắt đầu  co giãn khoảng cách từ top.

Bước 2 : lấy chiều cao của nó để tính toán cự ly cần dừng

Bước 3 : Lấy khối có chiều cao cần so sánh để dừng

Bước 4 : Tính toán khoảng cách cần giãn

Bước 5 : Check điểu kiện sự kiện cuột chuột bắt đầu giãn khoảng cách

Bước 6 : Giãn khoảng cách bằng với cự ly tính toán.

Bước 7 : check điểm dừng…



nếu cuộn chuột lớn hơn vị trí hiện tại của khối cần cuộn 

– co giãn “Trôi”

nếu cuộn chuột lớn hơn cư ly tính toán và so sánh với khối cân bằng 

dừng điểm dừng.  stop margin : 0px;


``` <script src="../js/sidebar.js"></script>
   <script>
   $(document).ready(function () {
      scoll_sidebar("#block_scroll", "#content_right");
   });

  </script>```
