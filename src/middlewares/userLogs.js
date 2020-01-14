const fs = require ('fs');
const ubicacionUserLogs = './src/logs/userLogs.txt';



function traerlog () {
	let contenidolog = fs.readFileSync(ubicacionUserLogs, 'utf-8');
	return contenidolog;
}

function guardarlogs (reg) {
    fs.appendFileSync (ubicacionUserLogs, reg);
}



function userLogs (req,res,next){
   guardarlogs('\n El usuario ingresó a la ruta: ' + req.url);
   console.log(req.url);
   
   next();
}



module.exports = userLogs;