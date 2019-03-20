var monTitre = document.getElementsByTagName('h1');
var textRed = document.getElementsByClassName('text-red');
var title1 = document.getElementById('title-1');



var app = {
    init: function () {
        console.log('Document title: ', document.title);
        document.title = 'DOM-document';
        console.log('Document title: ', document.title);

        console.log('Element h1',monTitre);
        console.log('Element text-red', textRed);
        console.log('Element title',title1);

    }
};
app.init();


title1.addEventListener('click', function(e){
    console.log(e);
    alert('Hello title-1');
})


