import React from 'react';

const HypothyroidAppTamil = () => {
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
          boxShadow: "none",
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
          நோயாளர் கல்வி - ஹைப்போதைராய்டு தகவல்
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
          <h2 style={headingStyle}>தையராய்டு என்ன?</h2>
          <p style={paragraphStyle}>
            தையராய்டு என்பது உங்கள் கழுத்தின் முன்பகுதியில் உள்ள ஒரு கிரந்தி. இது உங்களது உடல் இயக்கம், சக்தி மற்றும் வளர்ச்சியை கட்டுப்படுத்தும் ஹார்மோன்களை உருவாக்குகிறது. இது உடலின் பல முக்கிய உறுப்புகளின் செயல்பாட்டில் முக்கிய பங்கு வகிக்கிறது.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>ஹைப்போதைராய்டிசம் என்றால் என்ன?</h2>
          <p style={paragraphStyle}>
            ஹைப்போதைராய்டிசம் என்பது தையராய்டு கிரந்தி போதுமான அளவில் ஹார்மோன்கள் உற்பத்தி செய்யாமல் இருக்கும் நிலை. இது உங்கள் உடல் இயக்கத்தை மந்தமாக்கி சோர்வு, எடை அதிகரிப்பு, உலர் தோல் மற்றும் மனச்சோர்வு போன்ற அறிகுறிகளை ஏற்படுத்தும்.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>அறிகுறிகள்</h2>
          <ul style={listStyle}>
            {[
              "சோர்வு",
              "எடை அதிகரிப்பு",
              "உலர் தோல்",
              "மலம் கடுப்பாக இருத்தல்",
              "மனச்சோர்வு",
              "தண்மை சகிப்புத்தன்மை குறைவு",
              "மூக்கு அல்லது தலை முடி உதிர்வது",
              "மெதுவான இதய மடக்கம்"
            ].map((item, index) => (
              <li key={index} style={listItemStyle}>
                <span style={bulletStyle}>•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>சிகிச்சை மற்றும் மேலாண்மை</h2>
          <p style={paragraphStyle}>
            ஹைப்போதைராய்டிசத்திற்கு தையராய்டு ஹார்மோன் மாற்று சிகிச்சை அளிக்கப்படுகிறது. மருத்துவரின் அறிவுறுத்தலின்படி மருந்துகளை எடுத்துக்கொள்ளவும் மற்றும் வழக்கமான பின்தொடர்வுகளை மேற்கொள்ளவும். இயற்கைமான உணவு பழக்கங்கள் மற்றும் இயக்கம் இந்த நிலையை மேலாண்மை செய்ய உதவும்.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>உதவிக்குறிப்புகள்</h2>
          <ul style={listStyle}>
            {[
              "மருந்துகளை தினமும் ஒரே நேரத்தில் எடுத்துக்கொள்ளவும்",
              "மருத்துவரிடம் ஆலோசனை இல்லாமல் சிகிச்சையை நிறுத்த வேண்டாம்",
              "பால்வகைகள், முட்டைகள் மற்றும் கடல் உணவுகள் போன்ற அயோடின் நிறைந்த உணவுகளை உண்க",
              "சுய மருந்து மற்றும் மூலிகை சிகிச்சைகளை தவிர்க்கவும்"
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

export default HypothyroidAppTamil;
