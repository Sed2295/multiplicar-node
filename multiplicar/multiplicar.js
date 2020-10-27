const fs = require('fs')
const colors = require('colors');//para colores en consola
let listarTabla = (base,limite) => {
	return new Promise ( (resolve,reject) => {
		let data = ''
		if(base&&limite){
			for( let i=1; i<=limite; i++){
				data += (`${base}*${i}=${base*i}\n`)
			}
			resolve(data.green)
		} else{
			reject('Ingrese base y limite')
			return
		}
		
	})
}
let crearArchivo = ( base,limite ) => {
	return new Promise ( (resolve,reject)=> {
		let data = '';
		if(!Number(base)){
			reject('El valor introducido no es un numero.')
			return
		}
		for( let i=1; i<=limite; i++){
			data += (`${base}*${i}=${base*i}\n`)
		}
		fs.writeFile('tabla-2.txt', data , (err) => {
		  if (err)
		  		reject(err);
		  else 
		  	resolve(`tabla-${base}.txt`)
		});
			} )
}
module.exports = {
	crearArchivo,
	listarTabla
}

