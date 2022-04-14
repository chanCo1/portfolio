Array.from(document.querySelectorAll("*[data-includes]")).forEach(async v => {
  const include = v.dataset.includes;
  let html = null;

  try {
    const response = await axios.get(include);
    html = response.data;
  } catch(e) {
    console.error(e);
  };

  if(html != null) {
    v.outerHTML = html;

    // 회사소개 마우스 올리면 나오는 메뉴 구현
    const introduce = document.querySelector("#introduce");
    const sub = document.querySelector(".sub_menu");
    
    introduce.addEventListener("mouseover", e => {
      sub.style.display = "block";
      searchMenu.style.display = "none";
      languageMenu.style.display = "none";
    });
    introduce.addEventListener("mouseout", e => {
      sub.style.display = "none";
    });

    // 하위 메뉴 유지
    sub.addEventListener("mouseover", e => {
      sub.style.display = "block";
    });
    sub.addEventListener("mouseout", e => {
      sub.style.display = "none";
    });

    // 돋보기 누르면 나오는 검색창 구현
    // on / off 구현
    let searchToggle = true;

    const searchIcon = document.querySelector("#search_icon");
    const searchMenu = document.querySelector(".search_menu");

    searchIcon.addEventListener("click", e => {
      if(searchToggle === true) {
        searchMenu.style.display = "block";
        sub.style.display = "none";
        languageMenu.style.display = "none";

        searchToggle = false;
      } else {
        searchMenu.style.display = "none";

        searchToggle = true;
      }
    });


    // 언어 설정 버튼 on/off
    // language 옆에 화살표 애니메이션 구현
    let languageToggle = true;

    const languageBtn = document.querySelector("#language_btn");
    const languageMenu = document.querySelector(".language_menu");
    const languageArrow = document.querySelector(".arrow");

    languageBtn.addEventListener("click", e => {
      if(languageToggle === true) {
        languageMenu.style.display = "block";
        languageArrow.style.transform = "rotate(180deg)";

        sub.style.display = "none";
        searchMenu.style.display = "none";

        languageToggle = false;
      } else {
        languageMenu.style.display = "none";
        languageArrow.style.transform = "none";

        languageToggle = true;
      }
    });


    
    // x 버튼 누르면 메뉴 닫기 구현
    const closeBtn = document.querySelectorAll(".close_btn").forEach(v => {
      v.addEventListener("click", e => {

        // 회사소개 닫기
        sub.style.display = "none";

        // 돋보기 닫기
        searchMenu.style.display = "none";
      });
    });


  };
});