import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Camera, X } from "lucide-react";
import { config } from "../config";
import "./Gallery.css";

// tailles variées pour un mur de photos plus vivant qu'une grille uniforme
const sizeClasses = ["tile-tall", "tile-wide", "tile-normal", "tile-normal", "tile-wide", "tile-tall"];

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex !== null ? config.gallery[openIndex] : null;

  const close = () => setOpenIndex(null);

  return (
    <section className="section gallery-section">
      <div className="section-inner">
        <p className="section-eyebrow">Souvenirs</p>
        <h2 className="section-title">Des souvenirs qui nous ressemblent</h2>
        <p className="section-lede">
          Des sourires, des réussites et des instants de complicité qui racontent une belle histoire, image
          après image.
        </p>

        <div className="gallery-grid">
          {config.gallery.map((photo, i) => (
            <motion.button
              key={photo.id}
              className={`gallery-tile ${sizeClasses[i % sizeClasses.length]}`}
              onClick={() => setOpenIndex(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
              aria-label={`Ouvrir la photo ${photo.id} : ${photo.caption}`}
            >
              {photo.src ? (
                <img src={photo.src} alt={photo.caption} loading="lazy" />
              ) : (
                <div className="gallery-placeholder">
                  <Camera className="gallery-placeholder-icon" size={26} strokeWidth={1.75} />
                  <span className="gallery-placeholder-text">Photo {photo.id}</span>
                </div>
              )}
              <span className="gallery-tile-veil" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="gallery-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              className="gallery-modal"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="gallery-modal-close" onClick={close} aria-label="Fermer">
                <X size={18} strokeWidth={2} />
              </button>
              {active.src ? (
                <img src={active.src} alt={active.caption} />
              ) : (
                <div className="gallery-modal-placeholder">
                  <Camera className="gallery-placeholder-icon" size={38} strokeWidth={1.5} />
                  <p>Ajoute ta photo ici</p>
                </div>
              )}
              <p className="gallery-modal-caption">{active.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
