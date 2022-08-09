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

    var sideSong = document.querySelectorAll(".menu_song .menuSongItem");
    var songName = document.querySelectorAll(".menuSongItem h5");
    var audioSrc = document.getElementById("myAudio"); 
    for(var i = 0; i < sideSong.length; i++)
    {
        sideSong[i].onclick = function (){
            var songImg = document.querySelectorAll(".songItem img");
            for(var j = 0; j <sideSong.length; j++)
            {
                sideSong[j].classList.remove("song_active");
            }
            setTimeout(this.classList.add("song_active"), 2000);  
            for(var k = 0; k < sideSong.length; k++)
            {
                var songImg = document.querySelectorAll(".menuSongItem img");
                if(sideSong[k].classList.contains("song_active"))
                    audioSrc.setAttribute("src", `song/audio2/${songImg[k].alt}.mp3`)
            } 
        }
    }

    if(x.matches){
        setInterval(function(){
            var new_song = document.querySelector(".new_song .songs");
            new_song.scrollLeft += 310;
            console.log(new_song.scrollWidth);
            console.log(new_song.scrollLeft);
            if(new_song.scrollLeft > new_song.scrollWidth - 660)
                new_song.scrollLeft -= new_song.scrollWidth;
        }, 2000)
    }
    else
    {
        setInterval(function(){
            var new_song = document.querySelector(".new_song .songs");
            new_song.scrollLeft += 630;
            console.log(new_song.scrollLeft);
            if(new_song.scrollLeft >= new_song.scrollWidth - 950)
                new_song.scrollLeft -= new_song.scrollWidth;
        }, 2000)
    }
}

