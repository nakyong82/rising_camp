/*질문 - 메뉴 생성 후 마우스 오버되면 금방 사라짐 메뉴창에 마우스가 
머무르면 안 사라지게 하는 방법? */

/*고객 센터 상세 메뉴 생성*/
let center = document.getElementById("top_menu_tri");
center.addEventListener(
  "mouseover",
  function (event) {
    //highlight the mouseover target
    document.querySelector("#top_menu_drop").style.display = "block";
  },
  false
);
center.addEventListener(
  "mouseout",
  function (event) {
    // highlight the mouseout target
    document.querySelector("#top_menu_drop").style.display = "none";
  },
  false
);
/*위치 아이콘 메뉴 바 생성*/
let img = document.getElementById("location_img");
img.addEventListener(
  "mouseover",
  function (event) {
    //highlight the mouseover target
    document.querySelector(".location_container").style.display = "block";
  },
  false
);
img.addEventListener(
  "mouseout",
  function (event) {
    // highlight the mouseout target
    document.querySelector(".location_container").style.display = "none";
  },
  false
);

/*전체 카테고리 아이콘 이미지 변경(색상 변경)*/
let menu = document.querySelector("#category");
let icon = document.querySelector(".category_icon");
menu.addEventListener("mouseover", function changePic() {
  icon.src = "https://res.kurly.com/pc/service/common/1908/ico_gnb_all_x2.png";
});

menu.addEventListener("mouseout", function changePic() {
  icon.src =
    "https://res.kurly.com/pc/service/common/1908/ico_gnb_all_off_x2.png";
});

/*전체 메뉴 생성 */
let totalmenu = document.getElementById("category");
totalmenu.addEventListener(
  "mouseover",
  function (event) {
    //highlight the mouseover target
    document.querySelector(".category_drop").style.display = "block";
  },
  false
);
totalmenu.addEventListener(
  "mouseout",
  function (event) {
    // highlight the mouseout target
    document.querySelector(".category_drop").style.display = "none";
  },
  false
);
/*전체 메뉴의 서브메뉴 생성 */
/*swiper api*/
const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  loopAdditionalSlides: 1,
  slidesPerView: 1,
  spaceBetween: 0,
  //드레그 기능 true 사용가능 false 사용불가
  speed: 3000,
  //자동 스크를링
  autoplay: {
    // 자동 슬라이드 설정 , 비 활성화 시 false
    delay: 1000, // 시간 설정(1000=1s)
    disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
