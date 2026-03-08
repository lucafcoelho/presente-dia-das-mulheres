import { useState } from "react";
import PhotoGallery from "./PhotoGallery";

/* ===== TEXTO DA CARTA - EDITE AQUI ===== */
const LETTER_TEXT = `Meu amor,
você não tem ideia como é difícil começar uma declaração pra você, são tantas coisas que tenho para falar que acabo me perdendo. 

Você é uma mulher incrível, cada dia que passa eu admiro mais ainda você, sua personalidade, seu caráter, sua determinação para 

conquistar tudo aquilo que sonha, sua bondade no coração, sua animação, tudo! Eu não posso dizer que você é tudo o que eu sempre 

sonhei porque você ja superou e muito os meus sonhos. Eu queria poder mostrar pra você o quanto eu te amo, mas se eu tentar escrever, 

desenhar, nada vai conseguir chegar perto da realidade, você é a mulher da minha vida, quero estar com você para sempre, casar com você,

construir uma família, realizar todos os nossos sonhos!! Vou estar do seu lado sempre, em todos os momentos, não vejo a hora trocar 

um “quando chegar em casa me avisa mozao” para “que horas você volta pra casa mozao?”, não vejo a hora de você voltar de um dia cansativo

de plantão e eu poder mimar você da melhor forma possível, não vejo a hora de conhecer o mundo do seu lado. Eu te amo para sempre meu amor!!


Com muito amor
Mozinho(Luca)`;
/* ======================================= */

const LetterSection = () => {
  const [opened, setOpened] = useState(false);

  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20">
      {!opened ? (
        /* Envelope */
        <div className="fade-slide-in cursor-pointer" onClick={() => setOpened(true)}>
          <div className="relative mx-auto w-72 md:w-96">
            {/* Envelope body */}
            <div className="rounded-2xl bg-primary-foreground/20 backdrop-blur-lg border-2 border-primary-foreground/30 p-8 text-center shadow-xl">
              <div className="mb-4 text-6xl">💌</div>
              <p className="font-display text-2xl font-bold text-primary-foreground">Toque para abrir</p>
              <p className="mt-2 font-body text-sm text-primary-foreground/70">Uma carta especial te espera...</p>
            </div>
            {/* Envelope flap */}
            <div
              className="envelope-flap absolute -top-1 left-0 right-0 h-20 rounded-t-2xl bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground/20"
              style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}
            />
          </div>
        </div>
      ) : (
        /* Letter content */
        <div className="letter-content w-full max-w-2xl">
          <div className="rounded-3xl bg-primary-foreground/15 backdrop-blur-lg border border-primary-foreground/20 p-8 md:p-12 shadow-xl">
            <h2 className="mb-8 text-center font-display text-4xl font-bold text-primary-foreground md:text-5xl">
              💌 Minha carta para você
            </h2>
            <div className="font-body text-lg leading-relaxed text-primary-foreground/90 whitespace-pre-line">
              {LETTER_TEXT}
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="mt-16">
            <h3 className="mb-8 text-center font-display text-3xl font-bold text-primary-foreground md:text-4xl">
              Nossos momentos juntos 📸
            </h3>
            <PhotoGallery />
          </div>
        </div>
      )}
    </section>
  );
};

export default LetterSection;
