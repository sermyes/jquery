$(document).ready(function(){
    /* 변수생성
    rowPerPage - 페이지당 개수 5
    rows - 가로행의 tr
    rowsCount - 가로행의 tr 개수 
    pageCount - 페이지네이션 개수 rowsCount / rowPerPage
    numbers */
    var rowPerPage = 20;
    var rows = $('#my-table tbody tr');
    var rowsCount = rows.length;
    var pageCount = Math.ceil(rowsCount / rowPerPage);
    var numbers = $('#numbers');

    // pagination 생성
    for(var i = 0; i < pageCount; i++){
        numbers.append('<li><a href="">' + (i + 1) + '</a></li>');
    }

    numbers.find('li:first-child a').addClass('active');

    // pagination 함수
    // 0 1 2 3 4 5 6 7 8 9 10 slice(1, 10); => 1 ~ 9까지
    // 0 ~ rowPerPage
    function displayRows(idx){
        var start = (idx - 1) * rowPerPage;
        var end = start + rowPerPage;

        rows.hide();
        rows.slice(start, end).show();
    }
    displayRows(1);
    
    /* 1번 방법
    numbers.find('li').click(function(e){
        e.preventDefault();
        $(this).find('a').addClass('active');
        $(this).siblings().find('a').removeClass('active');
        displayRows($(this).index() + 1);
    }) 
    */

    numbers.find('li a').click(function(e){
        e.preventDefault();
        numbers.find('li a').removeClass('active');
        $(this).addClass('active');
        displayRows($(this).text());
    })  
});
