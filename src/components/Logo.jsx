import { BRAND } from "../data/icons.js";

const CUSTOM = {
  "REST API": (
    <g fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 4C6.8 4 6 5 6 7v2c0 1.4-.9 2.5-2.5 3C5.1 12.5 6 13.6 6 15v2c0 2 .8 3 3 3" />
      <path d="M15 4c2.2 0 3 1 3 3v2c0 1.4.9 2.5 2.5 3-1.6.5-2.5 1.6-2.5 3v2c0 2-.8 3-3 3" />
    </g>
  ),
  "TCP/IP": (
    <g stroke="#fff" strokeWidth="1.6" fill="#fff">
      <line x1="12" y1="6" x2="6" y2="17" /><line x1="12" y1="6" x2="18" y2="17" /><line x1="6" y1="17" x2="18" y2="17" />
      <circle cx="12" cy="6" r="2.3" /><circle cx="6" cy="17" r="2.3" /><circle cx="18" cy="17" r="2.3" />
    </g>
  ),
  "DNS / DHCP": (
    <g fill="none" stroke="#fff" strokeWidth="1.7">
      <circle cx="12" cy="12" r="8" /><ellipse cx="12" cy="12" rx="3.4" ry="8" /><line x1="4" y1="12" x2="20" y2="12" />
    </g>
  ),
  "LAN / WAN": (
    <g stroke="#fff" strokeWidth="1.7" fill="#fff">
      <line x1="12" y1="12" x2="6" y2="6" /><line x1="12" y1="12" x2="18" y2="6" /><line x1="12" y1="12" x2="12" y2="19" />
      <circle cx="12" cy="12" r="2.3" /><circle cx="6" cy="6" r="1.8" /><circle cx="18" cy="6" r="1.8" /><circle cx="12" cy="19" r="1.8" />
    </g>
  ),
  "Windows": (
    <g fill="#fff">
      <rect x="4" y="4" width="7" height="7" rx="1" /><rect x="13" y="4" width="7" height="7" rx="1" />
      <rect x="4" y="13" width="7" height="7" rx="1" /><rect x="13" y="13" width="7" height="7" rx="1" />
    </g>
  ),
  "PC build": (
    <g fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round">
      <rect x="6" y="6" width="12" height="12" rx="2" /><rect x="9.5" y="9.5" width="5" height="5" rx="1" />
      <line x1="9" y1="3" x2="9" y2="6" /><line x1="15" y1="3" x2="15" y2="6" />
      <line x1="9" y1="18" x2="9" y2="21" /><line x1="15" y1="18" x2="15" y2="21" />
      <line x1="3" y1="9" x2="6" y2="9" /><line x1="3" y1="15" x2="6" y2="15" />
      <line x1="18" y1="9" x2="21" y2="9" /><line x1="18" y1="15" x2="21" y2="15" />
    </g>
  ),
};

export function Logo({ s }) {
  const brand = BRAND[s.name];
  return (
    <span className="badge" style={{ background: s.bg }}>
      <svg viewBox="0 0 24 24" className="logo" aria-hidden="true">
        {brand ? <path d={brand.path} fill={s.fg || "#fff"} /> : CUSTOM[s.name]}
      </svg>
    </span>
  );
}

export const GithubMark = () => (
  <svg viewBox="0 0 24 24" className="gh-mark" aria-hidden="true">
    <path d={BRAND.GitHub.path} fill="currentColor" />
  </svg>
);

export const Card = ({ s }) => (
  <div className="scard">
    <Logo s={s} />
    <div>
      <div className="sname">{s.name}</div>
      <div className="stag">{s.tag}</div>
    </div>
  </div>
);
