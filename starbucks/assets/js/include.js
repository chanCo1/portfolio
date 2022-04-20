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

    // === 돋보기 이벤트 === //
    const search = document.querySelector(".search");
    const serachArea = document.querySelector("#search_area");

    const searchIcon = document.querySelector("#search_icon").addEventListener("click", e => {
      serachArea.style.width = 100 + "%";
      serachArea.style.display = "block";
      search.style.animation = "animate1 .5s";
      
      e.currentTarget.addEventListener("click", e => {
        e.preventDefault();
        if(!serachArea.value) alert("검색어를 입력하세요.");
      });
    });

    // === 서브메뉴 이벤트 === //
    const subMenu1 = document.querySelector("#sub_menu1");
    const subMenu2 = document.querySelector("#sub_menu2");
    const subMenu3 = document.querySelector("#sub_menu3");
    const subMenu4 = document.querySelector("#sub_menu4");
    const subMenu5 = document.querySelector("#sub_menu5");
    const subMenu6 = document.querySelector("#sub_menu6");

    const coffee = document.querySelector("#coffee").addEventListener("mouseover", e => subMenu1.style.maxHeight = 100 + "vh");
    const menu = document.querySelector("#menu").addEventListener("mouseover", e => subMenu2.style.maxHeight = 100 + "vh");
    const store = document.querySelector("#store").addEventListener("mouseover", e => subMenu3.style.maxHeight = 100 + "vh");
    const responsibility = document.querySelector("#responsibility").addEventListener("mouseover", e => subMenu4.style.maxHeight = 100 + "vh");
    const rewards = document.querySelector("#rewards").addEventListener("mouseover", e => subMenu5.style.maxHeight = 100 + "vh");
    const wNew = document.querySelector("#wnew").addEventListener("mouseover", e => subMenu6.style.maxHeight = 100 + "vh");

    const subMenu = document.querySelectorAll(".sub_menu");
    subMenu.forEach(v => {
      v.addEventListener("mouseover", e => {
        v.style.maxHeight = 100 + "vh";
      });

      v,addEventListener("mouseout", e => {
        v.style.maxHeight = 0;
      });
    });
  };
});





    // // === 서브메뉴 유지 ... === //
    // subMenu1.addEventListener("mouseover", e => {
    //   subMenu1.style.maxHeight = 100 + "vh"
    // });
    // subMenu2.addEventListener("mouseover", e => {
    //   subMenu2.style.maxHeight = 100 + "vh"
    // });
    // subMenu3.addEventListener("mouseover", e => {
    //   subMenu3.style.maxHeight = 100 + "vh"
    // });
    // subMenu4.addEventListener("mouseover", e => {
    //   subMenu4.style.maxHeight = 100 + "vh"
    // });
    // subMenu5.addEventListener("mouseover", e => {
    //   subMenu5.style.maxHeight = 100 + "vh"
    // });
    // subMenu6.addEventListener("mouseover", e => {
    //   subMenu6.style.maxHeight = 100 + "vh"
    // });