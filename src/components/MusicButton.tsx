import { useState, useRef, useEffect } from "react";

/* ===== LINK DA MÚSICA - EDITE AQUI ===== */
const MUSIC_URL = "/Banda007-OFICIAL-to-com-moral-no-ceu-c9df9a39.mp3";
/* ======================================= */

const MusicButton = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(MUSIC_URL);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <button
      onClick={toggle}
      className={`fixed top-4 right-4 z-50 rounded-full px-4 py-2 font-body text-sm font-semibold backdrop-blur-md transition-all
        bg-primary/20 text-foreground border border-primary/30 hover:bg-primary/30
        ${playing ? "music-btn-active" : ""}`}
    >
      {playing ? "🔊 Música" : "🔇 Música"}
    </button>
  );
};

export default MusicButton;
