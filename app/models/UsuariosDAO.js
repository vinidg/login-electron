function UsuariosDAO(connection) {
    this._connection = connection();
}


UsuariosDAO.prototype.inserirUsuario = function(usuario, callback){
    this._connection.query('insert into login set ? ', usuario, callback);
}

UsuariosDAO.prototype.autenticar = function(usuario, callback){
    this._connection.query('select * from login where user = "' + usuario.email +'" AND password = "'+ usuario.senha+ '"', callback);
}

module.exports = function(){
	return UsuariosDAO;
}