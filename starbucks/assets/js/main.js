
// === 공지사항 반복 === //
const notice = document.querySelector("#notice_subject");
const noticeList = document.querySelectorAll(".notice_list").length;

let i = 0;
setInterval(() => {
  notice.style.top = -50 * i + "px";
  i = (i + 1) % noticeList;
}, 3000);



// === 프로모션 버튼 === //
const promotionBtn = document.querySelector(".promotion_btn");
promotionBtn.addEventListener("click", e => {
  
  // 회전
  promotionBtn.classList.toggle("prom_btn_active");

  // 프로모션 배너 on/off
  const promotionBanner = document.querySelector("#prom_banner");
  promotionBanner.classList.toggle("prom_banner_active");
});



// === swiper === //
const swiper = new Swiper(".swiper", {
  spaceBetween: 20,
  slidesPerView: 3,
  centeredSlides: true,
  slidesPerView: "auto",

  autoplay: {
    delay: 2000,
    disableOnInteraction: false, 
  },

  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



// === stop / start 버튼 === //
const stop = document.querySelector(".pagination-stop");
const start = document.querySelector(".pagination-start");

stop.addEventListener("click", e => {
  swiper.autoplay.stop();
  stop.style.display = "none";
  start.style.display = "block";
});

start.addEventListener("click", e => {
  swiper.autoplay.start();
  start.style.display = "none";
  stop.style.display = "block";
});


// === 토라자 === //
const torajaImg = document.querySelector("#toraja_img");
const torajaText = document.querySelector("#toraja_text_box");

window.addEventListener("scroll", e => {
  if(window.scrollY > 600) {
    torajaImg.style.left = 15 + "%";
    torajaImg.style.opacity = 1;
    torajaText.style.right = 35 + "%";;
    torajaText.style.opacity = 1;
  } else {
    torajaImg.style.left = "-" + 25 + "%";
    torajaImg.style.opacity = 0;
    torajaText.style.right = "-" + 35 + "%";
    torajaText.style.opacity = 0;
  }
});


// === 인도네시아 커피 이미지 === //
const indonesiaCoffeeImg = document.querySelector(".indonesia_coffee");

window.addEventListener("scroll", e => {
  if(window.scrollY > 1100) indonesiaCoffeeImg.style.opacity = 1;
  else indonesiaCoffeeImg.style.opacity = 0;
});


// === favorite 텍스트 === //
const favoriteText1 = document.querySelector(".favorite_text1");
const favoriteText2 = document.querySelector(".favorite_text2");
const favoriteDetail = document.querySelector(".favorite_detail");

window.addEventListener("scroll", e => {
  if(window.scrollY > 1400) {
    favoriteText1.style.left = 30 + "%";
    favoriteText1.style.opacity = 1;
  } else {
    favoriteText1.style.left = "-" + 50 + "%";
    favoriteText1.style.opacity = 0;
  }

  if(window.scrollY > 1600) {
    favoriteText2.style.left = 1 + "%"
    favoriteText2.style.opacity = 1;
  } else {
    favoriteText2.style.left = "-" + 50 + "%";
    favoriteText2.style.opacity = 0;
  }

  // 자세히 보기
  if(window.scrollY > 1800) {
    favoriteDetail.style.opacity = 1;
  } else {
    favoriteDetail.style.opacity = 0;
  }
});


// === reserve === //
const reserveImg = document.querySelector(".reserve_img");

window.addEventListener("scroll", e => {
  if(window.scrollY > 2200) {
    reserveImg.style.opacity = 1;
  } else {
    reserveImg.style.opacity = 0;
  }
});

// === store === //
const storeImg = document.querySelector(".store_img");
const storeText1 = document.querySelector(".store_text1");
const storeText2 = document.querySelector(".store_text2");
const storeFind = document.querySelector(".store_find");

window.addEventListener("scroll", e => {
  if(window.scrollY > 2600) {
    storeImg.style.opacity = 1;
    
    storeText1.style.right = 3.7 + "%"
    storeText1.style.opacity = 1;

  } else {
    storeImg.style.opacity = 0;
    
    storeText1.style.right = "-" + 50 + "%"
    storeText1.style.opacity = 0;
  }

  if(window.scrollY > 2700) {
    storeText2.style.right = 8.5 + "%"
    storeText2.style.opacity = 1;

  } else {
    storeText2.style.right = "-" + 50 + "%"
    storeText2.style.opacity = 0;
  }

  if(window.scrollY > 2750) {
    storeFind.style.right = 71.5 + "%";
    storeFind.style.opacity = 1;

  } else {
    storeFind.style.right = "-" + 50 + "%"
    storeFind.style.opacity = 0;
  }
});