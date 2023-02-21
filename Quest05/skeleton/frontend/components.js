class Notepad {
  /* TODO: 그 외에 또 어떤 클래스와 메소드가 정의되어야 할까요? */
  constructor(fileContent) {
    this.element = document.createElement("div");
    this.element.className = "notepad";

    const textarea = document.createElement("textarea");
    textarea.className = "input-field";
    textarea.textContent = fileContent;
    textarea.placeholder = "글을 작성하세요";

    this.element.appendChild(textarea);

    return this.element;
  }

  loadFile = () => {
    // 파일 아이템 객체에서 데이터 가져오기
    // this.element.textarea.textContent =
  };

  save = () => {
    // fileNavbar에 저장 요청
  };

  saveOtherName = () => {
    // fileNavbar에 저장 요청
  };
}

class FileNavbar {
  constructor(createFileCallback) {
    this.element = document.createElement("ul");
    this.element.className = "file-navbar";

    const newFileButton = document.createElement("li");
    newFileButton.classList.add("filename", "new-file-button");
    newFileButton.textContent = "파일 생성 +";
    newFileButton.addEventListener("click", createFileCallback);

    this.element.appendChild(newFileButton);

    return this.element;
  }

  removeFile = (fileItem) => {
    fileItem.removeFile();
  };

  selectOtherFile = () => {
    // 파일 불러오기 api 호출
    const notepad = document.getElementsByClassName("notepad")[0];
    // 수정사항이 있을 경우 넘어가지 못하게 경고창을 띄운다.
  };

  loadFile = () => {
    // file 불러오기 api 호출
  };

  saveFile = () => {
    // 파일 저장 api 호출
  };
}

class ButtonGroup {
  constructor(saveCallback, saveOtherNameCallback) {
    // 버튼 그룹
    const buttonGroup = document.createElement("div");
    buttonGroup.className = "button-group";
    this.element = buttonGroup;

    const saveButton = document.createElement("button");
    saveButton.addEventListener("click", this.save);
    saveButton.textContent = "저장";

    const saveOtherNameButton = document.createElement("button");
    saveOtherNameButton.addEventListener("click", this.saveOtherName);
    saveOtherNameButton.textContent = "다른 이름으로 저장";

    this.element.appendChild(saveOtherNameButton);
    this.element.appendChild(saveButton);

    return this.element;
  }
}

class FileItem {
  constructor(fileNumber, filename = "새 파일") {
    // (if) 파일 아이디로 api 요청하여 파일 받아오기
    // (else) 파일 만들기
    initFileSelection();
    this.element = document.createElement("li");
    this.element.classList.add(
      "filename",
      "selected-file",
      `file${fileNumber}`
    );

    this.element.textContent = filename;

    this.fileContent = "";

    this.element.addEventListener("click", this.selectThisFile);

    const fileNavbar = document.getElementsByClassName("file-navbar")[0];
    fileNavbar.appendChild(this.element);

    return this.element;
  }

  editFile = (filename, fileContent) => {
    this.element.textContent = filename;
    this.element.fileContent = fileContent;
  };

  selectThisFile = () => {
    initFileSelection();
    // 파일 불러오기 api 호출
    this.element.classList.add("selected-file");
  };

  removeFile = () => {
    this.element.remove();
  };
}

const initFileSelection = () => {
  const prevSelectedFile = document.getElementsByClassName("selected-file");
  Array.prototype.forEach.call(prevSelectedFile, (element) => {
    element.classList.remove("selected-file");
  });
};
