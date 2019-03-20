var formationJS = {
	nom: 'Module JavaScript',
	langage: 'JavaScript',
	dateDebut: '01/09/2017',
	dateFin: '05/09/2017',
	stagiaires : [{
		nom: 'Nom Exemple',
		prenom: 'Prenom Exemple'
	}
	],
	description: function () {
		return this.nom+' '+ this.dateDebut+' '+this.dateFin;
	}
}

console.log("Nom:", formationJS.nom);
console.log("Langage:", formationJS.langage);
console.log("Date de début:", formationJS.dateDebut);
console.log("Date de fin:", formationJS.dateFin);

formationJS.formateur = {nom:'Hodicq', prenom:'Nicolas'};
console.log("Nom formateur:", formationJS.formateur.nom);

console.log(formationJS.description());

delete formationJS.stagiaires;
console.log(formationJS);