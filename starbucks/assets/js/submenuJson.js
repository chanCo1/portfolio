const submenuJson = async e => {
  let json = null

  try {
    json = await axios.get("assets/backend/submenu.json");
  }catch(e) {
    console.error(e);
    return;
  }

  if(json != null) {
    const {data} = json;

    const subTextWrap = document.querySelector(".sub_menu_wrap");

      // suject 갯수만큼 요소 생성
      for(let i = 0; i < data.coffee.length; i++) {
        const makeSubMenuText = document.createElement("div");
        makeSubMenuText.classList.add("sub_menu_text");
        subTextWrap.appendChild(makeSubMenuText);

        const makeSubject = document.createElement("h4");
        makeSubject.classList.add("subject");
        makeSubject.setAttribute("id", "subject")
        makeSubMenuText.appendChild(makeSubject);

        const makeUl = document.createElement("ul");
        // makeUl.classList.add("test");
        makeSubMenuText.appendChild(makeUl)
        
        for(let a = 0; a < data.coffee[i].text.length; a++) {
          const makeLi = document.createElement("li");
          makeLi.classList.add("text")
          makeLi.setAttribute("id", "text");
          makeUl.appendChild(makeLi);
        }
      }
      
    
    // 생성한 아이디와 클래스값 호출
    const subject = document.querySelectorAll("#subject");
    const text = document.querySelectorAll("#text");
    
    
    data.coffee.forEach((v,i) => {
      subject[i].innerHTML = v.subject;


      for(let a = 0; a < v.text.length; a++) {

        text[a].innerHTML = v.text[a];


      }
    
     
    })

  }
}
submenuJson();
