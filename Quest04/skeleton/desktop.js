class Desktop {
  /* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  constructor(iconCount, folderCount) {
    this.icons = Array.from({ length: iconCount }, () => new Icon());
    this.folders = Array.from({ length: folderCount }, () => new Folder());
  }
}

class Icon {
  /* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  constructor() {
    this.element = document.createElement("div");
    this.element.className = "icon";
    this.element.appendChild(document.createTextNode("icon"));

    const desktop = document.getElementsByClassName("desktop")[0];
    desktop.appendChild(this.element);
  }
}

class Folder {
  /* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */

  constructor() {
    const desktop = document.getElementsByClassName("desktop")[0];
    this.element = document.createElement("div");
    this.element.className = "folder";

    this.element.addEventListener("dblclick", () => {
      new Window();
    });

    const handleMove = (e) => {
      if (!this.isDragging) return;
      this.element.style.left = `${e.clientX - 50}px`;
      this.element.style.top = `${e.clientY - 50}px`;
    };

    this.element.addEventListener("mousedown", (e) => {
      this.isDragging = true;
      // desktop.addEventListener("mousemove", handleMove);
    });

    desktop.addEventListener("mousemove", handleMove);

    desktop.addEventListener("mouseup", () => {
      this.isDragging = false;
    });

    desktop.appendChild(this.element);
  }
}

class Window {
  /* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
  constructor() {
    this.element = document.createElement("div");
    this.element.className = "window";

    const windowHeader = document.createElement("div");
    windowHeader.className = "window-header";

    const windowCloseButton = document.createElement("button");
    windowCloseButton.className = "close-button";

    windowCloseButton.appendChild(document.createTextNode("x"));
    windowCloseButton.addEventListener("click", () => {
      this.element.remove();
    });

    windowHeader.appendChild(windowCloseButton);

    const windowContents = document.createElement("div");
    windowContents.className = "window-contents";

    windowContents.appendChild(document.createTextNode("window"));

    this.element.appendChild(windowHeader);
    this.element.appendChild(windowContents);

    const desktop = document.getElementsByClassName("desktop")[0];
    desktop.appendChild(this.element);

    this.element.addEventListener("mousedown", (e) => {
      this.isDragging = true;
    });

    this.element.addEventListener("mousemove", (e) => {
      if (!this.isDragging) return;

      this.element.style.left = `${e.screenX - 400}px`;
      this.element.style.top = `${e.screenY - 200}px`;
    });

    this.element.addEventListener("mouseup", () => {
      this.element.removeEventListener("mousemove", this.moveMouse);
      this.isDragging = false;
    });
  }
}
