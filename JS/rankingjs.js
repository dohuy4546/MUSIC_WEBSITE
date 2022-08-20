var index =1;

 changeImage = function(){
         var imgs=["image/banner1.jpg","image/banner2.jpg",'image/banner3.jpg', 'image/banner4.jpg', 'image/banner5.jpg'];
         document.getElementById('banner').src = imgs[index];
         index++;
         if(index === imgs.length)
         index =0;
 }

 setInterval(changeImage,3000);

 $(document).ready(function(){
        $("#gototop").hide();
        $(this).scroll(function(){
        if($(this).scrollTop() >= 100)
            $("#gototop").show("slow");
        else
            $("#gototop").hide("slow");
        
        if($(this).scrollTop() >= $("header .mySlides img").height())
        {
                $("header nav").css({
                        "position": "fixed",
                        "background-color": "var(--main_color)",
                        "opacity": ".7"
                })
        }
        else{
                $("header nav").css({
                        "position": "absolute", 
                        "background-color": "transparent",
                        "opacity": "1"
                })
        }
        })
    
        $("#gototop").click(function(){
            $("html, body").animate({
                scrollTop: 0
            }, 1000)
        });
})