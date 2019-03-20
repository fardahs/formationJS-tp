(function (window){
    console.log("Auto-invoquée");
    var nom = 'farda';
    var prenom = 'HOUMADI';

    var contactService = {};

    contactService.listContact = function(liste){
        liste.forEach(function(contact){
            console.log(contact);
        });

        return liste;
    };

    window.contactService = contactService;

})(window);

var contacts = [{nom:'jean', prenom:'pierre'}, {nom:'luc', prenom:'marie'}];

window.contactService.listContact(contacts);
