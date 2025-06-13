import React, { useState, useEffect } from 'react';

const HypothyroidInfo = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => {
      setVisibleSections(new Set(['thyroid', 'hypothyroidism', 'symptoms', 'treatment', 'tips']));
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const sectionStyle = (sectionId, delay = 0) => ({
    background: "#fff",
    borderRadius: "12px",
    boxShadow: visibleSections.has(sectionId)
      ? "0 4px 16px rgba(0, 0, 0, 0.1)"
      : "0 2px 8px rgba(0, 0, 0, 0.05)",
    marginBottom: "24px",
    padding: "24px",
    opacity: visibleSections.has(sectionId) ? 1 : 0,
    transform: visibleSections.has(sectionId) ? "translateY(0)" : "translateY(20px)",
    transition: `all 0.5s ease ${delay}ms`,
    cursor: "default"
  });

  const headingStyle = {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#222",
    marginBottom: "12px"
  };

  const paragraphStyle = {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#444"
  };

  const listItemStyle = {
    padding: "8px 0",
    color: "#444",
    fontSize: "1rem",
    borderBottom: "1px solid #eee"
  };

  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "sans-serif"
  };

  const symptoms = [
    "Fatigue", "Weight gain", "Dry skin", "Constipation",
    "Feeling depressed", "Cold intolerance", "Thinning hair", "Slow heart rate"
  ];

  const tips = [
    "Take medications at the same time daily",
    "Do not stop treatment without consulting a doctor",
    "Eat iodine-rich foods like dairy, eggs, and seafood",
    "Avoid self-medication or herbal substitutes"
  ];

  return (
    <div style={{ background: "#f7f7f7", minHeight: "100vh" }}>
      <header style={{
        background: "#333",
        color: "#fff",
        textAlign: "center",
        padding: "1.5rem",
        fontSize: "1.4rem",
        fontWeight: "600",
        position: "relative"
      }}>
        Patient Education - Hypothyroid Info
      </header>

      <div style={{ ...containerStyle }}>
        <div style={{
          height: "220px",
          background: "#eaeaea",
          borderRadius: "16px",
          marginBottom: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2rem",
          color: "#555",
          transform: isLoaded ? "scale(1)" : "scale(0.95)",
          opacity: isLoaded ? 1 : 0,
          transition: "all 0.6s ease"
        }}>
          Medical Information
        </div>

        <div style={sectionStyle('thyroid', 100)}>
          <h2 style={headingStyle}>What is the Thyroid?</h2>
          <p style={paragraphStyle}>
            The thyroid is a gland located in your neck. It regulates metabolism, energy, and growth.
          </p>
        </div>

        <div style={sectionStyle('hypothyroidism', 200)}>
          <h2 style={headingStyle}>What is Hypothyroidism?</h2>
          <p style={paragraphStyle}>
            Hypothyroidism occurs when the thyroid produces too little hormone, causing slow metabolism.
          </p>
        </div>

        <div style={sectionStyle('symptoms', 300)}>
          <h2 style={headingStyle}>Symptoms</h2>
          <ul style={{ paddingLeft: "16px", marginTop: "12px" }}>
            {symptoms.map((sym, idx) => (
              <li key={idx} style={listItemStyle}>{sym}</li>
            ))}
          </ul>
        </div>

        <div style={sectionStyle('treatment', 400)}>
          <h2 style={headingStyle}>Treatment</h2>
          <p style={paragraphStyle}>
            Treatment involves taking thyroid hormone replacement daily, along with regular monitoring.
          </p>
        </div>

        <div style={sectionStyle('tips', 500)}>
          <h2 style={headingStyle}>Tips</h2>
          <ul style={{ paddingLeft: "16px", marginTop: "12px" }}>
            {tips.map((tip, idx) => (
              <li key={idx} style={listItemStyle}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </div>
  );
};

export default HypothyroidInfo;
