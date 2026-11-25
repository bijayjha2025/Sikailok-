const scenes = {
  'main-school': {
    sign: 'SIKAILOK ACADEMY',
    wall: '#b4513a',
    brick: '#8f3d2e',
    roof: '#9a4332',
    trim: '#efe8d6',
    window: 'classroom',
    feature: 'school',
  },
  library: {
    sign: 'LIBRARY',
    wall: '#ecdcae',
    brick: '#c7b984',
    roof: '#3f7a5e',
    trim: '#3b7dd8',
    window: 'books',
    feature: 'library',
  },
  'computer-lab': {
    sign: 'COMPUTER LAB',
    wall: '#d6e4f2',
    brick: '#aebfd2',
    roof: '#2f5fa8',
    trim: '#2f5fa8',
    window: 'computer',
    feature: 'computer-lab',
  },
  'examination-hall': {
    sign: 'EXAM HALL',
    wall: '#ddd2bb',
    brick: '#bdb29c',
    roof: '#7d3f3a',
    trim: '#6b4e8f',
    window: 'classroom',
    feature: 'examination-hall',
  },
  'achievement-hall': {
    sign: 'ACHIEVEMENTS',
    wall: '#f2e5ab',
    brick: '#d4c47d',
    roof: '#c28b1a',
    trim: '#c28b1a',
    window: 'classroom',
    feature: 'achievement-hall',
  },
  playground: {
    sign: 'PLAYGROUND',
    wall: '#ecdcae',
    brick: '#c7b984',
    roof: '#3f7a5e',
    trim: '#3f9a3f',
    window: 'classroom',
    feature: 'playground',
  },
}

function PixelScene({ title, scene }) {
  const { sign, wall, brick, roof, trim, window, feature } = scenes[scene] ?? scenes['main-school']
  const windows = [151, 185, 272, 306]
  const windowRows = [99, 134]

  return (
   <div className="pixel-scene">
    <svg viewBox="0 0 480 270" role="img" aria-label={`${title} pixel-art scene`} shapeRendering="crispEdges">
     <rect width="480" height="270" fill="#7ec6f2" />
     <rect y="30" width="480" height="30" fill="#8fd0f5" />
     <rect y="60" width="480" height="30" fill="#a1daf7" />
     <rect x="384" y="30" width="20" height="20" fill="#ffd23f" />
     <rect x="64" y="38" width="48" height="8" fill="#f6f9ff" />
     <rect x="72" y="30" width="32" height="8" fill="#f6f9ff" />
     <rect x="276" y="64" width="40" height="8" fill="#f6f9ff" />
     <rect x="284" y="56" width="24" height="8" fill="#f6f9ff" />
     <path d="M0 142 44 106 88 132 140 94 194 137 250 101 306 132 360 96 420 133 480 104V183H0Z" fill="#8fa8cc" />
     <path d="M0 155 48 124 98 151 148 113 204 155 260 121 316 151 370 116 430 153 480 125V190H0Z" fill="#6c86b0" />
     <rect y="174" width="480" height="96" fill="#6dbb58" />
     <rect y="174" width="480" height="5" fill="#7cbe8a" />
     
     <rect x="24" y="145" width="6" height="32" fill="#6a4426" />
     <rect x="18" y="133" width="18" height="15" fill="#2f7d3a" />
     <rect x="14" y="139" width="26" height="14" fill="#3f9a4a" />
     <rect x="446" y="145" width="6" height="32" fill="#6a4426" />
     <rect x="440" y="132" width="18" height="16" fill="#2f7d3a" />
     <rect x="436" y="139" width="26" height="14" fill="#3f9a4a" />
     <rect x="36" y="197" width="4" height="3" fill="#4f9b45" />
     <rect x="86" y="228" width="5" height="3" fill="#5aa94a" />
     <rect x="420" y="205" width="4" height="3" fill="#4f9b45" />
     <rect x="390" y="244" width="5" height="3" fill="#5aa94a" />
     
     <rect x="0" y="224" width="480" height="28" fill="#dcc796" />
     <rect x="0" y="224" width="480" height="3" fill="#b99a62" />
     <rect x="0" y="249" width="480" height="3" fill="#b99a62" />
     <rect x="220" y="187" width="40" height="83" fill="#dcc796" />
     <rect x="220" y="187" width="40" height="3" fill="#b99a62" />
     <rect x="220" y="267" width="40" height="3" fill="#b99a62" />
     {[30, 66, 104, 354, 392, 438].map((x, index) => (
      <rect key={x} x={x} y={231 + (index % 2) * 11} width="12" height="2" fill="#b99a62" />
     ))}
     
     <rect x="140" y="86" width="204" height="106" fill="#0000002e" />
     <rect x="132" y="78" width="216" height="108" fill={wall} stroke="#1c2b4a" strokeWidth="3" />
     <rect x="124" y="66" width="232" height="16" fill={roof} stroke="#1c2b4a" strokeWidth="3" />
     <rect x="128" y="66" width="224" height="3" fill="#ffffff55" />
     {[91, 126, 161].map((y) => (
      <g key={y}>
       <rect x="132" y={y} width="216" height="3" fill={scene === 'main-school' ? brick : trim} />
       <rect x="132" y={y + 3} width="216" height="2" fill="#1c2b4a" opacity=".18" />
      </g>
      ))}
      
      {[139, 344].map((x) => (
       <g key={x}>
        <rect x={x} y="83" width="3" height="102" fill="#1c2b4a" opacity=".25" />
        {[101, 114, 136, 149, 171].map((y) => (
        <rect key={y} x={x} y={y} width="3" height="2" fill={brick} />
        ))}
       </g>
      ))}

      {windows.flatMap((x) => windowRows.map((y) => (
       <g key={`${x}-${y}`}>
        <rect x={x - 2} y={y} width="24" height="26" fill="#1c2b4a" />
        <rect x={x} y={y + 2} width="20" height="22" fill={window === 'computer' ? '#18202e' : '#3f78b8'} />
        {window === 'books' ? (
        <>
         <rect x={x + 2} y={y + 5} width="3" height="16" fill="#c0392b" />
         <rect x={x + 6} y={y + 6} width="3" height="15" fill="#e0a030" />
         <rect x={x + 10} y={y + 4} width="3" height="17" fill="#3b7dd8" />
         <rect x={x + 14} y={y + 7} width="4" height="14" fill="#3f9a5a" />
        </>
        ) : window === 'computer' ? (
        <>
         <rect x={x + 3} y={y + 5} width="14" height="11" fill="#5be0ff" />
         <rect x={x + 5} y={y + 7} width="5" height="2" fill="#ffffff" />
         <rect x={x + 9} y={y + 18} width="3" height="3" fill="#9ba8b5" />
        </>

        ) : (
         <>
          <rect x={x + 9} y={y + 2} width="2" height="22" fill="#f2efe4" />
          <rect x={x} y={y + 12} width="20" height="2" fill="#f2efe4" />
          <rect x={x + 3} y={y + 6} width="3" height="3" fill="#ffffff" />
         </>
        )}
         <rect x={x - 2} y={y} width="24" height="2" fill="#f2efe4" />
        </g>
       )))}

       <rect x="202" y="48" width="76" height="22" fill="#1c2b4a" stroke="#f2efe4" strokeWidth="2" />
       <text x="240" y="62" fill="#ffd23f" textAnchor="middle" fontFamily="monospace" fontSize="7" fontWeight="bold" textLength="64" lengthAdjust="spacingAndGlyphs">{sign}</text>
       <rect x="216" y="146" width="48" height="40" fill="#e8e2d0" />
       <rect x="220" y="150" width="40" height="36" fill="#4a2f1a" />
       <rect x="222" y="151" width="2" height="33" fill="#ffffff30" />
       <rect x="254" y="166" width="3" height="3" fill="#ffd23f" />
       <rect x="212" y="184" width="56" height="4" fill="#bdb5a2" />
       <rect x="210" y="188" width="60" height="2" fill="#9c9582" />

       {feature === 'library' && (
        <>
         <rect x="42" y="191" width="66" height="8" fill="#6b3f12" />
         <rect x="48" y="199" width="5" height="24" fill="#6b3f12" />
         <rect x="97" y="199" width="5" height="24" fill="#6b3f12" />
         <rect x="60" y="181" width="12" height="10" fill="#c0392b" />
         <rect x="72" y="184" width="12" height="7" fill="#3b7dd8" />
         <rect x="84" y="180" width="10" height="11" fill="#e0a030" />
        </>
        )}

        {feature === 'computer-lab' && (
        <>
         <rect x="46" y="188" width="76" height="8" fill="#6b4e3a" />
         {[54, 80, 106].map((x) => (
         <g key={x}>
          <rect x={x} y="166" width="16" height="19" fill="#18202e" />
          <rect x={x + 2} y="168" width="12" height="12" fill="#5be0ff" />
          <rect x={x + 7} y="185" width="2" height="3" fill="#2e2e2e" />
         </g>
         ))}
        </>
       )}

       {feature === 'examination-hall' && (
        <>
         {[48, 82, 116].map((x) => (
          <g key={x}>
           <rect x={x} y="197" width="28" height="5" fill="#9a927e" />
           <rect x={x + 3} y="202" width="3" height="20" fill="#6a4426" />
           <rect x={x + 22} y="202" width="3" height="20" fill="#6a4426" />
           <rect x={x + 10} y="192" width="9" height="5" fill="#fff" />
          </g>
         ))}
        </>
        )}

        {feature === 'achievement-hall' && (
         <>
          <rect x="53" y="209" width="70" height="10" fill="#9a927e" />
          <rect x="62" y="219" width="52" height="12" fill="#6b3f12" />
          <rect x="73" y="183" width="30" height="26" fill="#ffd23f" />
          <rect x="79" y="177" width="18" height="7" fill="#ffd23f" />
          <rect x="81" y="184" width="14" height="16" fill="#f28c1a" />
          <rect x="70" y="185" width="8" height="17" fill="#f28c1a" />
          <rect x="96" y="185" width="8" height="17" fill="#f28c1a" />
         </>
        )}

        {feature === 'playground' && (
         <>
          <rect x="42" y="182" width="82" height="48" fill="#3f9a3f" stroke="#1c2b4a" strokeWidth="2" />
          <rect x="48" y="188" width="70" height="36" fill="#4fb04c" />
          <rect x="48" y="188" width="70" height="2" fill="#fff" />
          <rect x="48" y="222" width="70" height="2" fill="#fff" />
          <rect x="82" y="189" width="2" height="34" fill="#fff" />
          <rect x="78" y="202" width="10" height="10" fill="#fff" />
          <rect x="81" y="205" width="4" height="4" fill="#4fb04c" />
         </>
        )}

        {feature === 'school' && (
         <>
          <rect x="52" y="192" width="74" height="28" fill="#1c2b4a" stroke="#f2efe4" strokeWidth="2" />
          <rect x="58" y="198" width="62" height="2" fill="#ffd23f" />
          <rect x="58" y="204" width="44" height="2" fill="#fff" />
          <rect x="58" y="210" width="54" height="2" fill="#fff" />
          <rect x="58" y="216" width="32" height="2" fill="#fff" />
         </>
        )}

        <rect x="381" y="221" width="10" height="4" fill="#00000025" />
        <rect x="384" y="199" width="7" height="7" fill="#f0bd8a" />
        <rect x="383" y="197" width="9" height="3" fill="#2a1b30" />
        <rect x="383" y="206" width="9" height="11" fill="#2f6fd4" />
        <rect x="381" y="209" width="3" height="8" fill="#2f6fd4" />
        <rect x="391" y="209" width="3" height="8" fill="#2f6fd4" />
        <rect x="384" y="217" width="3" height="5" fill="#4a2f1a" />
        <rect x="389" y="217" width="3" height="5" fill="#4a2f1a" />

        <rect x="405" y="234" width="10" height="4" fill="#00000025" />
        <rect x="408" y="212" width="7" height="7" fill="#f0bd8a" />
        <rect x="407" y="210" width="9" height="3" fill="#2a1b30" />
        <rect x="407" y="219" width="9" height="11" fill="#e54b4b" />
        <rect x="405" y="222" width="3" height="8" fill="#e54b4b" />
        <rect x="415" y="222" width="3" height="8" fill="#e54b4b" />
        <rect x="408" y="230" width="3" height="5" fill="#4a2f1a" />
        <rect x="413" y="230" width="3" height="5" fill="#4a2f1a" />

        <rect x="18" y="18" width="5" height="5" fill="#ffd23f" />
        <text x="30" y="24" fill="#1c2b4a" fontFamily="monospace" fontSize="8" fontWeight="bold">{title.toUpperCase()}</text>
        <rect x="408" y="18" width="6" height="6" fill="#ffd23f" />
        <rect x="418" y="18" width="6" height="6" fill="#ff8fb8" />
        <rect x="428" y="18" width="6" height="6" fill="#fff" />
      </svg>
    </div>
  )
}

export default PixelScene
