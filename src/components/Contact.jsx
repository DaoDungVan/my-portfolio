import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
            <div className="wrap">
              <div className="reveal">
                <h2>Let's build something.</h2>
                <p>Open to full-stack and IT internships — happy to chat about either.</p>
                <div className="hero-cta">
                  <a className="btn btn-blue" href="mailto:daodungvan321@gmail.com">Email me</a>
                  <a className="btn btn-link" href="https://linkedin.com/in/van-dao-dung" target="_blank" rel="noreferrer">LinkedIn ›</a>
                </div>
                <div className="cards">
                  <a className="ccard" href="mailto:daodungvan321@gmail.com">
                    <div className="k">Email</div><div className="v">daodungvan321@gmail.com</div>
                  </a>
                  <a className="ccard" href="tel:0328387288">
                    <div className="k">Phone</div><div className="v">0328 387 288</div>
                  </a>
                  <a className="ccard" href="https://github.com/DaoDungVan" target="_blank" rel="noreferrer">
                    <div className="k">GitHub</div><div className="v">github.com/DaoDungVan</div>
                  </a>
                  <div className="ccard">
                    <div className="k">Location</div><div className="v">District 5, HCMC</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
  );
}
