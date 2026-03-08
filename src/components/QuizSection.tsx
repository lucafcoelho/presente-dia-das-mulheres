import { useState, useCallback } from "react";
import ConfettiHearts from "./ConfettiHearts";

/* ===== PERGUNTAS DO QUIZ - EDITE AQUI ===== */
const QUESTIONS = [
  {
    question: "Onde foi nosso primeiro beijo?",
    options: ["No cinema", "Em um restaurante", "No shopping", "No INTERMED em São Luis"],
    correct: 3,
  },
  {
    question: "Qual é a nossa comida favorita?",
    options: ["Pizza", "Hambúrguer", "Sushi", "Lasanha"],
    correct: 2,
  },
  {
    question: "Qual dia começamos ficamos juntos (de verdade kkkkkk)?",
    options: ["1/05/25", "07/05/25", "12/05/25", "02/05/25"],
    correct: 0
  },
  {
    question: "Qual foi nossa primeira viagem juntos?",
    options: ["Morro Branco", "Ipu", "Icaraizinho de Amontada", "Sobral"],
    correct: 1,
  },
  {
    question: "Qual mês começamos a namorar?",
    options: ["Janeiro", "Março", "Junho", "Setembro"],
    correct: 2
  },
  {
    question: "O que eu mais gosto de fazer com você?",
    options: ["Sair para jantar", "Ir para festa", "Ver serie", "Qualquer coisa, estando com você tudo é sempre perfeito!"],
    correct: 3,
  },
  {
    question: "Quando você disse que me amava pela primeira vez?",
    options: ["25/05/25", "20/05/25", "23/05/25", "28/05/25"],
    correct: 0,
  },
];
/* =========================================== */

interface QuizSectionProps {
  onFinish: (score: number) => void;
}

const QuizSection = ({ onFinish }: QuizSectionProps) => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleAnswer = useCallback(
    (idx: number) => {
      if (selected !== null) return;
      setSelected(idx);
      setShowFeedback(true);
      const isCorrect = idx === QUESTIONS[current].correct;
      const newScore = isCorrect ? score + 1 : score;
      if (isCorrect) setScore(newScore);

      setTimeout(() => {
        if (current < QUESTIONS.length - 1) {
          setCurrent((c) => c + 1);
          setSelected(null);
          setShowFeedback(false);
          setAnimKey((k) => k + 1);
        } else {
          setShowConfetti(true);
          setTimeout(() => onFinish(newScore), 1500);
        }
      }, 1200);
    },
    [current, score, selected, onFinish]
  );

  const q = QUESTIONS[current];
  const progress = ((current + 1) / QUESTIONS.length) * 100;
  const isCorrect = selected !== null && selected === q.correct;

  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
      {showConfetti && <ConfettiHearts />}

      <div className="w-full max-w-lg">
        {/* Progress bar */}
        <div className="mb-8">
          <p className="mb-2 text-center font-body text-sm font-semibold text-primary-foreground/80">
            Pergunta {current + 1} de {QUESTIONS.length}
          </p>
          <div className="h-3 w-full overflow-hidden rounded-full bg-primary-foreground/20 backdrop-blur-sm">
            <div
              className="progress-fill h-full rounded-full bg-primary-foreground/60"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question card */}
        <div
          key={animKey}
          className="fade-slide-in rounded-3xl bg-primary-foreground/15 backdrop-blur-lg border border-primary-foreground/20 p-8 shadow-xl"
        >
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-primary-foreground md:text-4xl">
            {q.question}
          </h2>

          <div className="stagger-children space-y-4">
            {q.options.map((opt, idx) => {
              let btnClass =
                "w-full rounded-2xl border-2 border-primary-foreground/30 bg-primary-foreground/10 px-6 py-4 text-left font-body text-lg font-medium text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:bg-primary-foreground/20 active:scale-95";
              if (selected !== null && idx === selected) {
                btnClass = isCorrect
                  ? "w-full rounded-2xl border-2 border-green-400 bg-green-500/30 px-6 py-4 text-left font-body text-lg font-medium text-primary-foreground scale-[1.02]"
                  : "w-full rounded-2xl border-2 border-red-400 bg-red-500/30 px-6 py-4 text-left font-body text-lg font-medium text-primary-foreground scale-[1.02]";
              }
              return (
                <button key={idx} onClick={() => handleAnswer(idx)} className={btnClass} disabled={selected !== null}>
                  {opt}
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {showFeedback && (
            <div className="mt-6 text-center">
              {isCorrect ? (
                <p className="font-body text-lg font-semibold text-green-300 fade-slide-in">
                  ✔ Acertou! Você me conhece bem ❤️
                </p>
              ) : (
                <p className="font-body text-lg font-semibold text-red-300 fade-slide-in">
                  ✖ Errou! Mas eu ainda te amo 😘
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
