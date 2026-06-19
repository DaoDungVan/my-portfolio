import "./Skills.css";
import { SKILLS } from "../data/skills.js";
import { Card } from "./Logo.jsx";

export default function Skills() {
  const rowA = SKILLS.slice(0, 10);
  const rowB = SKILLS.slice(10);
  return (
    <section className="sec alt" id="skills">
            <div className="sec-head reveal">
              <p className="sec-eyebrow">Skills</p>
              <h2 className="sec-title">What I work with.</h2>
              <p className="sec-sub">Across frontend, backend, data, networking and hardware.</p>
            </div>
            <div className="marquee-wrap">
              <div className="row">
                <div className="track">
                  {[...rowA, ...rowA].map((s, i) => <Card key={"a" + i} s={s} />)}
                </div>
              </div>
              <div className="row rev">
                <div className="track">
                  {[...rowB, ...rowB, ...rowB].map((s, i) => <Card key={"b" + i} s={s} />)}
                </div>
              </div>
            </div>
          </section>
  );
}
