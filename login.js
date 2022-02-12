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
