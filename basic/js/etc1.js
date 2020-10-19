
$(document).ready(function(){
    // *exp.1 대상 글자색 바꿔보기
    var $divs = $('div');

    //? 여러개의 속성을 설정할땐 $('tag').css({object}) 객체를 넣는다.
    $divs.css({
        'color' : '#f00',
        'background-color' : '#00f',
    });
    
    //? $('tag').css('attr','attr value');
    $('div:first-child').css('color', '#fff');
    
    // *exp.2 버튼 클릭으로 alert 띄워보기
    sayHello();

    // *exp.3
    addBorder();

    // todo.1 버튼(#textChange)을 클릭하면 패널(#panel2)의 글자 크기와 색을 변경해보라.
    textChange();
    textChangeReset();
});

// *exp.2
function sayHello(){
    $('#btnCheck').click(function(){
        alert('hello');
    });
}

// *exp.3
function addBorder(){
    $('#btnAddBorder').click(function(){
        $('#panel').css({
            'border' : '5px solid black',
        });
    });
    $('#panel').css({
        'margin-bottom' : '10px',
    });
}

// todo.1 
let panel2css = {
        'background-color': '#7f6',
        'font-size': '12px',
        'color': '#000',
    }
function textChange(){
    $('#panel2').css(panel2css);

    $('#textChange').click(function(){
        $('#panel2').css({
            'font-size' : '20px',
            'background-color' : '#530',
            'color' : '#f0f',
        });
    });
}

function textChangeReset(){
    $('#textChangeReset').click(function(){
        $('#panel2').css(panel2css);
    });
}