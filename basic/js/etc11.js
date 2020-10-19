var currentIndex = 0; //? 배열 인덱스
var logos = ["logo_01.jpg", "logo_02.jpg", "logo_03.jpg", "logo_04.jpg", "logo_05.jpg", "logo_06.jpg", "logo_07.jpg", "logo_08.jpg"];
var $banner = null;

$(document).ready(function(){
    init(); //? 선언부
    swap(); //? 배너전환 기능
    setInterval(swap, 1000); //? 스왑 실행
});

function init(){
    $banner = $('.banner');
}
function swap(){
    var imgName = "images/" + logos[currentIndex]; //? 이미지 파일명 및 로드
    //console.log(imgName);
    $banner.attr("src", imgName); //? src에 속성값 삽입
    
    currentIndex++; //? 다음 이미지 배열인덱스 증가

    reset(); //? 인덱스 초기화
}
function reset(){
    if(currentIndex == logos.length){
        currentIndex = 0;
    }
}