export default function ThemeToggle({ onToggle }) {
  return (
    <button className="theme-toggle" onClick={onToggle} aria-label="Toggle theme" type="button">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <g className="tt-sun" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
          <circle cx="12" cy="12" r="4.2" fill="currentColor" stroke="none" />
          <line x1="12" y1="1.8" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="22.2" />
          <line x1="1.8" y1="12" x2="4" y2="12" />
          <line x1="20" y1="12" x2="22.2" y2="12" />
          <line x1="4.5" y1="4.5" x2="6" y2="6" />
          <line x1="18" y1="18" x2="19.5" y2="19.5" />
          <line x1="19.5" y1="4.5" x2="18" y2="6" />
          <line x1="6" y1="18" x2="4.5" y2="19.5" />
        </g>
        <path className="tt-moon" fill="currentColor" d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />
      </svg>
    </button>
  );
}
