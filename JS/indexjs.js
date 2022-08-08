function isElementvisible(obj){
    let style = window.getComputedStyle(obj);
    return style.display !== "none";
}

function init(){
    var menu_button = document.getElementById("menu_btn");
    var root = document.documentElement;
    var title = document.querySelector("header .title");
    var menu = document.querySelector(".content .left_content")
    var x =  window.matchMedia("(max-width: 700px)")  
    menu_button.onclick = function(){
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
}