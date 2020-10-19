
$(document).ready(function(){
    var $circle = $('#circle');
    var runStep = 10; //? 시간대비 거리 = 속도. step증가시 속도증가
    var xpos = $circle.position().left; //? 현재 circle의 left값 
    var railWidth = $('#rail').width();
    var timerID = 0;
    
    circleMove($circle, runStep, xpos, railWidth, timerID);
});

function circleMove($circle, runStep, xpos, railWidth, timerID){
    $('#btn_start').click(function(){
        if(timerID == 0){
            timerID = setInterval(function(){
                xpos += runStep;
                $circle.css({
                    'left': xpos,
                });

                if(xpos > railWidth || xpos < 0){
                    runStep *= -1; //? 좌,우 방향바꾸기
                }
            }, 0);
        }
    });

    $('#btn_end').click(function(){
        clearInterval(timerID);
        timerID = 0;
    });
}


/* 
var $circle = null;
var railWidth = null;
var runStep = 10;
var timerID = 0;
//? 변수선언부

$(document).ready(function(){
    init(); //? 선언부
    initEvent();
});

function init(){ //? 초기화
    $circle = $('#circle');
    railWidth = $('#rail').width();
}
function initEvent(){ //? 이벤트 처리부
    $('#btn_start').click(function(){
        moveStart(); //? 기능처리 함수
    });
    $('#btn_end').click(function(){
        moveStop(); //? 기능처리 함수
    });
}
function moveStart(){
    if(timerID == 0){
        timerID = setInterval(function(){
            moveCircle(); //? 움직이는 기능
        }, 0);
    }
}
function moveCircle(){
    var xpos = $circle.position().left;
    
    xpos += runStep;
    
    $circle.css({
        left: xpos
    });
    if(xpos > railWidth || xpos < 0){
        runStep *= -1;
    }
}
function moveStop(){
    clearInterval(timerID);
    timerID = 0;
} 
*/