import { useMemo } from "react";

interface FloatingFieldProps {
  /** "dots" pour des particules douces, "stars" pour un ciel étoilé */
  variant?: "dots" | "stars";
  count?: number;
  colors?: string[];
}

/**
 * Champ de particules décoratif en pur CSS (léger, pas de canvas nécessaire).
 * Purement décoratif : aria-hidden pour ne pas gêner les lecteurs d'écran.
 */
export default function FloatingField({
  variant = "dots",
  count = 16,
  colors = ["#F0A8C0", "#D9A94E", "#8B6BC7"],
}: FloatingFieldProps) {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: variant === "stars" ? 2 + Math.random() * 3 : 4 + Math.random() * 10,
        delay: Math.random() * 8,
        duration: variant === "stars" ? 2 + Math.random() * 3 : 9 + Math.random() * 10,
        color: colors[i % colors.length],
        drift: `${(Math.random() - 0.5) * 60}px`,
        top: variant === "stars" ? Math.random() * 100 : undefined,
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [count, variant]
  );

  return (
    <div className="floating-field" aria-hidden="true">
      {items.map((item) =>
        variant === "stars" ? (
          <span
            key={item.id}
            className="star"
            style={{
              left: `${item.left}%`,
              top: `${item.top}%`,
              width: item.size,
              height: item.size,
              background: item.color,
              borderRadius: "50%",
              boxShadow: `0 0 ${item.size * 2}px ${item.color}`,
              animationDelay: `${item.delay}s`,
              animationDuration: `${item.duration}s`,
            }}
          />
        ) : (
          <span
            key={item.id}
            className="floating-dot"
            style={{
              left: `${item.left}%`,
              width: item.size,
              height: item.size,
              background: item.color,
              bottom: "-5%",
              animationDelay: `${item.delay}s`,
              animationDuration: `${item.duration}s`,
              ["--drift" as string]: item.drift,
            }}
          />
        )
      )}
    </div>
  );
}
