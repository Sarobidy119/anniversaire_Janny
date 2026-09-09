import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PartyPopper } from "lucide-react";
import FloatingField from "./FloatingField";
import { giftConfetti } from "../lib/confetti";
import "./IntroLoader.css";

type Phase = "3" | "2" | "1" | "boom" | "reveal" | "done";

interface IntroLoaderProps {
  onComplete: () => void;
}

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [phase, setPhase] = useState<Phase>("3");

  const reducedMotion = useMemo(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );
  const stepMs = reducedMotion ? 260 : 850;
  const revealMs = reducedMotion ? 300 : 1100;

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";

    const timers: number[] = [];
    timers.push(window.setTimeout(() => setPhase("2"), stepMs));
    timers.push(window.setTimeout(() => setPhase("1"), stepMs * 2));
    timers.push(
      window.setTimeout(() => {
        setPhase("boom");
        giftConfetti();
      }, stepMs * 3)
    );
    timers.push(window.setTimeout(() => setPhase("reveal"), stepMs * 4));

    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRevealComplete = () => {
    if (phase !== "reveal") return;
    document.documentElement.style.overflow = "";
    setPhase("done");
    onComplete();
  };

  if (phase === "done") return null;

  const isReveal = phase === "reveal";

  return (
    <motion.div
      className="intro-overlay"
      initial={{ clipPath: "circle(150% at 50% 50%)" }}
      animate={{ clipPath: isReveal ? "circle(0% at 50% 50%)" : "circle(150% at 50% 50%)" }}
      transition={{ duration: revealMs / 1000, ease: [0.65, 0, 0.35, 1] }}
      onAnimationComplete={handleRevealComplete}
    >
      <FloatingField variant="stars" count={24} colors={["#F2DCAA", "#FFFFFF", "#E8A0BF"]} />

      <div className="intro-content">
        <AnimatePresence mode="wait">
          {(phase === "3" || phase === "2" || phase === "1") && (
            <motion.span
              key={phase}
              className="intro-count"
              initial={{ opacity: 0, scale: 0.4, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 1.5 }}
              transition={{ duration: reducedMotion ? 0.15 : 0.38, ease: [0.16, 1, 0.3, 1] }}
            >
              {phase}
            </motion.span>
          )}
          {phase === "boom" && (
            <motion.div
              key="boom"
              className="intro-boom"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <PartyPopper className="intro-boom-icon" size={54} strokeWidth={1.75} />
              <span className="intro-boom-text">Surprise !</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {phase === "boom" && <span className="intro-flash" />}
    </motion.div>
  );
}
