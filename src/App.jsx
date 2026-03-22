import { useState, useEffect } from "react";

const NAV_LINKS = ["Home", "Services", "About", "Contact"];

const SERVICES = [
  {
    icon: "🔧",
    title: "General Maintenance & Repairs",
    desc: "Indoor and outdoor maintenance for homes and offices. From leaky taps to broken doors, we handle it all.",
    tags: ["Plumbing", "Doors & Windows", "Tiling", "Painting"],
  },
  {
    icon: "⚙️",
    title: "Custom Steel & Stainless Steel Work",
    desc: "Precision fabrication and custom metalwork. Staircases, frames, gates, braai stands, and bespoke steelwork to your spec.",
    tags: ["Fabrication", "Welding", "Stainless Steel", "Custom Builds"],
  },
  {
    icon: "🏗️",
    title: "Fencing",
    desc: "Full fencing installations for residential and commercial properties. Security, palisade, and boundary fencing.",
    tags: ["Palisade", "Concrete Poles", "Security Fencing", "Boundary Walls"],
  },
  {
    icon: "🪟",
    title: "Installations",
    desc: "Professional installation of fixtures, fittings, and structures. Done right the first time.",
    tags: ["Fixtures", "Structures", "Fittings", "Hardware"],
  },
  {
    icon: "🏠",
    title: "Home & Office Repairs",
    desc: "Comprehensive repair services across residential and commercial spaces. No job too small.",
    tags: ["Residential", "Commercial", "Emergency Repairs", "Renovations"],
  },
  {
    icon: "🔩",
    title: "Outdoor Structures",
    desc: "Pergolas, carports, stoeps, and outdoor features designed and built to last.",
    tags: ["Pergolas", "Carports", "Stoeps", "Paving"],
  },
];

const WHY_US = [
  { label: "Quality Work", detail: "Every job done with pride and precision" },
  { label: "Reliable", detail: "We show up on time, every time" },
  { label: "Fair Pricing", detail: "Honest quotes with no hidden surprises" },
  { label: "Experienced", detail: "Years of hands-on trade expertise" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ background: "#0d0d0d", color: "#e8e8e8", fontFamily: "'Oswald', sans-serif", overflowX: "hidden" }}>
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Rajdhani:wght@400;500;600;700&family=Share+Tech+Mono&display=swap" rel="stylesheet" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #0d0d0d; -webkit-text-size-adjust: 100%; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glitch {
          0%, 100% { text-shadow: -2px 0 #2d8fe8, 2px 0 #d4f700; }
          25% { text-shadow: 2px 0 #2d8fe8, -2px 0 #d4f700; }
          50% { text-shadow: -1px 0 #d4f700, 1px 0 #2d8fe8; }
          75% { text-shadow: 1px 0 #d4f700, -1px 0 #2d8fe8; }
        }

        /* ── NAV ─────────────────────────────── */
        .nav-link {
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 13px;
          font-weight: 600;
          color: #aaa;
          padding: 6px 0;
          border-bottom: 2px solid transparent;
          transition: color 0.2s, border-color 0.2s;
          font-family: 'Oswald', sans-serif;
        }
        .nav-link:hover { color: #d4f700; border-bottom-color: #d4f700; }

        /* ── HERO TITLE ──────────────────────── */
        .hero-title {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: clamp(40px, 10vw, 112px);
          line-height: 0.92;
          text-transform: uppercase;
          letter-spacing: -1px;
          word-break: break-word;
        }
        .hero-title .line1 { color: #d4f700; animation: glitch 6s infinite; display: block; }
        .hero-title .line2 { color: #2d8fe8; display: block; }

        /* ── BACKGROUNDS ─────────────────────── */
        .dot-grid {
          background-image: radial-gradient(circle, #2a2a2a 1px, transparent 1px);
          background-size: 28px 28px;
        }

        /* ── SERVICE CARDS ───────────────────── */
        .service-card {
          background: #111;
          border: 1px solid #222;
          border-top: 3px solid #2d8fe8;
          padding: 24px 20px;
          transition: border-top-color 0.3s, transform 0.3s;
          animation: fadeUp 0.6s ease both;
        }
        .service-card:hover { border-top-color: #d4f700; transform: translateY(-4px); }
        .service-tag {
          display: inline-block;
          background: #1a1a1a;
          border: 1px solid #2a2a2a;
          color: #666;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 3px 8px;
          margin: 3px 3px 0 0;
          font-family: 'Share Tech Mono', monospace;
        }

        /* ── WHY CARDS ───────────────────────── */
        .why-card {
          border-left: 4px solid #d4f700;
          padding: 18px 20px;
          background: #111;
        }

        /* ── BUTTONS ─────────────────────────── */
        .cta-btn {
          display: inline-block;
          background: #d4f700;
          color: #0d0d0d;
          font-family: 'Oswald', sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 3px;
          text-transform: uppercase;
          padding: 13px 28px;
          border: 2px solid #d4f700;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s, transform 0.1s;
          white-space: nowrap;
        }
        .cta-btn:hover { background: #e8ff00; }
        .cta-btn:active { transform: scale(0.97); }
        .cta-btn.secondary {
          background: transparent;
          color: #2d8fe8;
          border-color: #2d8fe8;
        }
        .cta-btn.secondary:hover { background: rgba(45,143,232,0.1); }
        .cta-btn.full-width { width: 100%; text-align: center; }

        /* ── LABELS & TITLES ─────────────────── */
        .section-label {
          font-family: 'Share Tech Mono', monospace;
          font-size: 10px;
          color: #2d8fe8;
          letter-spacing: 3px;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }
        .section-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(45,143,232,0.25);
          max-width: 100px;
        }
        .section-title {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: clamp(28px, 6vw, 52px);
          text-transform: uppercase;
          line-height: 1;
          color: #fff;
        }
        .section-title span { color: #d4f700; }

        /* ── CONTACT ROWS ────────────────────── */
        .contact-row {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 20px;
          border-bottom: 1px solid #1a1a1a;
        }
        .contact-icon {
          width: 44px;
          height: 44px;
          min-width: 44px;
          background: #1a1a1a;
          border: 1px solid #2d8fe8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
        }
        .contact-value {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 600;
          font-size: clamp(15px, 4vw, 20px);
          letter-spacing: 1px;
          word-break: break-word;
        }

        /* ── HAMBURGER ───────────────────────── */
        .hamburger-btn {
          background: none;
          border: none;
          cursor: pointer;
          display: none;
          flex-direction: column;
          gap: 5px;
          padding: 6px;
          -webkit-tap-highlight-color: transparent;
        }
        .hamburger-btn span {
          display: block;
          width: 22px;
          height: 2px;
          background: #d4f700;
        }

        /* ── MOBILE MENU ─────────────────────── */
        .mobile-menu {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: #0a0a0a;
          z-index: 999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 28px;
          padding: 24px;
        }
        .mobile-menu .nav-link { font-size: 26px; letter-spacing: 4px; }

        /* ── DENNISYS CREDIT ─────────────────── */
        .dennisys-credit {
          font-family: 'Share Tech Mono', monospace;
          font-size: 10px;
          color: #2a2a2a;
          letter-spacing: 1px;
          transition: color 0.3s;
        }
        .dennisys-credit:hover { color: #555; }
        .dennisys-credit a { color: inherit; text-decoration: none; }

        /* ══════════════════════════════════════
           RESPONSIVE BREAKPOINTS
        ══════════════════════════════════════ */

        /* Tablet landscape + small desktop: 1024px */
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }

        /* Tablet portrait: 768px */
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .nav-call-btn { display: none !important; }
          .hamburger-btn { display: flex !important; }

          .about-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          .footer-inner { flex-direction: column !important; align-items: flex-start !important; gap: 10px !important; }
          .footer-right { align-items: flex-start !important; }

          .hero-section { padding: 100px 5vw 60px !important; }
          .services-section { padding: 64px 5vw !important; }
          .about-section { padding: 64px 5vw !important; }
          .contact-section { padding: 64px 5vw !important; }
        }

        /* Large phones: 600px */
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .why-grid { grid-template-columns: 1fr 1fr !important; }
          .hero-buttons { flex-direction: column !important; }
          .hero-buttons .cta-btn { width: 100%; text-align: center; }
        }

        /* Small phones: 420px */
        @media (max-width: 420px) {
          .why-grid { grid-template-columns: 1fr !important; }
          .hero-stats { flex-direction: column !important; gap: 16px !important; }
          .contact-btns { flex-direction: column !important; }
          .contact-btns .cta-btn { width: 100%; text-align: center; }
          .hero-section { padding: 88px 5vw 48px !important; }
          .services-section { padding: 48px 4vw !important; }
          .about-section { padding: 48px 4vw !important; }
          .contact-section { padding: 48px 4vw !important; }
          .service-card { padding: 20px 16px !important; }
          .why-card { padding: 16px !important; }
        }

        /* Very small phones: 360px and below */
        @media (max-width: 360px) {
          .mobile-menu .nav-link { font-size: 22px !important; letter-spacing: 2px !important; }
          .section-label { letter-spacing: 2px !important; font-size: 9px !important; }
          .contact-row { padding: 14px 12px !important; gap: 10px !important; }
          .contact-icon { width: 38px !important; height: 38px !important; min-width: 38px !important; font-size: 16px !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(8,8,8,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid #1e1e1e" : "none",
        transition: "background 0.3s",
        padding: "0 3vw",
      }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ cursor: "pointer" }} onClick={() => scrollTo("home")}>
            <div style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: 16, color: "#d4f700", textTransform: "uppercase", letterSpacing: 1, lineHeight: 1.1 }}>The Nitty Gritty</div>
            <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 11, color: "#2d8fe8", letterSpacing: 3, textTransform: "uppercase" }}>Handyman</div>
          </div>

          <div className="desktop-nav" style={{ display: "flex", gap: 32 }}>
            {NAV_LINKS.map(l => (
              <span key={l} className="nav-link" onClick={() => scrollTo(l.toLowerCase())}>{l}</span>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <a href="tel:0720438903" className="cta-btn nav-call-btn" style={{ fontSize: 11, padding: "8px 16px" }}>📞 Call Now</a>
            <button className="hamburger-btn" onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          <button
            onClick={() => setMenuOpen(false)}
            style={{ position: "absolute", top: 20, right: 20, background: "none", border: "none", color: "#d4f700", fontSize: 28, cursor: "pointer", lineHeight: 1 }}
            aria-label="Close menu"
          >✕</button>
          <div style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: 14, color: "#333", textTransform: "uppercase", letterSpacing: 3, marginBottom: 8 }}>Navigation</div>
          {NAV_LINKS.map(l => (
            <span key={l} className="nav-link" onClick={() => scrollTo(l.toLowerCase())}>{l}</span>
          ))}
          <div style={{ width: "100%", height: 1, background: "#1a1a1a", margin: "8px 0" }} />
          <a href="tel:0720438903" className="cta-btn" style={{ width: "100%", maxWidth: 280, textAlign: "center" }}>📞 072 043 8903</a>
          <a href="https://wa.me/27720438903" className="cta-btn secondary" style={{ width: "100%", maxWidth: 280, textAlign: "center" }}>💬 WhatsApp Ian</a>
        </div>
      )}

      {/* HERO */}
      <section id="home" className="dot-grid hero-section" style={{ minHeight: "100svh", display: "flex", alignItems: "center", padding: "110px 3vw 72px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 60% at 70% 50%, rgba(45,143,232,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1400, margin: "0 auto", width: "100%", animation: "fadeUp 0.8s ease both" }}>
          <div className="section-label">[ Est. Johannesburg · South Africa ]</div>
          <h1 className="hero-title">
            <span className="line1">The Nitty Gritty</span>
            <span className="line2">Handyman</span>
          </h1>
          <p style={{ marginTop: 24, maxWidth: 520, lineHeight: 1.7, color: "#999", fontSize: "clamp(13px, 2.5vw, 15px)", fontFamily: "'Oswald', sans-serif", fontWeight: 400, letterSpacing: 0.3 }}>
            Specializing in general maintenance and repairs, indoor and outdoor, homes and offices. Custom steelwork, fencing, and installations. We do it right.
          </p>
          <div className="hero-buttons" style={{ marginTop: 36, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button className="cta-btn" onClick={() => scrollTo("services")}>Our Services</button>
            <button className="cta-btn secondary" onClick={() => scrollTo("contact")}>Contact Ian</button>
          </div>
          <div className="hero-stats" style={{ marginTop: 56, display: "flex", gap: 40, flexWrap: "wrap" }}>
            {[["Joburg", "Based"], ["All Trades", "Except Electrical"], ["Free", "Quotes"]].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(22px, 4vw, 28px)", fontWeight: 700, color: "#d4f700", lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: 10, letterSpacing: 2, color: "#555", textTransform: "uppercase", marginTop: 4, fontFamily: "'Share Tech Mono', monospace" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 4, background: "linear-gradient(90deg, #2d8fe8, #d4f700, #2d8fe8)" }} />

      {/* SERVICES */}
      <section id="services" className="services-section" style={{ padding: "80px 3vw", background: "#090909" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div className="section-label">[ What We Do ]</div>
          <h2 className="section-title">Our <span>Services</span></h2>
          <p style={{ marginTop: 14, color: "#777", maxWidth: 520, lineHeight: 1.7, fontFamily: "'Oswald', sans-serif", fontWeight: 400, fontSize: "clamp(13px, 2vw, 15px)" }}>
            From a leaky tap to a full steel fence installation. If it doesn't involve electricity, we handle it.
          </p>

          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, marginTop: 40 }}>
            {SERVICES.map((s, i) => (
              <div key={s.title} className="service-card" style={{ animationDelay: `${i * 0.07}s` }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "clamp(15px, 2.5vw, 18px)", textTransform: "uppercase", color: "#fff", marginBottom: 8, letterSpacing: 0.5 }}>{s.title}</h3>
                <p style={{ color: "#777", fontSize: "clamp(12px, 1.8vw, 13px)", lineHeight: 1.6, fontFamily: "'Oswald', sans-serif", fontWeight: 400, marginBottom: 12 }}>{s.desc}</p>
                <div>{s.tags.map(t => <span key={t} className="service-tag">{t}</span>)}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 14, padding: "16px 20px", background: "#111", border: "1px dashed #2a2a2a", display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 20, flexShrink: 0 }}>⚡</span>
            <p style={{ color: "#555", fontSize: "clamp(11px, 2vw, 12px)", fontFamily: "'Share Tech Mono', monospace", letterSpacing: 0.8, lineHeight: 1.5 }}>
              NOTE: We do not handle electrical work. For everything else, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: "#161616" }} />

      {/* ABOUT */}
      <section id="about" className="about-section" style={{ padding: "80px 3vw", background: "#0d0d0d" }}>
        <div className="about-grid" style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>
          <div>
            <div className="section-label">[ About Ian ]</div>
            <h2 className="section-title">Why <span>Choose Us</span></h2>
            <p style={{ marginTop: 18, color: "#888", lineHeight: 1.8, fontFamily: "'Oswald', sans-serif", fontWeight: 400, fontSize: "clamp(13px, 2vw, 15px)" }}>
              Ian brings years of hands-on trade experience to every job. Whether it's a simple home repair or a custom steel fabrication project at your office, you get the same dedication: done right, on time, at a fair price.
            </p>
            <p style={{ marginTop: 10, color: "#888", lineHeight: 1.8, fontFamily: "'Oswald', sans-serif", fontWeight: 400, fontSize: "clamp(13px, 2vw, 15px)" }}>
              Based in Johannesburg. Serving residential and commercial clients across Gauteng.
            </p>
            <button className="cta-btn" style={{ marginTop: 28 }} onClick={() => scrollTo("contact")}>Contact Ian</button>
          </div>

          <div className="why-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
            {WHY_US.map(w => (
              <div key={w.label} className="why-card">
                <div style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "clamp(14px, 2.5vw, 17px)", textTransform: "uppercase", color: "#d4f700", marginBottom: 6 }}>{w.label}</div>
                <div style={{ color: "#666", fontSize: "clamp(11px, 1.8vw, 13px)", fontFamily: "'Oswald', sans-serif", fontWeight: 400, lineHeight: 1.5 }}>{w.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: "#161616" }} />

      {/* CONTACT */}
      <section id="contact" className="contact-section" style={{ padding: "80px 3vw", background: "#080808" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div className="section-label">[ Get In Touch ]</div>
          <h2 className="section-title">Contact <span>Ian</span></h2>
          <p style={{ marginTop: 14, color: "#777", fontFamily: "'Oswald', sans-serif", fontWeight: 400, lineHeight: 1.7, fontSize: "clamp(13px, 2vw, 15px)" }}>
            WhatsApp or call for a free quote. Available Monday to Saturday.
          </p>

          <div style={{ marginTop: 36, border: "1px solid #1a1a1a", maxWidth: 680 }}>
            {[
              { icon: "📞", label: "Call", value: "072 043 8903", href: "tel:0720438903" },
              { icon: "💬", label: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/27720438903" },
              { icon: "📍", label: "Location", value: "Johannesburg, Gauteng", href: null },
              { icon: "🕐", label: "Hours", value: "Mon to Sat · 7am to 6pm", href: null },
            ].map((c, i) => (
              <div key={i} className="contact-row">
                <div className="contact-icon">{c.icon}</div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontSize: 9, letterSpacing: 2, color: "#444", textTransform: "uppercase", fontFamily: "'Share Tech Mono', monospace", marginBottom: 3 }}>{c.label}</div>
                  {c.href
                    ? <a href={c.href} className="contact-value" style={{ color: "#2d8fe8", textDecoration: "none", display: "block" }}>{c.value}</a>
                    : <div className="contact-value" style={{ color: "#ccc" }}>{c.value}</div>
                  }
                </div>
              </div>
            ))}
          </div>

          <div className="contact-btns" style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="tel:0720438903" className="cta-btn">📞 Call Ian Now</a>
            <a href="https://wa.me/27720438903?text=Hi%20Ian%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20a%20job." className="cta-btn secondary" target="_blank" rel="noreferrer">💬 Get a Quote</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #1a1a1a", padding: "24px 3vw", background: "#060606" }}>
        <div className="footer-inner" style={{ maxWidth: 1400, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div>
            <div style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: 14, color: "#d4f700", textTransform: "uppercase" }}>The Nitty Gritty Handyman</div>
            <div style={{ fontSize: 10, color: "#333", fontFamily: "'Share Tech Mono', monospace", marginTop: 3 }}>Johannesburg · Gauteng · South Africa</div>
          </div>
          <div className="footer-right" style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 5 }}>
            <div style={{ fontSize: 10, color: "#333", fontFamily: "'Share Tech Mono', monospace" }}>
              © {new Date().getFullYear()} The Nitty Gritty Handyman
            </div>
            <div className="dennisys-credit">
              website by <a href="https://dennisys.co.za" target="_blank" rel="noreferrer">Dennisys (Pty) Ltd</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
