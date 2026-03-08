interface ResultSectionProps {
  score: number;
  total: number;
  onOpenLetter: () => void;
}

const ResultSection = ({ score, total, onOpenLetter }: ResultSectionProps) => {
  const getMessage = () => {
    const pct = score / total;
    if (pct >= 0.7) return "Você conhece muito bem nossa história ❤️";
    if (pct >= 0.4) return "Nada mal! Ainda temos muitas memórias para criar juntos.";
    return "Hora de criarmos ainda mais momentos inesquecíveis 💕";
  };

  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="fade-slide-in max-w-lg rounded-3xl bg-primary-foreground/15 backdrop-blur-lg border border-primary-foreground/20 p-10 shadow-xl">
        <h2 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">
          Resultado do nosso quiz 💕
        </h2>
        <p className="mb-6 font-body text-2xl font-bold text-primary-foreground">
          Você acertou {score} de {total} perguntas!
        </p>
        <p className="mb-10 font-body text-lg text-primary-foreground/90">{getMessage()}</p>
        <button
          onClick={onOpenLetter}
          className="pulse-glow rounded-2xl bg-primary-foreground/20 backdrop-blur-md border-2 border-primary-foreground/40 
            px-10 py-5 font-body text-xl font-bold text-primary-foreground
            transition-all duration-300 hover:scale-110 hover:bg-primary-foreground/30 active:scale-95"
        >
          Abrir minha carta para você 💌
        </button>
      </div>
    </section>
  );
};

export default ResultSection;
