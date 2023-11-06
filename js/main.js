// input text
var inputText = document.createElement("input");
inputText.type = "text";

//input button
var inputButton = document.createElement("input");
inputButton.type = "button";

//input select
var selectOperation = document.createElement("select");
selectOperation.id = "operation";

//option addition
var option1 = document.createElement("option");
option1.value = "addition";
option1.text = "addition";

//option soustraction
var option2 = document.createElement("option");
option2.value = "soustraction";
option2.text = "soustraction";

//option multiplication
var option3 = document.createElement("option");
option3.value = "multiplication";
option3.text = "multiplication";

//option division
var option4 = document.createElement("option");
option4.value = "division";
option4.text = "division";

//option exemple
var optionExemple = document.createElement("option");
optionExemple.text = "choisissez";

/* ajout des option dans dans le select */
selectOperation.appendChild(optionExemple);
selectOperation.appendChild(option1);
selectOperation.appendChild(option2);
selectOperation.appendChild(option3);
selectOperation.appendChild(option4);

/* --------  ---------- */
var inputPremierNombre = document.createElement("input");
inputPremierNombre.type = "text";
inputPremierNombre.id = "nombre1";

/* ------------ --------- */
var inputDeuxiemeNombre = document.createElement("input");
inputDeuxiemeNombre.type = "text";
inputDeuxiemeNombre.id = "nombre2";

//boutton de validation
var calculatriceBtn = document.createElement("input");
calculatriceBtn.type = "button";
calculatriceBtn.value = "calculer";
calculatriceBtn.id = "btn";


//insertion dans le html
document.getElementById("selectOperation").appendChild(selectOperation);
document.getElementById("premierNombre").appendChild(inputPremierNombre);
document.getElementById("deuxiemeNombre").appendChild(inputDeuxiemeNombre);
document.getElementById("calculatrice-form").appendChild(calculatriceBtn);



/* methodes de calcule */
var btn = document.getElementById("btn");

var resultatZone = document.getElementById("zone-de-resultat");

var message = document.getElementsByClassName("message");

//recuperation de l'operation
let operation = document.getElementById("operation");

//recuperation des nombres
var premierNombre = document.getElementById("nombre1");
var deuxiemeNombre = document.getElementById("nombre2");

//formilaire
let formulaire = document.getElementById("calculatrice-form");

function calcule(operationV, nombre1V, nombre2V) {

    switch (operationV) {
        case "addition":
            var resultatCalcul = nombre1V + nombre2V;
            resultatZone.classList.add("display-flex");
            resultat.innerHTML = nombre1V + ' + ' + nombre2V + ' = ' + resultatCalcul;
            break;
        case "soustraction":
            var resultatCalcul = nombre1V - nombre2V;
            resultatZone.classList.add("display-flex");
            resultat.innerHTML = nombre1V + ' - ' + nombre2V + ' = ' + resultatCalcul;
            break;
        case "multiplication":
            var resultatCalcul = nombre1V * nombre2V;
            resultatZone.classList.add("display-flex");
            resultat.innerHTML = nombre1V + ' x ' + nombre2V + ' = ' + resultatCalcul;
            break;
        case "division":
            var resultatCalcul = nombre1V / nombre2V;
            var reste = nombre1V % nombre2V;
            resultatZone.classList.add("display-flex");
            resultat.innerHTML = nombre1V + ' / ' + nombre2V + ' = ' + resultatCalcul + ' reste: ' + reste;
            break;

        default:
            alert("erreur de calcul");
            break;
    }

}

btn.addEventListener("click", () => {

    var operationV = operation.value;
    var nombre1V = parseFloat(premierNombre.value);
    var nombre2V = parseFloat(deuxiemeNombre.value);

    if (operationV != "addition" && operationV != "soustraction" && operationV != "multiplication" && operationV != "division") {
        alert("veuillez choisir une operation de calcul");
        return;
    }


    if (isNaN(nombre1V) || isNaN(nombre2V) || nombre1V === "" || nombre2V === "") {
        alert("Veuillez saisir des nombres valides.");
        return;
    }

    calcule(operationV, nombre1V, nombre2V);

    formulaire.reset();

}
);

/* //input email
var inputEmail = document.createElement("input");
inputEmail.type = "email";

//input numero
var inputNumber = document.createComment("number");
inputNumber.type = "number"; */


    // Créer un élément d'entrée de type bouton

/*   inputButton.value = "Cliquez-moi"; // Définir la valeur du bouton
inputButton.id = "monInputButton"; // Définir un ID pour l'élément

// Ajouter les éléments créés à la page (par exemple, au corps du document)
document.body.appendChild(inputText); // Ajouter l'élément de saisie de texte à la page
document.body.appendChild(inputButton); // Ajouter le bouton à la page */
