import React from 'react';

const looks = {
  child: { outfit: '#8BAE9A', hijab: '#EADCC5', scarf: '#D6C7AF', shoes: '#594A47' },
  smp: { outfit: '#D8DFE7', hijab: '#F8F4E9', scarf: '#B9C8D7', shoes: '#3F4A60' },
  sma: { outfit: '#C9CFD8', hijab: '#F8F4E9', scarf: '#AAB4C3', shoes: '#3F4A60' },
  ui: { outfit: '#E4B73F', hijab: '#E8DCC5', scarf: '#D6C7AF', shoes: '#4A3D39' },
  work: { outfit: '#BFC8CB', hijab: '#E8DCC5', scarf: '#CDBEAA', shoes: '#3F4A60' },
  psi: { outfit: '#B84752', hijab: '#E8DCC5', scarf: '#CDBEAA', shoes: '#3F4A60' },
  now: { outfit: '#9B8DB8', hijab: '#D8CBE4', scarf: '#B9A8C9', shoes: '#3F3B53' },
};

export function LehaSprite({ era = 'now', small = false, walking = false }) {
  const c = looks[era] || looks.now;
  return (
    <svg className={`pixel-character leha-sprite ${small ? 'small' : ''} ${walking ? 'walking' : ''}`} viewBox="0 0 40 56" role="img" aria-label="Leha, karakter perempuan berhijab" shapeRendering="crispEdges">
      {/* shadow */}<rect x="7" y="51" width="26" height="3" fill="#172033" opacity=".3" />
      {/* legs and shoes */}<rect x="13" y="39" width="5" height="10" fill="#B58C72"/><rect x="22" y="39" width="5" height="10" fill="#B58C72"/><rect x="11" y="47" width="8" height="4" fill={c.shoes}/><rect x="21" y="47" width="8" height="4" fill={c.shoes}/>
      {/* body */}<rect x="9" y="24" width="22" height="17" fill={c.outfit}/><rect x="6" y="27" width="5" height="12" fill={c.outfit}/><rect x="29" y="27" width="5" height="12" fill={c.outfit}/><rect x="10" y="39" width="20" height="3" fill={c.scarf}/>
      {/* hijab outer silhouette */}<path d="M10 12 L12 5 L18 2 L25 3 L30 9 L31 22 L34 31 L30 36 L10 36 L6 31 L9 22 Z" fill={c.hijab}/><rect x="10" y="12" width="20" height="14" fill={c.hijab}/>
      {/* face */}<rect x="14" y="8" width="12" height="14" fill="#DDA989"/><rect x="13" y="10" width="2" height="8" fill="#C99273"/><rect x="25" y="10" width="2" height="8" fill="#C99273"/>
      {/* eyes */}<rect x="16" y="14" width="2" height="2" fill="#342C35"/><rect x="22" y="14" width="2" height="2" fill="#342C35"/><rect x="18" y="18" width="4" height="1" fill="#A85E61"/>
      {/* hijab framing face */}<rect x="11" y="9" width="3" height="12" fill={c.hijab}/><rect x="26" y="9" width="3" height="12" fill={c.hijab}/><rect x="13" y="21" width="14" height="4" fill={c.hijab}/><path d="M10 24 L14 21 L16 28 L20 32 L24 28 L26 21 L30 24 L30 35 L10 35 Z" fill={c.hijab}/>
      {/* outfit detail */}<rect x="19" y="25" width="2" height="11" fill={c.scarf} opacity=".85"/><rect x="14" y="30" width="3" height="3" fill="#F8EBC9" opacity=".7"/>
      {era === 'ui' && <><rect x="9" y="25" width="22" height="3" fill="#D2A72F"/><rect x="27" y="29" width="3" height="4" fill="#F3D873"/></>}
      {era === 'psi' && <><rect x="10" y="25" width="20" height="4" fill="#8E303C"/><rect x="26" y="30" width="3" height="3" fill="#EADCC5"/></>}
      {era === 'sma' && <><rect x="10" y="25" width="20" height="4" fill="#F6F1E5"/><rect x="18" y="28" width="4" height="6" fill="#8993A3"/></>}
    </svg>
  );
}

export function HikamSprite({ small = false }) {
  return (
    <svg className={`pixel-character hikam-sprite ${small ? 'small' : ''}`} viewBox="0 0 40 56" role="img" aria-label="Hikam, karakter laki-laki" shapeRendering="crispEdges">
      <rect x="7" y="51" width="26" height="3" fill="#172033" opacity=".3" />
      <rect x="13" y="39" width="5" height="10" fill="#B58C72"/><rect x="22" y="39" width="5" height="10" fill="#B58C72"/><rect x="11" y="47" width="8" height="4" fill="#303349"/><rect x="21" y="47" width="8" height="4" fill="#303349"/>
      <rect x="9" y="24" width="22" height="17" fill="#5C6883"/><rect x="6" y="27" width="5" height="12" fill="#5C6883"/><rect x="29" y="27" width="5" height="12" fill="#5C6883"/>
      <rect x="12" y="5" width="16" height="18" fill="#DDA989"/><rect x="10" y="7" width="4" height="13" fill="#B77B5E"/><rect x="26" y="7" width="4" height="13" fill="#B77B5E"/>
      <rect x="11" y="5" width="17" height="5" fill="#43343A"/><rect x="9" y="7" width="4" height="5" fill="#43343A"/><rect x="16" y="3" width="10" height="4" fill="#43343A"/>
      <rect x="15" y="14" width="2" height="2" fill="#342C35"/><rect x="23" y="14" width="2" height="2" fill="#342C35"/><rect x="18" y="19" width="5" height="1" fill="#A85E61"/>
      <rect x="18" y="25" width="4" height="10" fill="#8791A8"/><rect x="13" y="29" width="4" height="3" fill="#D8CBE4"/>
    </svg>
  );
}

export function LumiSprite({ tiny = false }) {
  return (
    <svg className={`lumi-sprite ${tiny ? 'tiny' : ''}`} viewBox="0 0 40 40" aria-label="Lumi, bintang pemandu" role="img" shapeRendering="crispEdges">
      <polygon points="20,1 25,13 38,14 28,23 31,37 20,30 9,37 12,23 2,14 15,13" fill="#F3D783" stroke="#A77751" strokeWidth="2" />
      <rect x="14" y="17" width="3" height="3" fill="#3B3548"/><rect x="23" y="17" width="3" height="3" fill="#3B3548"/><rect x="17" y="24" width="7" height="2" fill="#9E6264"/>
      <rect x="6" y="5" width="3" height="3" fill="#FFF0C5"/><rect x="31" y="28" width="3" height="3" fill="#FFF0C5"/>
    </svg>
  );
}

const friendLooks = {
  Aini: { outfit: '#C9D1D9', hijab: '#F0E1C8', scarf: '#C5CDD4' },
  Nurul: { outfit: '#C9D1D9', hijab: '#C8B9DC', scarf: '#B3A3CB' },
  Pista: { outfit: '#C9D1D9', hijab: '#D4B4B0', scarf: '#B9898C' },
  Ayu: { outfit: '#C9D1D9', hijab: '#B7C7B5', scarf: '#9EAF9C' },
  Mentari: { outfit: '#BFC9C6', hijab: '#C4B2D8', scarf: '#AD9CC3' },
  Nadia: { outfit: '#BFC9C6', hijab: '#E0C6A7', scarf: '#C7AC8D' },
  Jawir: { outfit: '#5B7387', hijab: '#43343A', scarf: '#43343A' },
};

export function FriendSprite({ name = 'Aini', small = false }) {
  const c = friendLooks[name] || friendLooks.Aini;
  const isJawir = name === 'Jawir';
  return (
    <svg className={`pixel-character friend-sprite ${small ? 'small' : ''} ${isJawir ? 'is-male' : 'is-female'}`} viewBox="0 0 40 56" role="img" aria-label={`Karakter ${name}`} shapeRendering="crispEdges">
      <rect x="7" y="51" width="26" height="3" fill="#172033" opacity=".3" />
      <rect x="13" y="39" width="5" height="10" fill="#B58C72"/><rect x="22" y="39" width="5" height="10" fill="#B58C72"/>
      <rect x="11" y="47" width="8" height="4" fill="#3F4A60"/><rect x="21" y="47" width="8" height="4" fill="#3F4A60"/>
      <rect x="9" y="24" width="22" height="17" fill={c.outfit}/><rect x="6" y="27" width="5" height="12" fill={c.outfit}/><rect x="29" y="27" width="5" height="12" fill={c.outfit}/>
      {!isJawir && <><path d="M10 12 L12 5 L18 2 L25 3 L30 9 L31 22 L34 31 L30 36 L10 36 L6 31 L9 22 Z" fill={c.hijab}/><rect x="10" y="12" width="20" height="14" fill={c.hijab}/></>}
      {isJawir && <><path d="M10 12 L12 5 L18 2 L25 3 L30 9 L30 16 L26 11 L15 11 L10 16 Z" fill="#43343A"/><rect x="10" y="7" width="4" height="9" fill="#43343A"/></>}
      <rect x="14" y="8" width="12" height="14" fill="#DDA989"/><rect x="13" y="10" width="2" height="8" fill="#C99273"/><rect x="25" y="10" width="2" height="8" fill="#C99273"/>
      <rect x="16" y="14" width="2" height="2" fill="#342C35"/><rect x="22" y="14" width="2" height="2" fill="#342C35"/><rect x="18" y="18" width="4" height="1" fill="#A85E61"/>
      {!isJawir && <><rect x="11" y="9" width="3" height="12" fill={c.hijab}/><rect x="26" y="9" width="3" height="12" fill={c.hijab}/><path d="M10 24 L14 21 L16 28 L20 32 L24 28 L26 21 L30 24 L30 35 L10 35 Z" fill={c.hijab}/><rect x="10" y="39" width="20" height="3" fill={c.scarf}/></>}
      <rect x="19" y="25" width="2" height="11" fill={isJawir ? '#8998A7' : c.scarf} opacity=".9"/><rect x="14" y="30" width="3" height="3" fill="#F8EBC9" opacity=".7"/>
    </svg>
  );
}
