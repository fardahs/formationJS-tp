var texte = document.getElementById('texte');
var textRed = document.getElementsByClassName('text-red');
var titre = document.getElementById('title-1');
var bouton = document.getElementById('btn');
var p = document.getElementsByTagName('p');

var app = {
    init: function () {
        console.log('Element p',texte);
    }
};
app.init();

function onMouseOver(e){
console.log(e);
     var largeur = window.innerWidth/2;
     if(largeur > e.clientX ){
        console.log('GAUCHE');
        e.target.classList.remove('text-red');
       }else{
        console.log('DROITE');
        e.target.classList.add('text-red');
      }

}

function onMouseOut(e){
     console.log(e);
     e.target.classList.add('text-red');
}

function supprimer(){
    for(var i=p.length - 1; i>=0; i--){
        document.body.removeChild(p[i]);
        console.log(i);
    }

}

texte.addEventListener('mouseover', onMouseOver);

texte.addEventListener('mouseout',onMouseOut);

titre.addEventListener('click', function(e){
    console.log(e);
    var p = document.createElement("p");
    document.body.appendChild(p);
    p.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    p.addEventListener('mouseover',onMouseOver);
    p.addEventListener('mouseout', onMouseOut);

});

bouton.addEventListener('click', supprimer);


