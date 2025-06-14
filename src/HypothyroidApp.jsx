import React from 'react';

const HypothyroidApp = () => {
  const sectionStyle = {
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
    marginBottom: "24px",
    padding: "24px",
    border: "1px solid #f0f0f0"
  };

  const headingStyle = {
    color: "#e91e63",
    fontSize: "1.5rem",
    fontWeight: "600",
    marginBottom: "16px",
    marginTop: "0"
  };

  const listStyle = {
    paddingLeft: "0",
    margin: "0",
    listStyle: "none"
  };

  const listItemStyle = {
    position: "relative",
    paddingLeft: "20px",
    marginBottom: "8px",
    color: "#555",
    fontSize: "0.95rem",
    lineHeight: "1.5"
  };

  const bulletStyle = {
    content: "•",
    color: "#e91e63",
    fontWeight: "bold",
    position: "absolute",
    left: "0"
  };

  const paragraphStyle = {
    color: "#555",
    fontSize: "0.95rem",
    lineHeight: "1.6",
    margin: "0"
  };

  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  };

  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    containerStyle.padding = "16px";
    headingStyle.fontSize = "1.3rem";
    sectionStyle.padding = "20px";
    sectionStyle.marginBottom = "20px";
  }

  const handleBack = () => {
    window.location.href = "/";
  };

  return (
    <div style={{
      background: "linear-gradient(to bottom, #fff, #f9f0f5)",
      minHeight: "100vh",
      padding: "0",
      margin: "0"
    }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#de5d83",
          color: "white",
          padding: isMobile ? "0.7rem 0.5rem 0.7rem 0.2rem" : "1rem 0.5rem 1rem 0.2rem",
          fontSize: isMobile ? "1.2rem" : "1.5rem",
          fontWeight: 500,
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          justifyContent: "center",
          zIndex: 100
        }}
      >
        <button
          onClick={handleBack}
          style={{
            position: "absolute",
            left: isMobile ? 8 : 24,
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
            zIndex: 20,
            padding: 0,
            display: "flex",
            alignItems: "center"
          }}
          aria-label="Back"
        >
          <svg width={isMobile ? 28 : 32} height={isMobile ? 28 : 32} viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#de5d83" />
            <polyline points="18,10 12,16 18,22" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <span style={{ width: "100%", textAlign: "center" }}>
          Patient Education - Hypothyroidism
        </span>
      </div>

      <div
        style={{
          ...containerStyle,
          paddingTop: isMobile ? "3.2rem" : "4.2rem"
        }}
      >
        <img 
          src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
          alt="Hypothyroid Education" 
          style={{
            width: "100%",
            borderRadius: "12px",
            marginBottom: "24px",
            height: "500px",
            objectFit: "cover"
          }}
        />

        <div style={sectionStyle}>
          <h2 style={headingStyle}>What is Thyroid?</h2>
          <p style={paragraphStyle}>
            The thyroid is a gland located at the front of your neck. It produces chemical substances called hormones that travel through the bloodstream and control how your body uses energy. In other words, it regulates your metabolism, growth, and development from an early stage. The hormones produced by the thyroid are mainly thyroxine (T4) and triiodothyronine (T3).
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>What is Hypothyroidism?</h2>
          <p style={paragraphStyle}>
            Hypothyroidism is a condition where your thyroid gland does not produce enough thyroid hormones (T4 and T3) to meet your body's needs. Hypothyroidism affects all the organs in the body because thyroid hormones are essential for the normal functioning of every cell in the body.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Symptoms of Hypothyroidism</h2>
          <ul style={listStyle}>
            {[
              "Fatigue",
              "Hoarseness",
              "Weight gain",
              "Muscle weakness",
              "Numbness in hands",
              "Brain fog",
              "Depression",
              "Anxiety"
            ].map((symptom, index) => (
              <li key={index} style={listItemStyle}>
                <span style={bulletStyle}>•</span>
                {symptom}
              </li>
            ))}
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Why Women?</h2>
          <ul style={listStyle}>
            {[
              "At young age",
              "During or after pregnancy",
              "After menopause",
              "With autoimmune diseases (like Hashimoto's thyroiditis)"
            ].map((reason, index) => (
              <li key={index} style={listItemStyle}>
                <span style={bulletStyle}>•</span>
                {reason}
              </li>
            ))}
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>Diagnosis</h2>
          <ul style={listStyle}>
            {[
              "TSH test - high levels",
              "T4 test - low levels",
              "T3 test - low levels",
              "Thyroid antibody test – may be positive in autoimmune thyroiditis"
            ].map((test, index) => (
              <li key={index} style={listItemStyle}>
                <span style={bulletStyle}>•</span>
                {test}
              </li>
            ))}
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>How to Increase Thyroid Hormone Levels?</h2>
          <ul style={listStyle}>
            {[
              "Thyroxine supplement as a replacement for the T4 hormone.",
              "Avoid smoking, as it affects the thyroid.",
              "Avoid taking other medications at the same time as thyroxine, as this may interfere with its absorption.",
              "You may need to adjust or reschedule your other medications as per your doctor’s advice."
            ].map((tip, index) => (
              <li key={index} style={listItemStyle}>
                <span style={bulletStyle}>•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HypothyroidApp;
