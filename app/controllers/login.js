var crypto = require("crypto");

module.exports.login = function(application, req, res){
    if(req.session.autorizado){
        res.render("home");
    }else{
        res.render("login", {validacao:{}});	
    }
}
module.exports.autenticar = function(application, req, res){
    var dados = req.body;

    req.assert('email', 'Email não pode ser vazio').notEmpty();
    req.assert('senha', 'Senha não pode ser vazia').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.render("login", {validacao:erros});
        return;
    }

    var connection = application.config.dbConnection;
    var usuariosDAO = new application.app.models.UsuariosDAO(connection);
    var senhaCrypto = crypto.createHash("md5").update(dados.senha).digest("hex");
    dados.senha = senhaCrypto;
    usuariosDAO.autenticar(dados, function(error, result){
		if(result[0] != undefined){
            req.session.autorizado = true;
            req.session.usuario = result[0].user;
            req.session.permission = result[0].permission;
        }
        if(req.session.autorizado){
            res.redirect('home');
        }else{
            var erro = [{msg: 'Erro na validação do usuário e senha'}];
            console.log(erro[0].msg)
            res.render('login', {validacao:erro});
        }
	});
}