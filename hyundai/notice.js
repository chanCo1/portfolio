class Notice {

    static title = '풀스택 자바(JAVA)웹개발자(프론트엔드&백엔드)';
    static left = '20px';
    static top = '10px';
    // fslightbox보다 1 작은 값.
    static zindex = 999999999;
    static width = '1280px';
    static height = '720px';

    static init(myname, pdf) {
        const iframeContainer = document.createElement('div');
        iframeContainer.setAttribute('id', 'pdfDocumentContainer');
        iframeContainer.style.display = 'none';
        
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', encodeURIComponent(pdf));
        iframe.setAttribute('id', 'pdfDocument');
        iframe.setAttribute('width', this.width);
        iframe.setAttribute('height', this.height);
        iframe.setAttribute('frameBorder', '0');
        iframeContainer.appendChild(iframe);
        
        document.getElementsByTagName("body")[0].appendChild(iframeContainer);

        const container = document.createElement("div");
        container.setAttribute('id', 'noticeContainer');
        container.style.backgroundColor = "#000";
        container.style.padding = '10px';
        container.style.position = 'fixed';
        container.style.zIndex = this.zindex;
        container.style.left = this.left;
        container.style.top = this.top;

        const content = document.createElement("div");
        content.style.border = '1px solid #ccc';
        content.style.padding = '0 20px 10px 20px';
        content.style.width = "340px";
        content.style.color = '#fff';
        content.style.fontSize = '16px';
        content.style.lineHeight = '150%';
        content.innerHTML = `<p>이 사이트는 이젠아카데미컴퓨터학원(강남)의<br/><u><b style="color: #cc0">${this.title}</b></u>과정을 통해 학습한 내용을 기반으로 제작되었습니다.</p><p><u><b style="color: #cc0">${myname} 훈련생의 포트폴리오</b></u>를 목적으로 하는 클론코딩 사이트이며 실제 운영되는 사이트가 아니므로 착오 없으시길 바랍니다.</p>`;

        const hr = document.createElement('hr');
        hr.style.border = '0';
        hr.style.borderTop = '1px solid #fff';
        hr.style.margin = '15px 0';
        content.appendChild(hr);

        const btnList = document.createElement('div');
        btnList.style.textAlign = 'center';
        content.appendChild(btnList);

        const btnClose = document.createElement('a');
        btnClose.style.margin = '0 10px';
        btnClose.style.color = '#fff';
        btnClose.setAttribute('href', '#');
        btnClose.innerHTML = '[닫기]';
        btnClose.addEventListener('click', this.onBtnCloseClick);
        btnList.appendChild(btnClose);

        const btnDocument = document.createElement('a');
        btnDocument.style.margin = '0 10px';
        btnDocument.style.color = '#fff';
        btnDocument.setAttribute('href', '#pdfDocument');
        btnDocument.dataset.fslightbox = 'pdf-document'
        btnDocument.innerHTML = '[작업명세서 보기]';
        btnList.appendChild(btnDocument);

        container.appendChild(content);
        document.getElementsByTagName("body")[0].appendChild(container);

        refreshFsLightbox();
    }

    static onBtnCloseClick(e) {
        e.preventDefault();
        const current = e.currentTarget;
        current.closest('#noticeContainer').remove();
        document.querySelector("#pdfDocumentContainer").remove();
    }
}