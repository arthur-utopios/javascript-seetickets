let products = [
  {
    nom: "écouteurs",
    prix: 100,
    promo: "",
  },
  {
    nom: "radio",
    prix: 30,
    promo: "",
  },
];

// Applique une promotion au produit
function applyPromotion(promo, product) {
  product.prix *= 1 - promo / 100;
  product.promo = `${promo}%`;
}

// Modifie le tableau de produits
// Les objets sont passés par référence et non pas par copie
function addPromotion(products) {
  products.forEach((product) => {
    product.prix >= 100
      ? applyPromotion(10, product)
      : applyPromotion(7, product);
  });
}

addPromotion(products);

console.table(products);
