/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme


console.log("bienvenue dans la liste des contacts");


var contacts = [];
contacts[0] = {
    nom: "Lévisse",
    prenom: "Carole"
}
contacts[1] = {
    nom: "Nelsonne",
    prenom: "Mélodie"
};

var i = 1;
do {
    var choix = prompt("Pour afficher les contacts tapez 1, " + "\n" +
        "pour ajouter un contact tapez 2" + "\n" +
        "pour quiter tapez 0");

    if (choix === "0" || choix === null) {
        i = 0;
    } else if (choix === "1") {
        for (a = 0; a < contacts.length; a++) {
            console.log("nom : " + contacts[a].nom);
            console.log("prenom : " + contacts[a].prenom);
            console.log("")
        }
    }
    else if (choix === "2") {

        var newcontacts = {};

        var ajout = prompt("Entrer le nom");
        newcontacts.nom = ajout;
        var ajout2 = prompt("Entrer le prénom");
        newcontacts.prenom = ajout2;
        contacts.push(newcontacts);
    }
    else alert("entrer un choix valide");

} while (i != 0)
//console.log(contacts)

