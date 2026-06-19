import "./About.css";
import { STACK } from "../data/stack.js";

export default function About() {
  return (
    <section className="sec" id="about">
            <div className="wrap">
              <p className="about-statement reveal">
                One developer who understands the <span className="grey">whole stack</span> — and the systems underneath it.
              </p>
              <div className="about-cols reveal">
                <div className="acol">
                  <h4>Builds it</h4>
                  <p>Full-stack web apps in React, Node.js and PostgreSQL — frontend to database.</p>
                </div>
                <div className="acol">
                  <h4>Debugs it</h4>
                  <p>Thinks in logs, errors and root causes. Failing API, DNS hiccup, flaky LAN — traced and fixed.</p>
                </div>
                <div className="acol">
                  <h4>Knows the metal</h4>
                  <p>Built a PC from scratch and fixed real network issues. Comfortable from hardware up.</p>
                </div>
              </div>

              <div className="stack-list reveal">
                {STACK.map((s) => (
                  <div className="srow" key={s.name}>
                    <span className="rn">{s.rn}</span>
                    <span className="rname">{s.name}</span>
                    <span className="rmeta">{s.meta}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
  );
}
