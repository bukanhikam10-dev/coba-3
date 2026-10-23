import React from 'react';

const palettes = {
  cafe: { wall:'#685466', wall2:'#8A6B78', floor:'#AD856D', floor2:'#956E60', night:'#303349', light:'#F0D89B', plant:'#6F9277' },
  home: { wall:'#9D867A', wall2:'#BDA08A', floor:'#B98E6B', floor2:'#A87D5E', night:'#4B536A', light:'#F5D9A0', plant:'#7E9A7F' },
  school: { wall:'#9AAAB0', wall2:'#C8D3D0', floor:'#9C9F91', floor2:'#818B80', night:'#4E6870', light:'#F6F0D9', plant:'#7E9A7F' },
  classroom: { wall:'#C5C7B7', wall2:'#DAD7C7', floor:'#9F8A70', floor2:'#856D5A', night:'#465C63', light:'#F6F0D9', plant:'#7E9A7F' },
  schoolgate: { wall:'#8FA58C', wall2:'#C0C99B', floor:'#B4A383', floor2:'#8A997D', night:'#465D5F', light:'#F6D79B', plant:'#4F805D' },
  restaurant: { wall:'#8A6372', wall2:'#C29AA2', floor:'#A67B69', floor2:'#8C655B', night:'#403D54', light:'#F2D594', plant:'#729077' },
  stage: { wall:'#282D49', wall2:'#414367', floor:'#463F60', floor2:'#302E4B', night:'#20243A', light:'#F4D17A', plant:'#596D76' },
  drinkshop: { wall:'#B1A18B', wall2:'#D9C5A6', floor:'#A88265', floor2:'#8B6A55', night:'#4F555B', light:'#F5D9A0', plant:'#698568' },
  emptyclass: { wall:'#7A7C8B', wall2:'#A5A1A1', floor:'#8A715E', floor2:'#735A4D', night:'#35394F', light:'#F3C989', plant:'#77896F' },
  campus: { wall:'#839A8C', wall2:'#C0CFB6', floor:'#9FAD92', floor2:'#7F967E', night:'#52675C', light:'#F4D68A', plant:'#5F8A63' },
  office: { wall:'#8C9BA5', wall2:'#C4CED0', floor:'#7E8792', floor2:'#687683', night:'#364653', light:'#E4D8B9', plant:'#75917E' },
  politics: { wall:'#5E596A', wall2:'#A69AA0', floor:'#6C6877', floor2:'#514E61', night:'#303349', light:'#F1D69C', plant:'#728874' },
  reunion: { wall:'#72768C', wall2:'#B4A0A1', floor:'#A48473', floor2:'#8D6D62', night:'#373B56', light:'#F3D89B', plant:'#6F9277' },
};

function PixelWindow({ x=80, y=55, w=170, h=125, c }) {
  return <g shapeRendering="crispEdges"><rect x={x-8} y={y-8} width={w+16} height={h+16} fill="#4B4257"/><rect x={x} y={y} width={w} height={h} fill={c}/><rect x={x+7} y={y+7} width={w-14} height={h-14} fill="#9AAEC0"/><rect x={x+7} y={y+7} width={w-14} height={(h-14)*.55} fill="#697E9B"/><rect x={x+w/2-4} y={y} width="8" height={h} fill="#E7D5B2"/><rect x={x} y={y+h/2-4} width={w} height="8" fill="#E7D5B2"/><rect x={x+18} y={y+18} width="23" height="13" fill="#F0D89B"/><rect x={x+w-41} y={y+h-31} width="22" height="13" fill="#F0D89B"/></g>;
}

function Plant({x=70,y=350,c='#6F9277'}) {
  return <g shapeRendering="crispEdges"><rect x={x+7} y={y+20} width="29" height="28" fill="#B97868"/><rect x={x+3} y={y+16} width="37" height="7" fill="#D99B81"/><rect x={x+18} y={y-7} width="7" height="27" fill="#4E785C"/><rect x={x+1} y={y-2} width="21" height="12" fill={c}/><rect x={x+23} y={y-14} width="22" height="13" fill={c}/><rect x={x+14} y={y-26} width="17" height="14" fill={c}/><rect x={x+27} y={y-4} width="15" height="12" fill="#85A77B"/></g>;
}

function Desk({x=330,y=335,w=250}) {
  return <g shapeRendering="crispEdges"><rect x={x} y={y} width={w} height="16" fill="#785545"/><rect x={x+12} y={y+16} width="13" height="70" fill="#68483E"/><rect x={x+w-25} y={y+16} width="13" height="70" fill="#68483E"/><rect x={x+7} y={y-7} width={w-14} height="7" fill="#C3946F"/></g>;
}

function ClassDesks() {
  return <g shapeRendering="crispEdges"><rect x="105" y="335" width="180" height="18" fill="#A67856"/><rect x="120" y="353" width="12" height="48" fill="#745343"/><rect x="254" y="353" width="12" height="48" fill="#745343"/><rect x="435" y="355" width="190" height="18" fill="#A67856"/><rect x="450" y="373" width="12" height="44" fill="#745343"/><rect x="597" y="373" width="12" height="44" fill="#745343"/><rect x="680" y="325" width="165" height="18" fill="#A67856"/><rect x="695" y="343" width="12" height="51" fill="#745343"/><rect x="817" y="343" width="12" height="51" fill="#745343"/></g>;
}

export function SceneBackdrop({ scene }) {
  const p = palettes[scene.background] || palettes.cafe;
  const bg = scene.background;
  return (
    <svg className="scene-backdrop" viewBox="0 0 960 540" preserveAspectRatio="xMidYMid slice" aria-hidden="true" shapeRendering="crispEdges">
      <rect width="960" height="540" fill={p.wall}/>
      <rect x="0" y="0" width="960" height="305" fill={p.wall2}/>
      {Array.from({length:14},(_,i)=><rect key={`walltile-${i}`} x={i*72} y="305" width="2" height="215" fill="#3B3548" opacity=".08"/>)}
      <rect x="0" y="400" width="960" height="140" fill={p.floor}/>
      {Array.from({length:12},(_,i)=><rect key={`floor-${i}`} x={i*82} y={400+(i%2)*24} width="80" height="3" fill={p.floor2} opacity=".75"/>)}
      {(bg==='cafe'||bg==='home'||bg==='restaurant'||bg==='reunion') && <>
        <PixelWindow x={80} y={62} w={180} h={125} c={p.night}/>
        {bg==='cafe' && <><rect x="113" y="99" width="12" height="12" fill="#F0D89B"/><rect x="180" y="125" width="8" height="8" fill="#F0D89B"/><rect x="224" y="83" width="9" height="9" fill="#F0D89B"/></>}
        {bg==='home' && <rect x="144" y="87" width="12" height="12" fill="#F5D9A0"/>}
        {bg==='restaurant' && <><rect x="130" y="112" width="17" height="10" fill="#F1C987"/><rect x="202" y="82" width="12" height="12" fill="#F1C987"/></>}
        <Plant x={42} y={353} c={p.plant}/>
        <rect x="766" y="90" width="112" height="142" fill="#4A3C4E"/><rect x="775" y="99" width="94" height="124" fill="#B9917A"/><rect x="783" y="108" width="78" height="88" fill="#D9BCA0"/><rect x="789" y="114" width="66" height="75" fill="#C9A586"/><rect x="808" y="160" width="31" height="29" fill="#A57C63"/><rect x="799" y="149" width="48" height="8" fill="#E8DCC5"/>
        <Desk x={310} y={354} w={330}/>
        <rect x="443" y="323" width="54" height="26" fill="#F3E3C9"/><rect x="450" y="315" width="40" height="10" fill="#B28E78"/><rect x="461" y="306" width="19" height="12" fill="#F8EED8"/><rect x="467" y="310" width="7" height="7" fill="#A98278"/>
      </>}
      {(bg==='school'||bg==='classroom'||bg==='emptyclass') && <>
        <rect x="65" y="50" width="830" height="150" fill="#D7D4C8"/><rect x="85" y="67" width="790" height="118" fill="#5B776F"/><rect x="102" y="83" width="756" height="86" fill="#68877A"/>
        <rect x="402" y="76" width="153" height="98" fill="#F0E6C7"/><rect x="410" y="84" width="137" height="82" fill="#EFE7CE"/>
        {bg==='school' ? <><PixelWindow x={90} y={227} w={150} h={100} c={p.night}/><PixelWindow x={721} y={227} w={150} h={100} c={p.night}/></> : <><rect x="87" y="220" width="140" height="98" fill="#A9C2C0"/><rect x="734" y="220" width="140" height="98" fill="#A9C2C0"/><rect x="152" y="220" width="8" height="98" fill="#EEE5CC"/><rect x="799" y="220" width="8" height="98" fill="#EEE5CC"/></>}
        {bg==='emptyclass' && <rect x="0" y="0" width="960" height="540" fill="#34394F" opacity=".24"/>}
        <ClassDesks/>
        <rect x="430" y="85" width="98" height="8" fill="#A35E57"/><rect x="437" y="102" width="82" height="4" fill="#7C8D7F"/><rect x="437" y="116" width="66" height="4" fill="#7C8D7F"/>
      </>}
      {bg==='schoolgate' && <>
        <rect x="0" y="0" width="960" height="310" fill="#AFC6A0"/><rect x="0" y="306" width="960" height="234" fill="#C0AD88"/><rect x="0" y="414" width="960" height="126" fill="#8B967B"/>
        <rect x="234" y="80" width="493" height="230" fill="#D2D4C3"/><rect x="268" y="105" width="425" height="190" fill="#AAB8AA"/><rect x="380" y="130" width="200" height="162" fill="#7B8C85"/><rect x="396" y="149" width="168" height="143" fill="#4B615D"/><rect x="0" y="250" width="960" height="15" fill="#627C66"/><rect x="0" y="268" width="960" height="9" fill="#E8DCC5"/>
        {Array.from({length:9},(_,i)=><rect key={i} x={225+i*64} y="270" width="8" height="130" fill="#526C5B"/>)}
        <Plant x={44} y={335} c="#4F805D"/><Plant x={850} y={335} c="#4F805D"/>
      </>}
      {bg==='stage' && <>
        <rect x="0" y="0" width="960" height="400" fill="#282D49"/><rect x="0" y="400" width="960" height="140" fill="#53425F"/>
        {Array.from({length:12},(_,i)=><g key={i}><rect x={40+i*78} y={15+(i%2)*25} width="14" height="14" fill={i%3===0?'#F3D783':'#9C92BE'}/><path d={`M ${47+i*78} 30 L ${160+i*62} 390`} stroke={i%2===0?'#C0A7D8':'#E3C46B'} strokeWidth="3" opacity=".13"/></g>)}
        <rect x="90" y="120" width="780" height="270" fill="#3C3C5D"/><rect x="120" y="145" width="720" height="217" fill="#292D48"/><rect x="0" y="390" width="960" height="28" fill="#7F6384"/><rect x="0" y="418" width="960" height="8" fill="#E8C875"/>
        <rect x="182" y="310" width="155" height="78" fill="#4D526D"/><rect x="203" y="286" width="22" height="102" fill="#F0D89B"/><rect x="225" y="301" width="88" height="19" fill="#8D7AA5"/><rect x="590" y="314" width="116" height="75" fill="#4D526D"/><rect x="623" y="285" width="20" height="106" fill="#D7B86D"/>
      </>}
      {bg==='drinkshop' && <>
        <rect x="0" y="0" width="960" height="300" fill="#D3C1A3"/><rect x="0" y="300" width="960" height="240" fill="#A68062"/><rect x="120" y="85" width="720" height="235" fill="#886A5A"/><rect x="148" y="108" width="664" height="190" fill="#D8C6A7"/><rect x="135" y="76" width="690" height="24" fill="#6E6558"/><rect x="148" y="120" width="664" height="20" fill="#94A17B"/>
        <rect x="196" y="185" width="150" height="103" fill="#EFE0C0"/><rect x="212" y="199" width="118" height="12" fill="#B27B65"/><rect x="212" y="223" width="103" height="7" fill="#8D9B7E"/><rect x="212" y="240" width="91" height="7" fill="#8D9B7E"/>
        <Desk x={385} y={352} w={260}/><rect x="481" y="321" width="31" height="29" fill="#F1E5CA"/><rect x="487" y="310" width="19" height="15" fill="#D1AF82"/><rect x="495" y="312" width="5" height="10" fill="#B5CFD3"/>
      </>}
      {bg==='campus' && <>
        <rect x="0" y="0" width="960" height="540" fill="#9BB49B"/><rect x="0" y="375" width="960" height="165" fill="#B6B49A"/><rect x="140" y="80" width="680" height="303" fill="#D8D3B7"/><rect x="170" y="112" width="620" height="271" fill="#95A99A"/><rect x="202" y="151" width="556" height="232" fill="#C8CDB9"/><rect x="420" y="210" width="120" height="173" fill="#7D9888"/><rect x="437" y="232" width="86" height="151" fill="#526F68"/>
        {Array.from({length:8},(_,i)=><g key={i}><rect x={215+i*69} y="170" width="37" height="42" fill="#5A766D"/><rect x={222+i*69} y="177" width="23" height="28" fill="#A9C4BE"/></g>)}
        <Plant x={55} y={367} c="#4E8059"/><Plant x={843} y={365} c="#4E8059"/><rect x="0" y="458" width="960" height="11" fill="#8C9E82"/>
      </>}
      {(bg==='office'||bg==='politics') && <>
        <rect x="0" y="0" width="960" height="540" fill={bg==='politics'?'#6F6475':'#A7B5B7'}/><rect x="0" y="0" width="960" height="315" fill={bg==='politics'?'#9B8793':'#D0D8D5'}/><rect x="0" y="315" width="960" height="225" fill={bg==='politics'?'#716B7A':'#8C99A0'}/>
        <rect x="70" y="70" width="210" height="190" fill="#4F5967"/><rect x="83" y="83" width="184" height="164" fill="#9FB6C1"/><rect x="170" y="83" width="8" height="164" fill="#E8DCC5"/><rect x="83" y="160" width="184" height="8" fill="#E8DCC5"/>
        <rect x="365" y="70" width="225" height="206" fill="#4E5665"/><rect x="377" y="82" width="201" height="182" fill="#AFBEC0"/><rect x="472" y="82" width="8" height="182" fill="#E8DCC5"/>
        <rect x="655" y="77" width="235" height="185" fill="#4E5665"/><rect x="667" y="89" width="211" height="161" fill="#A9BBC2"/><rect x="768" y="89" width="8" height="161" fill="#E8DCC5"/>
        <Desk x={320} y={357} w={340}/><rect x="390" y="329" width="85" height="22" fill="#F1E7D5"/><rect x="405" y="315" width="58" height="14" fill="#9C695B"/><rect x="520" y="325" width="71" height="25" fill="#D7D9D4"/>
        {bg==='politics' && <><rect x="0" y="0" width="960" height="14" fill="#A94754"/><rect x="0" y="14" width="960" height="5" fill="#D7B3B4"/></>}
      </>}
      {bg==='reunion' && <>
        <rect x="0" y="0" width="960" height="330" fill="#A9A2B0"/><rect x="0" y="330" width="960" height="210" fill="#9D7C6D"/><PixelWindow x={110} y={55} w={225} h={188} c="#4C536E"/>
        <rect x="137" y="95" width="12" height="12" fill="#F0D89B"/><rect x="206" y="73" width="8" height="8" fill="#F0D89B"/><rect x="284" y="152" width="13" height="13" fill="#F0D89B"/>
        <Plant x={50} y={356} c="#688A72"/><Desk x={346} y={352} w={280}/><rect x="459" y="321" width="47" height="25" fill="#F1E4C9"/><rect x="467" y="312" width="30" height="12" fill="#B58D74"/>
        <rect x="706" y="95" width="153" height="205" fill="#655261"/><rect x="719" y="108" width="127" height="179" fill="#D9C9B2"/><rect x="732" y="121" width="101" height="153" fill="#C4B19B"/>
      </>}
      {/* warm pixel lighting */}
      <rect x="0" y="0" width="960" height="540" fill="#F4D79A" opacity={bg==='stage'?.025:.045}/>
      <rect x="0" y="0" width="960" height="6" fill="#FFF0CF" opacity=".35"/>
    </svg>
  );
}

export function ObjectGlyph({ kind }) {
  const common = { shapeRendering: 'crispEdges' };
  switch (kind) {
    case 'cup': return <svg viewBox="0 0 32 32" {...common}><rect x="7" y="11" width="16" height="15" fill="#F0E4CA"/><rect x="9" y="8" width="12" height="4" fill="#C99C73"/><rect x="23" y="14" width="5" height="7" fill="none" stroke="#F0E4CA" strokeWidth="3"/><rect x="10" y="14" width="10" height="3" fill="#79545B"/><rect x="10" y="27" width="12" height="2" fill="#B5A08A"/></svg>;
    case 'window': return <svg viewBox="0 0 32 32" {...common}><rect x="3" y="3" width="26" height="26" fill="#E9D9B9"/><rect x="7" y="7" width="18" height="18" fill="#7187A0"/><rect x="14" y="7" width="4" height="18" fill="#E9D9B9"/><rect x="7" y="14" width="18" height="4" fill="#E9D9B9"/><rect x="9" y="9" width="4" height="4" fill="#F0D89B"/></svg>;
    case 'envelope': return <svg viewBox="0 0 32 32" {...common}><rect x="3" y="7" width="26" height="19" fill="#EADFC7"/><path d="M3 9 L16 19 L29 9" fill="none" stroke="#B68E78" strokeWidth="3"/><path d="M3 25 L12 17 M29 25 L20 17" fill="none" stroke="#D0B89E" strokeWidth="2"/><rect x="14" y="14" width="4" height="4" fill="#BC7B79"/></svg>;
    case 'photo': return <svg viewBox="0 0 32 32" {...common}><rect x="4" y="3" width="24" height="26" fill="#F2E8D7"/><rect x="7" y="6" width="18" height="16" fill="#81989A"/><rect x="9" y="15" width="5" height="6" fill="#E6C58E"/><rect x="15" y="12" width="5" height="9" fill="#B9876D"/><rect x="10" y="24" width="12" height="2" fill="#B6A38D"/></svg>;
    case 'book': return <svg viewBox="0 0 32 32" {...common}><rect x="5" y="4" width="21" height="25" fill="#8EA492"/><rect x="9" y="4" width="3" height="25" fill="#D9C6A5"/><rect x="14" y="10" width="8" height="2" fill="#EDE0C5"/><rect x="14" y="15" width="7" height="2" fill="#EDE0C5"/><rect x="14" y="20" width="8" height="2" fill="#EDE0C5"/></svg>;
    case 'board': return <svg viewBox="0 0 32 32" {...common}><rect x="3" y="4" width="26" height="19" fill="#47695E" stroke="#D8C9A8" strokeWidth="3"/><rect x="7" y="9" width="10" height="2" fill="#EADFC7"/><rect x="7" y="14" width="16" height="2" fill="#EADFC7"/><rect x="7" y="19" width="8" height="2" fill="#EADFC7"/><rect x="8" y="23" width="3" height="7" fill="#A67F5D"/><rect x="22" y="23" width="3" height="7" fill="#A67F5D"/></svg>;
    case 'bag': return <svg viewBox="0 0 32 32" {...common}><rect x="6" y="11" width="20" height="18" fill="#74899B"/><rect x="11" y="5" width="10" height="7" fill="none" stroke="#485969" strokeWidth="3"/><rect x="10" y="16" width="12" height="7" fill="#B8C7CC"/><rect x="14" y="17" width="4" height="4" fill="#53697A"/></svg>;
    case 'note': return <svg viewBox="0 0 32 32" {...common}><rect x="7" y="3" width="19" height="26" fill="#E8DCC5"/><rect x="11" y="8" width="11" height="2" fill="#AF8C7B"/><rect x="11" y="13" width="11" height="2" fill="#AF8C7B"/><rect x="11" y="18" width="8" height="2" fill="#AF8C7B"/><rect x="5" y="7" width="4" height="4" fill="#C88687"/></svg>;
    case 'gate': return <svg viewBox="0 0 32 32" {...common}><rect x="3" y="4" width="7" height="26" fill="#D5C5A8"/><rect x="22" y="4" width="7" height="26" fill="#D5C5A8"/><rect x="7" y="7" width="18" height="4" fill="#627F6C"/><rect x="7" y="17" width="18" height="4" fill="#627F6C"/><rect x="12" y="8" width="3" height="21" fill="#627F6C"/><rect x="18" y="8" width="3" height="21" fill="#627F6C"/></svg>;
    case 'bike': return <svg viewBox="0 0 32 32" {...common}><circle cx="7" cy="24" r="5" fill="none" stroke="#D8D9D2" strokeWidth="2.5"/><circle cx="25" cy="24" r="5" fill="none" stroke="#D8D9D2" strokeWidth="2.5"/><path d="M7 24 L13 15 L20 24 L11 24 L17 14 L24 15 L25 24" fill="none" stroke="#C65A60" strokeWidth="2.5" strokeLinejoin="miter"/><path d="M15 13 L21 13 L24 16 L18 16 Z" fill="#3F465A"/><rect x="23" y="10" width="5" height="2" fill="#F0D89B"/></svg>;
    case 'path': return <svg viewBox="0 0 32 32" {...common}><path d="M8 29 L12 3 L21 3 L25 29 Z" fill="#D9C6A8"/><rect x="14" y="8" width="4" height="4" fill="#F4E8D0"/><rect x="14" y="17" width="4" height="5" fill="#F4E8D0"/></svg>;
    case 'icecream': return <svg viewBox="0 0 32 32" {...common}><path d="M9 15 L16 29 L23 15 Z" fill="#C28B65"/><rect x="8" y="10" width="16" height="8" fill="#E3A7B4"/><rect x="10" y="5" width="12" height="10" fill="#EED6CB"/><rect x="13" y="7" width="4" height="3" fill="#FFF0D8"/><rect x="16" y="14" width="4" height="3" fill="#C98290"/></svg>;
    case 'guitar': return <svg viewBox="0 0 32 32" {...common}><rect x="18" y="3" width="5" height="14" fill="#B8875A"/><rect x="17" y="14" width="8" height="4" fill="#D3B17A"/><rect x="10" y="15" width="14" height="12" fill="#C58C56"/><rect x="13" y="17" width="8" height="8" fill="#8D594C"/><rect x="16" y="2" width="2" height="25" fill="#E8DCC5"/></svg>;
    case 'spark': return <svg viewBox="0 0 32 32" {...common}><rect x="14" y="2" width="4" height="28" fill="#F4D786"/><rect x="2" y="14" width="28" height="4" fill="#F4D786"/><rect x="7" y="7" width="18" height="18" fill="#FFEAB0" opacity=".8"/><rect x="13" y="12" width="7" height="7" fill="#D49A6A"/></svg>;
    case 'calendar': return <svg viewBox="0 0 32 32" {...common}><rect x="4" y="5" width="24" height="24" fill="#E9DCC2"/><rect x="4" y="5" width="24" height="7" fill="#BA7E76"/><rect x="9" y="2" width="3" height="7" fill="#604A52"/><rect x="20" y="2" width="3" height="7" fill="#604A52"/><rect x="8" y="16" width="4" height="4" fill="#839A89"/><rect x="15" y="16" width="4" height="4" fill="#839A89"/><rect x="22" y="16" width="3" height="4" fill="#839A89"/></svg>;
    case 'jacket': return <svg viewBox="0 0 32 32" {...common}><path d="M10 5 L15 3 L17 7 L19 3 L24 5 L29 13 L24 17 L22 13 L24 29 L8 29 L10 13 L7 17 L3 13 Z" fill="#D7B346"/><path d="M15 4 L16 27 M19 4 L18 27" stroke="#F3E4B9" strokeWidth="2"/>{/* UI yellow by default; red scene gets CSS frame */}</svg>;
    case 'badge': return <svg viewBox="0 0 32 32" {...common}><rect x="13" y="2" width="6" height="5" fill="#D1B48A"/><rect x="7" y="7" width="18" height="22" fill="#E9E1CD"/><rect x="10" y="10" width="12" height="6" fill="#9AAFB4"/><rect x="11" y="19" width="10" height="2" fill="#9F7F70"/><rect x="11" y="23" width="7" height="2" fill="#9F7F70"/></svg>;
    case 'folder': return <svg viewBox="0 0 32 32" {...common}><path d="M3 8 L14 8 L17 12 L29 12 L27 28 L4 28 Z" fill="#C2A36E"/><rect x="5" y="13" width="22" height="12" fill="#E4D3A9"/><rect x="9" y="16" width="14" height="2" fill="#A88462"/><rect x="9" y="21" width="11" height="2" fill="#A88462"/></svg>;
    case 'star': return <svg viewBox="0 0 32 32" {...common}><polygon points="16,2 20,11 30,12 22,19 24,29 16,24 8,29 10,19 2,12 12,11" fill="#F0D89B" stroke="#BC955F" strokeWidth="2"/></svg>;
    default: return <svg viewBox="0 0 32 32" {...common}><rect x="6" y="6" width="20" height="20" fill="#E8DCC5"/><rect x="11" y="11" width="10" height="10" fill="#857DAA"/></svg>;
  }
}
