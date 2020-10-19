
$(document).ready(function(){
    // *exp.1 원 움직이기
    moveCircle();

    // *exp.2 원 움직이기(디테일)
    // detailMoveCircle
    detailMoveCircleExt();

    // *exp.3 원 움직이기(방향키)
    keyControl();
});

// *exp.1
function moveCircle(){
    var $circle = $('.circle'); //? 선언부 = init
    
    $('#btnMoveCircle').click(function(){
        var xpos = window.prompt('0부터 380이하의 숫자만 입력');
        xpos = parseInt(xpos);

        if(xpos >= 0 && xpos <= 380){ //? width:430px - circle:50px = 380px
            $circle.css('left',xpos);
        }else{
            alert('잘못된 수치');
        }
    });
}

// *exp.2
function detailMoveCircle(){
    var $circle = $('.circleDetail');
    
    $('#btnDetailMove').click(function(){
        var xpos = $('#xpos').val(); //? .val() - 동기방식, value값을 문자열로 가져온다.
        var ypos = $('#ypos').val();

        xpos = parseInt(xpos);
        ypos = parseInt(ypos);

        if(xpos < 0 || xpos > 380 || ypos < 0 || ypos > 380){
            alert('잘못된 수치입니다. 0 ~ 380이내로 입력');
        }else{
            $circle.css({
                'left' : xpos,
                'top' : ypos
            });
        }
    });
}

// *exp.2ext function grouping
function detailMoveCircleExt(){
    var circle = null; //? circleInit 함수가 바라볼 수 있는 전역변수 설정.

    circleInit();
    circleEvent();
}
function circleInit(){
    circle = $(".circleDetail");
}
function circleEvent(){
    $("#btnDetailMove").click(function(){
        var xpos = $("#xpos").val();
        var ypos = $("#ypos").val();
        xpos = parseInt(xpos);
        ypos = parseInt(ypos);
        circleMovCommand(xpos, ypos);
    });
}
function circleMovCommand(xpos, ypos){
    if(xpos >= 380 || ypos >= 380 || xpos < 0 || ypos < 0){
        alert("잘못된 수치입니다. 0 ~ 380 이내로 입력하세요.");
    }else{
        $(circle).css({
            "left" : xpos,
            "top" : ypos
        });
    }
}

// *exp.3
function keyControl(){
    var $circle = $('.circleKey');
    var range = 50;
    var currentXpos = 0;
    var currentYpos = 0;

    $(document).keydown(function(e){
        console.log(e.keyCode, typeof e.keyCode); 
        //? typeof number, 방향키 left:37 top:38 right:39 bottom:40
        switch(e.keyCode){
            case 65: //? left(a)
                currentXpos -= range;
                break;
            case 87: //? top(w)
                currentYpos -= range;
                break;
            case 68: //? right(d)
                currentXpos += range;
                break;
            case 83: //? bottom(s)
                currentYpos += range;
                break;
            default:
                //? func() -> if(f12, alt+tab) else(alert(wasd만 press))
                alert('방향키만 눌러주세요');
                break;
        }
        if(currentXpos < 0){
            currentXpos = 0;
        }
        if(currentXpos > 380){
            currentXpos = 380;
        }
        if(currentYpos < 0){
            currentYpos = 0;
        }
        if(currentYpos > 380){
            currentYpos = 380;
        }
        $circle.css("left", currentXpos);
        $circle.css("top", currentYpos);
    })
}


// *exp.3 customize
//? exp.3 customize
//? 1. wrap size -> .val()로 값가져와서 변수화(값 받아오기) 
//? 2. 원 size -> .val()로 값가져와서 변수화(값 받아오기) 
//? 3. wrap size- one size => 최대사이즈x max-pos값 변수화해서 제한범위값 비교
//? 4. 제한범위값 비교 x,y 함수 2케이스로 잡아서 만들고 param으로 0, max-pos값 받는다.
//?    (if문 4개 -> if문 1개로 처리가능)
//? 5. default func로 예외 키처리.

function keyControlCustom(){
    var circle = ('.circleMoveKey');
    var wrap = ('.circleKeyWrap');
    var wrapRange = $(wrap).width(); //? warp사이즈 변수초기화
    var circleRange = $(circle).width(); //? 원사이즈 변수초기화
    var btnWrap = ('#btnWrapRange');
    var btnCircle = ('#btnCircleRange');
    var currentXpos = 0;
    var currentYpos = 0;

    $(btnWrap).click(function(){
        var temp = window.prompt('변경하실 size를 입력하세요');
        temp = parseInt(temp);
        wrapRange = temp;
        $(wrap).css({
            'width': wrapRange,
            'height': wrapRange,
        });
    });

    $(btnCircle).click(function(){
        var temp = window.prompt('변경하실 size를 입력하세요');
        temp = parseInt(temp);
        circleRange = temp;
        $(circle).css({
            'width': circleRange,
            'height': circleRange,
            'border-radius': circleRange / 2,
        });
    });

    $(document).keydown(function(e){
        var maxRange = wrapRange - circleRange;
        console.log(e.keyCode); 
        //? typeof number, 방향키 left:37 top:38 right:39 bottom:40
        //? a: 65, w: 87, d: 68, s: 83, f12: 123, alt: 9, ctrl: 18
        switch(e.keyCode){
            case 65: //? left(a)
                currentXpos -= circleRange;
                break;
            case 87: //? top(w)
                currentYpos -= circleRange;
                break;
            case 68: //? right(d)
                currentXpos += circleRange;
                break;
            case 83: //? bottom(s)
                currentYpos += circleRange;
                break;
            default:
                keyException(e.keyCode);
                break;
        }
        currentXpos = keyRangeCheck(currentXpos, maxRange);
        currentYpos = keyRangeCheck(currentYpos, maxRange);
        $(circle).css("left", currentXpos);
        $(circle).css("top", currentYpos);
    })
}

function keyException(keyCode){
    if(keyCode == 123 || keyCode == 18 && keyCode == 9){
        return;
    } else {
        alert('잘못된 키를 입력하셨습니다.');
    }
}

function keyRangeCheck(pos, maxRange){
    if(pos < 0){
        pos = 0;
    }else if(pos > maxRange){
        pos = maxRange;
    }
    return pos;
}

