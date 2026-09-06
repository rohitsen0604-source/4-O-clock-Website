import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Company <span>&</span>
          <br /> milestones
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Foundational Engineering</h4>
                <h5>Core Software Architecture</h5>
              </div>
              <h3>01</h3>
            </div>
            <p>
              Established high-performance web engineering practices, building resilient React, TypeScript, and microservice backend foundations for modern applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI & Product Expansion</h4>
                <h5>SaaS & Automation Engines</h5>
              </div>
              <h3>02</h3>
            </div>
            <p>
              Expanded core capabilities to include LLM pipelines, vector databases, multi-tenant cloud platforms, and automated workflow integration for scaling businesses.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Global IT Partner</h4>
                <h5>Enterprise Technology Solutions</h5>
              </div>
              <h3>03</h3>
            </div>
            <p>
              Operating as an enterprise IT company delivering high-availability software platforms, bank-grade FinTech platforms, healthcare systems, and cloud infrastructure globally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
