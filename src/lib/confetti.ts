import confetti from "canvas-confetti";

/** Palette de confettis assortie au design (rose, violet, doré — jamais rouge romantique) */
const PALETTE = ["#F0A8C0", "#E07FA4", "#8B6BC7", "#D9A94E", "#F2DCAA", "#FFFFFF"];

/** Une belle grande salve, utilisée à l'ouverture de la page et à la fin */
export function burstConfetti() {
  const duration = 1600;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 65,
      origin: { x: 0, y: 0.7 },
      colors: PALETTE,
      scalar: 1.05,
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 65,
      origin: { x: 1, y: 0.7 },
      colors: PALETTE,
      scalar: 1.05,
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();

  confetti({
    particleCount: 90,
    spread: 100,
    origin: { y: 0.5 },
    colors: PALETTE,
    startVelocity: 45,
    scalar: 1.1,
  });
}

/** Une salve plus centrée et généreuse, pour l'ouverture du cadeau */
export function giftConfetti() {
  confetti({
    particleCount: 140,
    spread: 90,
    startVelocity: 38,
    origin: { y: 0.55 },
    colors: PALETTE,
    scalar: 1.1,
  });
  confetti({
    particleCount: 60,
    spread: 130,
    startVelocity: 25,
    origin: { y: 0.5 },
    colors: PALETTE,
    scalar: 0.8,
    ticks: 250,
  });
}
