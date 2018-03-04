function Login() {
    var done = 0;
    var username = document.getElementById("inputEmail").value;
    username = username.toLowerCase();
    var password = document.getElementById("inputSenha").value;
    password = password.toLowerCase();
    if (username == "teste@gmail.com" && password == "123456") {
        setCookie(username, 1);
        done = 1;
        window.location="home.html";
    }
    if (username == "vinidg@gmmail.com" && password == "123vini") {
        setCookie(username, 1);
        done = 1;
        window.location="home.html";
    }
    if (done == 0) {
        alert("Senha ou Usuário inválido.");
    }
}

function setCookie(cname, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie =  "username=" + cname + ";expires=" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user == "") {
        window.location="login.html";
}
}