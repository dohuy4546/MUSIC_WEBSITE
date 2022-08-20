    let images = ["image/2.jpg", "image/Son_Tung_MTP.jpg", "image/Đen_Vâu.jpg", "image/T.A.P.jpg", "image/1.jpg"];

    $(document).ready(function(){
        $("#gototop").hide();
        $(".right_content").scroll(function(){
        if($(this).scrollTop() >= 100)
            $("#gototop").show("slow");
        else
            $("#gototop").hide("slow");
        })

        $("#gototop").click(function(){
            $(".right_content").animate({
                scrollTop: 0
            }, 1000)
        });

        $("#add").click(function(){
            let idx = parseInt(Math.random()*images.length);
            let s_name = prompt("Please enter song name...", "Faded");
            let artist = prompt("Please enter artist...", "Alan Walker");
            if(s_name !== null && artist !== null){
                let h = `<li class="songItem SongItem">
                            <div class="img_play flex">
                                <img src="${images[idx]}" alt="Alan" />
                                <i class="fa-solid fa-play"></i>
                            </div>
                            <div>
                                <h5>${s_name}</h5>
                                <p class="subtitle">${artist}</p>
                            </div>
                        </li>`;
                $("ul.pop_songs").append(h);
            }
        });

        let songs = $(".SongItem");
        $(".SongItems").on("click", ".SongItem", function(){
            let songName = $(this).find("h5").text();
            let author = $(this).find("p").text();
            let poster = $(this).find("img").attr("src");       
            console.log(songName);
            for(let s of songs){
                $(".SongItem").removeClass("song_active");
            }
            $(this).addClass("song_active");
            $("#myAudio").attr("src", `song/${songName}.mp3`);
            $("#poster_music").attr("src", poster);
            $("#title").text(songName);
            $(".info_song .subtitle").text(author);
        });

        $("ul.menu_song li.menuSongItem").slice(0, 4).show().css("display", "flex");
        $("#loadMore").on("click", function(){
            $("li.menuSongItem:hidden").slice(0, 4).fadeIn("slow").css("display", "flex");
            if($("li.menuSongItem:hidden").length == 0) {
            $("#loadMore").val("No Content").addClass("noContent");
            }
        }); 
    })

    function isElementvisible(obj){
        let style = window.getComputedStyle(obj);
        return style.display !== "none";
    }

    function init(){
        var menu_button = document.getElementById("menu_btn");
        var root = document.documentElement;
        var title = document.querySelector("header .title");
        var menu = document.querySelector(".content .left_content")
        var x =  window.matchMedia("(max-width: 600px)");
        menu_button.onclick = function()
        {
            if(x.matches){
                var nav = document.querySelector("header nav");
                var right_content = document.querySelector(".right_content");
                if(isElementvisible(title) && isElementvisible(menu))
                {
                    nav.setAttribute("style", "display: block");
                    right_content.setAttribute("style", "display: block");
                    title.setAttribute("style", "display: none");
                    menu.setAttribute("style", "display: none");
                }
                else{
                    title.setAttribute("style", "display: block");
                    menu.setAttribute("style", "display: block");
                    nav.setAttribute("style", "display: none");
                    right_content.setAttribute("style", "display: none");
                }
            }
            else{
                if(isElementvisible(title) && isElementvisible(menu))
                {
                    console.log("da nhan dc")
                    root.style.setProperty("--left-width", "0%");
                    title.setAttribute("style", "display: none");
                    menu.setAttribute("style", "display: none");
                }
                else{
                        root.style.setProperty("--left-width", "25%");
                        title.setAttribute("style", "display: block");
                        menu.setAttribute("style", "display: block");
                }
            }
        }
        var arrow_left_button1 = document.getElementById("left_song");
        var arrow_right_button1 = document.getElementById("right_song");
        var pop_song = document.querySelector(".pop_songs");
        arrow_right_button1.onclick = function(){
            if(x.matches){
                pop_song.scrollLeft += 330;
            }
            else
                pop_song.scrollLeft += 530;
        }

        arrow_left_button1.onclick = function(){
            if(x.matches){
                pop_song.scrollLeft -= 330;
            }
            else
                pop_song.scrollLeft -= 530;
        }

        var arrow_left_button2 = document.getElementById("left_artist");
        var arrow_right_button2 = document.getElementById("right_artist");
        var artists = document.querySelector(".artists");
        arrow_right_button2.onclick = function(){
            if(x.matches){
                artists.scrollLeft += 330;
            }
            else
                artists.scrollLeft += 530;
        };

        arrow_left_button2.onclick = function(){
            if(x.matches){
                artists.scrollLeft -= 330;
            }
            else
                artists.scrollLeft -= 530;
        };

        var c_left_arrow = document.getElementById("c-left-arrow");
        var c_right_arrow = document.getElementById("c-right-arrow");
        c_right_arrow.onclick = function(){
            var new_song = document.querySelector(".new_song .songs");
                new_song.scrollLeft += 630;
                if(new_song.scrollLeft > new_song.clientWidth + 630)
                    new_song.scrollLeft -= new_song.scrollWidth;
        }

        c_left_arrow.onclick = function(){
            var new_song = document.querySelector(".new_song .songs");
                new_song.scrollLeft -= 630;
        }
        if(x.matches){
            setInterval(function(){
                var new_song = document.querySelector(".new_song .songs");
                new_song.scrollLeft += 310;
                console.log(new_song.scrollWidth);
                if(new_song.scrollLeft > new_song.clientWidth + 310)
                    new_song.scrollLeft -= new_song.scrollWidth;
            }, 6000)
        }
        else
        {
            setInterval(function(){
                var new_song = document.querySelector(".new_song .songs");
                new_song.scrollLeft += 630;
                if(new_song.scrollLeft >= new_song.clientWidth + 630)
                    new_song.scrollLeft -= new_song.scrollWidth;
            }, 6000)
        }
    }