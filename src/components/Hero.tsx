import { motion } from "framer-motion";
import { PartyPopper, Cake, Gift } from "lucide-react";
import { config, getAge } from "../config";
import { burstConfetti } from "../lib/confetti";
import FloatingField from "./FloatingField";
import PhotoFrame from "./PhotoFrame";
import "./Hero.css";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.22, delayChildren: 0.3 },
  },
};

const rise = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const handleDiscover = () => {
    burstConfetti();
    document.getElementById("message")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <FloatingField variant="dots" count={18} />
      <FloatingField variant="stars" count={14} colors={["#F2DCAA", "#FFFFFF", "#F0A8C0"]} />

      <motion.div className="hero-inner" variants={container} initial="hidden" animate="show">
        <motion.p className="hero-kicker" variants={rise}>
          <PartyPopper size={18} strokeWidth={2} />
          C'est le grand jour
          <Cake size={18} strokeWidth={2} />
        </motion.p>

        <motion.h1 className="hero-title" variants={rise}>
          Joyeux anniversaire !
        </motion.h1>

        <motion.div className="hero-name-wrap" variants={rise}>
          <span className="hero-name">{config.friendName}</span>
          <span className="hero-age" aria-label={`${getAge()} ans`}>
            {getAge()} ans
          </span>
        </motion.div>

        <motion.div variants={rise}>
          <PhotoFrame />
        </motion.div>

        <motion.p className="hero-tagline" variants={rise}>
          {config.heroTagline}
        </motion.p>

        <motion.div variants={rise}>
          <button className="btn-primary hero-cta" onClick={handleDiscover}>
            <Gift size={19} strokeWidth={2} />
            Découvrir la surprise
          </button>
        </motion.div>

        <motion.div
          className="hero-cake"
          variants={rise}
          aria-hidden="true"
        >
          <CakeIllustration />
        </motion.div>
      </motion.div>

      <div className="hero-fade" />
    </section>
  );
}

function CakeIllustration() {
  return (
    <svg viewBox="0 0 220 150" className="cake-svg" role="img" aria-label="Illustration d'un gâteau d'anniversaire">
      <ellipse cx="110" cy="138" rx="92" ry="10" fill="#5B3E8C" opacity="0.08" />

      {/* Socle */}
      <rect x="30" y="96" width="160" height="34" rx="10" fill="#F0A8C0" />
      <rect x="30" y="96" width="160" height="10" rx="5" fill="#F7C3D5" />

      {/* Étage du milieu */}
      <rect x="48" y="66" width="124" height="34" rx="10" fill="#8B6BC7" />
      <rect x="48" y="66" width="124" height="10" rx="5" fill="#AB90DA" />

      {/* Étage du haut */}
      <rect x="68" y="40" width="84" height="30" rx="10" fill="#D9A94E" />
      <rect x="68" y="40" width="84" height="9" rx="4.5" fill="#F2DCAA" />

      {/* Nappage / gouttes */}
      <path d="M48 66 q6 14 12 0 q6 14 12 0 q6 14 12 0 q6 14 12 0 q6 14 12 0 q6 14 12 0 q6 14 12 0 q6 14 12 0"
        fill="none" stroke="#FBE4EC" strokeWidth="4" strokeLinecap="round" opacity="0.9" />

      {/* Bougies */}
      {[92, 110, 128].map((x, i) => (
        <g key={x}>
          <rect x={x - 2} y={18} width="4" height="22" rx="2" fill="#FFF" />
          <g className="flame" style={{ transformOrigin: `${x}px 14px`, animationDelay: `${i * 0.3}s` }}>
            <path d={`M${x} 4 C ${x + 5} 10, ${x + 4} 16, ${x} 18 C ${x - 4} 16, ${x - 5} 10, ${x} 4 Z`} fill="#F2A93B" />
          </g>
        </g>
      ))}
    </svg>
  );
}
