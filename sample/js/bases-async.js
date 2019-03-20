var hello = function (name) {
	return console.log('Hello ' + name);
};


function asyncWithCallback(callback) {
	if (callback && typeof callback === 'function') {
		callback('Farda');
	}
}
asyncWithCallback(hello);

// Pour déclencher un traitement, dans un temps donné, nous pouvons utiliser la méthode setTimeout
// qui prend en argumant un callback et un temps en milliseconde ainsi que le paramètre que l'on
// souhaite translettre au callback
function asyncSayHello (name, callback) {
	if (callback && typeof callback === 'function') {
		setTimeout(callback, 5000, name);
	}
}
asyncSayHello('Jean', hello);