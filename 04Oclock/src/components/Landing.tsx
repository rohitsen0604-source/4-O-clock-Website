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
      {/* Background Hero Video with Cinematic Blur Effect */}
      <div className="hero-video-wrapper">
        <video
          src="/images/herovdo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="hero-video-element"
        />
        <div className="hero-video-blur-overlay" />
      </div>

      {/* Robot Character Image in Background behind text */}
      <div className="hero-character-wrapper">
        <img
          src="/images/7addd40bc67f5f380c018d8a8c67adf1-removebg-preview.png"
          alt="04 O'Clock Technologies Hero Character"
          className="hero-character-img"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Background Giant Futuristic Watermark Typography */}
      <div className="hero-watermark-text">
        04 O'CLOCK
      </div>

      {/* Scroll Down Action Button */}
      <button
        className="hero-hand-scroll-btn"
        onClick={handleScrollDown}
        aria-label="Start Here - Scroll Down"
        title="Start Here"
      >
        <span className="hero-hand-scroll-text">START HERE</span>
        <MdKeyboardArrowDown className="hero-hand-scroll-icon" />
      </button>

      {/* Foreground Content Overlay */}
      <div className="hero-content-overlay">
        {/* Top Header Block: Split "IDEAS HAVE A" (Left) and "TIME." (Right) */}
        <div className="hero-split-header">
          <h1 className="hero-split-title hero-title-left">
            <span>IDEAS HAVE A</span>
          </h1>

          <div className="hero-split-title hero-title-right">
            TIME.
          </div>
        </div>

        {/* Center Main Statement Block */}
        <div className="hero-statement-block">
          <h2 className="hero-main-statement">"WE MAKE IT COUNT"</h2>
        </div>

        {/* Bottom Bar: Centered Stats Metrics */}
        <div className="hero-bottom-bar">
          {/* Centered Bottom Stats Bar */}
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