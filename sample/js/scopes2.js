console.log('Nom: :', nom);

function sayHello () {
    var nom = 'Niko 2';
    console.log('sayHello fichier js 2', nom);
}
nom = 'Nom global à changer';
sayHello();
console.log('Nom :', nom);