$(document).ready(function(){
    gallery(5,110,110);

    $(".start").click(function(){
        gallery(3,150,150);
    })
    $(".reset").click(function(){
        gallery(5,110,110);
    });
});

function gallery(count, imgWidth, imgHeight){
    var $images = $("#imgContainer li");
    var $imgLength = $images.length;
    var xpos, ypos;

    $images.css({
        "width": imgWidth,
        "height": imgHeight,
    });

    for (i = 0; i < $imgLength; i++){
        var $image = $images.eq(i);
        //? eq = DOM 요소 세트를 나타내는 jQuery 객체가 주어지면,
        //? .eq()메소드는 해당 세트 내의 한 요소에서 새 jQuery 객체를 구성한다.
        
        xpos = 100 + (i % count) * imgWidth;
        ypos = 100 + parseInt(i / count) * imgHeight;

        $image.css({
            'left' : xpos,
            'top' : ypos
        })
    }
}