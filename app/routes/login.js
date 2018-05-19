module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.login.login(application, req, res);
    });
    
    application.post('/autenticar', function(req, res){
        application.app.controllers.login.autenticar(application, req, res);
    });
}