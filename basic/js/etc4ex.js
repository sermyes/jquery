$(document).ready(function(){
    imgAlign();
});

function imgAlign(){
    var alignCount = imgAlignCounter(); //? 입력받은 정렬개수
    var img = $('.imgWrap2 img');
    var imgWrap = $('.imgWrap2');
    var xpos = 0;
    var ypos = 0;
    var imgLength = img.length; //? img갯수
    var imgSize = img.width(); //? img길이

    var imgWrapHeight = Math.ceil(imgLength / alignCount) * imgSize;
     //? (img개수 / count)정수올림 * imgSize = Wrap size 계산

    imgWrap.css("height", imgWrapHeight); //? imgWrap size설정

    $('.btn2_align').click(function(){
        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i);
            xpos = (i % alignCount) * imgSize;
            ypos = parseInt(i / alignCount) * imgSize;

            image.css({
                "left": xpos,
                "top": ypos
            });
        }
    })
    $('.btn2_reset').click(function(){
        xpos = 0;
        ypos = 0;
        img.css({
            "left": xpos,
            "top": ypos
        });
    })
}

function imgAlignCounter(){
    var count = window.prompt('몇 개씩 정렬하실건가요?');
    count = parseInt(count);
    return count;
}