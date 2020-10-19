var tabTarget0 = null;
var tabTarget1 = null;

$(document).ready(function(){
    init();
    tabMenu(tabTarget0);
    tabMenu(tabTarget1);
});

function init(){
    tabTarget0 = "#tabMenuDepth0 li";
    tabTarget1 = "#tabMenuDepth1 li";
}

function tabMenu(tabNumb){
    var $selectMenu = null;

    $(tabNumb).click(function(){ 
        //? 클로저함수 - 내부에서  selectMenu변수를 사용중.
        if($selectMenu != null){
            $selectMenu.removeClass("activated");
        }

        // $(tabNumb).removeClass("activated"); //? 위의 toggle과 차이점?

        $selectMenu = $(this);
        $selectMenu.addClass("activated");
    });
}