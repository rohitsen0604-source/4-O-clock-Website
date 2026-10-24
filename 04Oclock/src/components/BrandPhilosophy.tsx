import React from "react";
import { Link } from "../router";
import { MdArrowOutward, MdFormatQuote, MdAccessTime } from "react-icons/md";
import "./styles/BrandPhilosophy.css";

const OWL_IMAGE_PATH = "/images/7addd40bc67f5f380c018d8a8c67adf1-removebg-preview.png";
const LION_IMAGE_PATH = "/images/a51b7f496e5f3021e4fbbbb1f808325c.jpg";

export const BrandPhilosophy: React.FC = () => {
  return (
    <section className="brand-philosophy-section" id="brand-philosophy" aria-label="Brand Philosophy">
      <div className="philosophy-container">

        {/* ================================================================
            HERO INTRO: THE STORY BEHIND OUR IDENTITY
            ================================================================ */}
        <div className="philosophy-hero">
          <div className="philosophy-eyebrow">
            <span className="philosophy-eyebrow-dot" aria-hidden="true" />
            THE STORY BEHIND OUR IDENTITY
          </div>

          <h2 className="philosophy-main-title">
            MORE THAN A NAME.
            <span className="philosophy-gradient-text">A PHILOSOPHY.</span>
          </h2>

          <p className="philosophy-hero-desc">
            Every great beginning starts with a meaningful moment. At 4 O&apos;Clock Technologies,
            our identity represents more than a name or a symbol. It reflects our belief in purposeful
            beginnings, intelligent thinking, and the courage to transform ambitious ideas into meaningful
            realities. Inspired by Indian cultural wisdom and driven by modern innovation, our philosophy
            guides the way we think, create, collaborate, and build for the future.
          </p>

          <div className="philosophy-hero-mantra">
            <span className="mantra-pill">BEGIN WITH PURPOSE</span>
            <span className="mantra-sep" aria-hidden="true">•</span>
            <span className="mantra-pill">THINK WITH WISDOM</span>
            <span className="mantra-sep" aria-hidden="true">•</span>
            <span className="mantra-pill">LEAD WITH COURAGE</span>
          </div>
        </div>

        {/* ================================================================
            PILLAR 01: THE MEANING OF 4 O'CLOCK
            ================================================================ */}
        <article className="philosophy-pillar" aria-labelledby="pillar-01-title">
          <div className="pillar-grid">
            <div className="pillar-content">
              <span className="pillar-label-badge">01 / THE BEGINNING</span>
              <h3 id="pillar-01-title" className="pillar-title">
                A MOMENT OF PURPOSE.<br />
                A BEGINNING OF POSSIBILITIES.
              </h3>

              <div className="pillar-paragraphs">
                <p className="pillar-p">
                  In Indian tradition, <em>Shubh Muhurat</em> reflects the importance of beginning meaningful
                  work with positive intentions, thoughtful preparation, and a sense of purpose.
                </p>
                <p className="pillar-p">
                  Inspired by this philosophy, <strong>4 O&apos;Clock</strong> represents our belief that every
                  great achievement begins when vision meets action. For us, it is not simply about a
                  particular time on the clock. It is about recognizing opportunities, making thoughtful
                  decisions, and taking the right steps towards something meaningful.
                </p>
                <p className="pillar-p">
                  Every project is a new beginning. Every challenge is an opportunity. Every partnership is a
                  chance to create something that lasts.
                </p>
              </div>

              <div className="pillar-highlight-quote">
                <MdFormatQuote className="quote-symbol" aria-hidden="true" />
                <div className="quote-text">
                  &ldquo;Every great idea deserves its moment. We make that moment count.&rdquo;
                </div>
              </div>
            </div>

            {/* Visual: Luxury Animated Timepiece Dial */}
            <div className="pillar-visual-wrapper">
              <div className="clock-visual-card" role="img" aria-label="Luxury 4 O'Clock Dial depicting purposeful beginnings">
                <div className="clock-ambient-glow" aria-hidden="true" />

                <svg className="luxury-clock-svg" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Concentric Decorative Rings */}
                  <circle cx="150" cy="150" r="142" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  <circle cx="150" cy="150" r="132" className="clock-outer-ring" />
                  <circle cx="150" cy="150" r="120" className="clock-celestial-orbit" />
                  <circle cx="150" cy="150" r="110" stroke="rgba(229,193,88,0.2)" strokeWidth="1" />

                  {/* 12 Hour Ticks */}
                  {Array.from({ length: 12 }).map((_, i) => {
                    const angle = (i * 30 * Math.PI) / 180;
                    const x1 = 150 + Math.sin(angle) * 118;
                    const y1 = 150 - Math.cos(angle) * 118;
                    const x2 = 150 + Math.sin(angle) * (i % 3 === 0 ? 104 : 110);
                    const y2 = 150 - Math.cos(angle) * (i % 3 === 0 ? 104 : 110);
                    const isKey = i === 4; // 4 O'Clock highlight
                    return (
                      <line
                        key={`tick-${i}`}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke={isKey ? "#E5C158" : i % 3 === 0 ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.3)"}
                        strokeWidth={isKey ? 3.5 : i % 3 === 0 ? 2.5 : 1.2}
                        strokeLinecap="round"
                      />
                    );
                  })}

                  {/* Golden Highlight at 4 o'clock Position (120 deg) */}
                  <circle cx={150 + Math.sin((120 * Math.PI) / 180) * 118} cy={150 - Math.cos((120 * Math.PI) / 180) * 118} r="5" fill="#E5C158" filter="drop-shadow(0 0 6px #E5C158)" />

                  {/* Minute Hand pointing straight to 12 (0 deg) */}
                  <line x1="150" y1="150" x2="150" y2="60" className="clock-hand-minute" />

                  {/* Hour Hand pointing precisely to 4 (120 deg) */}
                  <line
                    x1="150"
                    y1="150"
                    x2={150 + Math.sin((120 * Math.PI) / 180) * 64}
                    y2={150 - Math.cos((120 * Math.PI) / 180) * 64}
                    className="clock-hand-hour"
                  />

                  {/* Center Pivot Jewel */}
                  <circle cx="150" cy="150" r="10" fill="#141419" stroke="#E5C158" strokeWidth="3" />
                  <circle cx="150" cy="150" r="4.5" className="clock-center-jewel" />
                </svg>

                <div className="clock-brand-emblem-wrap">
                  <span className="clock-shubh-tag">
                    <MdAccessTime aria-hidden="true" /> SHUBH MUHURAT • PURPOSEFUL BEGINNINGS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* ================================================================
            PILLAR 02: THE OWL (WISDOM)
            ================================================================ */}
        <article className="philosophy-pillar" aria-labelledby="pillar-02-title">
          <div className="pillar-grid pillar-reversed">
            {/* Visual: Majestic Owl with amber glow */}
            <div className="pillar-visual-wrapper">
              <div className="cinematic-owl-card">
                <div className="owl-backlight-aura" aria-hidden="true" />
                <img
                  src={OWL_IMAGE_PATH}
                  alt="4 O'Clock Technologies Owl — Symbolizing wisdom, strategic foresight, and clarity"
                  className="owl-cinematic-img"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pillar-floating-badge">
                  WISDOM <span>•</span> FORESIGHT <span>•</span> CLARITY
                </div>
              </div>
            </div>

            <div className="pillar-content">
              <span className="pillar-label-badge">02 / THE WISDOM</span>
              <h3 id="pillar-02-title" className="pillar-title">
                SEE BEYOND THE OBVIOUS.<br />
                THINK BEYOND THE EXPECTED.
              </h3>

              <div className="pillar-paragraphs">
                <p className="pillar-p">
                  The owl represents awareness, observation, wisdom, and the ability to navigate uncertainty
                  with clarity.
                </p>
                <p className="pillar-p">
                  In Indian spiritual tradition, the owl is associated with Goddess Lakshmi. This cultural
                  connection adds another dimension to our identity.
                </p>
                <p className="pillar-p">
                  For 4 O&apos;Clock Technologies, the owl symbolizes our commitment to understanding before
                  acting, thinking strategically, and identifying opportunities beyond the obvious.
                </p>
                <p className="pillar-p">
                  We believe meaningful innovation begins with asking the right questions, understanding
                  real challenges, and looking beyond immediate solutions. Our approach combines curiosity,
                  strategic thinking, creativity, and technology to build solutions designed for lasting value.
                </p>
              </div>

              <div className="pillar-highlight-quote">
                <MdFormatQuote className="quote-symbol" aria-hidden="true" />
                <div className="quote-text">
                  &ldquo;True intelligence is not just about knowing more. It is about seeing what others might overlook.&rdquo;
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* ================================================================
            PILLAR 03: THE WHITE LION (COURAGE)
            ================================================================ */}
        <article className="philosophy-pillar" aria-labelledby="pillar-03-title">
          <div className="pillar-grid">
            <div className="pillar-content">
              <span className="pillar-label-badge">03 / THE COURAGE</span>
              <h3 id="pillar-03-title" className="pillar-title">
                THE COURAGE TO LEAD.<br />
                THE STRENGTH TO CREATE.
              </h3>

              <div className="pillar-paragraphs">
                <p className="pillar-p">
                  The white lion represents courage, leadership, dignity, and the pursuit of excellence.
                </p>
                <p className="pillar-p">
                  For us, it symbolizes the mindset required to turn ambitious ideas into reality: the
                  confidence to challenge conventional thinking, the discipline to overcome obstacles, and the
                  determination to deliver meaningful results.
                </p>
                <p className="pillar-p">
                  We believe technology alone does not create extraordinary outcomes. It takes responsibility,
                  collaboration, integrity, and the courage to keep improving.
                </p>
                <p className="pillar-p">
                  The white lion reminds us to approach challenges with confidence, take ownership of our work,
                  and pursue excellence without compromising our values.
                </p>
              </div>

              <div className="pillar-highlight-quote">
                <MdFormatQuote className="quote-symbol" aria-hidden="true" />
                <div className="quote-text">
                  &ldquo;Lead with courage. Build with conviction. Deliver with purpose.&rdquo;
                </div>
              </div>
            </div>

            {/* Visual: White Lion in high-contrast cinematic composition */}
            <div className="pillar-visual-wrapper">
              <div className="cinematic-lion-card">
                <div className="lion-cinematic-overlay" aria-hidden="true" />
                <img
                  src={LION_IMAGE_PATH}
                  alt="4 O'Clock Technologies White Lion — Symbolizing courage, fearless leadership, and excellence"
                  className="lion-cinematic-img"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pillar-floating-badge">
                  COURAGE <span>•</span> LEADERSHIP <span>•</span> EXCELLENCE
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* ================================================================
            SECTION FOUR: BRINGING THE PHILOSOPHY TOGETHER (Triptych)
            ================================================================ */}
        <div className="philosophy-triptych-section">
          <div className="triptych-header">
            <span className="pillar-label-badge">COHESIVE BRAND FOUNDATION</span>
            <h3 className="triptych-title">
              THREE IDEAS.<br />
              ONE IDENTITY.<br />
              <span className="philosophy-gradient-text">ONE PURPOSE.</span>
            </h3>
            <p className="triptych-subtitle">
              How our three symbols unite into a singular vision that powers our enterprise engineering.
            </p>
          </div>

          <div className="triptych-grid">
            {/* Card 1: 4 O'Clock */}
            <div className="triptych-card">
              <div className="triptych-visual-preview">
                <MdAccessTime style={{ fontSize: "32px", color: "var(--accentColor)" }} />
              </div>
              <span className="triptych-core-badge">CORE VALUE • PURPOSE</span>
              <h4 className="triptych-card-title">THE RIGHT BEGINNING</h4>
              <p className="triptych-card-desc">
                &ldquo;Start with intention. Recognize the opportunity. Turn vision into action.&rdquo;
              </p>
            </div>

            {/* Card 2: Owl */}
            <div className="triptych-card">
              <div className="triptych-visual-preview">
                <img src={OWL_IMAGE_PATH} alt="Owl icon" className="triptych-thumb-img triptych-thumb-owl" />
              </div>
              <span className="triptych-core-badge">CORE VALUE • WISDOM</span>
              <h4 className="triptych-card-title">THE POWER OF WISDOM</h4>
              <p className="triptych-card-desc">
                &ldquo;Observe carefully. Think strategically. See possibilities beyond the obvious.&rdquo;
              </p>
            </div>

            {/* Card 3: White Lion */}
            <div className="triptych-card">
              <div className="triptych-visual-preview">
                <img src={LION_IMAGE_PATH} alt="White Lion icon" className="triptych-thumb-img" />
              </div>
              <span className="triptych-core-badge">CORE VALUE • COURAGE</span>
              <h4 className="triptych-card-title">THE COURAGE TO LEAD</h4>
              <p className="triptych-card-desc">
                &ldquo;Act with confidence. Take responsibility. Pursue excellence.&rdquo;
              </p>
            </div>
          </div>

          {/* Synthesis Statement */}
          <div className="triptych-synthesis">
            <p className="synthesis-line">
              <span>Purpose</span> gives us direction.
            </p>
            <p className="synthesis-line">
              <span>Wisdom</span> helps us make better decisions.
            </p>
            <p className="synthesis-line">
              <span>Courage</span> turns those decisions into reality.
            </p>
          </div>
        </div>

        {/* ================================================================
            FINAL BRAND STATEMENT & PROMISE
            ================================================================ */}
        <div className="philosophy-closing-banner">
          <span className="closing-small-tag">OUR PHILOSOPHY. OUR PROMISE.</span>
          <h3 className="closing-main-title">
            ROOTED IN VALUES.<br />
            DRIVEN BY INNOVATION.<br />
            <span className="philosophy-gradient-text">BUILT FOR THE FUTURE.</span>
          </h3>

          <p className="closing-body-text">
            Inspired by the timeless wisdom of Indian culture and powered by modern technology,
            we strive to transform ambitious ideas into practical solutions that create real value.
            We believe in purposeful beginnings, intelligent decisions, courageous execution, and
            meaningful partnerships. Our symbols tell a story. Our values shape our decisions.
            Our work brings our vision to life.
          </p>

          <div className="closing-final-mantra">
            BEGIN WITH PURPOSE • THINK WITH WISDOM • LEAD WITH COURAGE
          </div>

          <div className="closing-cta-wrapper">
            <Link to="/contact" className="btn-primary philosophy-cta-btn">
              LET&apos;S BUILD SOMETHING MEANINGFUL <MdArrowOutward />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
