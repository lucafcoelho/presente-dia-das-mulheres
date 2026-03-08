import { useMemo } from "react";

const ConfettiHearts = () => {
  const confetti = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      duration: `${2 + Math.random() * 2}s`,
      size: `${0.8 + Math.random() * 1.2}rem`,
      emoji: ["❤️", "💕", "💖", "🩷", "💗"][Math.floor(Math.random() * 5)],
    }));
  }, []);

  return (
    <>
      {confetti.map((c) => (
        <span
          key={c.id}
          className="confetti-heart"
          style={{
            "--left": c.left,
            "--delay": c.delay,
            "--duration": c.duration,
            "--size": c.size,
          } as React.CSSProperties}
        >
          {c.emoji}
        </span>
      ))}
    </>
  );
};

export default ConfettiHearts;
