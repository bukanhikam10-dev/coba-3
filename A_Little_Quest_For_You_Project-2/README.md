# A Little Quest for You — Birthday RPG

Cozy pixel-art story adventure for Leha's birthday, with Hikam as the narrator/NPC and Lumi as gameplay guide.

## Fastest way to play

Open `playable.html` in a desktop browser. This is a self-contained edition with inline HTML, CSS, and JavaScript; it does not require npm or installation. Progress is saved locally when browser storage is available.

## Latest gameplay revision

- Shorter narration and more conversations between characters.
- Clickable sprite characters for Aini, Nurul, Pista, Ayu, and Jawir in the SMAN 94 classroom.
- Clickable sprite characters for Mentari and Nadia in the UI scene. They talk directly with Leha using the lu/gua register.
- A motorcycle ride cutscene with Hikam and Leha, moving road scenery, and dialogue during the trip.
- Happy Days mini-game where the player revisits the ice-cream bet and sees the reveal through Leha/Hikam dialogue.
- Band rhythm mini-game and story puzzles remain part of the journey.
- Ending lets you select photos, a voice note, and a video locally for the current browser session.

## Controls

- Click empty area to move Leha.
- Press `←` / `→` or `A` / `D` to move her.
- Click a story object to walk over and inspect it.
- Click friend sprites to start a conversation.
- Use `LANJUT` / `SPACE` / `ENTER` to advance dialogue where available.
- Motorcycle scene: press `NAIK MOTOR`, then advance the conversation until they arrive.
- Happy Days: choose who paid for the ice cream bet.

## React + Vite source project

The modular source edition is also included. In Replit or another Node.js environment:

```bash
npm install
npm run dev
```

Use `npm run build` to build a production version. A dependency install/build has not been verified in this working environment, so run the commands in Replit to confirm the environment-specific build.

## Where to edit the story

- React scenes and scripted dialogue: `src/data/scenes.js`
- Birthday letter: `birthdayLetter` in `src/data/scenes.js`
- Character sprites: `src/components/PixelCharacters.jsx`
- Motor cutscene and Happy Days interaction: `src/components/StoryCutscenes.jsx`
- Visual styles: `src/styles/game.css` and `src/styles/global.css`
- Standalone story script: embedded in `playable.html`

Language rules: Hikam's narration mostly refers to Leha as “Dia”; personal direct dialogue between Hikam and Leha uses “aku–kamu”; Leha talks to her SMA/campus friends using “lu–gua”; Lumi is the gameplay guide.

## Adding personal photos, voice note, and video

### Try files immediately

In the ending, open **Galeri Kenangan**, **Voice Note**, or **Video Ucapan**, then choose files from your computer. The standalone edition previews them locally during the current browser session; selecting files this way does not upload them anywhere, and the selection is temporary.

### Include files permanently in the React website

Put media files in the public folder, for example:

```text
public/media/voice-note.mp3
public/media/birthday-video.mp4
public/media/memories/01-sma.jpg
public/media/memories/02-happy-days.jpg
public/media/memories/03-ui.jpg
public/media/memories/04-reunion.jpg
```

Then edit `src/data/giftMedia.js`:

```js
export const giftMedia = {
  galleryImages: [
    '/media/memories/01-sma.jpg',
    '/media/memories/02-happy-days.jpg',
    '/media/memories/03-ui.jpg',
    '/media/memories/04-reunion.jpg',
  ],
  voiceNotePath: '/media/voice-note.mp3',
  birthdayVideoPath: '/media/birthday-video.mp4',
};
```

Use actual filenames that match the files you added. For photos, use JPG, PNG, or WebP; for audio, MP3 is a safe default; for video, MP4 is recommended.

**Privacy note:** files placed under `public/` can be accessed by people who can access the published website. Only include media you are comfortable sharing with anyone who has the URL.

## Visual assets and limitations

The characters and room art in this first pass are locally drawn with CSS/SVG pixel-style shapes so the game can run without external image URLs. They are replaceable with custom pixel-art sprites later. Dialogue and friend scenes are implemented as interactions, but this is still a first playable pass; the scene art and character animation can be polished further.
