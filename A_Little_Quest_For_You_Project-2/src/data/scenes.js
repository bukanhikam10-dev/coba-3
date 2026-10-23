export const scenes = [
  {
    id: 'kopi-start', chapter: 'PROLOGUE', title: 'Kopi Kina', subtitle: 'Satu meja, satu amplop, banyak cerita.', era: 'now', background: 'cafe', location: 'Kopi Kina',
    intro: [{ speaker: 'Hikam · Narasi', tone: 'narration', text: 'Hari ini Dia ulang tahun. Gue pengin ngajak Dia mampir sebentar ke beberapa kenangan lama. Kita lihat lagi cerita yang masih nempel sampai sekarang.' }],
    objects: [
      { id: 'coffee', label: 'Secangkir kopi', kind: 'cup', x: 23, y: 59, text: [{ speaker: 'Lumi', text: 'Kopinya masih hangat. Coba periksa benda lain di meja.' }] },
      { id: 'window', label: 'Jendela kafe', kind: 'window', x: 78, y: 24, text: [{ speaker: 'Lumi', text: 'Di luar masih sore. Tempat ini bakal jadi titik awal sekaligus titik akhir perjalanan kita.' }] },
      { id: 'envelope', label: 'Amplop kecil', kind: 'envelope', x: 57, y: 61, text: [{ speaker: 'Leha', text: 'Ini apaan? Dari siapa?' }, { speaker: 'Lumi', text: 'Buka aja. Kayaknya memang buat kamu.' }, { speaker: 'Hikam · Narasi', tone: 'narration', text: 'Sebuah foto lama muncul dari dalam amplop.' }] },
    ],
  },
  {
    id: 'childhood', chapter: 'CHAPTER 01', title: 'A Little Girl, A Big Journey', subtitle: 'Semuanya dimulai jauh sebelum cerita ini.', era: 'child', background: 'home', location: 'Rumah masa kecil',
    intro: [{ speaker: 'Hikam · Narasi', tone: 'narration', text: 'Sebelum semua ini, Dia tumbuh dengan kasih sayang orang tuanya.' }, { speaker: 'Lumi', text: 'Kita cuma mampir sebentar di sini. Banyak cerita masa kecil yang belum kita tahu.' }],
    objects: [
      { id: 'family-photo', label: 'Foto keluarga', kind: 'photo', x: 26, y: 27, text: [{ speaker: 'Hikam · Narasi', tone: 'narration', text: 'Dari rumah inilah cerita Dia dimulai.' }, { speaker: 'Lumi', text: 'Oke, lanjut ke masa sekolah, yuk.' }] },
      { id: 'storybook', label: 'Buku kecil', kind: 'book', x: 66, y: 65, text: [{ speaker: 'Lumi', text: 'Setiap perjalanan punya halaman pertama. Kita lanjut ke cerita sekolahnya, ya.' }] },
    ],
  },
  {
    id: 'smp', chapter: 'CHAPTER 02', title: 'SMPN 205', subtitle: 'Checkpoint masa sekolah.', era: 'smp', background: 'school', location: 'SMPN 205',
    intro: [{ speaker: 'Hikam · Narasi', tone: 'narration', text: 'Berikutnya, Dia sekolah di SMPN 205.' }, { speaker: 'Lumi', text: 'Detail cerita era ini belum banyak. Kita lanjut ke bagian yang lebih banyak kenangannya, ya.' }],
    objects: [
      { id: 'smp-board', label: 'Papan sekolah', kind: 'board', x: 51, y: 25, text: [{ speaker: 'Leha', text: 'SMPN 205. Lama juga ya perjalanan sekolah.' }] },
      { id: 'smp-bag', label: 'Tas sekolah', kind: 'bag', x: 22, y: 65, text: [{ speaker: 'Lumi', text: 'Ada banyak cerita yang belum kita tahu dari era ini. Nggak perlu sok tahu, kita lanjut ke bagian yang lebih banyak kenangannya.' }] },
      { id: 'donal', label: 'Catatan “Donal”', kind: 'note', x: 77, y: 62, text: [{ speaker: 'Hikam · Narasi', tone: 'narration', text: 'Di catatan ini cuma tertulis: “Donal”. Simpan dulu sebagai easter egg.' }] },
    ],
  },
  {
    id: 'sma-class', chapter: 'CHAPTER 03', title: 'SMAN 94: The Golden Days', subtitle: 'Kelas IPS, temen-temen, dan cerita yang mulai ramai.', era: 'sma', background: 'classroom', location: 'Kelas IPS · SMAN 94',
    intro: [
      { speaker: 'Aini', text: 'Leh, tugas yang kemarin udah selesai belum?' },
      { speaker: 'Leha', text: 'Yang mana dulu nih?' },
      { speaker: 'Nurul', text: 'Yang kemarin kita bahas di kelas.' },
      { speaker: 'Leha', text: 'Bentar, gua cek dulu.' },
    ],
    objects: [
      { id: 'sma-board', label: 'Papan tulis', kind: 'board', x: 49, y: 26, text: [{ speaker: 'Leha', text: 'Kelas IPS lagi. Ada tugas apa lagi nih?' }, { speaker: 'Aini', text: 'Leh, tugas yang kemarin udah selesai belum?' }, { speaker: 'Leha', text: 'Yang mana dulu nih?' }, { speaker: 'Nurul', text: 'Yang kemarin kita bahas di kelas.' }, { speaker: 'Leha', text: 'Bentar, gua cek dulu.' }] },
      { id: 'sma-notebook', label: 'Buku catatan', kind: 'book', x: 25, y: 64, text: [{ speaker: 'Lumi', text: 'Klik teman-teman Leha kalau mau ngobrol. Ada Aini, Nurul, Pista, Ayu, sama Jawir.' }] },
      { id: 'group-photo', label: 'Foto kelas', kind: 'photo', x: 76, y: 31, text: [{ speaker: 'Leha', text: 'Nanti foto kelas jangan lupa kirim ke grup, ya.' }, { speaker: 'Ayu', text: 'Iya, ntar gua kirim.' }] },
    ],
  },
  {
    id: 'commute', chapter: 'CHAPTER 03', title: 'Pulang Bareng', subtitle: 'Gerbang sekolah, motor Hikam, dan jalan pulang.', era: 'sma', background: 'schoolgate', location: 'Gerbang SMAN 94', specialGame: 'motorcutscene', specialLabel: 'Mulai perjalanan motor',
    intro: [{ speaker: 'Lumi', text: 'Bel pulang. Klik motor Hikam kalau mau mulai perjalanan pulang bareng.' }],
    objects: [
      { id: 'gate', label: 'Gerbang sekolah', kind: 'gate', x: 40, y: 27, text: [{ speaker: 'Leha', text: 'Akhirnya pulang juga.' }, { speaker: 'Hikam', text: 'Pulang bareng?' }] },
      { id: 'motor', label: 'Motor Hikam', kind: 'bike', x: 64, y: 60, special: 'motorcutscene', text: [{ speaker: 'Hikam', text: 'Pulang bareng?' }, { speaker: 'Leha', text: 'Nggak ngerepotin?' }, { speaker: 'Hikam', text: 'Nggak kok. Yuk.' }] },
      { id: 'route', label: 'Jalan pulang', kind: 'path', x: 82, y: 66, text: [{ speaker: 'Lumi', text: 'Perjalanan ini punya cutscene sendiri. Klik motor untuk mulai boncengan.' }] },
    ],
  },
  {
    id: 'happydays', chapter: 'CHAPTER 03', title: 'Happy Days: The First Date', subtitle: 'Satu taruhan es krim yang masih diingat Hikam.', era: 'sma', background: 'restaurant', location: 'Happy Days', specialGame: 'happydaysBet', specialLabel: 'Mainkan taruhan es krim',
    intro: [{ speaker: 'Hikam', text: 'Kamu masih inget tempat ini?' }, { speaker: 'Leha', text: 'Happy Days, kan? Kayaknya pernah ke sini.' }, { speaker: 'Hikam', text: 'Pernah. First date kita, inget nggak?' }, { speaker: 'Leha', text: 'Oh iya! Yang taruhan es krim itu?' }],
    objects: [
      { id: 'bet-card', label: 'Kartu taruhan', kind: 'note', x: 35, y: 54, special: 'happydaysBet', text: [{ speaker: 'Hikam', text: 'Kita taruhan yuk. Yang kalah traktir es krim.' }, { speaker: 'Leha', text: 'Oke, ayo. Tapi jangan sengaja ngalah ya.' }] },
      { id: 'ice-cream', label: 'Es krim', kind: 'icecream', x: 62, y: 46, text: [{ speaker: 'Leha', text: 'Aku inget es krimnya. Tapi detail taruhan kita tadi hampir lupa.' }, { speaker: 'Hikam', text: 'Gapapa. Aku masih inget kok.' }] },
      { id: 'receipt', label: 'Nota kecil', kind: 'note', x: 74, y: 65, text: [{ speaker: 'Lumi', text: 'Kalau udah siap, klik kartu taruhan buat mainin ulang momen ini.' }] },
    ],
  },
  {
    id: 'band', chapter: 'CHAPTER 03', title: 'SMAN 2 Tangerang: Band Competition', subtitle: 'Hari ketika band Hikam pulang sebagai juara satu.', era: 'sma', background: 'stage', location: 'Panggung lomba band', specialGame: 'rhythm', specialLabel: 'Mainkan mini game ritme',
    intro: [{ speaker: 'Hikam', text: 'Kamu jadi nonton nanti?' }, { speaker: 'Leha', text: 'Iya, aku udah di sini.' }, { speaker: 'Hikam', text: 'Oke. Doain lancar, ya.' }, { speaker: 'Lumi', text: 'Gas, bantu Hikam jaga ritme panggungnya!' }],
    objects: [
      { id: 'guitar', label: 'Gitar di panggung', kind: 'guitar', x: 29, y: 53, text: [{ speaker: 'Lumi', text: 'Oke, waktunya naik panggung. Ikuti ritmenya buat menyelesaikan kenangan ini.' }] },
      { id: 'spotlight', label: 'Lampu panggung', kind: 'spark', x: 70, y: 27, text: [{ speaker: 'Leha', text: 'Kalian juara satu! Keren banget.' }, { speaker: 'Hikam', text: 'Makasih udah dateng dan nonton.' }] },
    ],
  },
  {
    id: 'alastua', chapter: 'CHAPTER 03', title: 'Alas Tua & Little Dreams', subtitle: 'Minumannya lupa, obrolan cita-citanya masih diingat.', era: 'sma', background: 'drinkshop', location: 'Alas Tua',
    intro: [{ speaker: 'Hikam', text: 'Kamu masih inget kita sering beli minuman di sini?' }, { speaker: 'Leha', text: 'Inget tempatnya. Nama minumannya yang lupa.' }, { speaker: 'Hikam', text: 'Wkwk, ya udah. Yang penting tempatnya masih inget.' }],
    objects: [
      { id: 'drink', label: 'Gelas minuman', kind: 'cup', x: 31, y: 58, text: [{ speaker: 'Leha', text: 'Aku inget rasanya enak banget, tapi nama minumannya beneran lupa.' }, { speaker: 'Hikam', text: 'Gapapa. Yang penting dulu sering beli bareng.' }] },
      { id: 'leha-dream', label: 'Cita-cita Leha', kind: 'star', x: 57, y: 39, text: [{ speaker: 'Hikam', text: 'Aku masih inget waktu kamu bilang pengin jadi Menteri Pemberdayaan Wanita.' }, { speaker: 'Leha', text: 'Serius masih inget?' }, { speaker: 'Hikam', text: 'Iya. Waktu itu aku beneran kagum dengernya.' }] },
      { id: 'hikam-dream', label: 'Cita-cita Hikam', kind: 'book', x: 75, y: 62, text: [{ speaker: 'Leha', text: 'Dulu kamu pengin masuk STIS, kan?' }, { speaker: 'Hikam', text: 'Iya. Ternyata nggak jadi, wkwk.' }, { speaker: 'Leha', text: 'Ya namanya juga hidup. Jalannya suka belok.' }] },
    ],
  },
  {
    id: 'graduation', chapter: 'CHAPTER 03', title: 'After Graduation', subtitle: 'Pelan-pelan, jalan hidup mulai berbeda.', era: 'sma', background: 'emptyclass', location: 'Kelas setelah kelulusan',
    intro: [{ speaker: 'Hikam · Narasi', tone: 'narration', text: 'Setelah SMA, Hikam lanjut kuliah di UIN. Mereka masih beberapa kali jalan, sampai akhirnya break saat Dia fokus mengejar PTN impiannya.' }],
    objects: [
      { id: 'calendar', label: 'Kalender kelulusan', kind: 'calendar', x: 50, y: 27, text: [{ speaker: 'Hikam · Narasi', tone: 'narration', text: 'Setelah SMA, kehidupan mereka mulai bergerak ke arah masing-masing.' }] },
      { id: 'empty-desk', label: 'Meja kosong', kind: 'book', x: 70, y: 65, text: [{ speaker: 'Lumi', text: 'Bab sekolah selesai. Sekarang waktunya lihat ke mana langkah Dia berikutnya.' }] },
    ],
  },
  {
    id: 'ui', chapter: 'CHAPTER 04', title: 'UI: The Yellow Jacket Era', subtitle: 'Dari mimpi masuk PTN ke almamater kuning.', era: 'ui', background: 'campus', location: 'Universitas Indonesia', specialGame: 'memory', specialLabel: 'Mainkan puzzle kenangan kampus',
    intro: [{ speaker: 'Mentari', text: 'Leh, jadi beneran anak UI sekarang.' }, { speaker: 'Leha', text: 'Gua juga masih agak nggak nyangka.' }, { speaker: 'Nadia', text: 'Nanti ikut keliling kampus, nggak?' }, { speaker: 'Leha', text: 'Gas. Gua belum hafal jalannya.' }],
    objects: [
      { id: 'yellow-jacket', label: 'Almamater kuning', kind: 'jacket', x: 27, y: 54, text: [{ speaker: 'Hikam · Narasi', tone: 'narration', text: 'Story ospek Dia masih diingat Hikam. Dari layar HP aja, rasanya ikut bangga.' }] },
      { id: 'campus-board', label: 'Papan informasi kampus', kind: 'board', x: 72, y: 27, text: [{ speaker: 'Leha', text: 'Di sini manggil dosen sama mahasiswa Mas/Mbak, ya?' }, { speaker: 'Mentari', text: 'Iya. Awal-awal juga agak aneh, lama-lama biasa.' }, { speaker: 'Nadia', text: 'Mbak Leha, ayo lanjut keliling kampusnya.' }] },
      { id: 'friends', label: 'Foto bareng Mentari & Nadia', kind: 'photo', x: 72, y: 64, text: [{ speaker: 'Mentari', text: 'Leh, nanti ikut ke kantin nggak?' }, { speaker: 'Leha', text: 'Ikut. Gua laper banget dari tadi.' }, { speaker: 'Nadia', text: 'Katanya mau hemat.' }, { speaker: 'Leha', text: 'Hemat bukan berarti berhenti makan, Nad.' }] },
    ],
  },
  {
    id: 'dpr', chapter: 'CHAPTER 05', title: 'Internship at DPR', subtitle: 'Salah satu langkah di dunia profesional.', era: 'work', background: 'office', location: 'DPR',
    intro: [{ speaker: 'Hikam · Narasi', tone: 'narration', text: 'Hikam tahu Dia magang di DPR dari story Instagram. Dari layar HP aja, ikut bangga rasanya.' }],
    objects: [
      { id: 'intern-id', label: 'Kartu identitas magang', kind: 'badge', x: 27, y: 58, text: [{ speaker: 'Hikam · Narasi', tone: 'narration', text: 'Salah satu story yang bikin Hikam berhenti scroll sebentar. Dari layar HP aja, ikut bangga rasanya.' }] },
      { id: 'documents', label: 'Map dokumen', kind: 'folder', x: 56, y: 62, text: [{ speaker: 'Lumi', text: 'Satu fase lagi selesai. Perjalanannya masih berlanjut.' }] },
      { id: 'window-office', label: 'Jendela kantor', kind: 'window', x: 76, y: 25, text: [{ speaker: 'Lumi', text: 'Kadang kabar baik datang dari jauh. Oke, lanjut ke chapter berikutnya.' }] },
    ],
  },
  {
    id: 'politics', chapter: 'CHAPTER 05', title: 'The Red Jacket Era', subtitle: 'Dunia profesional yang terus berkembang.', era: 'psi', background: 'politics', location: 'Dunia politik profesional', specialGame: 'timeline', specialLabel: 'Susun timeline karier',
    intro: [{ speaker: 'Hikam · Narasi', tone: 'narration', text: 'Dia makin aktif di dunia politik profesional, bergabung dengan PSI, dan sekarang bekerja sebagai asisten Wakil Menteri. Hidup mereka pun berjalan dengan kesibukan masing-masing.' }],
    objects: [
      { id: 'red-jacket', label: 'Outer merah', kind: 'jacket', x: 28, y: 51, text: [{ speaker: 'Lumi', text: 'Outfit kerja era baru. Siap lanjut?' }] },
      { id: 'workdesk', label: 'Meja kerja', kind: 'folder', x: 55, y: 63, text: [{ speaker: 'Hikam · Narasi', tone: 'narration', text: 'Hikam bangga melihat Dia terus menjalani pilihan hidupnya, meski sekarang mereka punya kesibukan masing-masing.' }] },
      { id: 'timeline-board', label: 'Papan perjalanan karier', kind: 'board', x: 76, y: 27, text: [{ speaker: 'Lumi', text: 'Coba susun beberapa langkah perjalanan ini. Urutannya ada di ingatan yang baru kamu temukan.' }] },
    ],
  },
  {
    id: 'reunion', chapter: 'CHAPTER 06', title: '3 October: The Unexpected Reunion', subtitle: 'Ketemu lagi setelah sekian lama.', era: 'now', background: 'reunion', location: 'Pertemuan kembali', specialGame: 'reconnect', specialLabel: 'Sambungkan fragmen kenangan',
    intro: [{ speaker: 'Hikam · Narasi', tone: 'narration', text: '3 Oktober. Setelah sekian lama, mereka akhirnya ketemu lagi.' }, { speaker: 'Hikam', text: 'Aku seneng banget akhirnya bisa ketemu kamu lagi.' }, { speaker: 'Leha', text: 'Aku juga. Udah lama banget, ya.' }],
    objects: [
      { id: 'october-note', label: 'Catatan 3 Oktober', kind: 'note', x: 31, y: 58, text: [{ speaker: 'Hikam', text: 'Aku seneng banget akhirnya bisa ketemu kamu lagi.' }, { speaker: 'Hikam', text: 'Rasanya kayak nostalgia masa SMA, tapi sekarang kita udah sama-sama punya banyak cerita baru.' }] },
      { id: 'old-photo', label: 'Foto lama', kind: 'photo', x: 57, y: 33, text: [{ speaker: 'Hikam', text: 'Aku seneng banget akhirnya bisa ketemu kamu lagi.' }, { speaker: 'Leha', text: 'Aku juga. Rasanya aneh, tapi menyenangkan.' }] },
      { id: 'new-chapter', label: 'Halaman baru', kind: 'book', x: 73, y: 62, text: [{ speaker: 'Lumi', text: 'Tinggal satu perjalanan terakhir. Yuk, balik ke tempat kita mulai.' }] },
    ],
  },
  {
    id: 'ending', chapter: 'FINAL CHAPTER', title: 'Kopi Kina: A Little Gift for You', subtitle: 'Satu surat, khusus buat hari ini.', era: 'now', background: 'cafe', location: 'Kopi Kina · Ulang tahun', isEnding: true,
    intro: [{ speaker: 'Hikam · Narasi', tone: 'narration', text: 'Akhirnya balik lagi ke Kopi Kina. Kali ini, Hikam punya sesuatu buat Dia.' }, { speaker: 'Lumi', text: 'Udah sampai di akhir quest. Buka amplopnya kalau siap.' }],
    objects: [
      { id: 'birthday-letter', label: 'Surat dari Hikam', kind: 'envelope', x: 54, y: 57, text: [{ speaker: 'Hikam', text: 'Aku nyiapin sesuatu buat kamu. Baca pelan-pelan ya.' }], special: 'letter' },
      { id: 'photo-memory', label: 'Galeri kenangan', kind: 'photo', x: 28, y: 62, text: [{ speaker: 'Lumi', text: 'Galeri kenangan bisa kamu isi nanti dengan foto-foto pilihanmu.' }], special: 'gallery' },
      { id: 'voice-note', label: 'Voice note', kind: 'note', x: 75, y: 62, text: [{ speaker: 'Lumi', text: 'File voice note belum ditambahkan. Kamu bisa memasukkannya ke folder public/media nanti.' }], special: 'audio' },
      { id: 'video-message', label: 'Video ucapan', kind: 'photo', x: 79, y: 43, text: [{ speaker: 'Lumi', text: 'Kalau ada video ucapan, buka ini buat nonton.' }], special: 'video' },
    ],
  },
];

export const birthdayLetter = [
  'Aku nggak tahu semua hal yang pernah kamu lewatin. Ada banyak bagian hidup kamu yang mungkin nggak pernah aku tahu.',
  'Tapi aku seneng pernah jadi bagian dari beberapa cerita itu.',
  'Aku bangga sama perjalanan kamu, sama hal-hal yang udah kamu perjuangin, dan sama diri kamu yang terus tumbuh sampai sekarang.',
  'Semoga di umur yang baru ini, kamu punya banyak hal baik buat dijalanin, banyak alasan buat bahagia, dan orang-orang yang selalu mendukung kamu.',
  'Happy birthday, ya. — Hikam',
];
