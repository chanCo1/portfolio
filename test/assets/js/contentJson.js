const contentJson = async e => {
  let json = null;

  try {
    // axios로 로컬 json 파일 호출 (json-sever x)
    json = await axios.get("assets/backend/content.json");
  } catch(e) {
    console.error(e);
    return;
  }
  
  if(json != null) {
    const {data} = json;

    const contentsBox = document.querySelector(".contents_box");

    // for문을 사용해서 HTML 요소를 생성한다.
    for(let i = 0; i < 4; i++) {
      const makeContents = document.createElement("div");
      makeContents.classList.add("contents");
      contentsBox.appendChild(makeContents);

      for(let i = 0; i < 3; i++) {
        const makeContentsWrap = document.createElement("div");
        makeContentsWrap.classList.add("contents_wrap");
        makeContents.appendChild(makeContentsWrap);

        const makeContentsImg = document.createElement("img");
        makeContentsImg.classList.add("contents_img");
        makeContentsImg.setAttribute("id", "contents_img");
        makeContentsWrap.appendChild(makeContentsImg);

        const makeCategory = document.createElement("p");
        makeCategory.classList.add("category");
        makeCategory.setAttribute("id", "category");
        makeContentsWrap.appendChild(makeCategory);

        const makeSubject = document.createElement("h3");
        makeSubject.classList.add("subject");
        makeSubject.setAttribute("id", "subject");
        makeContentsWrap.appendChild(makeSubject);
      }
    }

    // 생성한 아이디와 클래스값으로 호출
    const category = document.querySelectorAll("#category");
    const subject = document.querySelectorAll("#subject");
    const contentsWrap = document.querySelectorAll(".contents_wrap");
    const contentsImg = document.querySelectorAll("#contents_img");

    // json 객체의 내용을 가져온다.
    data.content.forEach((v,i) => {
      // 카테고리 추가
      category[i].innerHTML = v.category;
      // 서브젝트 추가
      subject[i].innerHTML = v.subject;
      // 각 컨텐츠에 사진 크기만큼 영역 지정
      contentsWrap[i].style.width = v.width + "px";

      // 이미지 파일 지정
      contentsImg[i].setAttribute("src", v.img_pc);
      // 이미지 크기 지정
      contentsImg[i].setAttribute("width", v.witdh);
      // 이미지 높이 지정
      contentsImg[i].setAttribute("height", v.height);
      // 이미지 클릭시 해당 url창을 띄운다.
      contentsImg[i].addEventListener("click", e => {
        window.open(v.url);
      })
    });
  }
};
// 호출
contentJson();