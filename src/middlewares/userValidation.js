
function userValidation(req,res,next){
    if(req.query.user ==  'Ada' || req.query.user == 'Greta' || req.query.user == 'Vim' || req.query.user == 'Tim'){
        res.send('Hola Admin: ' + req.query.user );
    }
    else{
        res.send ('No tienes los privilegios para ingresar');
    }
}




module.exports = userValidation;