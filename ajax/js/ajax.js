$(document).ready(function(){
    $('.btn1').click(function(){
        loadDoc1();
    });

    $('.btn2').click(function(){
        loadDoc2();
    });

    $('.btn3').click(function(){
        loadDoc3();
    });
});

//! javascript 문법
function loadDoc1(){
    var xhttp;
    xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            // 서버 준비완료, 응답완료
            document.getElementById('demo1').innerHTML = this.responseText;
        }else{
            // 서버 준비x, 응답x
        }

        // console.log(this.readyState); 
        // ? 0요청시작전, 1서버연결완료, 2요청받음, 3요청처리중, 4완료
        // console.log(this.status); 
        // ? 200이면 정상, 에러 404
    }

    xhttp.open('get', 'demo_info.txt', true);
    xhttp.send();
}

//! jquery 문법
function loadDoc2(){
    $('#demo2').load('demo.txt p');
    //? p tag만 가져오려면 문서 뒤에 태그를 넣는다.

    /* 
       * 함수의 파라미터 (x)
       responseText - 서버에 요청완료되면 결과 내용 
       statusText - 서버에 요청을 보내면 요청 상태
       xhr - 요청한 오브젝트
       xhr.status - 파일의 상태 (200있음, 404없음, 403권한x)

       $('#demo3').load('경로', 요청이 완료되면 할일 function(x){

       });
    */
   $('#demo2').load('demo.txt', function(responseText, statusText, xhr){
    console.log('로드할 파일의 내용 :' + responseText);
    console.log('로드할 파일과의 연결 상태 :' + statusText); //? success or error
    console.log('요청의 상태 :' + xhr); 
    console.log('요청한 파일의 상태 :' + xhr.status); //? 200 or 403 or 404

    if(statusText == 'success' && xhr.status == 200){
        console.log('파일이 준비 되었습니다.');
    }else{
        console.log('파일이 준비가 되지 않았습니다.')
    }
});
}

//! ajax 문법
function loadDoc3(){
    // $.ajax({ url:'경로', async: false(비동기)/true(동기), success: function(result){} });
    $.ajax({ url: 'demo.txt', async: false, success: function(result){
        $('#demo3').html(result);
    } });
    $.ajax({ url: 'demo.js', async: false, dataType:'script' });
    // ? demo.js 에 async false를 넣으면 demo.js로드후 demo.txt 로드
    // ? demo.js 에 async 를 넣지않으면 demo.js와 demo.txt가 같이 로드
}




