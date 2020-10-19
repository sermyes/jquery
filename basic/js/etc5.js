$(document).ready(function(){
    imgAlignCustom(3, 150, 150);
});

function imgAlignCustom(count, imgWidth, imgHeight){
    var img = $(".imgContainerCustom li");
    var container = $(".imgContainerCustom");
    var imgLength = img.length;
    var containerHeight = Math.ceil(imgLength / count) * imgHeight;
    var xpos = 0;
    var ypos = 0;
    // ? 선언
    
    img.css({
        "width": imgWidth,
        "height": imgHeight,
    });
    container.css({
        "height": containerHeight,
    });

    $(".alignMix").click(function(){
        for (var i = 0; i < imgLength; i++){
            var image = img.eq(i);
            xpos = (i % count) * imgWidth; 
            ypos = parseInt(i / count) * imgHeight; 

            image.css({
                "left" : xpos,
                "top" : ypos
            });
        }
    });
    $('.resetMix').click(function(){
        xpos = 0; ypos = 0;
        img.css({
            "left": xpos,
            "top" : ypos
        });
    });//? 초기화 작성
}