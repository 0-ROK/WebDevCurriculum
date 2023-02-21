class View {
  constructor() {
    this.fileItems = [];

    const fileNavbar = new FileNavbar(this.createFile);
    const notepad = new Notepad(this.fileContent);
    const buttonGroup = new ButtonGroup();
    // const fileItem = new FileItem();

    const view = document.createElement("div");

    view.appendChild(fileNavbar);
    view.appendChild(notepad);
    notepad.appendChild(buttonGroup);

    document.body.appendChild(view);
  }

  fileItems = [];

  fileContent = "";

  // 로직

  createFile = () => {
    // 파일 id
    const fileItem = new FileItem(this.fileItems.length);
    this.fileItems.push(fileItem);

    fileNavbar.appendChild(fileItem);
  };

  selectFile = () => {
    // api 요청
    const res = "response";
    this.fileContent = res;
  };

  saveFile = () => {
    // api 요청
  };
}
