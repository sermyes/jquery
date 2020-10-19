var currentIndex = 0;
var logos = ["logo_01.jpg", "logo_02.jpg", "logo_03.jpg", "logo_04.jpg", "logo_05.jpg", "logo_06.jpg", "logo_07.jpg", "logo_08.jpg"];
var $banner1 = null;
var $banner2 = null;
var ms = 0; 

/*  //? exp.1 배너순서대로 출력
$(document).ready(function(){
    init();
    swap($banner1, 1000, currentIndex);
    swap($banner2, 3000, currentIndex);
});

function init(){
    $banner1 = $('#banner1');
    $banner2 = $('#banner2');
}

function swap($banner, ms, index){
    setInterval(function(){
        var img = "images/" + logos[index];
        $banner.attr("src", img);
        index++;
        // console.log(index);
        index = reset(index);
    }, ms);
}

function reset(index){
    if(index == logos.length){
        index = 0;
    }
    return index;
} 
*/

//? exp.2 배너 랜덤하게 출력
$(document).ready(function(){
    init();
    swap($banner1, 1000);
    swap($banner2, 3000);
});

function init(){
    $banner1 = $('#banner1');
    $banner2 = $('#banner2');
}

function swap($banner, ms){
    setInterval(function(){
        while(true){
            var temp = null;
            temp = currentIndex;
            currentIndex = Math.floor(Math.random() * logos.length);
            
            if(temp != currentIndex){
                break;
            }
        }
        console.log(currentIndex);
        
        var img = "images/" + logos[currentIndex];
        $banner.attr("src", img);
    }, ms);
}
