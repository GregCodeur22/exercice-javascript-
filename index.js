const friends = [
  { name: "Baptiste", drinks: ["beer", "chocolat"] },
  { name: "janice", drinks: ["tea", "chocolat"] },
  { name: "Loic", drinks: ["beer", "tea"] },
];

// je prépare mon tableau qui vas afficher mon filte
// je boucle sur mon tableau friends
// si un f(gourmand) bois du chocolat
// je l'ajoute dans mon tableau préalablement créer

let result = [];
for (f of friends) {
  if (f.drinks.includes("chocolat")) {
    result.push(f.name);
  }
}
// console.log(result);

//en programmation fonctionnelle

console.log(
  friends.filter((f) => f.drinks.includes("chocolat")).map((f) => f.name)
);
