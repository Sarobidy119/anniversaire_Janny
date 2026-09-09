import { motion } from "framer-motion";
import { Heart, Sparkles, HandHeart, Flower2, Flame, Target, Smile, Star, type LucideIcon } from "lucide-react";
import { config } from "../config";
import "./Wishes.css";

const iconMap: Record<string, LucideIcon> = {
  Heart,
  Sparkles,
  HandHeart,
  Flower2,
  Flame,
  Target,
  Smile,
  Star,
};

const tones = ["tone-rose", "tone-violet", "tone-gold"];
// petite rotation alternée pour un rendu "nuage" plutôt qu'une grille uniforme
const tilts = [-4, 3, -2, 5, -5, 2, -3, 4];

export default function Wishes() {
  return (
    <section className="section wishes-section">
      <div className="section-inner">
        <p className="section-eyebrow">Pour toi</p>
        <h2 className="section-title">Mes souhaits pour toi</h2>
        <p className="section-lede">
          Quelques mots que je pose ici, comme autant de petites bougies allumées pour ton année à venir.
        </p>

        <div className="wishes-cloud">
          {config.wishes.map((wish, i) => {
            const Icon = iconMap[wish.icon] ?? Star;
            return (
              <motion.div
                key={wish.label}
                className={`wish-pebble ${tones[i % tones.length]}`}
                style={{ ["--tilt" as string]: `${tilts[i % tilts.length]}deg` }}
                initial={{ opacity: 0, scale: 0.85, y: 16 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <Icon className="wish-icon" size={17} strokeWidth={2} />
                <span className="wish-label">{wish.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
