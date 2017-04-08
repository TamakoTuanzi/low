/**
 * Created by Administrator on 2016/12/5.
 */
window.onload = function () {
    var img = document.getElementById("img");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var liid = document.querySelector(".liid");
    var span = document.querySelector("#span");
    var arr = document.querySelector(".arr");
    var lis = liid.children;
    var num = 0;
    var timer = null;
    for(var i = 0; i < lis.length; i++){
        lis[i].index = i;
        lis[i].onclick = function () {
            for(var i = 0; i <lis.length; i++){
                lis[i].className = "";
            }
            this.className = "a";
            num = this.index;
            img.src = "img/slideshow_pic_"+ (num + 1) +".jpg"
            span.style.backgroundPositionY = -24 * num + "px";
        }
    }
    left.onclick = function () {
        num--;
        if(num < 0){
            num = lis.length - 1;
        }
        img.src = "img/slideshow_pic_"+ (num + 1) +".jpg";
        for(var i = 0; i <lis.length; i++){
            lis[i].className = "";
        }
        lis[num].className = "a";
        span.style.backgroundPositionY = -24 * num + "px";
    }
    right.onclick = function () {
        num++;
        if(num === lis.length){
            num = 0;
        }
        img.src = "img/slideshow_pic_"+ (num + 1) +".jpg"
        for(var i = 0; i <lis.length; i++){
            lis[i].className = "";
        }
        lis[num].className = "a";
        span.style.backgroundPositionY = -24 * num + "px";
    }
    arr.onmouseover = function () {
        clearInterval(timer);
    }
    arr.onmouseout = function () {
        timer = setInterval(autoPlay,1500);
    }
    timer = setInterval(autoPlay,1500);
    function autoPlay () {
        right.onclick();
    };
}