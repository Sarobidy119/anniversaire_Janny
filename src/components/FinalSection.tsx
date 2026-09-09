import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cake } from "lucide-react";
import { config } from "../config";
import { burstConfetti } from "../lib/confetti";
import FloatingField from "./FloatingField";
import "./FinalSection.css";

export default function FinalSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!inView) return;
    // léger décalage pour laisser l'entrée se jouer d'abord
    const timer = window.setTimeout(burstConfetti, 250);
    return () => window.clearTimeout(timer);
  }, [inView]);

  return (
    <section className="section final-section" ref={ref}>
      <FloatingField variant="dots" count={16} colors={["#F0A8C0", "#D9A94E", "#FFFFFF"]} />
      <div className="section-inner">
        <motion.div
          className="final-content"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="final-kicker">Encore une fois...</p>
          <h2 className="final-title">
            <Cake size={30} strokeWidth={2} className="final-title-icon" />
            Joyeux anniversaire {config.friendName} !
            <Cake size={30} strokeWidth={2} className="final-title-icon" />
          </h2>
          <p className="final-tagline">{config.finalTagline}</p>
          <p className="final-fullname">{config.fullName}</p>
          <p className="final-fullname">{config.signature}</p>
        </motion.div>
      </div>
    </section>
  );
}
