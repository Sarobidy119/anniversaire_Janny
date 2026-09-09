import { motion } from "framer-motion";
import { Quote, Heart } from "lucide-react";
import { config } from "../config";
import "./BirthdayMessage.css";

export default function BirthdayMessage() {
  return (
    <section className="section message-section" id="message">
      <div className="section-inner">
        <motion.div
          className="message-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Quote className="message-mark" size={34} strokeWidth={1.75} aria-hidden="true" />
          {config.mainMessage.split("\n\n").map((paragraph, i) => (
            <p key={i} className="message-paragraph">
              {paragraph}
            </p>
          ))}
          <span className="message-signoff">
            Avec toute mon amitié
            <Heart size={16} strokeWidth={2} fill="currentColor" />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
