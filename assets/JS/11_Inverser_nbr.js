function inverserNombre(nombre) {
    // Convertir le nombre en chaîne, inverser la chaîne, puis reconvertir en nombre
    let nombreInverse = parseInt(nombre.toString().split('').reverse().join(''));
    return nombreInverse;
}

// Exemple d'utilisation
let codeSecret = 1234;
let codeInverse = inverserNombre(codeSecret);
console.log("Le code secret inversé est : " + codeInverse);
