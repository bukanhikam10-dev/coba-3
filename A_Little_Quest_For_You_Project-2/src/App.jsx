import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft, ArrowRight, AudioLines, BookOpen, Check, ChevronRight, CircleHelp,
  ClipboardList, Heart, Maximize2, Pause, Play, RotateCcw, Settings, Sparkles,
  Volume2, VolumeX, X, LockKeyhole, Star, Coffee, Mail, Image as ImageIcon,
} from 'lucide-react';
import { scenes, birthdayLetter } from './data/scenes';
import { giftMedia } from './data/giftMedia';
import { SceneBackdrop, ObjectGlyph } from './components/SceneArt';
import { HikamSprite, LehaSprite, LumiSprite, FriendSprite } from './components/PixelCharacters';
import { MotorCutscene, HappyDaysMiniGame } from './components/StoryCutscenes';
import './styles/game.css';

const SAVE_KEY = 'a-little-quest-for-you-save-v1';

const FRIEND_DIALOGUES = {
  Aini: [{ speaker: 'Aini', text: 'Leh, nanti istirahat bareng, nggak?' }, { speaker: 'Leha', text: 'Gas. Gua kelarin ini dulu.' }, { speaker: 'Aini', text: 'Oke, gua tunggu di depan kelas.' }],
  Nurul: [{ speaker: 'Nurul', text: 'Leh, catetan lu lengkap nggak?' }, { speaker: 'Leha', text: 'Kayaknya ada yang kelewat. Lu punya?' }, { speaker: 'Nurul', text: 'Ada. Nanti gua fotoin buat lu.' }],
  Pista: [{ speaker: 'Pista', text: 'Abis ini ke kantin, yuk.' }, { speaker: 'Leha', text: 'Boleh. Gua laper dari tadi.' }, { speaker: 'Pista', text: 'Sip, gua ajak Ayu juga.' }],
  Ayu: [{ speaker: 'Ayu', text: 'Leh, lu udah siap buat pelajaran berikutnya?' }, { speaker: 'Leha', text: 'Jujur belum. Gua masih mikirin tugas tadi.' }, { speaker: 'Ayu', text: 'Sama, kita senasib berarti.' }],
  Jawir: [{ speaker: 'Jawir', text: 'Gua bingung bagian tugas yang ini.' }, { speaker: 'Leha', text: 'Sini, bagian mana? Coba gua liat.' }, { speaker: 'Jawir', text: 'Nah, ini yang dari tadi nggak masuk di kepala.' }],
  Mentari: [{ speaker: 'Mentari', text: 'Leh, nanti ikut ke kantin nggak?' }, { speaker: 'Leha', text: 'Ikut. Gua laper banget dari tadi.' }, { speaker: 'Nadia', text: 'Katanya mau hemat.' }, { speaker: 'Leha', text: 'Hemat bukan berarti berhenti makan, Nad.' }],
  Nadia: [{ speaker: 'Nadia', text: 'Leh, lu udah hafal jalan ke kelas berikutnya?' }, { speaker: 'Leha', text: 'Belum banget. Gua masih ngandelin feeling.' }, { speaker: 'Mentari', text: 'Ikut kita aja, daripada nyasar.' }],
};

function StageFriends({ scene, activeSpeaker, disabled, onTalk }) {
  const cast = scene.id === 'sma-class'
    ? [{ name: 'Aini', x: 13 }, { name: 'Nurul', x: 28 }, { name: 'Pista', x: 62 }, { name: 'Ayu', x: 77 }, { name: 'Jawir', x: 90 }]
    : scene.id === 'ui' ? [{ name: 'Mentari', x: 27 }, { name: 'Nadia', x: 70 }] : [];
  if (!cast.length) return null;
  return <>{cast.map((friend) => <button type="button" key={friend.name} className={`stage-friend ${activeSpeaker === friend.name ? 'is-speaking' : ''}`} style={{ left: `${friend.x}%` }} onClick={() => onTalk(friend.name)} disabled={disabled} aria-label={`Ngobrol dengan ${friend.name}`}><span className="stage-friend-name">{friend.name}</span><FriendSprite name={friend.name} /></button>)}</>;
}

const emptySave = () => ({
  sceneIndex: 0,
  furthestIndex: 0,
  found: {},
  games: {},
  seenLetter: false,
  completed: false,
  settings: { reduceMotion: false, textSize: 'normal' },
});

function readSave() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return emptySave();
    const parsed = JSON.parse(raw);
    return { ...emptySave(), ...parsed, settings: { ...emptySave().settings, ...(parsed.settings || {}) } };
  } catch {
    return emptySave();
  }
}

function PixelMark({ children, className = '' }) {
  return <span className={`pixel-mark ${className}`}>{children}</span>;
}

function IconStamp({ kind, className = '' }) {
  return <span className={`icon-stamp ${className}`}><ObjectGlyph kind={kind} /></span>;
}

function TitleScreen({ hasSave, onStart, onContinue, onSettings }) {
  return (
    <div className="title-screen">
      <div className="title-grain" />
      <header className="title-topbar"><div className="brand-mini"><PixelMark>✦</PixelMark><span>STORY MODE <b>01</b></span></div><div className="topbar-note">A BIRTHDAY QUEST · MADE WITH MEMORIES</div></header>
      <main className="title-content">
        <section className="title-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> A LITTLE BIRTHDAY ADVENTURE</div>
          <h1>A LITTLE<br /><em>QUEST</em> FOR YOU<span className="title-star">✦</span></h1>
          <p className="title-tagline">A little journey through the memories that matter.</p>
          <p className="title-description">Sebuah perjalanan kecil melewati tempat, cerita, dan momen yang pernah berarti. Siap mulai?</p>
          <div className="title-actions">
            <button className="button-primary" onClick={onStart}><Play size={16} fill="currentColor" /> START GAME <ChevronRight size={17} /></button>
            {hasSave && <button className="button-secondary" onClick={onContinue}>CONTINUE <ArrowRight size={15} /></button>}
          </div>
          <button className="text-button title-settings" onClick={onSettings}><Settings size={14} /> Settings</button>
          <div className="title-footnote"><span className="keycap">CLICK</span> to explore <span className="foot-separator">·</span> <span className="keycap">SPACE</span> to continue</div>
        </section>
        <section className="title-art-wrap" aria-label="Preview dunia pixel art">
          <div className="sun-glow" />
          <div className="title-art-frame">
            <div className="art-top-line"><span>THE LITTLE WORLD</span><span><span className="online-dot" /> SAVE POINT 01</span></div>
            <div className="title-art-scene">
              <SceneBackdrop scene={scenes[0]} />
              <div className="art-cloud cloud-one" /><div className="art-cloud cloud-two" />
              <div className="art-sparkle sparkle-one">✦</div><div className="art-sparkle sparkle-two">✧</div><div className="art-sparkle sparkle-three">✦</div>
              <div className="title-character leha-title"><LehaSprite era="now" /></div>
              <div className="title-character lumi-title"><LumiSprite /></div>
              <div className="art-sign"><span>YOUR STORY</span><b>STARTS HERE</b></div>
              <div className="art-hint"><span className="tiny-cursor">↖</span> A LITTLE SOMETHING IS WAITING...</div>
            </div>
            <div className="art-bottom-line"><span>✦ LEHA'S JOURNEY</span><span>VER. 1.0.0</span></div>
          </div>
          <div className="floating-note note-top"><Sparkles size={14} /> memories await</div>
          <div className="floating-note note-bottom"><Heart size={14} /> made just for you</div>
        </section>
      </main>
      <footer className="title-footer"><span>© A LITTLE QUEST FOR YOU</span><span>COZY PIXEL ADVENTURE <span className="footer-diamond">◆</span> DESKTOP EDITION</span></footer>
    </div>
  );
}

function Hotspot({ item, found, onClick, disabled, redJacket }) {
  return (
    <button
      type="button"
      className={`hotspot ${found ? 'is-found' : ''} ${disabled ? 'is-muted' : ''} ${redJacket && item.kind === 'jacket' ? 'red-jacket' : ''}`}
      style={{ left: `${item.x}%`, top: `${item.y}%` }}
      onClick={() => onClick(item)}
      disabled={disabled}
      aria-label={`Periksa ${item.label}`}
    >
      <span className="hotspot-icon"><ObjectGlyph kind={item.kind} />{found && <span className="found-check"><Check size={10} /></span>}</span>
      <span className="hotspot-label">{item.label}</span>
      {!found && <span className="hotspot-spark">✦</span>}
    </button>
  );
}

function DialogPanel({ dialog, onNext, reduced }) {
  if (!dialog) return null;
  const narration = dialog.tone === 'narration' || dialog.speaker?.includes('Narasi');
  return (
    <div className={`dialogue-panel ${narration ? 'is-narration' : ''} ${reduced ? 'no-motion' : ''}`}>
      <div className="dialogue-avatar">
        {narration ? <div className="narrator-badge">H</div> : dialog.speaker === 'Lumi' ? <LumiSprite tiny /> : dialog.speaker === 'Leha' ? <LehaSprite era="sma" small /> : dialog.speaker === 'Hikam' ? <HikamSprite small /> : FRIEND_DIALOGUES[dialog.speaker] ? <FriendSprite name={dialog.speaker} small /> : <div className="friend-avatar">{(dialog.speaker || '?').slice(0, 1)}</div>}
      </div>
      <div className="dialogue-copy">
        <div className="dialogue-speaker">{dialog.speaker || 'Narasi'}</div>
        <p>{dialog.text}</p>
      </div>
      <button className="dialogue-next" onClick={onNext} aria-label="Lanjutkan dialog"><span>LANJUT</span><ChevronRight size={18} /></button>
    </div>
  );
}

function Sidebar({ scene, foundCount, totalCount, gameComplete, canContinue, onContinue, onJournal, onPause, onStartGame }) {
  const [expanded, setExpanded] = useState(false);
  const progress = totalCount ? Math.round((foundCount / totalCount) * 100) : 100;
  return (
    <aside className="game-sidebar">
      <div className="sidebar-card chapter-card">
        <div className="sidebar-eyebrow">CURRENT LOCATION</div>
        <div className="location-heading"><span className="location-pin"><Coffee size={15} /></span><div><h2>{scene.location}</h2><p>{scene.chapter}</p></div></div>
        <div className="scene-divider" />
        <p className="scene-quote">“{scene.subtitle}”</p>
      </div>
      <div className="sidebar-card quest-card">
        <div className="card-heading"><div><span className="sidebar-eyebrow">YOUR LITTLE QUEST</span><h3>Kenangan</h3></div><span className="quest-count">{foundCount}<span>/{totalCount}</span></span></div>
        <div className="progress-track"><span style={{ width: `${progress}%` }} /></div>
        <div className="progress-caption"><span>OBJECTS FOUND</span><span>{progress}%</span></div>
        <div className={`object-list ${expanded ? 'expanded' : ''}`}>
          {scene.objects.map((object) => {
            const isFound = object._found;
            return <div className={`object-list-row ${isFound ? 'found' : ''}`} key={object.id}><span className="object-check">{isFound ? <Check size={12} /> : <span />}</span><span>{object.label}</span>{isFound && <span className="object-row-status">FOUND</span>}</div>;
          })}
        </div>
        {totalCount > 3 && <button className="expand-list" onClick={() => setExpanded(!expanded)}>{expanded ? 'Lihat lebih sedikit' : 'Lihat semua objek'} <ChevronRight size={13} className={expanded ? 'rotate-90' : ''} /></button>}
      </div>
      <div className="sidebar-card guide-card">
        <div className="guide-top"><LumiSprite tiny /><div><b>Lumi</b><span>YOUR LITTLE GUIDE</span></div><span className="guide-status" /></div>
        <p>{scene.specialGame && !gameComplete ? 'Semua benda sudah diperiksa? Selesaikan tantangan kecil buat membuka jalan selanjutnya.' : canContinue ? 'Semua yang dibutuhkan udah ketemu. Kita lanjut, yuk.' : 'Klik objek yang terlihat di ruangan untuk menemukan potongan cerita.'}</p>
        {scene.specialGame && !gameComplete && foundCount === totalCount && <button className="button-small challenge-button" onClick={onStartGame}><Sparkles size={14} /> {scene.specialLabel || 'Mulai tantangan'}</button>}
        <button className={`button-primary continue-button ${!canContinue ? 'is-disabled' : ''}`} disabled={!canContinue} onClick={onContinue}>{scene.isEnding ? 'SELESAI' : 'LANJUTKAN'} <ArrowRight size={15} /></button>
        {!canContinue && <div className="locked-hint"><LockKeyhole size={12} /> Periksa semua objek{scene.specialGame && !gameComplete ? ' dan selesaikan tantangan' : ''}.</div>}
      </div>
      <div className="sidebar-bottom-actions">
        <button onClick={onJournal}><BookOpen size={15} /> Journal</button>
        <button onClick={onPause}><Pause size={15} /> Menu</button>
      </div>
    </aside>
  );
}

function MemoryGame({ onSuccess, onClose }) {
  const baseCards = useMemo(() => [
    { id: 'flower-a', pair: 'flower', label: 'Bunga', mark: '✿' },
    { id: 'moon-a', pair: 'moon', label: 'Bulan', mark: '☾' },
    { id: 'letter-a', pair: 'letter', label: 'Surat', mark: '✉' },
    { id: 'letter-b', pair: 'letter', label: 'Surat', mark: '✉' },
    { id: 'flower-b', pair: 'flower', label: 'Bunga', mark: '✿' },
    { id: 'moon-b', pair: 'moon', label: 'Bulan', mark: '☾' },
  ], []);
  const [cards] = useState(baseCards);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [locked, setLocked] = useState(false);
  const [moves, setMoves] = useState(0);
  const [done, setDone] = useState(false);

  const flipCard = (card) => {
    if (locked || done || flipped.includes(card.id) || matched.includes(card.pair)) return;
    const next = [...flipped, card.id];
    setFlipped(next);
    if (next.length === 2) {
      setMoves((n) => n + 1);
      const first = cards.find((c) => c.id === next[0]);
      if (first?.pair === card.pair) {
        const nextMatched = [...matched, card.pair];
        setMatched(nextMatched);
        setFlipped([]);
        if (nextMatched.length === 3) setDone(true);
      } else {
        setLocked(true);
        window.setTimeout(() => { setFlipped([]); setLocked(false); }, 700);
      }
    }
  };

  return <div className="minigame-overlay"><section className="minigame-card memory-modal"><div className="modal-topline"><span>PUZZLE 01 · MEMORY MATCH</span><button className="icon-button" onClick={onClose} aria-label="Tutup puzzle"><X size={17} /></button></div><h2>Temukan pasangan yang cocok</h2><p className="minigame-intro">Cocokkan tiga pasang simbol untuk membuka kenangan kampus.</p><div className="memory-status"><span>Pasangan <b>{matched.length}/3</b></span><span>Langkah <b>{moves}</b></span></div><div className="memory-grid">{cards.map((card) => { const open = flipped.includes(card.id) || matched.includes(card.pair); return <button key={card.id} onClick={() => flipCard(card)} className={`memory-card ${open ? 'flipped' : ''} ${matched.includes(card.pair) ? 'matched' : ''}`} disabled={matched.includes(card.pair)}>{open ? <><span className="memory-symbol">{card.mark}</span><span className="memory-label">{card.label}</span></> : <span className="memory-back">✦</span>}</button>; })}</div>{done ? <div className="game-success"><span className="success-icon"><Check size={18} /></span><div><b>Nice, semua pasangan ketemu.</b><p>Fragmen kenangan kampus berhasil dibuka.</p></div><button className="button-primary" onClick={onSuccess}>AMBIL FRAGMEN <ArrowRight size={15} /></button></div> : <div className="minigame-foot"><span>TIP: inget simbolnya biar lebih cepet.</span><span>✦ MEMORY FRAGMENT</span></div>}</section></div>;
}

function RhythmGame({ onSuccess, onClose }) {
  const pattern = [0, 1, 2, 0, 2];
  const [step, setStep] = useState(0);
  const [feedback, setFeedback] = useState('Ikuti pola panggung: kiri, tengah, kanan.');
  const [failed, setFailed] = useState(false);
  const press = (i) => {
    if (failed || step >= pattern.length) return;
    if (pattern[step] === i) {
      const newStep = step + 1;
      setStep(newStep);
      setFeedback(newStep === pattern.length ? 'Mantap. Set panggung selesai!' : 'Pas! Lanjut ke not berikutnya.');
    } else {
      setFailed(true);
      setFeedback('Belum pas. Coba ulangi dari awal, santai aja.');
    }
  };
  const reset = () => { setStep(0); setFailed(false); setFeedback('Ikuti pola panggung: kiri, tengah, kanan.'); };
  useEffect(() => {
    const handler = (event) => {
      if (['a','s','d'].includes(event.key.toLowerCase())) press(['a','s','d'].indexOf(event.key.toLowerCase()));
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });
  return <div className="minigame-overlay"><section className="minigame-card rhythm-modal"><div className="modal-topline"><span>MINI GAME · SOUND CHECK</span><button className="icon-button" onClick={onClose} aria-label="Tutup mini game"><X size={17} /></button></div><div className="stage-game-hero"><div className="stage-mini-lights"><i /><i /><i /><i /><i /></div><AudioLines size={27} /><span>SMAN 2 TANGERANG</span></div><h2>Ikuti ritmenya</h2><p className="minigame-intro">Tekan tombol sesuai urutan simbol. Bisa klik tombol di bawah atau pakai keyboard A · S · D.</p><div className="rhythm-progress">{pattern.map((n, i) => <span key={i} className={i < step ? 'passed' : i === step ? 'active' : ''}>{['◀','●','▶'][n]}</span>)}</div><div className="rhythm-buttons">{['◀','●','▶'].map((label, i)=><button key={label} className={`rhythm-key key-${i}`} onClick={() => press(i)} disabled={step >= pattern.length || failed}><span>{label}</span><small>{['A','S','D'][i]}</small></button>)}</div><p className={`rhythm-feedback ${failed ? 'error' : step === pattern.length ? 'success' : ''}`}>{feedback}</p>{failed ? <button className="button-primary modal-primary" onClick={reset}><RotateCcw size={15} /> COBA LAGI</button> : step === pattern.length ? <button className="button-primary modal-primary" onClick={onSuccess}>SELESAI <ArrowRight size={15} /></button> : <div className="minigame-foot centered"><span>COMBO {step}/{pattern.length}</span><span>LET'S PLAY</span></div>}</section></div>;
}

function SequenceGame({ mode, onSuccess, onClose }) {
  const config = mode === 'timeline'
    ? { title: 'Susun timeline karier', intro: 'Klik kartu dari yang paling awal sampai tahap berikutnya.', items: [{id:'dpr',title:'Magang di DPR',desc:'Langkah awal pengalaman profesional'},{id:'psi',title:'Bergabung dengan PSI',desc:'Mulai aktif di dunia politik'},{id:'wm',title:'Asisten Wakil Menteri',desc:'Peran profesional saat ini'}], correct:['dpr','psi','wm'] }
    : { title: 'Sambungkan kenangan', intro: 'Susun ulang potongan perjalanan dari masa sekolah sampai sekarang.', items: [{id:'sma',title:'SMAN 94',desc:'Cerita pertama yang dibagikan'},{id:'ui',title:'UI · Ilmu Politik',desc:'Mengejar kampus impian'},{id:'career',title:'Dunia profesional',desc:'Melangkah ke bidang politik'}], correct:['sma','ui','career'] };
  const [chosen, setChosen] = useState([]);
  const [wrong, setWrong] = useState(false);
  const choose = (id) => {
    if (chosen.includes(id) || wrong) return;
    const next = [...chosen, id];
    setChosen(next);
    if (next.some((value, i) => value !== config.correct[i])) {
      setWrong(true);
      window.setTimeout(() => { setChosen([]); setWrong(false); }, 800);
    }
  };
  const done = chosen.length === config.correct.length && !wrong;
  return <div className="minigame-overlay"><section className="minigame-card sequence-modal"><div className="modal-topline"><span>STORY PUZZLE · {mode === 'timeline' ? 'CAREER TIMELINE' : 'RECONNECT'}</span><button className="icon-button" onClick={onClose} aria-label="Tutup puzzle"><X size={17} /></button></div><div className="sequence-deco"><ClipboardList size={27} /></div><h2>{config.title}</h2><p className="minigame-intro">{config.intro}</p><div className="sequence-list">{config.items.map((item, i) => <button key={item.id} className={`sequence-item ${chosen.includes(item.id) ? 'chosen' : ''} ${wrong && chosen.includes(item.id) ? 'wrong' : ''}`} onClick={() => choose(item.id)} disabled={chosen.includes(item.id) || done}><span className="sequence-number">{chosen.includes(item.id) ? <Check size={15} /> : String(i + 1).padStart(2, '0')}</span><span className="sequence-copy"><b>{item.title}</b><small>{item.desc}</small></span>{chosen.includes(item.id) && <span className="sequence-order">#{chosen.indexOf(item.id) + 1}</span>}</button>)}</div>{wrong && <p className="sequence-error">Belum urut. Coba sekali lagi.</p>}{done ? <div className="game-success"><span className="success-icon"><Check size={18} /></span><div><b>Urutannya pas.</b><p>Fragmen cerita berhasil tersambung.</p></div><button className="button-primary" onClick={onSuccess}>BUKA FRAGMEN <ArrowRight size={15} /></button></div> : <div className="minigame-foot"><span>{chosen.length}/3 KARTU TERSUSUN</span><span>✦ STORY FRAGMENT</span></div>}</section></div>;
}

function LetterModal({ onClose }) {
  const [page, setPage] = useState(0);
  return <div className="letter-overlay"><section className="letter-modal"><div className="letter-top"><span><Mail size={14} /> A LETTER FOR YOU</span><button className="icon-button" onClick={onClose} aria-label="Tutup surat"><X size={17} /></button></div><div className="letter-paper"><div className="letter-stamp">✦</div><div className="letter-kicker">FOR YOUR SPECIAL DAY</div><h2>Hey, you.</h2><div className="letter-body"><p>{birthdayLetter[page]}</p></div><div className="letter-page-indicator">{String(page + 1).padStart(2, '0')} <span>/</span> {String(birthdayLetter.length).padStart(2, '0')}</div><div className="letter-actions">{page > 0 && <button className="button-secondary" onClick={() => setPage((p) => Math.max(0, p - 1))}><ArrowLeft size={14} /> SEBELUMNYA</button>}<button className="button-primary" onClick={() => page < birthdayLetter.length - 1 ? setPage((p) => p + 1) : onClose()}>{page < birthdayLetter.length - 1 ? 'LANJUT BACA' : 'TUTUP SURAT'} <ArrowRight size={15} /></button></div></div><p className="letter-bottom-note">A SMALL NOTE, WITH A LOT OF THOUGHT BEHIND IT.</p></section></div>;
}

function SimpleModal({ title, children, onClose, footer }) {
  return <div className="modal-overlay"><section className="simple-modal"><div className="simple-modal-head"><h2>{title}</h2><button className="icon-button" onClick={onClose} aria-label="Tutup"><X size={17} /></button></div><div className="simple-modal-body">{children}</div>{footer && <div className="simple-modal-footer">{footer}</div>}</section></div>;
}

function SettingsModal({ settings, onChange, onReset, onClose }) {
  return <SimpleModal title="Settings" onClose={onClose} footer={<button className="button-primary" onClick={onClose}>SELESAI <Check size={15} /></button>}>
    <p className="modal-copy">Atur tampilan supaya nyaman buat kamu mainin.</p>
    <div className="setting-row"><div><b>Kurangi animasi</b><span>Mematikan gerakan dekoratif yang tidak penting.</span></div><button className={`toggle ${settings.reduceMotion ? 'on' : ''}`} onClick={() => onChange({ ...settings, reduceMotion: !settings.reduceMotion })} aria-pressed={settings.reduceMotion}><i /></button></div>
    <div className="setting-row"><div><b>Ukuran teks</b><span>Pilih ukuran tulisan dialog.</span></div><select value={settings.textSize} onChange={(e) => onChange({ ...settings, textSize: e.target.value })}><option value="small">Kecil</option><option value="normal">Normal</option><option value="large">Besar</option></select></div>
    <div className="settings-reset"><div><b>Mulai dari awal</b><span>Hapus save lokal dan ulangi petualangan dari Kopi Kina.</span></div><button className="button-danger" onClick={onReset}><RotateCcw size={14} /> RESET SAVE</button></div>
  </SimpleModal>;
}

function JournalModal({ scenes, save, onClose, onJump }) {
  return <SimpleModal title="Journal / Kenangan" onClose={onClose}>
    <p className="modal-copy">Potongan cerita yang sudah ditemukan sepanjang perjalanan.</p>
    <div className="journal-list">{scenes.map((scene, index) => { const found = save.found?.[scene.id] || []; const complete = scene.objects.filter((o) => !scene.isEnding || o.special === 'letter').every((o) => found.includes(o.id)) && (!scene.specialGame || save.games?.[scene.id]); const unlocked = index <= Math.max(save.sceneIndex, save.furthestIndex || 0) || complete; return <button className={`journal-row ${complete ? 'complete' : ''} ${!unlocked ? 'locked' : ''}`} key={scene.id} onClick={() => unlocked && onJump(index)} disabled={!unlocked}><span className="journal-marker">{complete ? <Check size={14} /> : unlocked ? <BookOpen size={14} /> : <LockKeyhole size={13} />}</span><span className="journal-copy"><b>{scene.title}</b><small>{scene.chapter} · {complete ? 'Kenangan ditemukan' : unlocked ? 'Masih dijelajahi' : 'Belum terbuka'}</small></span><ChevronRight size={15} /></button>; })}</div>
  </SimpleModal>;
}

function PauseModal({ onResume, onJournal, onSettings, onTitle }) {
  return <div className="modal-overlay"><section className="pause-modal"><div className="pause-logo"><PixelMark>✦</PixelMark><span>GAME PAUSED</span></div><h2>Tarik napas sebentar.</h2><p>Petualangan kamu sudah tersimpan otomatis.</p><button className="button-primary wide" onClick={onResume}><Play size={15} fill="currentColor" /> LANJUT MAIN</button><button className="button-secondary wide" onClick={onJournal}><BookOpen size={15} /> JOURNAL</button><button className="button-secondary wide" onClick={onSettings}><Settings size={15} /> SETTINGS</button><button className="text-button wide" onClick={onTitle}><ArrowLeft size={14} /> KEMBALI KE TITLE</button></section></div>;
}

function FinalModal({ onReplay, onReadLetter, onMedia, onClose }) {
  return <div className="final-overlay"><section className="final-modal"><div className="final-confetti"><span>✦</span><span>✧</span><span>✦</span><span>✧</span><span>✦</span></div><div className="final-icon"><Heart size={27} fill="currentColor" /></div><div className="final-kicker">QUEST COMPLETE</div><h2>YOU MADE IT.</h2><p>Semua fragmen udah ketemu. Semoga perjalanan kecil ini bikin hari kamu sedikit lebih spesial.</p><div className="final-actions"><button className="button-primary wide" onClick={onReadLetter}><Mail size={15} /> BACA ULANG SURAT</button><button className="button-secondary wide" onClick={() => onMedia('gallery')}><ImageIcon size={15} /> GALERI KENANGAN</button><button className="button-secondary wide" onClick={() => onMedia('audio')}><AudioLines size={15} /> VOICE NOTE</button><button className="button-secondary wide" onClick={() => onMedia('video')}><Play size={15} /> VIDEO UCAPAN</button><button className="text-button wide" onClick={onReplay}><RotateCcw size={14} /> MAIN LAGI DARI AWAL</button></div><button className="final-close" onClick={onClose} aria-label="Tutup ending"><X size={15} /></button></section></div>;
}

function MediaModal({ mode, onClose }) {
  const [pickedImages, setPickedImages] = useState([]);
  const [pickedAudio, setPickedAudio] = useState(null);
  const [pickedVideo, setPickedVideo] = useState(null);
  const [unavailable, setUnavailable] = useState(false);
  const objectUrls = useRef([]);
  useEffect(() => () => objectUrls.current.forEach((url) => URL.revokeObjectURL(url)), []);
  const makeUrl = (file) => {
    const url = URL.createObjectURL(file);
    objectUrls.current.push(url);
    return url;
  };
  const galleryImages = pickedImages.length ? pickedImages : giftMedia.galleryImages.map((src) => ({ src, name: src.split('/').pop() }));
  const audioSrc = pickedAudio?.src || giftMedia.voiceNotePath;
  const videoSrc = pickedVideo?.src || giftMedia.birthdayVideoPath;
  const title = mode === 'gallery' ? 'Galeri kenangan' : mode === 'audio' ? 'Voice note' : 'Video ulang tahun';
  const handleGallery = (event) => {
    setUnavailable(false);
    const files = Array.from(event.target.files || []);
    if (files.length) setPickedImages(files.map((file) => ({ src: makeUrl(file), name: file.name })));
  };
  const handleSingle = (event, type) => {
    setUnavailable(false);
    const file = event.target.files?.[0];
    if (!file) return;
    const value = { src: makeUrl(file), name: file.name };
    if (type === 'audio') setPickedAudio(value);
    else setPickedVideo(value);
  };
  const uploadControl = (accept, multiple, onChange) => <label className="media-upload-control"><span>{multiple ? 'PILIH FOTO DARI KOMPUTER' : 'PILIH FILE DARI KOMPUTER'}</span><input type="file" accept={accept} multiple={multiple} onChange={onChange} /></label>;
  return <SimpleModal title={title} onClose={onClose}>
    {mode === 'gallery' ? <>
      <p className="modal-copy">Pilih foto kenangan langsung dari komputer. Foto akan muncul di album selama sesi browser ini. Untuk menyertakannya secara permanen di versi website, taruh file di <code>public/media/memories/</code> dan isi <code>src/data/giftMedia.js</code>.</p>
      {uploadControl('image/*', true, handleGallery)}
      {galleryImages.length ? <div className="gift-gallery">{galleryImages.map((image, index) => <figure className="gift-gallery-item" key={`${image.src}-${index}`}><AsyncGiftImage src={image.src} /><figcaption>{image.name || `Kenangan ${index + 1}`}</figcaption></figure>)}</div> : <div className="media-placeholder"><div className="media-placeholder-art"><ImageIcon size={28} /><span>YOUR MEMORIES HERE</span></div><h3>Album masih kosong</h3><p>Pilih beberapa foto untuk mengisi album ini.</p></div>}
    </> : mode === 'audio' ? <>
      <p className="modal-copy">Pilih voice note dari komputer untuk diputar sekarang, atau gunakan file tetap di <code>public/media/voice-note.mp3</code>.</p>
      {uploadControl('audio/*', false, (event) => handleSingle(event, 'audio'))}
      {pickedAudio ? <div className="media-player"><AudioLines size={28} /><h3>{pickedAudio.name}</h3><audio controls preload="metadata" src={pickedAudio.src} /></div> : <div className="media-player"><AudioLines size={28} /><h3>Voice note dari Hikam</h3><audio controls preload="metadata" src={audioSrc} onError={() => setUnavailable(true)} />{unavailable && <p>File tetap belum tersedia. Pilih voice note dari komputermu.</p>}</div>}
    </> : <>
      <p className="modal-copy">Pilih video ucapan dari komputer untuk diputar sekarang, atau gunakan file tetap di <code>public/media/birthday-video.mp4</code>.</p>
      {uploadControl('video/*', false, (event) => handleSingle(event, 'video'))}
      {pickedVideo ? <div className="media-player"><h3>{pickedVideo.name}</h3><video controls playsInline preload="metadata" src={pickedVideo.src} /></div> : <div className="media-player"><Play size={28} /><h3>Video ulang tahun</h3><video controls playsInline preload="metadata" src={videoSrc} onError={() => setUnavailable(true)} />{unavailable && <p>File video belum tersedia. Pilih video dari komputermu.</p>}</div>}
    </>}
  </SimpleModal>;
}

function AsyncGiftImage({ src }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return <img src={src} alt="Kenangan" onError={() => setFailed(true)} />;
}

export default function App() {
  const [save, setSave] = useState(readSave);
  const [screen, setScreen] = useState('title');
  const [dialogue, setDialogue] = useState([]);
  const [dialogIndex, setDialogIndex] = useState(0);
  const [pendingAction, setPendingAction] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [mediaMode, setMediaMode] = useState(null);
  const [showLetter, setShowLetter] = useState(false);
  const [showFinal, setShowFinal] = useState(false);
  const [returnToFinal, setReturnToFinal] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [characterX, setCharacterX] = useState(43);
  const [isWalking, setIsWalking] = useState(false);
  const [facingLeft, setFacingLeft] = useState(false);
  const walkTimerRef = useRef(null);
  const objectActionTimerRef = useRef(null);

  const scene = scenes[Math.max(0, Math.min(save.sceneIndex, scenes.length - 1))];
  const foundIds = save.found?.[scene.id] || [];
  const countedObjects = scene.objects.filter((o) => !scene.isEnding || o.special === 'letter');
  const totalObjects = countedObjects.length;
  const foundCount = countedObjects.filter((o) => foundIds.includes(o.id)).length;
  const gameComplete = !scene.specialGame || Boolean(save.games?.[scene.id]);
  const allObjectsFound = countedObjects.every((o) => foundIds.includes(o.id));
  const canContinue = allObjectsFound && gameComplete && !scene.isEnding;
  const hasSave = save.sceneIndex > 0 || (save.furthestIndex || 0) > 0 || Object.keys(save.found || {}).length > 0 || save.completed;

  useEffect(() => {
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(save)); } catch (err) { /* local save is best effort */ }
  }, [save]);

  useEffect(() => {
    const handler = (event) => {
      if (screen !== 'game' || dialogue.length || activeModal || showLetter || showFinal || mediaMode) return;
      const target = event.target;
      if (target instanceof HTMLElement && ['BUTTON','INPUT','SELECT','TEXTAREA'].includes(target.tagName)) return;
      const key = event.key.toLowerCase();
      if (['arrowleft', 'arrowright', 'a', 'd'].includes(key)) {
        event.preventDefault();
        const movingLeft = key === 'arrowleft' || key === 'a';
        setFacingLeft(movingLeft);
        setCharacterX((x) => Math.max(3, Math.min(88, x + (movingLeft ? -5 : 5))));
        setIsWalking(true);
        if (walkTimerRef.current) window.clearTimeout(walkTimerRef.current);
        walkTimerRef.current = window.setTimeout(() => setIsWalking(false), 300);
        if (objectActionTimerRef.current) window.clearTimeout(objectActionTimerRef.current);
        return;
      }
      if (event.code === 'Space' || event.code === 'Enter') {
        if (canContinue) { event.preventDefault(); goNextScene(); }
      }
      if (event.key === 'Escape') setActiveModal('pause');
    };
    window.addEventListener('keydown', handler);
    return () => {
      window.removeEventListener('keydown', handler);
      if (walkTimerRef.current) window.clearTimeout(walkTimerRef.current);
      if (objectActionTimerRef.current) window.clearTimeout(objectActionTimerRef.current);
    };
  }, [screen, dialogue, activeModal, showLetter, showFinal, mediaMode, canContinue, save.sceneIndex]);

  const playSceneIntro = useCallback((index) => {
    const next = scenes[index];
    setDialogue(next.intro || []);
    setDialogIndex(0);
    setPendingAction(null);
  }, []);

  const startNew = () => {
    setCharacterX(43); setIsWalking(false); setFacingLeft(false);
    setScreen('game');
    setHasStarted(true);
    setActiveModal(null);
    setShowFinal(false);
    setShowLetter(false);
    setMediaMode(null);
    setSave({ ...emptySave() });
    setDialogue(scenes[0].intro || []);
    setDialogIndex(0);
  };

  const continueSaved = () => {
    setScreen('game');
    setHasStarted(true);
    setActiveModal(null);
    if (save.completed) { setShowFinal(true); setDialogue([]); return; }
    setShowFinal(false);
    playSceneIntro(save.sceneIndex);
  };

  const updateFound = (sceneId, objectId) => {
    setSave((prev) => {
      const current = prev.found?.[sceneId] || [];
      if (current.includes(objectId)) return prev;
      return { ...prev, found: { ...prev.found, [sceneId]: [...current, objectId] } };
    });
  };

  const openDialogue = (lines, action = null) => {
    setDialogue(lines || []);
    setDialogIndex(0);
    setPendingAction(action);
  };

  const talkToFriend = (name) => {
    if (dialogue.length || activeModal || showLetter || showFinal || mediaMode) return;
    const lines = FRIEND_DIALOGUES[name];
    if (lines) openDialogue(lines);
  };

  const completeHappyDays = () => {
    setSave((prev) => ({ ...prev, games: { ...prev.games, [scene.id]: true } }));
    setActiveModal(null);
    openDialogue([
      { speaker: 'Leha', text: 'Aku kira kamu emang nggak tahu jawabannya.' },
      { speaker: 'Hikam', text: 'Aku sengaja milih jawaban yang salah supaya bisa jalan sama kamu.' },
      { speaker: 'Leha', text: 'Ohh, pantesan.' },
    ]);
  };

  const moveLehaTo = (targetX) => {
    const destination = Math.max(3, Math.min(88, targetX));
    setFacingLeft(destination < characterX);
    setCharacterX(destination);
    setIsWalking(true);
    if (walkTimerRef.current) window.clearTimeout(walkTimerRef.current);
    walkTimerRef.current = window.setTimeout(() => setIsWalking(false), 360);
  };

  const onStageClick = (event) => {
    if (dialogue.length || activeModal || showLetter || showFinal || mediaMode) return;
    if (event.target.closest('button, .stage-top-meta, .stage-bottom-hint')) return;
    if (objectActionTimerRef.current) window.clearTimeout(objectActionTimerRef.current);
    const rect = event.currentTarget.getBoundingClientRect();
    const clickedX = ((event.clientX - rect.left) / rect.width) * 100;
    moveLehaTo(clickedX - 5);
  };

  const onObjectClick = (item) => {
    if (dialogue.length || activeModal || showLetter || showFinal || mediaMode) return;
    if (objectActionTimerRef.current) window.clearTimeout(objectActionTimerRef.current);
    // Leha walks close to the selected object before its description appears.
    moveLehaTo(item.x - 5);
    objectActionTimerRef.current = window.setTimeout(() => {
      updateFound(scene.id, item.id);
      let action = null;
      if (item.special === 'motorcutscene') { setActiveModal('motorcutscene'); return; }
      if (item.special === 'letter') action = 'letter';
      if (item.special === 'gallery') action = 'gallery';
      if (item.special === 'audio') action = 'audio';
      if (item.special === 'video') action = 'video';
      if (item.special === 'happydaysBet') action = 'happydaysBet';
      openDialogue(item.text, action);
    }, 380);
  };

  const closeDialog = () => {
    if (dialogIndex < dialogue.length - 1) {
      setDialogIndex((i) => i + 1);
      return;
    }
    const action = pendingAction;
    setDialogue([]);
    setDialogIndex(0);
    setPendingAction(null);
    if (action === 'letter') setShowLetter(true);
    if (action === 'gallery' || action === 'audio' || action === 'video') setMediaMode(action);
    if (action === 'motorcutscene' || action === 'happydaysBet') setActiveModal(action);
  };

  const goNextScene = () => {
    if (scene.isEnding) return;
    setCharacterX(43); setIsWalking(false); setFacingLeft(false);
    const nextIndex = Math.min(save.sceneIndex + 1, scenes.length - 1);
    setSave((prev) => ({ ...prev, sceneIndex: nextIndex, furthestIndex: Math.max(prev.furthestIndex || 0, nextIndex) }));
    setDialogue([]);
    setActiveModal(null);
    playSceneIntro(nextIndex);
  };

  const startSpecialGame = () => {
    if (!scene.specialGame) return;
    setActiveModal(scene.specialGame);
  };

  const completeSpecialGame = () => {
    setSave((prev) => ({ ...prev, games: { ...prev.games, [scene.id]: true } }));
    setActiveModal(null);
    openDialogue([{ speaker: 'Lumi', text: 'Mantap. Fragmen kenangannya udah kebuka. Kalau udah siap, kita bisa lanjut ke tempat berikutnya.' }]);
  };

  const closeLetter = () => {
    setShowLetter(false);
    setSave((prev) => ({ ...prev, seenLetter: true, completed: true }));
    setShowFinal(true);
  };

  const onJournalJump = (index) => {
    setActiveModal(null);
    setShowFinal(false);
    setShowLetter(false);
    setMediaMode(null);
    setCharacterX(43); setIsWalking(false); setFacingLeft(false);
    setSave((prev) => ({ ...prev, sceneIndex: index }));
    setDialogue([]);
    playSceneIntro(index);
  };

  const resetSave = () => {
    try { localStorage.removeItem(SAVE_KEY); } catch (err) { /* ignore */ }
    setSave(emptySave());
    setScreen('title');
    setDialogue([]);
    setActiveModal(null);
    setShowFinal(false);
    setShowLetter(false);
    setMediaMode(null);
  };

  const settingChanges = (settings) => setSave((prev) => ({ ...prev, settings }));
  const openSettings = () => setActiveModal('settings');
  const openJournal = () => setActiveModal('journal');

  if (screen === 'title') {
    return <>
      <TitleScreen hasSave={hasSave} onStart={startNew} onContinue={continueSaved} onSettings={openSettings} />
      {activeModal === 'settings' && <SettingsModal settings={save.settings} onChange={settingChanges} onReset={resetSave} onClose={() => setActiveModal(null)} />}
    </>;
  }

  return (
    <div className={`app-shell text-${save.settings.textSize} ${save.settings.reduceMotion ? 'reduce-motion' : ''}`}>
      <header className="game-topbar">
        <button className="game-brand" onClick={() => setActiveModal('pause')}><span className="brand-icon"><PixelMark>✦</PixelMark></span><span><b>A LITTLE QUEST</b><small>FOR YOU</small></span></button>
        <div className="topbar-center"><span className="online-dot" /> YOUR STORY IS SAVED LOCALLY <span className="topbar-separator">/</span> <span>CHAPTER {String(save.sceneIndex).padStart(2,'0')}</span></div>
        <div className="topbar-controls"><button className="topbar-icon" onClick={openJournal} title="Journal"><BookOpen size={17} /></button><button className="topbar-icon" onClick={openSettings} title="Settings"><Settings size={17} /></button><button className="topbar-icon pause-control" onClick={() => setActiveModal('pause')} title="Pause"><Pause size={17} /></button></div>
      </header>
      <main className="game-layout">
        <section className="game-main-column">
          <div className="scene-heading"><div><div className="breadcrumb"><span>THE WORLD</span><ChevronRight size={12}/><span>{scene.chapter}</span></div><h1>{scene.title}</h1></div><div className="scene-heading-meta"><span className="tiny-location-icon"><Coffee size={13}/></span><span>{scene.location}</span></div></div>
          <div className="game-stage-wrap">
            <div className={`game-stage bg-${scene.background}`} onClick={onStageClick} aria-label="Area permainan. Klik area kosong untuk menggerakkan Leha.">
              <SceneBackdrop scene={scene} />
              <div className="stage-vignette" />
              <div className="stage-top-meta"><span className="stage-chip"><span className="stage-chip-dot" /> {scene.chapter}</span><span className="stage-id">SCENE {String(save.sceneIndex + 1).padStart(2,'0')} / {String(scenes.length).padStart(2,'0')}</span></div>
              <div className={`scene-character leha-position ${isWalking ? 'is-walking' : ''} ${facingLeft ? 'facing-left' : ''}`} style={{ left: `${characterX}%` }}><LehaSprite era={scene.era} /></div>
              {['commute','happydays','band','alastua','reunion','ending'].includes(scene.id) && <div className={`scene-character hikam-position ${scene.id === 'band' ? 'hikam-stage' : ''}`}><HikamSprite /></div>}
              <StageFriends scene={scene} activeSpeaker={dialogue[dialogIndex]?.speaker} disabled={Boolean(dialogue.length) || Boolean(activeModal) || showLetter || showFinal || Boolean(mediaMode)} onTalk={talkToFriend} />
              {scene.objects.map((item) => <Hotspot key={item.id} item={item} found={foundIds.includes(item.id)} onClick={onObjectClick} disabled={Boolean(dialogue.length) || Boolean(activeModal) || showLetter || showFinal || Boolean(mediaMode)} redJacket={scene.era === 'psi'} />)}
              <div className="stage-bottom-hint"><span className="hint-cursor">↖</span> KLIK AREA KOSONG UNTUK JALAN · KLIK OBJEK UNTUK PERIKSA</div>
              <div className="stage-spark stage-spark-one">✦</div><div className="stage-spark stage-spark-two">✧</div>
            </div>
          </div>
          <DialogPanel dialog={dialogue[dialogIndex]} onNext={closeDialog} reduced={save.settings.reduceMotion} />
          {!dialogue.length && <div className="no-dialog-hint"><span className="hint-pulse" /> Klik karakter buat ngobrol, atau pilih objek buat menemukan cerita.</div>}
          <div className="game-bottom-bar"><span><span className="keycap">KLIK AREA</span> Jalan</span><span><span className="keycap">← → / A D</span> Gerak</span><span><span className="keycap">KLIK BENDA</span> Jalan & periksa</span><span><span className="keycap">SPACE</span> Lanjutkan</span><span className="autosave-label"><Check size={12}/> SAVE OTOMATIS</span></div>
        </section>
        <Sidebar scene={{ ...scene, objects: scene.objects.map((o) => ({ ...o, _found: foundIds.includes(o.id) })) }} foundCount={foundCount} totalCount={totalObjects} gameComplete={gameComplete} canContinue={canContinue} onContinue={goNextScene} onJournal={openJournal} onPause={() => setActiveModal('pause')} onStartGame={startSpecialGame} />
      </main>
      <footer className="game-footer"><span>✦ A LITTLE QUEST FOR YOU</span><span>MADE WITH MEMORY, PIXELS & A LITTLE HEART</span></footer>

      {activeModal === 'rhythm' && <RhythmGame onSuccess={completeSpecialGame} onClose={() => setActiveModal(null)} />}
      {activeModal === 'motorcutscene' && <MotorCutscene onSuccess={completeSpecialGame} onClose={() => setActiveModal(null)} />}
      {activeModal === 'happydaysBet' && <HappyDaysMiniGame onSuccess={completeHappyDays} onClose={() => setActiveModal(null)} />}
      {activeModal === 'memory' && <MemoryGame onSuccess={completeSpecialGame} onClose={() => setActiveModal(null)} />}
      {(activeModal === 'timeline' || activeModal === 'reconnect') && <SequenceGame mode={activeModal} onSuccess={completeSpecialGame} onClose={() => setActiveModal(null)} />}
      {activeModal === 'settings' && <SettingsModal settings={save.settings} onChange={settingChanges} onReset={resetSave} onClose={() => setActiveModal(null)} />}
      {activeModal === 'journal' && <JournalModal scenes={scenes} save={save} onClose={() => setActiveModal(null)} onJump={onJournalJump} />}
      {activeModal === 'pause' && <PauseModal onResume={() => setActiveModal(null)} onJournal={openJournal} onSettings={openSettings} onTitle={() => { setActiveModal(null); setScreen('title'); }} />}
      {showLetter && <LetterModal onClose={closeLetter} />}
      {showFinal && <FinalModal onReplay={resetSave} onReadLetter={() => { setShowFinal(false); setShowLetter(true); }} onMedia={(m) => { setShowFinal(false); setReturnToFinal(true); setMediaMode(m); }} onClose={() => setShowFinal(false)} />}
      {mediaMode && <MediaModal mode={mediaMode} onClose={() => { setMediaMode(null); if (returnToFinal) { setReturnToFinal(false); setShowFinal(true); } }} />}
    </div>
  );
}
