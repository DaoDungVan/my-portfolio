import "./Work.css";
import { useState } from "react";
import { VIVUDEE_VIDEO, VIVUDEE_POSTER } from "../assets/vivudee.js";
import { GithubMark } from "./Logo.jsx";

export default function Work() {
  const [shotOk, setShotOk] = useState(true);
  return (
    <section className="sec" id="work">
            <div className="sec-head reveal">
              <p className="sec-eyebrow">Selected work</p>
              <h2 className="sec-title">Vivudee.</h2>
              <p className="sec-sub">A flight-booking web app, built end to end.</p>
            </div>

            <div className="work-card reveal">
              <div className="browser">
                <div className="browser-bar">
                  <span className="dots"><i /><i /><i /></span>
                  <span className="url">vivudee.vercel.app</span>
                  <a className="visit" href="https://vivudee.vercel.app" target="_blank" rel="noreferrer">Open ↗</a>
                </div>
                <div className="shot">
                  {shotOk ? (
                    <video
                      src={VIVUDEE_VIDEO}
                      poster={VIVUDEE_POSTER}
                      autoPlay
                      muted
                      loop
                      playsInline
                      onError={() => setShotOk(false)}
                    />
                  ) : (
                    <div className="shot-ph">
                      <div className="ph-icon">🖼️</div>
                      <div className="ph-title">Preview unavailable</div>
                      <div className="ph-sub">Open the live app to see Vivudee in action.</div>
                      <a className="btn btn-link" href="https://vivudee.vercel.app" target="_blank" rel="noreferrer">
                        View the live app ›
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <div className="work-meta reveal">
                <p className="work-tag">Team project · 3 people · Feb 2026 – now · Led the team</p>
              </div>

              <div className="work-info reveal">
                <div className="winfo">
                  <h5>Led & shipped</h5>
                  <p>Coordinated a team of 3, split the work and made sure the product actually shipped.</p>
                </div>
                <div className="winfo">
                  <h5>Owned the frontend</h5>
                  <p>Built the booking flow in React + Vite — search, flight results and the booking screens.</p>
                </div>
                <div className="winfo">
                  <h5>Into the backend</h5>
                  <p>Reviewed the Node.js + PostgreSQL code and helped debug the flight and booking APIs.</p>
                </div>
              </div>

              <div className="proj-stack reveal">
                {["React", "Vite", "JavaScript", "Node.js", "Express", "PostgreSQL", "MySQL", "Socket.IO"].map((t) => (
                  <span className="chip" key={t}>{t}</span>
                ))}
              </div>

              <div className="work-links reveal">
                <a className="btn btn-blue" href="https://vivudee.vercel.app" target="_blank" rel="noreferrer">Live demo</a>
                <a className="btn btn-ghost" href="https://github.com/DaoDungVan/Vivudee_Project" target="_blank" rel="noreferrer"><GithubMark />Source code</a>
              </div>
            </div>
          </section>
  );
}
