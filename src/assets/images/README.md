Comment ajouter tes propres photos à la galerie (section "Souvenirs") :

1. Dépose tes images dans ce dossier, par exemple :
   photo1.jpg, photo2.jpg, photo3.jpg ...

2. Ouvre src/components/Gallery.tsx et importe-les en haut du fichier :
   import photo1 from "../assets/images/photo1.jpg";
   import photo2 from "../assets/images/photo2.jpg";

3. Ouvre src/config.ts et renseigne le champ "src" de chaque entrée du tableau "gallery" :
   { id: 1, src: photo1, caption: "Légende de ton choix" },

Tant qu'aucune image n'est renseignée, un joli placeholder "📷 Photo" s'affiche automatiquement à sa place.
