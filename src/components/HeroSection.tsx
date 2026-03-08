interface HeroSectionProps {
  onStart: () => void;
}

const HeroSection = ({ onStart }: HeroSectionProps) => {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="fade-slide-in max-w-2xl">
        <h1 className="mb-6 font-display text-5xl font-bold text-primary-foreground drop-shadow-lg md:text-7xl">
          Feliz Dia das Mulheres ❤️
        </h1>
        <p className="mb-10 font-body text-lg text-primary-foreground/90 md:text-xl leading-relaxed">
          Esse site é dedicado à mulher mais incrível da minha vida.
          <br />
          Prepare-se para testar o quanto você conhece nossa história.
        </p>
        <button
          onClick={onStart}
          className="pulse-glow rounded-2xl bg-primary-foreground/20 backdrop-blur-md border-2 border-primary-foreground/40 
            px-10 py-5 font-body text-xl font-bold text-primary-foreground
            transition-all duration-300 hover:scale-110 hover:bg-primary-foreground/30 active:scale-95"
        >
          Começar nosso Quiz 💕
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
