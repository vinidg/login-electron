module.exports.index = function(application, req, res){
	if(req.session.autorizado){
		res.render("home");	
	}else{
		res.render("login", {validacao:{}});
	}
}

module.exports.sair = function(application, req, res){
    req.session.destroy(function(err){
		res.render("login", {validacao:{}});
	});
}