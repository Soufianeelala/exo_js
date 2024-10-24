

let nombre = 98765;
let somme = 0;

// Tant que le nombre n'est pas 0
while (nombre > 0) {
    // Ajouter le dernier chiffre à la somme
    somme += nombre % 10;
    // Retirer le dernier chiffre
    nombre = Math.floor(nombre / 10);
}

console.log("La somme des chiffres est : " + somme);
