var index =1;

 changeImage = function(){
         var imgs=["image/img2/banner1.jpg","image/img2/banner2.jpg",'image/img2/banner3.jpg', 'image/img2/banner4.jpg', 'image/img2/banner5.jpg'];
         document.getElementById('banner').src = imgs[index];
         index++;
         if(index === imgs.length)
         index =0;
 }

 setInterval(changeImage,3000);
