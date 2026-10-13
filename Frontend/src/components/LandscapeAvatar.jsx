import "./LandscapeAvatar.css";

/* Six scenic flat-design landscapes, each rendered inside a rounded box.
   Variants: sunset · forest · night · desert · mountain · lake
   To swap in your own uploaded PNGs, replace the <svg> body below with:
     <img src={`/avatars/${variant}.png`} alt="" /> */
export default function LandscapeAvatar({ variant = "sunset", size = 44, rounded = "circle", className = "" }) {
  const clipId = `nx-av-${variant}-${size}-${rounded}`;
  const r = rounded === "circle" ? 32 : 12;
  const cls = `nx-av nx-av--${rounded} ${className}`;

  return (
    <span className={cls} style={{ width: size, height: size }}>
      <svg viewBox="0 0 64 64" width="100%" height="100%" aria-hidden="true">
        <defs>
          <clipPath id={clipId}>
            <rect x="0" y="0" width="64" height="64" rx={r} />
          </clipPath>
        </defs>
        <g clipPath={`url(#${clipId})`}>
          {variant === "sunset"   && <SunsetScene />}
          {variant === "forest"   && <ForestScene />}
          {variant === "night"    && <NightScene />}
          {variant === "desert"   && <DesertScene />}
          {variant === "mountain" && <MountainScene />}
          {variant === "lake"     && <LakeScene />}
        </g>
      </svg>
    </span>
  );
}

function SunsetScene() {
  return (
    <>
      <rect width="64" height="64" fill="#FBE7C6" />
      <circle cx="46" cy="18" r="9" fill="#F59E0B" />
      <path d="M0 42 L18 26 L30 38 L44 22 L64 40 L64 64 L0 64 Z" fill="#C2410C" />
      <path d="M0 50 L22 40 L38 48 L56 42 L64 46 L64 64 L0 64 Z" fill="#7C2D12" />
    </>
  );
}

function ForestScene() {
  return (
    <>
      <rect width="64" height="64" fill="#A7F3D0" />
      <circle cx="50" cy="14" r="6" fill="#FBBF24" />
      <path d="M0 44 L12 32 L22 42 L34 30 L48 42 L64 32 L64 64 L0 64 Z" fill="#166534" />
      <path d="M0 52 L14 46 L26 52 L40 46 L56 52 L64 48 L64 64 L0 64 Z" fill="#14532D" />
      <circle cx="14" cy="30" r="5" fill="#22C55E" />
      <circle cx="34" cy="28" r="6" fill="#16A34A" />
      <circle cx="50" cy="30" r="5" fill="#22C55E" />
    </>
  );
}

function NightScene() {
  return (
    <>
      <rect width="64" height="64" fill="#312E81" />
      <circle cx="48" cy="14" r="1.6" fill="#F1F5F9" />
      <circle cx="18" cy="10" r="1.2" fill="#F1F5F9" />
      <circle cx="30" cy="20" r="1.6" fill="#F1F5F9" />
      <circle cx="10" cy="24" r="1" fill="#F1F5F9" />
      <circle cx="54" cy="22" r="1.2" fill="#F1F5F9" />
      <circle cx="42" cy="10" r="6" fill="#FDE68A" />
      <circle cx="44" cy="9" r="6" fill="#312E81" />
      <path d="M0 46 L14 30 L26 42 L40 28 L54 42 L64 36 L64 64 L0 64 Z" fill="#1E1B4B" />
      <path d="M0 54 L18 48 L34 54 L48 48 L64 54 L64 64 L0 64 Z" fill="#0F172A" />
    </>
  );
}

function DesertScene() {
  return (
    <>
      <rect width="64" height="64" fill="#FEF3C7" />
      <circle cx="16" cy="16" r="7" fill="#F59E0B" />
      <path d="M0 40 C16 34 26 42 40 36 C52 32 58 36 64 34 L64 64 L0 64 Z" fill="#FBBF24" />
      <path d="M0 48 C18 42 30 52 44 46 C54 42 60 46 64 44 L64 64 L0 64 Z" fill="#D97706" />
      <path d="M0 56 C16 52 26 58 42 54 C54 52 60 56 64 54 L64 64 L0 64 Z" fill="#B45309" />
    </>
  );
}

function MountainScene() {
  return (
    <>
      <rect width="64" height="64" fill="#BAE6FD" />
      <circle cx="50" cy="14" r="5" fill="#FDE68A" />
      <path d="M0 48 L16 22 L28 38 L42 18 L58 40 L64 34 L64 64 L0 64 Z" fill="#0F766E" />
      <path d="M16 22 L22 30 L10 30 Z" fill="#F1F5F9" />
      <path d="M42 18 L48 27 L36 27 Z" fill="#F1F5F9" />
      <path d="M0 56 L20 48 L40 54 L56 48 L64 52 L64 64 L0 64 Z" fill="#065F46" />
    </>
  );
}

function LakeScene() {
  return (
    <>
      <rect width="64" height="64" fill="#CFFAFE" />
      <circle cx="48" cy="14" r="6" fill="#FDE68A" />
      <path d="M0 40 L14 30 L26 40 L40 30 L56 40 L64 36 L64 64 L0 64 Z" fill="#0E7490" />
      <path d="M0 46 L16 42 L32 46 L48 42 L64 46 L64 64 L0 64 Z" fill="#06B6D4" />
      <path d="M0 52 L18 50 L36 52 L54 50 L64 52 L64 64 L0 64 Z" fill="#0891B2" />
    </>
  );
}