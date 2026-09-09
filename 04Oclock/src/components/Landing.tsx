import { PropsWithChildren } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  const handleScrollDown = () => {
    const landingDiv = document.getElementById("landingDiv");
    if (landingDiv && landingDiv.nextElementSibling) {
      landingDiv.nextElementSibling.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <div className="landing-section" id="landingDiv">
      {/* Background Giant Futuristic Watermark Typography */}
      <div className="hero-watermark-text">
        04 O'CLOCK
      </div>

      {/* Central Fixed Character Image */}
      <div className="hero-character-wrapper">
        <img
          src="/images/rbtttt.png"
          alt="04 O'Clock Technologies Hero Character"
          className="hero-character-img"
          loading="eager"
          decoding="async"
        />

        {/* Scroll Down Button Positioned Directly Under Robot's Hand */}
        <button
          className="hero-hand-scroll-btn"
          onClick={handleScrollDown}
          aria-label="Scroll Down"
          title="Scroll Down"
        >
          <span className="hero-hand-scroll-text">HERE</span>
          <MdKeyboardArrowDown className="hero-hand-scroll-icon" />
        </button>
      </div>

      {/* Foreground Content Overlay */}
      <div className="hero-content-overlay">
        {/* Top Header Block: Split "START" (Left) and "YOUR" (Right) across Robot */}
        <div className="hero-split-header">
          <h1 className="hero-split-title hero-title-left">
            <span>START</span>
          </h1>
          <h1 className="hero-split-title hero-title-right">
            YOUR
          </h1>
        </div>

        {/* Bottom Bar: Centered Stats Metrics */}
        <div className="hero-bottom-bar">
          {/* Centered Bottom Stats Bar (Right below robot character) */}
          <div className="hero-stats-group">
            <div className="hero-stat-item">
              <div className="hero-stat-number">
                5<span>+</span>
              </div>
              <div className="hero-stat-label">Yrs Industry Experience</div>
            </div>

            <div className="hero-stat-item">
              <div className="hero-stat-number">
                75<span>+</span>
              </div>
              <div className="hero-stat-label">Projects Delivered</div>
            </div>

            <div className="hero-stat-item">
              <div className="hero-stat-number">
                35<span>+</span>
              </div>
              <div className="hero-stat-label">Experts</div>
            </div>

            <div className="hero-stat-item">
              <div className="hero-stat-number">
                100<span>+</span>
              </div>
              <div className="hero-stat-label">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
};

export default Landing;

