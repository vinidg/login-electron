module.exports = function(application){
	application.get('/adm/inserir-usuario', function(req, res){
		application.app.controllers.adm.usuario.inserirUsuario(application, req, res);
    });

}