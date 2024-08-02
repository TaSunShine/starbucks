console.log(1);
const searchEl = document.querySelector('.search');
const searchInputEl = document.querySelector('.search input');

console.log(searchEl);
console.log(searchInputEl);

searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
    searchInputEl.setAttribute('placeholder', '통합검색');
    searchEl.classList.add("focused");
});

searchInputEl.addEventListener('blur', function(){
    searchInputEl.setAttribute('placeholder', "");
    searchEl.classList.remove("focused");
});

// 순서대로 요소 나타내기
// 나타낼 요소(.fade-in) 찾기
const fadeEls = document.querySelectorAll('.banner .fade-in');
console.log(fadeEls);

fadeEls.forEach(function(fadeEl,index){
//    console.log(fadeEl);
//    console.log(index);
    gsap.to(fadeEl,1,{
        delay: (index+1) *0.5,
        opacity:1
    })
});


new Swiper('.notice_line', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    autoplay:true
  });

const promoSwiper =  new Swiper('.promotion .swiper-container', {
    slidesPerView: 3, // 화면에 보일 갯수
    spaceBetween: 10, // 각 이미지의 마진값
    centeredSlides: true, // 보여질 슬라이드 중앙
    loop: true, // 자동으로 넘어가도록
    autoplay: { 
        delay: 5000 // 5초
    },
    pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

const promoSwiper2 =  new Swiper('.down .swiper-container', {
    slidesPerView: 5, // 화면에 보일 갯수
    spaceBetween: 20, // 각 이미지의 마진값
    loop: true, // 자동으로 넘어가도록
    autoplay: { 
        delay: 3000 // 5초
    },
    pagination: {
        el: '.down .swiper-pagination',
        clickable: true
    },
    navigation: {
        prevEl: '.down .swiper-prev',
        nextEl: '.down .swiper-next'
    }
});




const swiperControlBtn = document.querySelector('.swiper-control-btn');

swiperControlBtn.addEventListener('click', function() {
    let isSwiperOn = swiperControlBtn.classList.contains('on');
    
    if(isSwiperOn){
        // stop
        swiperControlBtn.classList.remove('on');
        promoSwiper.autoplay.stop();
        swiperControlBtn.textContent = "play_arrow";
    }
    else{
        // start
        swiperControlBtn.classList.add('on');
        promoSwiper.autoplay.start();
        swiperControlBtn.textContent = "pause";
    }
});

  //프로모션 영역요소
  const promotionEl = document.querySelector('.promotion');

  // 프로모션 영역 토글요소
  const promotionToggleBtn = document.querySelector('.toggle-promotion');


  // 아이콘 방향 변경
  //const swiperControlBtn = document.querySelector('.swiper-control-btn');
  const romotepromotionEl = document.querySelector('.open > .material-symbols-outlined');
  // 프로모션 영역 숨김여부 기본값
  let isHidePromotion = false;
  
  console.log(promotionEl);
  console.log(promotionToggleBtn);
  
// toggle을 click하면..
promotionToggleBtn.addEventListener('click', function() {
    // hide 존재시 true, false 상태
    isHidePromotion = promotionEl.classList.contains('hide');
    if (!isHidePromotion) {
        promotionEl.classList.add('hide');
        romotepromotionEl.textContent = "expand_circle_up";
    } else {
        promotionEl.classList.remove('hide');
        romotepromotionEl.textContent = "expand_circle_down";
    }
});



const spyEls = document.querySelectorAll("#body_layout .scroll-spy");
console.log(spyEls);
spyEls.forEach(function(spyEl){
    //console.log(spyEls);

    // Scene, scorll할 때 해당 영역에 닿을 경우
    // Scene , setClassToggle, addTo
    // 3개의 매개변수를 가짐

    // Scene --> 감지, foreach를 통해 생성된
    // spyEl를 감지함
    // triggerHook의 역할 --> 윈도우화면 100%x
    // 화면에 어느정도 들어온 후에 애니메이션이 작동할 수 있도록.
    // 접속자가 인식하기도 전에 애니메이션이 진행되어버리는 것을 방지하기 위해.

    // spyEL에 "show를 추가"

    // 실제로 addTo를 통한 애니메이션 실행

    //setClasToggle --> ACtion
    new ScrollMagic.Scene({
        triggerElement:spyEl,
        triggerHook: 0.8 
    }).setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

const badgeEl = document.querySelector('#head_layout .badges');
//console.log(badgeEl);



//throttle의 역할 >> 일정 시간만큼만 실행될 수 있도록 하는 역할

window.addEventListener('scroll', _.throttle(function() {

    if (window.scrollY > 600) {

        // 배지 숨기기
        gsap.to(badgeEl, { opacity: 0 });

        // 상단 버튼 보이도록
        gsap.to('#to-top', { x: 0 });
    } else {
        // 배지 보이게
        gsap.to(badgeEl, {  opacity: 1 });

        // 상단 버튼 안 보이도록
        gsap.to('#to-top', { x: 100 });
    }
}, 300));


const toTopEl = document.querySelector('#to-top');

console.log(toTopEl);

toTopEl.addEventListener('click',function(){
    gsap.to(window,0.7,{
        scrollTo:0

    })

});