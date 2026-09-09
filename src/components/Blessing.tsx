import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";
import { config } from "../config";
import FloatingField from "./FloatingField";
import "./Blessing.css";

export default function Blessing() {
  return (
    <section className="section blessing-section">
      <FloatingField variant="stars" count={26} colors={["#F2DCAA", "#FFFFFF", "#D8C8F0"]} />
      <div className="section-inner">
        <motion.div
          className="blessing-content"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <Sparkle className="blessing-glyph" size={22} strokeWidth={1.75} aria-hidden="true" />
          <p className="blessing-text">{config.blessingMessage}</p>
          <Sparkle className="blessing-glyph" size={22} strokeWidth={1.75} aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}
