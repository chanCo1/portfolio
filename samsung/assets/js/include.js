// "data-includes" 속성을 갖는 모든 요소에 대한 탐색
Array.from(document.querySelectorAll("*[data-includes]")).forEach(async (v, i) => {
  const include = v.dataset.includes;
  let html = null;
  
  try {
    const response = await axios.get(include);
    html = response.data;
  } catch(e) {
    console.error(e);
  }
  
  if(html != null) {
    v.outerHTML = html;

    const includeHeader = document.querySelector("#submenu_background");
    const div = document.createElement("div");

    // 서브 메뉴 리스트
    document.querySelectorAll(".menu-item").forEach((v,i) => {
      v.addEventListener("mouseover", e => {
        const current = e.currentTarget;
        const sub = current.querySelector(".sub");
        sub.style.maxHeight = sub.scrollHeight + "px";

        div.style.width = "100" + "%"
        div.style.height = "300" + "px"
        div.style.position = "absolute";
        div.style.backgroundColor = "#fff";
        div.style.zIndex = "8";
        includeHeader.appendChild(div);
      });
    
      v.addEventListener("mouseout", e => {
        const current = e.currentTarget;
        const sub = current.querySelector(".sub");
        sub.style.maxHeight = null;
        includeHeader.removeChild(div);
      });
    });
  };
});
