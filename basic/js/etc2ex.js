
$(document).ready(function(){
    // *exp.2 원 움직이기(디테일)
    // detailMoveCircle();
    detailMoveCircleExt();

    // *exp.3 원 움직이기(방향키)
    // keyControl();
    
    // *exp.4 원 움직이기(동적)
    keyControlCustom();
});

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
    circle = ('.circleDetail');
}
function circleEvent(){
    $('#btnDetailMove').click(function(){
        var xpos = $('#xpos').val();
        var ypos = $('#ypos').val();

        xpos = parseInt(xpos);
        ypos = parseInt(ypos);

        circleMovCommand(xpos, ypos);
    });
}
function circleMovCommand(xpos, ypos){
    if(xpos < 0 || xpos > 380 || ypos < 0 || ypos > 380){
        alert('잘못된 수치입니다. 0 ~ 380이내로 입력하세요.');
    }else{
        $(circle).css({
            'left': xpos,
            'top': ypos,
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
        //? a: 65, w: 87, d: 68, s: 83, f12: 123, alt: 18, ctrl: 9
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

var circle = null;
var wrap = null;
var wrapRange = null;
var circleRange = null;
var currentXpos = null;
var currentYpos = null;

function keyControlCustom(){
    keyInit();
    keySizeChange();
    keyEvent();
}

function keyInit(){
    circle = ('.circleMoveKey');
    wrap = ('.circleKeyWrap');
    wrapRange = $(wrap).width(); //? warp사이즈 변수초기화
    circleRange = $(circle).width(); //? 원사이즈 변수초기화
    currentXpos = 0;
    currentYpos = 0;
}

function keySizeChange(){
    var btnWrap = ('#btnWrapRange');
    var btnCircle = ('#btnCircleRange');
    
    $(btnWrap).click(function(){
        var temp = window.prompt('변경하실 size를 입력하세요 (최소값 300)', '300');
        if(temp < 0){
            alert('음수 값은 불가능합니다.');
            return;
        }
        if(temp <= circleRange){
            alert('circle 크기보다 커야합니다.');
            return;
        }
        wrapRange = parseInt(temp);
        currentXpos = 0;
        currentYpos = 0;
        $(wrap).css({
            'width': wrapRange,
            'height': wrapRange,
        });
        $(circle).css({
            'left': 0,
            'top': 0,
        });
    });

    $(btnCircle).click(function(){
        var temp = window.prompt('변경하실 size를 입력하세요');
        if(temp < 0){
            alert('음수 값은 불가능합니다.');
            return;
        }
        if(temp >= wrapRange){
            alert('box크기보다 작아야 합니다.');
            return;
        }
        circleRange = parseInt(temp);
        currentXpos = 0;
        currentYpos = 0;

        $(circle).css({
            'width': circleRange,
            'height': circleRange,
            'border-radius': circleRange / 2,
            'left': 0,
            'top': 0,
        });
    });
}

function keyEvent(){
    $(document).keydown(function(e){
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
        currentXpos = keyLimitCheck(currentXpos, 0, wrapRange - circleRange);
        currentYpos = keyLimitCheck(currentYpos, 0, wrapRange - circleRange);
        $(circle).css({
            "left": currentXpos,
            "top": currentYpos,
        });
    })
}

function keyException(keyCode){
    if(keyCode == 123 || keyCode == 18 || keyCode == 9){
        return;
    } else {
        alert('잘못된 키를 입력하셨습니다.');
    }
}

function keyLimitCheck(pos, min, max){
    if(pos < min){
        pos = min;
    }
    if(pos > max){
        pos = max;
    }
    return pos;
}

