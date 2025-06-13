import React, { useEffect } from 'react';

const LanguageSelector = () => {
  // Prevent scrolling on mount/unmount
  useEffect(() => {
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
    document.documentElement.style.height = "100vh";
    return () => {
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.height = "";
      document.documentElement.style.height = "";
    };
  }, []);

  const containerStyle = {
    fontFamily: "'Segoe UI', sans-serif",
    background: "linear-gradient(to bottom, #fff, #f9f0f5)",
    margin: 0,
    padding: 0,
    color: "#333",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    overflow: "hidden"
  };

  const headerStyle = {
    backgroundColor: "#de5d83",
    color: "white",
    textAlign: "center",
    width: "100%",
    padding: "1rem",
    fontSize: "1.5rem",
    position: "fixed",
    top: 0,
    zIndex: 10
  };

  const buttonContainerStyle = {
    marginTop: "180px",
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: window.innerWidth <= 600 ? "column" : "row"
  };

  const buttonStyle = {
    padding: "15px 30px",
    backgroundColor: "#de5d83",
    color: "white",
    textDecoration: "none",
    fontSize: "1.2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    transition: "background 0.3s"
  };

  const hoverStyle = {
    backgroundColor: "#c93770"
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        Select Language / மொழியை தேர்ந்தெடுக்கவும்
      </header>

      <div style={buttonContainerStyle}>
        <a
          href="/info-en"
          style={buttonStyle}
          onMouseOver={e => (e.target.style.backgroundColor = hoverStyle.backgroundColor)}
          onMouseOut={e => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        >
          English
        </a>
        <a
          href="/info-ta"
          style={buttonStyle}
          onMouseOver={e => (e.target.style.backgroundColor = hoverStyle.backgroundColor)}
          onMouseOut={e => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        >
          தமிழ்
        </a>
      </div>
    </div>
  );
};

export default LanguageSelector;

