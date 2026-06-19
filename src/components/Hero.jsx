import "./Hero.css";
import avatar from "../assets/avatar.js";

export default function Hero() {
  return (
    <header className="hero" id="top">
            <div className="wrap">
              <div className="avatar">
                <img src={avatar} alt="Dao Dung Van" />
                <span className="status" title="Open to work" />
              </div>
              <p className="eyebrow">Full-stack developer · IT · Ho Chi Minh City</p>
              <h1 className="name">Dao Dung Van</h1>
              <p className="subhead">
                I build web apps end to end — and fix what breaks, from the network to the screen.
              </p>
              <div className="hero-cta">
                <a href="#work" className="btn btn-blue">View work</a>
                <a href="#contact" className="btn btn-link">Get in touch ›</a>
              </div>
            </div>
          </header>
  );
}
