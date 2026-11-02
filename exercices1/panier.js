let prix = Number(prompt("Prix de l'article :"));
let quantite = Number(prompt("Quantité :"));

let total = prix * quantite;

if (total > 50) {
    total = total * 0.9; // réduction de 10%
}

alert(`Total à payer : ${total.toFixed(2)} €`);