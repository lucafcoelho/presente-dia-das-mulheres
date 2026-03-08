import { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import MusicButton from "@/components/MusicButton";
import HeroSection from "@/components/HeroSection";
import QuizSection from "@/components/QuizSection";
import ResultSection from "@/components/ResultSection";
import LetterSection from "@/components/LetterSection";

type Screen = "hero" | "quiz" | "result" | "letter";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("hero");
  const [score, setScore] = useState(0);

  const handleQuizFinish = (finalScore: number) => {
    setScore(finalScore);
    setScreen("result");
  };

  return (
    <div className="bg-gradient-animated min-h-screen overflow-x-hidden">
      <FloatingHearts />
      <MusicButton />

      {screen === "hero" && <HeroSection onStart={() => setScreen("quiz")} />}
      {screen === "quiz" && <QuizSection onFinish={handleQuizFinish} />}
      {screen === "result" && (
        <ResultSection score={score} total={7} onOpenLetter={() => setScreen("letter")} />
      )}
      {screen === "letter" && <LetterSection />}
    </div>
  );
};

export default Index;
