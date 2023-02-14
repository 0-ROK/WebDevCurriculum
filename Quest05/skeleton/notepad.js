class Notepad {
  /* TODO: 그 외에 또 어떤 클래스와 메소드가 정의되어야 할까요? */
  constructor() {
    const fileNavbar = document.getElementsByClassName("file-navbar")[0];

    this.element = document.createElement("div");
    this.element.className = "notepad";

    const textarea = document.createElement("textarea");
    textarea.className = "input-field";

    const buttonGroup = document.createElement("div");
    buttonGroup.className = "button-group";

    const saveButton = document.createElement("button");
    saveButton.textContent = "저장";

    const saveOtherNameButton = document.createElement("button");
    saveOtherNameButton.textContent = "다른 이름으로 저장";

    buttonGroup.appendChild(saveOtherNameButton);
    buttonGroup.appendChild(saveButton);

    this.element.appendChild(textarea);
    this.element.appendChild(buttonGroup);

    document.body.appendChild(this.element);
  }

  save = () => {};

  saveOtherName = () => {};
}

class FileNavbar {
  constructor() {
    this.element = document.createElement("ul");
    this.element.className = "file-navbar";

    const newFileButton = document.createElement("li");
    newFileButton.classList.add("filename", "new-file-button");
    newFileButton.textContent = "파일 생성 +";
    newFileButton.addEventListener("click", () => {
      this.createFile();
    });

    this.element.appendChild(newFileButton);

    document.body.appendChild(this.element);
  }

  fileItems = [];

  createFile = () => {
    this.fileItems.push(new FileItem());
  };

  removeFile = (fileItem) => {
    fileItem.removeFile();
  };
}

class FileItem {
  constructor(filename = "새 파일") {
    this.element = document.createElement("li");
    this.element.className = "filename";
    this.element.textContent = filename;
    this.fileContent = "";

    const fileNavbar = document.getElementsByClassName("file-navbar")[0];
    fileNavbar.appendChild(this.element);
  }

  editFile = (filename, fileContent) => {
    this.element.textContent = filename;
    this.element.fileContent = fileContent;
  };

  removeFile = () => {
    this.element.remove();
  };
}
