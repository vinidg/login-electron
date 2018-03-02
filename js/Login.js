function Login() {
    var done = 0;
    var username = document.login.inputEmail.value;
    username = username.toLowerCase();
    var password = document.login.inputSenha.value;
    password = password.toLowerCase();
    if (username == "teste" && password == "123456") {
        window.location = "src/view/home.html";
        done = 1;
    }
    if (username == "vinidg" && password == "123vini") {
        window.location = "src/view/home.html";
        done = 1;
    }
    if (done == 0) {
        alert("Senha ou Usuário inválido.");
    }
}