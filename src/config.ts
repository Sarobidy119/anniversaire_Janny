import photo1 from "./assets/images/1.jpeg";
import photo2 from "./assets/images/2.jpeg";
import photo3 from "./assets/images/3.jpeg";
import photo4 from "./assets/images/4.jpeg";
import photo5 from "./assets/images/5.jpeg";
import photo6 from "./assets/images/6$.jpeg";
import accueilPhoto from "./assets/images/Accueil.jpeg";

/**
 * CONFIGURATION — modifie tout ici, un seul endroit suffit.
 * ---------------------------------------------------------
 * Change le prénom, l'année de naissance, les messages, les souhaits,
 * les photos et la musique directement dans ce fichier.
 */

export const config = {
  // Le prénom qui s'affiche partout sur le site
  friendName: "Janny",

  // Nom complet, utilisé une seule fois, en petit, dans la section finale
  fullName: "Janny Ralainirina",

  // Année de naissance : l'âge est calculé automatiquement chaque année
  birthYear: 2001,

  // Petite phrase sous le titre principal
  heroTagline:
    "Aujourd'hui est une journée spéciale, alors profitons-en pour célébrer une personne spéciale !",

  // Message principal de la carte (section 2)
  mainMessage: `En ce jour spécial, je te souhaite énormément de bonheur, de réussite et de beaux moments. Que cette nouvelle année de ta vie t'apporte de nouvelles opportunités, de belles rencontres, beaucoup de sourires et la réalisation de tes projets.

Continue à avancer avec ta bonne humeur et ton énergie. Profite pleinement de cette journée qui est la tienne !`,

  // Message caché dans le cadeau surprise (section 5)
  surpriseMessage:
    "Que cette nouvelle année soit remplie de belles aventures, de réussites, de bonheur et de moments inoubliables. Profite de chaque instant et continue de donner le meilleur de toi-même !",

  // Phrase de bénédiction (section 6)
  blessingMessage:
    "Que Dieu te protège, te guide dans chacun de tes projets, t'accorde la santé, la paix, la réussite et beaucoup de bonheur. Que cette nouvelle année de ta vie soit remplie de belles bénédictions et de nouvelles opportunités.",

  // Phrase de la section finale
  finalTagline: "Que cette nouvelle année de ta vie soit encore plus belle que la précédente.",

  // Signature
  signature: "De la part de Sarobidy et Harena",

  // Liste des souhaits (icône lucide-react + libellé), section 3
  // Les noms d'icônes correspondent aux composants importés dans Wishes.tsx
  wishes: [
    { icon: "Heart", label: "Bonheur" },
    { icon: "Sparkles", label: "Réussite" },
    { icon: "HandHeart", label: "Bénédictions" },
    { icon: "Flower2", label: "Paix" },
    { icon: "Flame", label: "Courage" },
    { icon: "Target", label: "Réalisation de tes projets" },
    { icon: "Smile", label: "Beaucoup de sourires" },
    { icon: "Star", label: "De belles opportunités" },
  ],

  // Galerie de souvenirs (section 4)
  // Remplace "src" par le chemin de tes propres photos, par ex. "/src/assets/images/photo1.jpg"
  // et importe-les en haut de Gallery.tsx (voir le commentaire dans ce fichier).
  gallery: [
    { id: 1, src: photo1, caption: "Un beau souvenir" },
    { id: 2, src: photo2, caption: "Un beau souvenir" },
    { id: 3, src: photo3, caption: "Un beau souvenir" },
    { id: 4, src: photo4, caption: "Un beau souvenir" },
    { id: 5, src: photo5, caption: "Un beau souvenir" },
    { id: 6, src: photo6, caption: "Un beau souvenir" },
  ],

  // Vidéo YouTube utilisée comme musique : elle démarre uniquement après un clic sur Play.
  musicSrc: "https://youtu.be/yx_RJJh9qtM",

  // Photo mise en avant sur la page d'accueil (portrait rond dans le Hero)
  // Remplace "" par le chemin de ta photo, par ex. importe-la dans Hero.tsx :
  // import heroPhoto from "../assets/images/janny.jpg";
  // puis mets heroPhotoSrc: heroPhoto ci-dessous.
  heroPhotoSrc: accueilPhoto,
};

export const getAge = () => {
  const now = new Date();
  return now.getFullYear() - config.birthYear;
};
