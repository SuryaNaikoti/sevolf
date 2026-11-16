import React from 'react';

// Botanical Olive / Eucalyptus Branch SVG
export const BotanicalBranch: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M20 85 C35 65 50 40 80 15"
      stroke="#899A7E"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Leaves */}
    <path
      d="M35 70 C25 65 22 55 28 50 C36 46 42 54 36 67"
      fill="#899A7E"
      fillOpacity="0.45"
      stroke="#586B4D"
      strokeWidth="1.5"
    />
    <path
      d="M48 55 C58 50 63 42 58 35 C50 30 42 38 46 52"
      fill="#899A7E"
      fillOpacity="0.5"
      stroke="#586B4D"
      strokeWidth="1.5"
    />
    <path
      d="M60 40 C52 32 50 22 58 18 C67 15 72 24 62 38"
      fill="#899A7E"
      fillOpacity="0.45"
      stroke="#586B4D"
      strokeWidth="1.5"
    />
    <path
      d="M72 26 C82 22 86 12 80 8 C72 6 66 16 71 25"
      fill="#899A7E"
      fillOpacity="0.5"
      stroke="#586B4D"
      strokeWidth="1.5"
    />
  </svg>
);

// Potted Olive Tree / Plant in Ceramic Pot
export const PottedPlant: React.FC<{ className?: string }> = ({ className = 'w-32 h-44' }) => (
  <svg viewBox="0 0 160 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Ceramic Ribbed Pot */}
    <path d="M52 165 L60 210 Q80 214 100 210 L108 165 Z" fill="#EAE3D6" stroke="#C5BEAF" strokeWidth="2" />
    <ellipse cx="80" cy="165" rx="28" ry="6" fill="#D3C9B8" />
    <ellipse cx="80" cy="165" rx="25" ry="4.5" fill="#586B4D" fillOpacity="0.25" />
    {/* Fluted pot vertical ribs */}
    <line x1="68" y1="168" x2="72" y2="208" stroke="#D3C9B8" strokeWidth="1" />
    <line x1="80" y1="170" x2="80" y2="210" stroke="#D3C9B8" strokeWidth="1" />
    <line x1="92" y1="168" x2="88" y2="208" stroke="#D3C9B8" strokeWidth="1" />
    
    {/* Stems */}
    <path d="M80 165 C80 135 76 110 74 75" stroke="#686760" strokeWidth="3" strokeLinecap="round" />
    <path d="M78 125 C88 105 105 85 110 60" stroke="#686760" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M76 100 C62 82 48 65 42 45" stroke="#686760" strokeWidth="2" strokeLinecap="round" />

    {/* Soft Foliage Clouds & Leaves */}
    <ellipse cx="74" cy="65" rx="18" ry="24" fill="#899A7E" fillOpacity="0.65" />
    <ellipse cx="110" cy="55" rx="16" ry="22" fill="#899A7E" fillOpacity="0.7" />
    <ellipse cx="44" cy="45" rx="14" ry="20" fill="#899A7E" fillOpacity="0.6" />
    <ellipse cx="80" cy="40" rx="20" ry="26" fill="#899A7E" fillOpacity="0.75" />
    <ellipse cx="94" cy="70" rx="12" ry="16" fill="#586B4D" fillOpacity="0.5" />
  </svg>
);

// Japandi Living Room Scene Illustration (Full Rich Composition)
export const JapandiLivingRoom: React.FC<{ className?: string }> = ({ className = 'w-full h-72' }) => (
  <svg viewBox="0 0 600 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Wall & Baseboard */}
    <rect width="600" height="320" fill="#FAF8F2" />
    <line x1="0" y1="240" x2="600" y2="240" stroke="#EAE3D6" strokeWidth="2" />
    <rect y="240" width="600" height="80" fill="#F4EFE6" />
    {/* Gentle wooden floor plank lines */}
    <line x1="120" y1="240" x2="80" y2="320" stroke="#EAE3D6" strokeWidth="1" strokeOpacity="0.6" />
    <line x1="300" y1="240" x2="280" y2="320" stroke="#EAE3D6" strokeWidth="1" strokeOpacity="0.6" />
    <line x1="480" y1="240" x2="500" y2="320" stroke="#EAE3D6" strokeWidth="1" strokeOpacity="0.6" />

    {/* Woven Wool Area Rug */}
    <ellipse cx="300" cy="275" rx="220" ry="38" fill="#ECE6DB" stroke="#DCD5C8" strokeWidth="1.5" />

    {/* Framed Japandi Minimalist Art Diptych on Wall */}
    <g id="framed-art">
      <rect x="150" y="35" width="75" height="100" fill="#FFFFFF" stroke="#D3C9B8" strokeWidth="2" rx="2" />
      <circle cx="187" cy="80" r="22" fill="#EAE3D6" />
      <path d="M172 105 C182 90 194 90 204 105" stroke="#899A7E" strokeWidth="2.5" strokeLinecap="round" />

      <rect x="245" y="35" width="75" height="100" fill="#FFFFFF" stroke="#D3C9B8" strokeWidth="2" rx="2" />
      <line x1="282" y1="55" x2="282" y2="115" stroke="#586B4D" strokeWidth="2" strokeLinecap="round" />
      <circle cx="282" cy="75" r="14" fill="#899A7E" fillOpacity="0.35" />
    </g>

    {/* Architectural Floor Lamp */}
    <g id="floor-lamp">
      <ellipse cx="100" cy="245" rx="14" ry="4" fill="#D3C9B8" />
      <path d="M100 245 L100 130 C100 80 135 60 145 60" stroke="#586B4D" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M135 60 L155 60 L158 75 L132 75 Z" fill="#EAE3D6" stroke="#C5BEAF" strokeWidth="1.5" />
    </g>

    {/* Linen Low-Profile 3-Seater Sofa */}
    <g id="sofa">
      {/* Sofa Main Body */}
      <path d="M165 145 Q165 130 180 130 L450 130 Q465 130 465 145 L470 230 Q470 235 455 235 L175 235 Q160 235 160 230 Z" fill="#EAE3D6" stroke="#D3C9B8" strokeWidth="2" />
      
      {/* 3 Back Cushions */}
      <rect x="175" y="140" width="85" height="70" rx="4" fill="#FAF8F2" stroke="#EAE3D6" strokeWidth="1.5" />
      <rect x="268" y="140" width="85" height="70" rx="4" fill="#FAF8F2" stroke="#EAE3D6" strokeWidth="1.5" />
      <rect x="361" y="140" width="95" height="70" rx="4" fill="#FAF8F2" stroke="#EAE3D6" strokeWidth="1.5" />

      {/* Throw Cushions */}
      <rect x="185" y="165" width="40" height="40" rx="4" transform="rotate(-6 185 165)" fill="#899A7E" fillOpacity="0.85" />
      <rect x="405" y="165" width="38" height="38" rx="4" transform="rotate(8 405 165)" fill="#D3C9B8" />
      
      {/* Folded Waffle Throw Blanket */}
      <path d="M340 185 L380 185 L385 235 L335 235 Z" fill="#DCD5C8" stroke="#C5BEAF" strokeWidth="1" />
    </g>

    {/* Oak Low Round Coffee Table */}
    <g id="coffee-table">
      <ellipse cx="310" cy="250" rx="70" ry="20" fill="#EAE3D6" stroke="#C5BEAF" strokeWidth="2" />
      <line x1="270" y1="262" x2="265" y2="285" stroke="#B8AFA0" strokeWidth="3" strokeLinecap="round" />
      <line x1="350" y1="262" x2="355" y2="285" stroke="#B8AFA0" strokeWidth="3" strokeLinecap="round" />

      {/* Tabletop Ceramic Vessel with Olive Twig */}
      <path d="M302 240 Q299 230 307 230 Q315 230 312 240 Z" fill="#FFFFFF" stroke="#D3C9B8" strokeWidth="1.5" />
      <path d="M307 230 Q312 215 322 205" stroke="#586B4D" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="322" cy="205" r="3" fill="#899A7E" />
      <circle cx="316" cy="214" r="2.5" fill="#899A7E" />

      {/* Art Book on Table */}
      <rect x="330" y="244" width="28" height="14" rx="1" transform="rotate(-8 330 244)" fill="#FFFFFF" stroke="#D3C9B8" strokeWidth="1" />
    </g>

    {/* Tall Fiddle Leaf Fig / Olive Tree in Ceramic Pot (Right) */}
    <g id="large-plant">
      <path d="M505 210 L512 270 Q525 275 538 270 L545 210 Z" fill="#D8CEBD" stroke="#C5BEAF" strokeWidth="2" />
      <ellipse cx="525" cy="210" rx="20" ry="5" fill="#B8AFA0" />
      <path d="M525 210 C525 150 535 110 538 60" stroke="#686760" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="530" cy="70" rx="22" ry="30" fill="#899A7E" fillOpacity="0.75" />
      <ellipse cx="545" cy="105" rx="18" ry="24" fill="#586B4D" fillOpacity="0.65" />
      <ellipse cx="515" cy="130" rx="20" ry="22" fill="#899A7E" fillOpacity="0.7" />
      <ellipse cx="540" cy="160" rx="16" ry="18" fill="#586B4D" fillOpacity="0.55" />
    </g>
  </svg>
);

// Japandi Entryway Illustration (with 3-Step Sequence Context)
export const JapandiEntryway: React.FC<{ className?: string }> = ({ className = 'w-full h-56' }) => (
  <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Wall & Floor */}
    <rect width="400" height="240" fill="#FAF8F2" />
    <line x1="0" y1="185" x2="400" y2="185" stroke="#EAE3D6" strokeWidth="2" />
    <rect y="185" width="400" height="55" fill="#F4EFE6" />

    {/* Round Minimalist Mirror Above Console */}
    <circle cx="210" cy="65" r="32" fill="#FFFFFF" stroke="#C5BEAF" strokeWidth="2" />
    <circle cx="210" cy="65" r="28" fill="#F4EFE6" fillOpacity="0.35" />

    {/* Oak Wall Peg Rail */}
    <rect x="50" y="32" width="110" height="9" rx="2.5" fill="#D8CEBD" stroke="#C5BEAF" strokeWidth="1.5" />
    <circle cx="70" cy="36.5" r="2.5" fill="#686760" />
    <circle cx="105" cy="36.5" r="2.5" fill="#686760" />
    <circle cx="140" cy="36.5" r="2.5" fill="#686760" />

    {/* Hanging Straw Sunhat */}
    <ellipse cx="70" cy="54" rx="18" ry="11" fill="#EAE3D6" stroke="#D3C9B8" strokeWidth="1.5" />
    <circle cx="70" cy="52" r="7" fill="#D8CEBD" />

    {/* Hanging Trench Coat */}
    <path d="M105 39 L92 120 L122 120 L112 39 Z" fill="#C5BEAF" fillOpacity="0.8" />
    <line x1="107" y1="42" x2="107" y2="118" stroke="#B8AFA0" strokeWidth="1.5" />

    {/* Low Oak Console Bench with Rattan Baskets */}
    <rect x="140" y="125" width="220" height="60" rx="4" fill="#FAF8F2" stroke="#D3C9B8" strokeWidth="2" />
    <line x1="140" y1="150" x2="360" y2="150" stroke="#EAE3D6" strokeWidth="1.5" />
    
    {/* 3 Rattan Storage Baskets with Leather Pulls */}
    <rect x="152" y="156" width="56" height="24" rx="2" fill="#EAE3D6" stroke="#C5BEAF" strokeWidth="1.5" />
    <circle cx="180" cy="168" r="2.5" fill="#77766F" />

    <rect x="222" y="156" width="56" height="24" rx="2" fill="#EAE3D6" stroke="#C5BEAF" strokeWidth="1.5" />
    <circle cx="250" cy="168" r="2.5" fill="#77766F" />

    <rect x="292" y="156" width="56" height="24" rx="2" fill="#EAE3D6" stroke="#C5BEAF" strokeWidth="1.5" />
    <circle cx="320" cy="168" r="2.5" fill="#77766F" />

    {/* Key Bowl & Small Ceramic Vase on Console */}
    <ellipse cx="180" cy="123" rx="14" ry="4.5" fill="#FFFFFF" stroke="#D3C9B8" strokeWidth="1.5" />
    <rect x="325" y="102" width="18" height="23" rx="3" fill="#899A7E" fillOpacity="0.75" />
    <line x1="334" y1="102" x2="337" y2="88" stroke="#586B4D" strokeWidth="1.5" />
    <circle cx="337" cy="88" r="2" fill="#899A7E" />

    {/* Potted Plant Next to Bench */}
    <path d="M95 155 L98 205 Q108 209 118 205 L121 155 Z" fill="#EAE3D6" stroke="#D3C9B8" strokeWidth="1.5" />
    <ellipse cx="108" cy="130" rx="14" ry="20" fill="#899A7E" fillOpacity="0.7" />
    <ellipse cx="110" cy="105" rx="12" ry="16" fill="#586B4D" fillOpacity="0.6" />
  </svg>
);

// The 4 Category Sort Icons
export const KeepBasketIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="8" y="22" width="48" height="34" rx="4" fill="#FAF8F2" stroke="#899A7E" strokeWidth="2.5" />
    <path d="M4 22 L60 22" stroke="#899A7E" strokeWidth="3" strokeLinecap="round" />
    <path d="M20 22 C20 11 44 11 44 22" stroke="#586B4D" strokeWidth="2.5" strokeLinecap="round" />
    {/* Clean folded linen lines inside */}
    <line x1="16" y1="32" x2="48" y2="32" stroke="#EAE3D6" strokeWidth="2" strokeLinecap="round" />
    <line x1="16" y1="40" x2="48" y2="40" stroke="#EAE3D6" strokeWidth="2" strokeLinecap="round" />
    {/* Joy Sparkle */}
    <path d="M32 30 L34 35 L39 37 L34 39 L32 44 L30 39 L25 37 L30 35 Z" fill="#899A7E" />
  </svg>
);

export const DonateBoxIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Cardboard Box */}
    <path d="M10 24 L32 12 L54 24 L54 52 L10 52 Z" fill="#EAE3D6" stroke="#686760" strokeWidth="2.5" />
    <path d="M10 24 L32 36 L54 24" stroke="#686760" strokeWidth="2.5" />
    <line x1="32" y1="36" x2="32" y2="52" stroke="#686760" strokeWidth="2.5" />
    {/* Heart Badge on Box */}
    <path d="M32 45 C27 41 23 37 23 33.5 C23 31 25 29 27.5 29 C29.5 29 31 30.5 32 32 C33 30.5 34.5 29 36.5 29 C39 29 41 31 41 33.5 C41 37 37 41 32 45 Z" fill="#899A7E" />
  </svg>
);

export const RecycleBinIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="14" y="20" width="36" height="38" rx="3.5" fill="#E9EEE5" stroke="#586B4D" strokeWidth="2.5" />
    <rect x="10" y="14" width="44" height="7" rx="2" fill="#899A7E" />
    <line x1="26" y1="14" x2="38" y2="14" stroke="#586B4D" strokeWidth="2" strokeLinecap="round" />
    {/* Recycle Chasing Arrows Mobius */}
    <path d="M26 36 L32 28 L38 36" stroke="#586B4D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M32 30 L32 44" stroke="#586B4D" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="32" cy="42" r="7" stroke="#586B4D" strokeWidth="1.5" strokeDasharray="3 2" />
  </svg>
);

export const PauseBoxIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="10" y="20" width="44" height="38" rx="3" fill="#FAF8F2" stroke="#686760" strokeWidth="2.5" />
    <rect x="6" y="14" width="52" height="8" rx="2" fill="#EAE3D6" stroke="#686760" strokeWidth="2" />
    {/* Packing Tape across box */}
    <rect x="26" y="14" width="12" height="44" fill="#D3C9B8" fillOpacity="0.4" stroke="#C5BEAF" strokeWidth="1" />
    {/* 30-Day Hourglass */}
    <path d="M28 28 L36 28 L33 35 L36 42 L28 42 L31 35 Z" fill="#EAE3D6" stroke="#686760" strokeWidth="1.5" />
    <line x1="26" y1="28" x2="38" y2="28" stroke="#686760" strokeWidth="2" strokeLinecap="round" />
    <line x1="26" y1="42" x2="38" y2="42" stroke="#686760" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// =================================================================
// NEW INSTRUCTIONAL DIAGRAMS & ILLUSTRATIONS FOR DAILY GUIDES
// =================================================================

// Living Room Clear Horizon Surface Diagram (Page 07)
export const LivingRoomHorizonDiagram: React.FC<{ className?: string }> = ({ className = 'w-full h-24' }) => (
  <svg viewBox="0 0 450 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="450" height="100" fill="#FAF8F2" rx="6" />
    <line x1="30" y1="75" x2="420" y2="75" stroke="#D3C9B8" strokeWidth="2" strokeLinecap="round" />
    {/* Coffee Table Surface */}
    <rect x="80" y="55" width="290" height="20" rx="3" fill="#EAE3D6" stroke="#C5BEAF" strokeWidth="1.5" />
    <line x1="110" y1="75" x2="105" y2="92" stroke="#B8AFA0" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="340" y1="75" x2="345" y2="92" stroke="#B8AFA0" strokeWidth="2.5" strokeLinecap="round" />
    {/* Rule of 3 items max */}
    <ellipse cx="140" cy="52" rx="18" ry="4" fill="#FAF8F2" stroke="#899A7E" strokeWidth="1.5" />
    <rect x="215" y="42" width="28" height="13" rx="1" fill="#FFFFFF" stroke="#D3C9B8" strokeWidth="1" />
    <path d="M295 40 Q292 32 298 32 Q304 32 301 40 Z" fill="#899A7E" fillOpacity="0.7" stroke="#586B4D" strokeWidth="1" />
    <line x1="298" y1="32" x2="302" y2="22" stroke="#586B4D" strokeWidth="1.5" />
    <circle cx="302" cy="22" r="2" fill="#899A7E" />
    <text x="225" y="18" fill="#586B4D" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="600" letterSpacing="0.05em">
      THE ZERO-HORIZON PRINCIPLE: 80% CLEAR / MAX 1 TRAY + 1 ACCENT
    </text>
  </svg>
);

// Bookshelf Spine Alignment & Paper Filing Diagram (Page 08 - Refined Alignment)
export const BookshelfPaperDiagram: React.FC<{ className?: string }> = ({ className = 'w-full h-28' }) => (
  <svg viewBox="0 0 540 115" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="540" height="115" fill="#FAF8F2" rx="6" />
    
    {/* Diagram Title Banner */}
    <text x="270" y="17" fill="#586B4D" fontSize="10.5" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold" letterSpacing="0.06em">
      SHELF BREATHING ROOM (20% EMPTY) & 3-FOLDER PAPER TRIAGE
    </text>

    {/* Consistent Shelf Baseline at Y = 82 */}
    <rect x="25" y="82" width="490" height="8" rx="2" fill="#EAE3D6" stroke="#C5BEAF" strokeWidth="1.5" />

    {/* Section 1: Vertically Aligned Books (Sitting directly on shelf Y=82) */}
    <g id="books-group">
      {/* Book 1 (Olive) */}
      <rect x="45" y="32" width="14" height="50" rx="1.5" fill="#899A7E" fillOpacity="0.8" stroke="#586B4D" strokeWidth="1" />
      <line x1="48" y1="36" x2="48" y2="78" stroke="#FAF8F2" strokeWidth="1" strokeOpacity="0.6" />
      
      {/* Book 2 (Beige) */}
      <rect x="62" y="24" width="16" height="58" rx="1.5" fill="#D8CEBD" stroke="#C5BEAF" strokeWidth="1" />
      <line x1="66" y1="28" x2="66" y2="78" stroke="#77766F" strokeWidth="1" strokeOpacity="0.5" />

      {/* Book 3 (Ivory) */}
      <rect x="81" y="36" width="12" height="46" rx="1.5" fill="#FAF8F2" stroke="#C5BEAF" strokeWidth="1" />

      {/* Book 4 (Deep Olive) */}
      <rect x="96" y="20" width="18" height="62" rx="1.5" fill="#586B4D" fillOpacity="0.85" stroke="#44543B" strokeWidth="1" />
      <line x1="100" y1="24" x2="100" y2="78" stroke="#FAF8F2" strokeWidth="1" strokeOpacity="0.6" />

      {/* Book 5 (Sage) */}
      <rect x="117" y="30" width="14" height="52" rx="1.5" fill="#899A7E" fillOpacity="0.6" stroke="#586B4D" strokeWidth="1" />

      {/* Leaning Book 6 */}
      <g transform="translate(133, 38) rotate(14 0 44)">
        <rect x="0" y="0" width="14" height="44" rx="1.5" fill="#EAE3D6" stroke="#C5BEAF" strokeWidth="1" />
      </g>
    </g>

    {/* Decorative Ceramic Sphere Bookend (Sitting on Y=82, center at Y=66, r=16) */}
    <circle cx="185" cy="66" r="16" fill="#EAE3D6" stroke="#C5BEAF" strokeWidth="1.5" />
    <circle cx="185" cy="66" r="11" fill="#FAF8F2" stroke="#D3C9B8" strokeWidth="1" />

    {/* 20% Breathing Space Zone Callout */}
    <g transform="translate(215, 42)">
      <rect width="70" height="32" rx="3" fill="#E9EEE5" fillOpacity="0.7" stroke="#899A7E" strokeWidth="1" strokeDasharray="3 2" />
      <text x="35" y="15" fill="#586B4D" fontSize="8" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">20% EMPTY</text>
      <text x="35" y="25" fill="#77766F" fontSize="7" fontFamily="sans-serif" textAnchor="middle">Breathing Space</text>
    </g>

    {/* Section 2: Consistent 3 Magazine Paper Folders */}
    {/* Folder 1: ACTION */}
    <g transform="translate(305, 24)">
      <path d="M0 58 L0 0 L40 0 L58 18 L58 58 Z" fill="#FAF8F2" stroke="#899A7E" strokeWidth="1.5" />
      <path d="M40 0 L40 18 L58 18" stroke="#899A7E" strokeWidth="1.5" fill="none" />
      <rect x="6" y="24" width="46" height="22" rx="2" fill="#E9EEE5" stroke="#899A7E" strokeWidth="1" />
      <text x="29" y="38" fill="#586B4D" fontSize="9" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold" letterSpacing="0.05em">ACTION</text>
    </g>

    {/* Folder 2: ARCHIVE */}
    <g transform="translate(375, 24)">
      <path d="M0 58 L0 0 L40 0 L58 18 L58 58 Z" fill="#FAF8F2" stroke="#899A7E" strokeWidth="1.5" />
      <path d="M40 0 L40 18 L58 18" stroke="#899A7E" strokeWidth="1.5" fill="none" />
      <rect x="6" y="24" width="46" height="22" rx="2" fill="#EAE3D6" stroke="#C5BEAF" strokeWidth="1" />
      <text x="29" y="38" fill="#586B4D" fontSize="8.5" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold" letterSpacing="0.04em">ARCHIVE</text>
    </g>

    {/* Folder 3: TAX */}
    <g transform="translate(445, 24)">
      <path d="M0 58 L0 0 L40 0 L58 18 L58 58 Z" fill="#FAF8F2" stroke="#899A7E" strokeWidth="1.5" />
      <path d="M40 0 L40 18 L58 18" stroke="#899A7E" strokeWidth="1.5" fill="none" />
      <rect x="6" y="24" width="46" height="22" rx="2" fill="#E9EEE5" stroke="#899A7E" strokeWidth="1" />
      <text x="29" y="38" fill="#586B4D" fontSize="9" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold" letterSpacing="0.05em">TAX</text>
    </g>

    {/* Subtitle Caption */}
    <text x="270" y="106" fill="#77766F" fontSize="8.5" fontFamily="sans-serif" textAnchor="middle">
      Sort loose paperwork strictly into folders today — do not pause to read articles or old receipts.
    </text>
  </svg>
);

// Kitchen Work Triangle & Clear Zones (Page 09)
export const KitchenPrepZoneDiagram: React.FC<{ className?: string }> = ({ className = 'w-full h-24' }) => (
  <svg viewBox="0 0 450 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="450" height="100" fill="#FAF8F2" rx="6" />
    {/* 3 Work Stations */}
    <g transform="translate(60, 20)">
      <rect width="80" height="55" rx="4" fill="#E9EEE5" stroke="#899A7E" strokeWidth="1.5" />
      <text x="40" y="24" fill="#586B4D" fontSize="9" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">1. PREP ZONE</text>
      <text x="40" y="40" fill="#77766F" fontSize="8" fontFamily="sans-serif" textAnchor="middle">Cutting & Board</text>
    </g>
    <path d="M145 48 L175 48" stroke="#899A7E" strokeWidth="2" strokeDasharray="3 3" />
    <g transform="translate(185, 20)">
      <rect width="80" height="55" rx="4" fill="#FAF8F2" stroke="#D3C9B8" strokeWidth="1.5" />
      <text x="40" y="24" fill="#292A26" fontSize="9" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">2. COOK ZONE</text>
      <text x="40" y="40" fill="#77766F" fontSize="8" fontFamily="sans-serif" textAnchor="middle">Stovetop & Oils</text>
    </g>
    <path d="M270 48 L300 48" stroke="#899A7E" strokeWidth="2" strokeDasharray="3 3" />
    <g transform="translate(310, 20)">
      <rect width="80" height="55" rx="4" fill="#EAE3D6" stroke="#C5BEAF" strokeWidth="1.5" />
      <text x="40" y="24" fill="#586B4D" fontSize="9" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">3. CLEAN ZONE</text>
      <text x="40" y="40" fill="#77766F" fontSize="8" fontFamily="sans-serif" textAnchor="middle">Sink & Dish Rack</text>
    </g>
    <text x="225" y="90" fill="#586B4D" fontSize="9" fontFamily="sans-serif" textAnchor="middle" fontWeight="500">
      Countertops must remain clear between cooking sessions. Store small appliances out of sight.
    </text>
  </svg>
);

// Pantry Vertical Tiering Diagram (Page 10)
export const PantryTieringDiagram: React.FC<{ className?: string }> = ({ className = 'w-full h-24' }) => (
  <svg viewBox="0 0 450 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="450" height="100" fill="#FAF8F2" rx="6" />
    {/* Pantry Shelves */}
    <line x1="50" y1="32" x2="400" y2="32" stroke="#D3C9B8" strokeWidth="2" />
    <line x1="50" y1="62" x2="400" y2="62" stroke="#D3C9B8" strokeWidth="2" />
    <line x1="50" y1="90" x2="400" y2="90" stroke="#D3C9B8" strokeWidth="2" />

    {/* Top Shelf: Backstock */}
    <rect x="70" y="14" width="40" height="16" rx="2" fill="#FAF8F2" stroke="#C5BEAF" strokeWidth="1" />
    <text x="90" y="25" fill="#77766F" fontSize="7" textAnchor="middle">Bulk Bins</text>
    <text x="280" y="24" fill="#77766F" fontSize="8" fontStyle="italic">Top Shelf: Infrequently used appliances & bulk dry backstock</text>

    {/* Middle Eye-Level Shelf: Daily Staples & Decanted Jars */}
    <rect x="70" y="40" width="18" height="20" rx="2" fill="#E9EEE5" stroke="#899A7E" strokeWidth="1" />
    <rect x="94" y="40" width="18" height="20" rx="2" fill="#E9EEE5" stroke="#899A7E" strokeWidth="1" />
    <rect x="118" y="40" width="18" height="20" rx="2" fill="#E9EEE5" stroke="#899A7E" strokeWidth="1" />
    <text x="280" y="52" fill="#586B4D" fontSize="8" fontWeight="bold">Eye Level: Daily grains, spices, oils (FIFO: First-In, First-Out)</text>

    {/* Bottom Shelf: Heavy Crates & Root Vegetables */}
    <rect x="70" y="68" width="55" height="20" rx="2" fill="#EAE3D6" stroke="#C5BEAF" strokeWidth="1" />
    <text x="97" y="81" fill="#77766F" fontSize="7" textAnchor="middle">Heavy Bin</text>
    <text x="280" y="80" fill="#77766F" fontSize="8">Bottom Tier: Canned goods, vinegar, potato/onion baskets</text>
  </svg>
);

// Refrigerator Temperature & Freshness Zones (Page 11)
export const FridgeZonesDiagram: React.FC<{ className?: string }> = ({ className = 'w-full h-24' }) => (
  <svg viewBox="0 0 450 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="450" height="100" fill="#FAF8F2" rx="6" />
    {/* Fridge Shelving Outline */}
    <rect x="40" y="10" width="160" height="80" rx="4" fill="#FFFFFF" stroke="#899A7E" strokeWidth="1.5" />
    <line x1="40" y1="36" x2="200" y2="36" stroke="#EAE3D6" strokeWidth="1" />
    <line x1="40" y1="62" x2="200" y2="62" stroke="#EAE3D6" strokeWidth="1" />
    <rect x="45" y="66" width="70" height="20" rx="2" fill="#E9EEE5" stroke="#899A7E" strokeWidth="1" />
    <rect x="120" y="66" width="75" height="20" rx="2" fill="#E9EEE5" stroke="#899A7E" strokeWidth="1" />
    <text x="80" y="79" fill="#586B4D" fontSize="7" textAnchor="middle">Crisper (Veg)</text>
    <text x="157" y="79" fill="#586B4D" fontSize="7" textAnchor="middle">Crisper (Fruit)</text>

    {/* Explanatory Callouts on Right */}
    <g transform="translate(220, 15)">
      <text x="0" y="10" fill="#586B4D" fontSize="9" fontWeight="bold">TOP: Ready-to-eat leftovers & dairy (Stable Temp)</text>
      <text x="0" y="32" fill="#292A26" fontSize="9" fontWeight="bold">MIDDLE: Eggs, prepared ingredients & deli</text>
      <text x="0" y="54" fill="#586B4D" fontSize="9" fontWeight="bold">BOTTOM COLD ZONE: Raw proteins sealed in trays</text>
      <text x="0" y="74" fill="#77766F" fontSize="8">DOOR SHELVES: Condiments & butter only (warmest zone)</text>
    </g>
  </svg>
);

// Capsule Wardrobe & Uniform Hanger Flow (Page 13)
export const WardrobeCapsuleDiagram: React.FC<{ className?: string }> = ({ className = 'w-full h-24' }) => (
  <svg viewBox="0 0 450 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="450" height="100" fill="#FAF8F2" rx="6" />
    {/* Wooden Closet Rail */}
    <rect x="50" y="25" width="350" height="6" rx="2" fill="#D8CEBD" stroke="#C5BEAF" strokeWidth="1" />
    
    {/* 6 Matching Wooden Hangers with Garments */}
    {Array.from({ length: 6 }).map((_, i) => (
      <g key={i} transform={`translate(${75 + i * 55}, 28)`}>
        <path d="M0 0 L15 -10 L30 0" stroke="#77766F" strokeWidth="1.5" fill="none" />
        <path d="M15 -10 C15 -15 22 -15 22 -10" stroke="#77766F" strokeWidth="1.5" fill="none" />
        <path d="M2 2 L6 35 L24 35 L28 2 Z" fill={i % 2 === 0 ? '#EAE3D6' : '#899A7E'} fillOpacity="0.75" />
      </g>
    ))}
    <text x="225" y="82" fill="#586B4D" fontSize="9" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
      THE UNIFORM HANGER RULE & COLOR GRADIENT (LIGHT TO DARK)
    </text>
    <text x="225" y="94" fill="#77766F" fontSize="8" fontFamily="sans-serif" textAnchor="middle">
      Facing all hangers backward reveals unworn clothes over 30 days without guesswork.
    </text>
  </svg>
);

// Vertical File-Folding Method for Drawers (Page 14)
export const VerticalFileFoldDiagram: React.FC<{ className?: string }> = ({ className = 'w-full h-24' }) => (
  <svg viewBox="0 0 450 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="450" height="100" fill="#FAF8F2" rx="6" />
    {/* Open Dresser Drawer */}
    <rect x="50" y="20" width="350" height="60" rx="3" fill="#FFFFFF" stroke="#C5BEAF" strokeWidth="1.5" />
    {/* Drawer Partition Dividers */}
    <line x1="165" y1="20" x2="165" y2="80" stroke="#EAE3D6" strokeWidth="2" />
    <line x1="285" y1="20" x2="285" y2="80" stroke="#EAE3D6" strokeWidth="2" />

    {/* Vertical Folded Garments standing upright like file cards */}
    {Array.from({ length: 5 }).map((_, i) => (
      <rect key={`c1-${i}`} x={62 + i * 19} y="28" width="14" height="44" rx="2" fill="#899A7E" fillOpacity="0.65" stroke="#586B4D" strokeWidth="1" />
    ))}
    {Array.from({ length: 5 }).map((_, i) => (
      <rect key={`c2-${i}`} x={178 + i * 19} y="28" width="14" height="44" rx="2" fill="#EAE3D6" stroke="#C5BEAF" strokeWidth="1" />
    ))}
    {Array.from({ length: 5 }).map((_, i) => (
      <rect key={`c3-${i}`} x={298 + i * 19} y="28" width="14" height="44" rx="2" fill="#FAF8F2" stroke="#899A7E" strokeWidth="1" />
    ))}
    <text x="225" y="14" fill="#586B4D" fontSize="9" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
      VERTICAL FILE-FOLDING: EVERY GARMENT VISIBLE AT A GLANCE (ZERO TOPPLING)
    </text>
  </svg>
);

// Nightstand & Sleep Sanctuary Perimeter (Page 15)
export const NightstandSanctuaryDiagram: React.FC<{ className?: string }> = ({ className = 'w-full h-24' }) => (
  <svg viewBox="0 0 450 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="450" height="100" fill="#FAF8F2" rx="6" />
    {/* Nightstand Table */}
    <rect x="180" y="45" width="90" height="45" rx="3" fill="#EAE3D6" stroke="#C5BEAF" strokeWidth="1.5" />
    <line x1="180" y1="65" x2="270" y2="65" stroke="#D3C9B8" strokeWidth="1" />
    {/* Tabletop: Lamp, 1 Book, Water Glass (Max 3 items rule) */}
    <path d="M195 45 L195 25 L188 25 L202 25" stroke="#586B4D" strokeWidth="1.5" />
    <path d="M185 25 L205 25 L200 12 L190 12 Z" fill="#E9EEE5" stroke="#899A7E" strokeWidth="1" />
    <rect x="220" y="40" width="22" height="5" rx="1" fill="#FFFFFF" stroke="#C5BEAF" strokeWidth="1" />
    <rect x="248" y="36" width="8" height="9" rx="1" fill="#E9EEE5" stroke="#899A7E" strokeWidth="1" />
    
    <text x="90" y="55" fill="#586B4D" fontSize="9" textAnchor="middle" fontWeight="bold">PHONE CHARGER OUTSIDE</text>
    <path d="M90 62 L90 75 L120 75" stroke="#899A7E" strokeWidth="1.5" strokeDasharray="3 2" />
    <text x="360" y="55" fill="#586B4D" fontSize="9" textAnchor="middle" fontWeight="bold">CALM SLEEP PERIMETER</text>
    <text x="360" y="70" fill="#77766F" fontSize="8" textAnchor="middle">Zero work documents / clutter</text>
  </svg>
);

// Bathroom Vanity & Skincare Culling (Page 16 - Refined Alignment)
export const BathroomVanityDiagram: React.FC<{ className?: string }> = ({ className = 'w-full h-28' }) => (
  <svg viewBox="0 0 540 115" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="540" height="115" fill="#FAF8F2" rx="6" />

    {/* Section 1: PAO Expiry Indicator (Left Column) */}
    <g transform="translate(60, 18)">
      {/* 12M / PAO Open-Jar Symbol */}
      <path d="M12 22 L38 22 L35 44 L15 44 Z" fill="#E9EEE5" stroke="#586B4D" strokeWidth="1.5" />
      <path d="M9 22 C9 16 41 16 41 22" stroke="#586B4D" strokeWidth="1.5" fill="none" />
      <text x="25" y="36" fill="#586B4D" fontSize="8.5" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">12M</text>
      
      {/* PAO Labels Below Symbol with Ample Spacing */}
      <text x="25" y="58" fill="#586B4D" fontSize="8.5" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">PAO SYMBOL</text>
      <text x="25" y="70" fill="#77766F" fontSize="7.5" fontFamily="sans-serif" textAnchor="middle">Discard after 12M</text>
    </g>

    {/* Vertical Dividing Line */}
    <line x1="150" y1="20" x2="150" y2="85" stroke="#EAE3D6" strokeWidth="1.5" strokeDasharray="3 3" />

    {/* Section 2: Vanity Tray & Products on Common Baseline Y = 75 */}
    <g id="vanity-tray-products">
      {/* Shelf Baseline Y = 75 */}
      <rect x="175" y="75" width="210" height="6" rx="2" fill="#EAE3D6" stroke="#C5BEAF" strokeWidth="1" />
      
      {/* Vanity Acrylic/Wood Tray Y = 71 */}
      <rect x="190" y="71" width="180" height="5" rx="1.5" fill="#FAF8F2" stroke="#899A7E" strokeWidth="1.2" />

      {/* Product 1: Tall Pump Bottle (Cleanser) - baseline at Y=71, height 45 -> Y=26 */}
      <rect x="205" y="32" width="16" height="39" rx="2" fill="#E9EEE5" stroke="#586B4D" strokeWidth="1.2" />
      <rect x="210" y="27" width="6" height="5" fill="#899A7E" />
      <line x1="210" y1="27" x2="204" y2="25" stroke="#586B4D" strokeWidth="1.5" strokeLinecap="round" />

      {/* Product 2: Serum Dropper Bottle - baseline Y=71, height 33 -> Y=38 */}
      <rect x="233" y="42" width="14" height="29" rx="2" fill="#FAF8F2" stroke="#899A7E" strokeWidth="1.2" />
      <path d="M237 42 L237 36 L243 36 L243 42 Z" fill="#D8CEBD" stroke="#C5BEAF" strokeWidth="1" />
      <path d="M238 36 C238 32 242 32 242 36 Z" fill="#77766F" />

      {/* Product 3: Cream Tub / Jar - baseline Y=71, height 20 -> Y=51 */}
      <rect x="260" y="53" width="22" height="18" rx="2" fill="#EAE3D6" stroke="#C5BEAF" strokeWidth="1.2" />
      <rect x="258" y="49" width="26" height="5" rx="1" fill="#899A7E" fillOpacity="0.8" />

      {/* Product 4: Daily Sunscreen Tube - baseline Y=71, height 36 -> Y=35 */}
      <polygon points="296,71 312,71 310,38 298,38" fill="#FAF8F2" stroke="#586B4D" strokeWidth="1.2" />
      <rect x="298" y="34" width="12" height="4" fill="#899A7E" />

      {/* Section 2 Caption Below Shelf */}
      <text x="280" y="93" fill="#586B4D" fontSize="8.5" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
        THE "DAILY 4" SURFACE TRAY
      </text>
      <text x="280" y="105" fill="#77766F" fontSize="7.5" fontFamily="sans-serif" textAnchor="middle">
        Store all secondary skincare in drawers; keep counter clear
      </text>
    </g>

    {/* Vertical Dividing Line */}
    <line x1="405" y1="20" x2="405" y2="85" stroke="#EAE3D6" strokeWidth="1.5" strokeDasharray="3 3" />

    {/* Section 3: Daily 4 Clean Status Badge (Right Column) */}
    <g transform="translate(440, 18)">
      <circle cx="28" cy="24" r="20" fill="#E9EEE5" stroke="#586B4D" strokeWidth="1.5" />
      <text x="28" y="23" fill="#586B4D" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">DAILY 4</text>
      <text x="28" y="34" fill="#77766F" fontSize="7.5" fontFamily="sans-serif" textAnchor="middle">RULE</text>
      
      {/* Label Below Badge */}
      <text x="28" y="58" fill="#586B4D" fontSize="8.5" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">ZERO SPILLOVER</text>
      <text x="28" y="70" fill="#77766F" fontSize="7.5" fontFamily="sans-serif" textAnchor="middle">Max 4 items on tray</text>
    </g>
  </svg>
);

// Linen Closet Rolled Towel & Bedding Bundling (Page 17)
export const LinenClosetDiagram: React.FC<{ className?: string }> = ({ className = 'w-full h-24' }) => (
  <svg viewBox="0 0 450 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="450" height="100" fill="#FAF8F2" rx="6" />
    {/* Shelf */}
    <rect x="50" y="65" width="350" height="8" rx="2" fill="#EAE3D6" stroke="#C5BEAF" strokeWidth="1.5" />
    {/* Spa Rolled Towels */}
    {Array.from({ length: 4 }).map((_, i) => (
      <g key={i} transform={`translate(${80 + i * 36}, 32)`}>
        <rect width="30" height="33" rx="15" fill="#E9EEE5" stroke="#899A7E" strokeWidth="1.5" />
        <ellipse cx="15" cy="16" rx="8" ry="10" fill="#FAF8F2" stroke="#899A7E" strokeWidth="1" />
      </g>
    ))}
    {/* Sheet Set Bundle in Pillowcase */}
    <g transform="translate(260, 25)">
      <rect width="80" height="40" rx="4" fill="#FAF8F2" stroke="#C5BEAF" strokeWidth="1.5" />
      <text x="40" y="22" fill="#586B4D" fontSize="8" textAnchor="middle" fontWeight="bold">PILLOWCASE</text>
      <text x="40" y="32" fill="#77766F" fontSize="7" textAnchor="middle">Bundle Trick</text>
    </g>
    <text x="225" y="88" fill="#586B4D" fontSize="9" fontFamily="sans-serif" textAnchor="middle" fontWeight="500">
      Store entire sheet sets inside one of their matching pillowcases to prevent mismatched stacks.
    </text>
  </svg>
);

// Home Office Cable Management & Desk Docking (Page 18 - Refined Alignment)
export const OfficeCableDiagram: React.FC<{ className?: string }> = ({ className = 'w-full h-28' }) => (
  <svg viewBox="0 0 540 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="540" height="120" fill="#FAF8F2" rx="6" />

    {/* Top Diagram Title Banner */}
    <text x="270" y="16" fill="#586B4D" fontSize="10.5" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold" letterSpacing="0.06em">
      THE DESK CABLE RACEWAY & "RULE OF 1" DOCKING SYSTEM
    </text>

    {/* Desktop Monitor / Laptop Stand (Above Desk: Y = 22 to 38) */}
    <g transform="translate(230, 20)">
      {/* Laptop / Screen Stand Base */}
      <rect x="20" y="12" width="40" height="4" rx="1.5" fill="#FAF8F2" stroke="#77766F" strokeWidth="1.2" />
      <rect x="37" y="6" width="6" height="6" fill="#D8CEBD" />
      <rect x="25" y="-6" width="30" height="12" rx="1.5" fill="#FAF8F2" stroke="#77766F" strokeWidth="1" />
    </g>

    {/* Clean Desk Surface (Y = 38, thickness = 8) */}
    <rect x="50" y="38" width="440" height="8" rx="2" fill="#EAE3D6" stroke="#C5BEAF" strokeWidth="1.5" />
    
    {/* Single Routed Power / Thunderbolt Cable (Rule of 1) */}
    <path d="M270 36 L270 46 L250 46 L250 60" stroke="#586B4D" strokeWidth="2" strokeLinecap="round" />
    
    {/* Under-Desk Cable Raceway / Mesh Basket (Y = 54 to 76) */}
    <rect x="160" y="54" width="220" height="22" rx="3" fill="#E9EEE5" fillOpacity="0.8" stroke="#899A7E" strokeWidth="1.5" strokeDasharray="4 2" />
    
    {/* Coiled Wires Safely Managed Inside the Raceway */}
    <path d="M175 65 Q220 71 270 65 T365 65" stroke="#586B4D" strokeWidth="1.8" fill="none" />
    <circle cx="210" cy="65" r="3.5" fill="#899A7E" fillOpacity="0.6" />
    <circle cx="330" cy="65" r="3.5" fill="#899A7E" fillOpacity="0.6" />

    {/* Cable Tray Tag - Positioned Clearly to the Right of Tray */}
    <g transform="translate(390, 55)">
      <rect width="88" height="20" rx="3" fill="#FAF8F2" stroke="#899A7E" strokeWidth="1" />
      <text x="44" y="13.5" fill="#586B4D" fontSize="8" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
        UNDER-DESK TRAY
      </text>
    </g>

    {/* Rule of 1 Callout - Positioned Cleanly to the Left of Tray */}
    <g transform="translate(62, 55)">
      <rect width="88" height="20" rx="3" fill="#FAF8F2" stroke="#899A7E" strokeWidth="1" />
      <text x="44" y="13.5" fill="#586B4D" fontSize="8" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
        1 POWER ROUTE
      </text>
    </g>

    {/* Bottom Caption Separated from SVG Artwork */}
    <text x="270" y="102" fill="#586B4D" fontSize="8.5" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">
      Rule of 1: Exactly 1 single cable routed up to desktop hub — all excess wire hidden in raceway.
    </text>
  </svg>
);
