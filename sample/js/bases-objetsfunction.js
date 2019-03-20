function Formation(nom, langage){
	this.nom = 'Module JavaScript';
	this.langage = 'javaScript';
	this.dateDebut = '01/09/2017';
	this.dateFin = '05/09/2017';
	this.stagiaires = [{nom: 'Nom Exemple',
		prenom: 'Prenom Exemple'}
	]
}

var formation = new Formation('Module JavaScript', 'JavaScript');
console.log("Nom:",formation.nom);
console.log("Langage:",formation.langage);
console.log("Date debut:", formation.dateDebut);
console.log("Date de fin:",formation.dateFin);

function Personne(nom, prenom, age){
	this.nom = nom;
	this.prenom = prenom;
	this.age = age;

}

function Stagiaire(nom, prenom, age, connaissances){
	Personne.call(this, nom, prenom,age);
	this.connaissances = connaissances;
}

Stagiaire.prototype = new Personne();
Stagiaire.prototype.constructor = Stagiaire;

var stagiaires = new Stagiaire('nom', 'prenom', 18, 'javascript');
console.log(stagiaires);
console.log(stagiaires instanceof Personne);