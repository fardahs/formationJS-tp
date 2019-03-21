var url;
// Ici, la requête sera émise de façon asynchrone.
const req = new XMLHttpRequest();
req.onreadystatechange = function(event) {
// XMLHttpRequest.DONE === 4
if (this.readyState === XMLHttpRequest.DONE) {
if (this.status === 200) {
    console.log("Réponse reçu: %s", this.responseText);

    url= JSON.parse(this.responseText)[0];
    var div = document.getElementById('conteneur');
    var image = document.getElementById('avatar');

    image.setAttribute('src',url.image_url);

    var p = document.createElement("p");
    div.appendChild(p);
    p.innerHTML = url.name;

    image.addEventListener('click', changePage);


} else {
    console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
}
}
};
req.open('GET', 'https://api.punkapi.com/v2/beers/1', true);
req.send(null);

function changePage(e){
    console.log(e);
    // Changer de page
// Récupération d'un paramètre dans une URL
    var urlLocation = new URL(window.location);
    var name = urlLocation.searchParams.get('name');

}