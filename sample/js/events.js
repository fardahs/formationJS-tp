var texte = document.getElementById('texte');
var textRed = document.getElementsByClassName('text-red');

var app = {
    init: function () {
        console.log('Element p',texte);

    }
};
app.init();

texte.addEventListener('mouseover',function(e){
        console.log(e);
        var largeur = window.innerWidth/2;
        if(largeur > e.clientX ){
            console.log('GAUCHE');
            texte.classList.remove('text-red');
        }else{
            console.log('DROITE');
            texte.classList.add('text-red');
        }

});

texte.addEventListener('mouseout',function(e){
        console.log(e);
        addElement();
});
