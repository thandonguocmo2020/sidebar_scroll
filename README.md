*1. Tác dụng*

# Trôi menu khi cuộn chuột. 

*2. Logic *


Bước 1 : Đưa 2 khối cần vào function tham_so_1 là khối cần trôi. tham_so_2 là khối cần so sánh

Bước 2 : Lấy vị trí hiện tại khối cần trôi.

Bước 3 : Lấy chiều cao của nó để tính toán cự ly cần dừng

Bước 4 : Lấy khối có chiều cao cần so sánh để dừng

Bước 5 : Tính toán khoảng cách cần cách top

Bước 5 : Check điểu kiện sự kiện cuột chuột bắt đầu giãn khoảng cách margin-top

Bước 6 : Giãn khoảng cách bằng với cự li  tính toán.

Bước 7 : check điểm dừng…


nếu cuộn chuột lớn hơn vị trí hiện tại của khối cần cuộn 

– co giãn “Trôi” menu 

nếu cuộn chuột lớn hơn cư li tính toán khi so sánh 

 stop margin : 0px;



*3. Cách dùng : *



```
<script src="../js/sidebar.js"></script>
   <script>
   $(document).ready(function () {
      scoll_sidebar("#block_scroll", "#content_right");
   });

  </script>
  ```

html :

Tạo 2 hai khối trái phải kèm độ cao đưa khối đó vào function chạy thử 
