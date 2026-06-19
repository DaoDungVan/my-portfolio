import "./Footer.css";

export default function Footer() {
  return (
    <footer>
            <div className="foot-watermark" aria-hidden="true">VAN</div>
            <div className="wrap">
              <div className="footer-main">
                <div>
                  <div className="foot-statement">Let's build something <span className="dim">great.</span></div>
                  <p className="foot-sub">Full-stack developer &amp; IT problem-solver in Ho Chi Minh City. Open to internships — let's talk.</p>
                </div>
                <div className="fcol-d">
                  <h6>Quick links</h6>
                  <div className="foot-pills">
                    <a href="#top">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#work">Work</a>
                    <a href="#contact">Contact</a>
                  </div>
                </div>
                <div className="fcol-d foot-contact">
                  <h6>Contact</h6>
                  <a href="mailto:daodungvan321@gmail.com">daodungvan321@gmail.com</a>
                  <a href="tel:0328387288">0328 387 288</a>
                  <a href="https://github.com/DaoDungVan" target="_blank" rel="noreferrer">github.com/DaoDungVan</a>
                  <a href="https://linkedin.com/in/van-dao-dung" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
              </div>
              <div className="footer-bottom">
                <span>© 2026 Dao Dung Van · Built with React + Vite</span>
                <a href="#top" className="totop">Back to top ↑</a>
              </div>
            </div>
          </footer>
  );
}
