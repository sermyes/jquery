$(document).ready(function(){
    // *exp.1
    addRemove();
    // toggle();

    // *exp.2
    tabUI();
    //
});

// *exp.1 toggle
function addRemove(){
    var $checkTarget = $('.checkSpan');
    var clickStatus = false;

    $('.label').click(function(){
        clickStatus = !clickStatus;

        if(clickStatus == true){
            $checkTarget.addClass('material-icons'); //? .material-icons가 아닌 클래스이름만 넣는다.
            //? material-icons class추가, class="checkSpan material-icons"상태.
        }else{
            $checkTarget.removeClass('material-icons');
            //? material-icons class제거, class="checkSpan"상태.
        }
    });
}

function toggle(){
    var $checkTarget = $('.checkSpan');

    $('.label').click(function(){
        $checkTarget.toggleClass('material-icons');
    })
}

// *exp.2 tabPage만들기
function tabUI(){
    $(".tabMenu li").click(function(){
        var activeTab = $(this).attr("data-tabNumb"); //? 현재 클릭한 li의 data-tabNumb의 값
        //? this는 혀재 클릭한 li
        
        // console.log(activeTab, typeof activeTab); //? data-numb의 값, string

        $(".tabMenu li").removeClass("activated"); //? li의 activated클래스 초기화
        $(this).addClass("activated"); //? 클릭한 li에 activated클래스 추가

        $(".tabPage").removeClass("activated"); //? div의 activated클래스 초기화
        $("#" + activeTab).addClass("activated"); //? activeTab의 string이므로 +한다.
    });
}