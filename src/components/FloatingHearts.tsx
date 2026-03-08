import { useMemo } from "react";

const FloatingHearts = () => {
  const hearts = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${8 + Math.random() * 10}s`,
      size: `${0.8 + Math.random() * 1.5}rem`,
      emoji: ["❤️", "💕", "💖", "💗", "🩷"][Math.floor(Math.random() * 5)],
    }));
  }, []);

  const sparkles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${2 + Math.random() * 3}s`,
    }));
  }, []);

  return (
    <>
      {hearts.map((h) => (
        <span
          key={h.id}
          className="floating-heart"
          style={{
            "--left": h.left,
            "--delay": h.delay,
            "--duration": h.duration,
            "--size": h.size,
          } as React.CSSProperties}
        >
          {h.emoji}
        </span>
      ))}
      {sparkles.map((s) => (
        <span
          key={`s-${s.id}`}
          className="sparkle-particle"
          style={{
            "--left": s.left,
            "--top": s.top,
            "--delay": s.delay,
            "--duration": s.duration,
          } as React.CSSProperties}
        />
      ))}
    </>
  );
};

export default FloatingHearts;
