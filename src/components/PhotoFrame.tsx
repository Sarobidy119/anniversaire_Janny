import { Camera, Sparkle } from "lucide-react";
import { config } from "../config";
import "./PhotoFrame.css";

// Pour afficher ta propre photo ici :
// 1. Dépose ton image dans src/assets/images/ (ex: janny.jpg)
// 2. Importe-la en haut de ce fichier : import heroPhoto from "../assets/images/janny.jpg";
// 3. Remplace la ligne ci-dessous par : const photoSrc = heroPhoto;
const photoSrc = config.heroPhotoSrc;

export default function PhotoFrame() {
  return (
    <div className="photo-frame-wrap" aria-hidden={photoSrc ? undefined : "true"}>
      <span className="photo-glow" />
      <span className="photo-ring" />

      <div className="photo-inner">
        {photoSrc ? (
          <img src={photoSrc} alt={`Photo de ${config.friendName}`} />
        ) : (
          <div className="photo-placeholder">
            <Camera size={30} strokeWidth={1.5} />
            <span className="photo-placeholder-text">Ta photo ici</span>
          </div>
        )}
      </div>

      <Sparkle className="sparkle sparkle-1" size={18} strokeWidth={1.75} />
      <Sparkle className="sparkle sparkle-2" size={14} strokeWidth={1.75} />
      <Sparkle className="sparkle sparkle-3" size={11} strokeWidth={1.75} />
    </div>
  );
}
