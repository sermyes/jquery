var count = 0;
var $score = null;
var $circle = null;
var playState = true;
var start = null;

$(document).ready(function(){
    init();
    initEvent();
});

function init(){
    $score = $('#score');
    $circle = $('#circle');
}

function initEvent(){
    start = window.confirm('게임을 시작 하시겠습니까??');

    $('.info').append('<p> 5초동안 circle을 클릭하세요 </p>');

    if(start == true){
        $circle.click(function(){
                gameStart();
        });
        setTimeout(gameEnd, 5000);
    } else {
        alert('취소합니다.');
    }
}
function gameStart(){
    if(playState == true){
        count++;
        $score.text(count + '점');
    }
}
function gameEnd(){
    playState = false;
    alert('게임이 종료되었습니다. 최종점수는 : ' + count + '점');
}