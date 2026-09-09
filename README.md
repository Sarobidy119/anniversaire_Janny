# 🎂 Joyeux anniversaire, Janny !

Une carte d'anniversaire numérique, interactive et animée, faite pour Janny Ralainirina.
Construite avec React + TypeScript + Vite.

## 🚀 Démarrer le projet

```bash
npm install
npm run dev
```

Puis ouvre l'adresse affichée dans le terminal (en général http://localhost:5173).

Pour générer une version prête à mettre en ligne :

```bash
npm run build
```

Le résultat sera dans le dossier `dist/`, que tu peux déposer sur n'importe quel hébergement statique
(Netlify, Vercel, GitHub Pages, etc.).

## 🎨 Personnaliser le site

Tout se modifie depuis **un seul fichier : `src/config.ts`**.
Tu peux y changer :

- le prénom affiché (`friendName`)
- l'année de naissance, utilisée pour calculer l'âge automatiquement (`birthYear`)
- le message principal, le message surprise et la bénédiction
- la liste des souhaits (icône + texte)
- les légendes de la galerie photo
- le chemin vers le fichier audio

### 📸 Ajouter tes propres photos

Regarde `src/assets/images/README.md` pour la marche à suivre (3 étapes simples).
Tant que tu n'as pas ajouté de photos, de jolis placeholders "📷" s'affichent à leur place.

### 🎵 Ajouter la musique d'anniversaire

Dépose un fichier nommé exactement `birthday.mp3` dans `src/assets/audio/`.
Le bouton flottant en bas à droite du site permet de jouer / mettre en pause — la musique ne démarre
jamais automatiquement, elle attend un clic.

## 📁 Structure du projet

```
src/
├── components/
│   ├── Hero.tsx              → section d'accueil
│   ├── BirthdayMessage.tsx   → carte du message principal
│   ├── Wishes.tsx            → nuage des souhaits
│   ├── Gallery.tsx           → galerie photo + modal
│   ├── Surprise.tsx          → cadeau interactif
│   ├── Blessing.tsx          → section bénédiction
│   ├── MusicPlayer.tsx       → bouton musique flottant
│   ├── FinalSection.tsx      → section de clôture
│   └── FloatingField.tsx     → particules / étoiles décoratives
├── lib/
│   └── confetti.ts           → animations de confettis
├── assets/
│   ├── images/                → tes photos vont ici
│   └── audio/                 → birthday.mp3 va ici
├── config.ts                  → 🔧 toutes les infos à personnaliser
├── App.tsx
├── main.tsx
└── index.css                  → variables de style, dégradés, animations globales
```

## 🛠️ Technologies

React 18, TypeScript, Vite, `framer-motion` (animations), `canvas-confetti` (confettis).
Aucun autre framework CSS : les styles sont écrits à la main, section par section, pour rester
simples à modifier.
