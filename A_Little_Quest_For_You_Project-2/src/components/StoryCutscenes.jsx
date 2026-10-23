import React, { useState } from 'react';
import { X, ArrowRight, Play, Bike, IceCream } from 'lucide-react';
import { HikamSprite, LehaSprite } from './PixelCharacters';

const rideLines = [
  { speaker: 'Hikam', text: 'Kamu sayang uangnya dipake buat Gojek. Mending sama aku aja, sini.' },
  { speaker: 'Leha', text: 'Ya udah. Tapi pelan-pelan, ya.' },
  { speaker: 'Hikam', text: 'Iya, tenang. Pegangan yang bener.' },
  { speaker: 'Leha', text: 'Iya, iya.' },
];

export function MotorCutscene({ onSuccess, onClose }) {
  const [step, setStep] = useState(-1);
  const current = rideLines[step] || null;
  const finishOrAdvance = () => {
    if (step < 0) setStep(0);
    else if (step < rideLines.length - 1) setStep((value) => value + 1);
    else onSuccess();
  };

  return (
    <div className="minigame-overlay story-cutscene-overlay">
      <section className="minigame-card story-cutscene-card" role="dialog" aria-modal="true" aria-label="Cutscene pulang bareng">
        <div className="simple-modal-head"><h2><Bike size={17} /> Pulang Bareng</h2><button className="topbar-icon" onClick={onClose} aria-label="Tutup cutscene"><X size={17} /></button></div>
        <p className="minigame-intro">{step < 0 ? 'Bel pulang sudah bunyi. Hikam nunggu di dekat motornya.' : 'Motor mulai jalan, rumah dan pepohonan bergerak di belakang mereka. Klik lanjut buat ikutin obrolannya.'}</p>
        <div className={`motor-panorama ${step >= 0 ? 'is-moving' : ''}`}>
          <div className="motor-sun" /><div className="motor-hill" /><div className="motor-houses" /><div className="motor-road"><span /></div>
          <div className="motor-illustration">
            <svg className="motor-vector" viewBox="0 0 360 170" aria-hidden="true">
              <circle cx="66" cy="131" r="28" fill="#292D42" stroke="#C5CBD0" strokeWidth="7"/><circle cx="66" cy="131" r="7" fill="#E8DCC5"/>
              <circle cx="286" cy="131" r="28" fill="#292D42" stroke="#C5CBD0" strokeWidth="7"/><circle cx="286" cy="131" r="7" fill="#E8DCC5"/>
              <path d="M66 131 L124 81 L184 131 L111 131 L155 78 L251 82 L286 131" fill="none" stroke="#BD5759" strokeWidth="9" strokeLinejoin="miter"/>
              <path d="M145 74 L195 74 L214 88 L162 88 Z" fill="#3B3E53" stroke="#22263B" strokeWidth="4"/>
              <path d="M243 81 L268 58 L296 60" fill="none" stroke="#3B3E53" strokeWidth="7"/><rect x="279" y="52" width="23" height="9" fill="#F0D89B"/>
              <path d="M95 83 L115 64 L144 68" fill="none" stroke="#BD5759" strokeWidth="8"/>
            </svg>
            <div className="motor-rider motor-rider-hikam"><HikamSprite /></div>
            <div className="motor-rider motor-rider-leha"><LehaSprite era="sma" /></div>
          </div>
          {step >= 0 && <><span className="motor-wind wind-one">✦</span><span className="motor-wind wind-two">✧</span></>}
          {step < 0 && <div className="motor-start-label">GERBANG SMAN 94 · 15.30</div>}
        </div>
        {current ? (
          <div className="cutscene-dialogue">
            <div className="cutscene-portrait">{current.speaker === 'Hikam' ? <HikamSprite small /> : <LehaSprite era="sma" small />}</div>
            <div className="cutscene-dialogue-copy"><span>{current.speaker}</span><p>{current.text}</p></div>
            <button className="dialogue-next" onClick={finishOrAdvance}>{step === rideLines.length - 1 ? 'SAMPAI' : 'LANJUT'} <ArrowRight size={15} /></button>
          </div>
        ) : (
          <div className="cutscene-dialogue">
            <div className="cutscene-portrait"><HikamSprite small /></div>
            <div className="cutscene-dialogue-copy"><span>Hikam</span><p>“Pulang bareng?”</p></div>
            <button className="button-primary" onClick={finishOrAdvance}><Play size={14} fill="currentColor" /> NAIK MOTOR</button>
          </div>
        )}
        <div className="cutscene-footnote"><span>SCENE INTERAKTIF</span><span>{step < 0 ? 'SIAP BERANGKAT' : `OBROLAN ${step + 1}/${rideLines.length}`}</span></div>
      </section>
    </div>
  );
}

export function HappyDaysMiniGame({ onSuccess, onClose }) {
  const [feedback, setFeedback] = useState('');
  const choose = (who) => {
    if (who === 'hikam') {
      setFeedback('Betul. Hikam yang sengaja mengalah supaya ada alasan buat jalan berdua.');
      onSuccess();
    } else {
      setFeedback('Coba pikir lagi. Hikam sengaja memilih jawaban yang salah waktu itu. Jadi siapa yang akhirnya harus traktir?');
    }
  };

  return (
    <div className="minigame-overlay story-cutscene-overlay">
      <section className="minigame-card story-cutscene-card happydays-card" role="dialog" aria-modal="true" aria-label="Taruhan es krim di Happy Days">
        <div className="simple-modal-head"><h2><IceCream size={17} /> Happy Days · First Date</h2><button className="topbar-icon" onClick={onClose} aria-label="Tutup mini game"><X size={17} /></button></div>
        <p className="minigame-intro">Mereka duduk berhadapan di Happy Days. Hikam ngajak taruhan: yang kalah harus traktir es krim. Bantu Leha mengingat siapa yang akhirnya bayar.</p>
        <div className="date-panorama">
          <div className="date-window" /><div className="date-table" />
          <div className="date-character date-hikam"><HikamSprite /></div>
          <div className="date-character date-leha"><LehaSprite era="sma" /></div>
          <div className="pixel-icecream icecream-one">✦</div><div className="pixel-icecream icecream-two">✦</div>
        </div>
        <div className="bet-question"><b>Siapa yang akhirnya mentraktir es krim?</b><span>Coba ingat lagi taruhan mereka. Siapa yang akhirnya harus traktir?</span></div>
        <div className="bet-options">
          <button className="bet-option" onClick={() => choose('leha')}>Leha yang traktir <ArrowRight size={15} /></button>
          <button className="bet-option" onClick={() => choose('hikam')}>Hikam yang traktir <ArrowRight size={15} /></button>
        </div>
        {feedback && <p className={`bet-feedback ${feedback.startsWith('Betul') ? 'success' : ''}`}>{feedback}</p>}
        <div className="cutscene-footnote"><span>KENANGAN · HAPPY DAYS</span><span>PILIH JAWABAN</span></div>
      </section>
    </div>
  );
}
