$(document).ready(function(){
    // *exp.1
    imgAlignHori();

    // *exp.2
    imgAlignMix();
});

// *exp.1
function imgAlignHori(){
    // ?선언
    var img = $(".imgContainer img");
    var xpos = 0;

    // ?처리 및 출력
    $('.alignHori').click(function(){
        // ?선언
        var imgWidth = img.width(); //? img width
        var imgLength = img.length; //? img 개수
        
        // ?연산 및 출력
        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i); // ? eq는 함수, e는 event(인자) 
            
            //? 연산처리
            xpos = i * imgWidth;
            
            //? 출력 
            image.css("left", xpos);
        }
    });

    // ? 초기화처리 및 출력
    $('.reset').click(function(){
        xpos = 0;
        img.css("left", xpos);
    });
}

// *exp.2
function imgAlignMix(){
    // ?선언
    var img = $(".imgContainerMix img");
    var xpos = 0;
    var ypos = 0;

    $(".alignMix").click(function(){
        var imgLength = img.length;
        var imgSize = img.width(); //?정사각형
        // var imgWidth = img.width();
        // var imgHeight = img.height();

        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i);
            xpos = (i % 3) * imgSize; //? 하나씩 0, 1, 2 * 200 반복
            ypos = parseInt(i / 3) * imgSize; //? 3개씩 0, 1, 2 * 200
            
            image.css({
                "left" : xpos,
                "top" : ypos,
            });
        }
    });

    $(".resetMix").click(function(){
        xpos = 0;
        ypos = 0;
        img.css({
            "left" : xpos,
            "top" : ypos,
        });
    });
}