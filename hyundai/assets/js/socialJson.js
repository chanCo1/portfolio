const socialJson = async e => {
  let json = null;

  try {
    // axios로 로컬 json 파일 호출 (json-sever x)
    json = await axios.get("assets/backend/social.json");
  } catch(e) {
    console.error(e);
    return;
  }
  
  if(json != null) {
    const {data} = json;

    const socialContents = document.querySelector(".social_contents");

    // for문을 사용해서 HTML 요소 생성
    for(let i = 0; i < 6; i++) {
      const makeSocialWrap = document.createElement("div");
      makeSocialWrap.classList.add("social_wrap");
      socialContents.appendChild(makeSocialWrap);

      const makeSocialImg = document.createElement("img");
      makeSocialImg.classList.add("social_img");
      makeSocialImg.setAttribute("id", "social_img");
      makeSocialWrap.appendChild(makeSocialImg);

      const makeSocialText = document.createElement("div");
      makeSocialText.classList.add("social_text");
      makeSocialText.setAttribute("id", "social_text");
      // i값이 2보다 작은 요소에 클래스값 추가
      if(i > 2) {
        makeSocialText.classList.add("row_social_text");
      };
      makeSocialWrap.appendChild(makeSocialText);
    };

    // 생성한 아이디와 클래스 값으로 호출
    const socialWrap = document.querySelectorAll(".social_wrap");
    const socialImg = document.querySelectorAll("#social_img");
    const socialText = document.querySelectorAll("#social_text");
  
    // forEach 문으로 data값에 접근
    data.social.forEach((v, i) => {
      // 이미지 파일 지정
      socialImg[i].setAttribute("src", v.img);
      // 이미지 클릭시 해당 url창을 띄운다.
      socialImg[i].addEventListener("click", e => {
        window.open(v.url);
      });

      // 마우스 올리면 텍스트 나타나는거 구현
      socialText[i].addEventListener("mouseover", e => {
        socialText[i].innerHTML = v.text;
        socialText[i].style.backgroundColor = "#002c5f";
        socialText[i].style.opacity = "1";

        // 인스타 아이콘
        const instaIcon = document.createElement("img");
        instaIcon.classList.add("insta_icon");
        instaIcon.setAttribute("src", "assets/img/instagram.webp");
        socialText[i].appendChild(instaIcon);
      });
      socialText[i].addEventListener("mouseout", e => {
        socialText[i].style.opacity = "0";
      });
    });
   
  }
};
socialJson();
