import { useState } from "react";
import { motion } from "framer-motion";
import { Gift, PartyPopper } from "lucide-react";
import { config } from "../config";
import { giftConfetti } from "../lib/confetti";
import "./Surprise.css";

type GiftState = "closed" | "shaking" | "open";

export default function Surprise() {
  const [state, setState] = useState<GiftState>("closed");

  const handleOpen = () => {
    if (state !== "closed") return;
    setState("shaking");
    window.setTimeout(() => {
      setState("open");
      giftConfetti();
    }, 650);
  };

  return (
    <section className="section surprise-section">
      <div className="section-inner">
        <p className="section-eyebrow">Chut...</p>
        <h2 className="section-title surprise-title">
          {state === "open" ? (
            <>
              Voilà pour toi <PartyPopper size={26} strokeWidth={2} />
            </>
          ) : (
            "J'ai encore une petite surprise pour toi..."
          )}
        </h2>

        <div className="gift-stage">
          <button
            className={`gift-box ${state}`}
            onClick={handleOpen}
            disabled={state !== "closed"}
            aria-label="Ouvrir le cadeau surprise"
          >
            <GiftIllustration open={state === "open"} />
          </button>

          {state !== "open" && (
            <button className="btn-primary" onClick={handleOpen} disabled={state === "shaking"}>
              {state === "shaking" ? (
                "..."
              ) : (
                <>
                  Ouvrir <Gift size={19} strokeWidth={2} />
                </>
              )}
            </button>
          )}

          {state === "open" && (
            <motion.div
              className="surprise-card"
              initial={{ opacity: 0, y: 30, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p>{config.surpriseMessage}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

function GiftIllustration({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 160 150" className="gift-svg" role="img" aria-hidden="true">
      <ellipse cx="80" cy="138" rx="60" ry="8" fill="#5B3E8C" opacity="0.08" />

      {/* Corps de la boîte */}
      <rect x="30" y="62" width="100" height="70" rx="10" fill="#8B6BC7" />
      <rect x="70" y="62" width="20" height="70" fill="#F0A8C0" />
      <rect x="30" y="90" width="100" height="14" fill="#F0A8C0" opacity="0.85" />

      {/* Couvercle — s'ouvre en rotation quand open=true */}
      <g className={`gift-lid ${open ? "gift-lid-open" : ""}`} style={{ transformOrigin: "30px 62px" }}>
        <rect x="24" y="46" width="112" height="22" rx="8" fill="#E07FA4" />
        <rect x="70" y="46" width="20" height="22" fill="#D9A94E" />
      </g>

      {/* Noeud */}
      <g className={`gift-bow ${open ? "gift-bow-pop" : ""}`}>
        <path d="M80 46 C 60 30, 46 34, 50 48 C 54 56, 72 52, 80 46 Z" fill="#D9A94E" />
        <path d="M80 46 C 100 30, 114 34, 110 48 C 106 56, 88 52, 80 46 Z" fill="#D9A94E" />
        <circle cx="80" cy="46" r="7" fill="#F2DCAA" />
      </g>
    </svg>
  );
}
