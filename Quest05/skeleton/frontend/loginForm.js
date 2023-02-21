class LoginForm {
  constructor() {
    const loginTitle = document.createElement("h2");
    loginTitle.textContent = "로그인";

    const inputName = document.createElement("input");
    inputName.placeholder = "이름";
    inputName.name = "userName";

    const loginButton = document.createElement("button");
    loginButton.textContent = "submit";
    loginButton.type = "submit";

    const formContent = document.createElement("form");
    formContent.method = "post";
    formContent.appendChild(loginTitle);
    formContent.appendChild(inputName);
    formContent.appendChild(loginButton);

    document.body.appendChild(formContent);
  }
}
