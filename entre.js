// Entrée : récupérerer une valeur fournie par un utilisateur ou un dispositif
// Une seule instuction : prompt

// Affiche une boîte de dialogue avec un message et un champ de saisie
alert("Bonjour !"); 
let valeur = prompt("Entrez une valeur :");

// Affiche une boîte de dialogue avec un message et un champ de saisie
prompt("Entrez une valeur :"); 

// Récupérer la valeur saisie par l'utilisateur et l'afficher dans la console
let nomValeur = prompt("Entrez une valeur :");
console.log("La valeur saisie est : " + nomValeur);

//Prompt retourne toujours une valeur de type string, même si l'utilisateur saisit un nombre.
let nombre = Number(prompt("Entrez un nombre :"));
console.log(typeof nombre); // Affiche "number" dans la console

let nombre2 = parseInt(prompt("Entrez un nombre entier :"));
console.log(typeof nombre2); // Affiche "number" dans la console        
