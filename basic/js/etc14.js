var $panel = null;
var $btnStart = null;
var $score = null;
var count = 0;
var $circle = null;
var playState = false;
var timerID = 0;
var rankList = [];
var doubleStartCheck = true;

$(document).ready(function(){
    init();
    initEvent();
});

function init(){
    $panel = $('.panel');
    $btnStart = $('#btn_start');
    $score = $('#score');
    $circle = $('#circle');
    $rankList = $('.rank');
}
function initEvent(){
    $btnStart.click(function(){
        gameStart();
    });
    $circle.click(function(){
        scoreCount();
    })
}
function gameStart(){
    playState = true;
    if(playState == true && doubleStartCheck == true){
        doubleStartCheck = false;
        gameEnd();

        timerID = setInterval(moveCircle, 1000);
    }else{
        alert("게임이 실행중입니다");
    }
}
function moveCircle(){
    $circle.css({
        left : Math.floor(Math.random() * ($panel.width() - $circle.width())),
        top : Math.floor(Math.random() * ($panel.height() - $circle.height())), 
    })
}
function gameEnd(){
    setTimeout(function(){
        playState = true;
        clearInterval(timerID);
        rank();
        rankPrint(); 
        count = 0;
        $score.text(count);
        doubleStartCheck = true;
    }, 5000);
}
function rank(){
    rankList.push(count);
    rankList = rankList.sort().reverse();
    console.log(rankList);
    var rankCheck = false;
    for(var i = 0; i < 3; i++){
        if(rankList[i] == count){
            alert(`게임종료. 최종점수: ${count}점, 현재순위: ${i+1}등`);
            rankCheck = true;
            break;
        }
    }
    if(rankCheck == false){
        alert(`게임종료. 최종점수: ${count}점, 순위권에 들지못했습니다`);
    } 
}
function rankPrint(){
    if(rankList.length < 3){
        for(var i = 0; i < rankList.length; i++){
            $('#rank' + (i + 1)).text(rankList[i] + "점");
        }
    }else{
        for(var i = 0; i < 3; i++){
            $('#rank' + (i + 1)).text(rankList[i] + "점");
        }
    }
} 
function scoreCount(){
    if(playState == true){
        count++;
        $score.text(count);
    }
}