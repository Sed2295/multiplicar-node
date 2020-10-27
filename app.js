/*const fs = require('express') paquete que instale
const fs = require('./fs') paquete que cree*/
const argv = require('./config/yargs').argv;
const {crearArchivo,listarTabla} = require('./multiplicar/multiplicar')
let comando = argv._[0];
switch(comando){
	case 'listar':
		listarTabla(argv.base,argv.limite)
			.then(tabla => console.log(tabla))
			.catch(err => console.log(err))
	break;
	case 'crear':
		crearArchivo(argv.base,argv.limite)
			.then(archivo => console.log('Archivo creado'))
			.catch(err => console.log(err))
	break;
	default:
		console.log('Comando no reconocido')
}
//En consola ejecutamos node app  lista --base=5 --limite=20
