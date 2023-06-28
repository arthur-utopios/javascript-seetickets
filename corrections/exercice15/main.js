let magasin = {
  // Tableau de produits
  produits: [],

  // Ajouter un produit au tableau
  ajouterProduit(produit) {
    this.produits.push(produit);
  },

  // Parcourir les produits et afficher ceux dont la quantité est supérieure à 0
  afficherProduits() {
    this.produits.forEach((produit) => {
      if (produit.quantite > 0) console.log(produit);
    });
  },
};

// Fonction constructeur pour créer des objets Produit
function Produit(nom, prix, quantite) {
  this.nom = nom;
  this.prix = prix;
  this.quantite = quantite;
}

magasin.ajouterProduit(new Produit("Beurre", 5, 100));
magasin.ajouterProduit(new Produit("Chips", 2.5, 300));
magasin.ajouterProduit(new Produit("Farine", 5, 0));
magasin.ajouterProduit(new Produit("Tomates", 2, 0));

magasin.ajouterProduit({nom: "beurre", prix: 1.50, quantite: 5});
magasin.ajouterProduit({nom: "beurre", prix: 1.50, quantite: 5, couleur: "rouge"});

magasin.afficherProduits();