$(document).ready(function(){
    var slide1 = $('.aArea');
    var slide2 = $('.bArea');
    
    mySlide(slide1);
    mySlide(slide2);
});

function mySlide(container){
    var $slideContainer; // div
    var $slideGroup; // ul
    var $slide; // li
    var slideCount; // li 갯수

    var $pagerGroup; // ol
    var $pager; // li

    var duration; // slide 변환속도
    var interval; // autoSlide interval
    var currentIndex; // 현재 slide index위치
    var slideName; // 슬라이드 구분
    clickDrag = false; // 마우스이벤트 status
    startDrag = 0; // 드래그위치
    endDrag = 0; // 드래그위치
    threshold = 200; // 드래그 양
    // Slide variable
    
    mySlide_init(container);
    mySlide_set();
    mySlide_event();
    
    if(slideName == 'mainSlide'){
        mySlide_auto();
        mySlide_drag(threshold);
    }

    function mySlide_init(container){
        $slideContainer = container;
        $slideGroup = $slideContainer.find('.slideGroup'); // ul
        $slide = $slideGroup.find('li'); // li
        slideCount = $slide.length; // li 갯수
        slideName = $slideContainer.attr('data-slide');
        $pagerGroup = $slideContainer.find('.pagerGroup'); // ol
        $pager = $pagerGroup.find('li'); // li
    
        duration = 500; // slide 변환속도
        interval = 3500; // autoSlide interval
        currentIndex = 0; // 현재 slide index위치
    }
    
    function mySlide_set(){
        $slide.each(function(i){
            var newLeft = i * 100 + '%';
            $(this).css({
                'left': newLeft,
            });
            // slide position 배치
        });
        
        $pager.eq(0).addClass('active'); // 첫번쨰 pager button active.
    }
    
    function mySlide_event(){
        $pager.click(function(e){
            var index = $(this).index();
            e.preventDefault();
    
            goToSlide(index);
        });
    }
    
    function mySlide_auto(){
        startSlide();
    
        $slideContainer.mouseenter(function(){
            stopSlide();
        }).mouseleave(function(){
            startSlide();
        })
    }
    
    function startSlide(){
        timer = setInterval(function(){
                var nextIndex = (currentIndex + 1) % slideCount;
                goToSlide(nextIndex);
        }, interval);
    }
    
    function stopSlide(){
        clearInterval(timer);
    }
    
    function goToSlide(index){
        var newLeft = -100 * index + '%';
        
        if(currentIndex > index && (currentIndex - index >= 2)){
            var preLeft = -100 * (index + 1) + '%';
            $slideGroup.css({
                left: preLeft,
            });
        }
        if(index > currentIndex && (index - currentIndex >= 2)){
            var preLeft = -100 * (index - 1) + '%';
            $slideGroup.css({
                left: preLeft,
            });
        }
        
        $slideGroup.animate({
            left: newLeft,
        }, duration);
        currentIndex = index;
    
        $pager.eq(currentIndex).addClass('active').siblings().removeClass('active');
    
        if(slideName == 'mainSlide'){
            $pager.eq(currentIndex).find('a img').css({
                src: 'images/slider_indicator_active.png',
            });
            $pager.eq(currentIndex).siblings().find('a img').css({
                src: 'images/slider_indicator.png',
            });
        }
        if(slideName == 'subSlide'){
            $pager.eq(index).find('a img').css({
                src: 'images/slider_indicator_active.png',
            });
            $pager.eq(index).siblings().find('a img').css({
                src: 'images/slider_indicator_black.png',
            });
        }
        // pager active btn toggle.
    }

    function mySlide_drag(){
        $slideGroup.mousedown(function(e){
            clickDrag = true;
            startDrag = e.clientX;
        });
        $slideGroup.mousemove(function(e){
            if(clickDrag == false) return;
        });
        $slideGroup.mouseup(function(e){
            clickDrag = false;
            endDrag = e.clientX;
            dragCheck(threshold);
        });
    }
    
    function dragCheck(threshold){
        if(startDrag > endDrag && startDrag - endDrag >= threshold){
            if(currentIndex == 3){
                currentIndex = 0;
            }else{
                currentIndex += 1;
            }
        }
        if(endDrag > startDrag && endDrag - startDrag >= threshold){
            if(currentIndex == 0){
                currentIndex = 3;
            }else{
                currentIndex -= 1;
            }
        }
        goToSlide(currentIndex);
    }
}