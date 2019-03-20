function multiply(nbre1, nbre2) {
	console.log('Nombre argument:', arguments.length);	
	try{
		if(typeof nbre1 !== 'number' || typeof nbre2!=='number'){
			throwError();
		}else{
			return nbre1 * nbre2;
		}	
	}catch(e){
		console.log(e);
	}
}

var resultat = multiply(10,3);
console.log('Resultat:',resultat);

resultat = multiply(10,3,7);
console.log('Resultat:',resultat);

resultat = multiply(2, 'Formation', 5);
console.log('Resultat:',resultat);

function throwError () {
	throw new Error('Argument doit être un nombre');
}

(function autoInvoque() {
	console.log("Auto-invoqué");
})();


var logger = function (a) {
	console.log('1er argument :', a);
};

function firstCallBack(callback) {
	if (callback && typeof callback === 'function') {
		callback('mom premier callback');
	}
}
firstCallBack(logger);