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
    marginTop: "0",
    borderBottom: "2px solid #fce4ec",
    paddingBottom: "8px"
  };

  const listStyle = {
    paddingLeft: "0",
    margin: "0",
    listStyle: "none"
  };

  const listItemStyle = {
    position: "relative",
    paddingLeft: "24px",
    marginBottom: "10px",
    color: "#555",
    fontSize: "0.95rem",
    lineHeight: "1.6"
  };

  const bulletStyle = {
    color: "#e91e63",
    fontWeight: "bold",
    position: "absolute",
    left: "0",
    top: "1px",
    fontSize: "1.2rem"
  };

  const paragraphStyle = {
    color: "#555",
    fontSize: "0.95rem",
    lineHeight: "1.7",
    margin: "0"
  };

  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  };

  // Basic responsiveness check
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  if (isMobile) {
    containerStyle.padding = "16px";
    headingStyle.fontSize = "1.3rem";
    sectionStyle.padding = "20px";
    sectionStyle.marginBottom = "20px";
  }

  const handleBack = () => {
    // In a real app, you might use react-router's useHistory or useNavigate
    // For this example, we'll use window.location
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
          width: "100%",
          justifyContent: "center",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
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
            <polyline points="18,10 12,16 18,22" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span style={{ width: "100%", textAlign: "center" }}>
          தைராய்டு மற்றும் ஹைப்போதைராய்டிசம்
        </span>
      </div>

      <div
        style={{
          ...containerStyle,
          paddingTop: isMobile ? "5rem" : "6rem" // Adjusted padding to accommodate fixed header
        }}
      >
        {/* Hero Image */}
        <img 
          src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          alt="Hypothyroid Education"
          style={{
            width: "100%",
            borderRadius: "12px",
            marginBottom: "24px",
            height: isMobile ? "300px" : "500px",
            objectFit: "cover",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
          }}
        />

        <div style={sectionStyle}>
          <h2 style={headingStyle}>தைராய்டு என்றால் என்ன?</h2>
          <p style={paragraphStyle}>
            தைராய்டு என்பது உங்கள் கழுத்தின் முன்புறத்தில் அமைந்துள்ள ஒரு பட்டாம்பூச்சி வடிவ சுரப்பி ஆகும். இது தைராய்டு ஹார்மோன்களை உற்பத்தி செய்து வெளியிடுகிறது. இந்த ஹார்மோன்கள் உடல் ஆற்றலை எவ்வாறு பயன்படுத்துகிறது (வளர்சிதை மாற்றம் - Metabolism) என்பதை ஒழுங்குபடுத்துகின்றன. இதன் முக்கிய ஹார்மோன்கள் தைராக்சின் (T4) மற்றும் டிரைஅயோடோதைரோனின் (T3) ஆகும்.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>ஹைப்போதைராய்டிசம் என்றால் என்ன?</h2>
          <p style={paragraphStyle}>
            ஹைப்போதைராய்டிசம் என்பது தைராய்டு சுரப்பி போதுமான அளவு தைராய்டு ஹார்மோன்களை (T3 மற்றும் T4) உற்பத்தி செய்யாத ஒரு நிலையாகும். இதனால் உடலின் பல செயல்பாடுகள் மெதுவாக நடக்கின்றன.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>அறிகுறிகள்</h2>
          <ul style={listStyle}>
            {[
              "சோர்வு மற்றும் பலவீனம்",
              "முகம் வெளுத்துப்போதல் மற்றும் வீக்கம்",
              "புருவங்களின் வெளிப்புறப் பகுதியில் முடி உதிர்தல்",
              "முடி உதிர்தல் மற்றும் வறண்ட சருமம்",
              "எளிதில் உடையும் நகங்கள்",
              "குளிரைத் தாங்க இயலாமை",
              "மலச்சிக்கல்",
              "எடை அதிகரிப்பு",
              "மெதுவான இதயத் துடிப்பு"
            ].map((item, index) => (
              <li key={index} style={listItemStyle}>
                <span style={bulletStyle}>›</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>ஏன் பெண்களுக்கு அதிகம் ஏற்படுகிறது?</h2>
          <p style={paragraphStyle}>
            பெண்கள் ஹைப்போதைராய்டிசத்திற்கு ஆண்களை விட அதிகமாக பாதிக்கப்படுகிறார்கள். குறிப்பாக, பிரசவத்திற்குப் பிறகு அல்லது மாதவிடாய் நின்ற பிறகு (மெனோபாஸ்) இதன் தாக்கம் அதிகம் காணப்படுகிறது. ஹாஷிமோட்டோஸ் தைராய்டிடிஸ் போன்ற ஆட்டோ இம்யூன் நோய்களால் இது ஏற்படலாம்.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>நோய்நிர்ணயம் (Diagnosis)</h2>
          <p style={paragraphStyle}>
            இது இரத்தப் பரிசோதனை மூலம் கண்டறியப்படுகிறது:
          </p>
          <ul style={{...listStyle, marginTop: '16px'}}>
            {[
              "TSH பரிசோதனை: தைராய்டு தூண்டுதல் ஹார்மோன் (TSH) அளவு அதிகமாக இருக்கும்.",
              "T4 பரிசோதனை: தைராக்சின் (T4) ஹார்மோன் அளவு குறைவாக இருக்கும்.",
              "T3 பரிசோதனை: டிரைஅயோடோதைரோனின் (T3) ஹார்மோன் அளவு குறைவாக இருக்கலாம்."
            ].map((item, index) => (
              <li key={index} style={listItemStyle}>
                <span style={bulletStyle}>›</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2 style={headingStyle}>சிகிச்சை மற்றும் ஆலோசனை</h2>
           <p style={paragraphStyle}>
            பொதுவாக தைராக்சின் (Levothyroxine) மாத்திரை பரிந்துரைக்கப்படுகிறது. இது வாழ்நாள் முழுவதும் எடுத்துக்கொள்ள வேண்டியிருக்கலாம்.
          </p>
          <ul style={{...listStyle, marginTop: '16px'}}>
            {[
              "மருத்துவரின் பரிந்துரைப்படி மருந்துகளைத் தவறாமல் எடுத்துக்கொள்ள வேண்டும்.",
              "புகையிலை மற்றும் புகைப்பிடிக்கும் பழக்கத்தை கைவிடுவது அவசியம்.",
              "தைராய்டு மருந்தை காலையில் வெறும் வயிற்றில் உட்கொள்வது சிறந்தது.",
              "மற்ற மருந்துகளை (குறிப்பாக இரும்பு, கால்சியம் சப்ளிமெண்ட்ஸ்) தைராய்டு மாத்திரை எடுத்த சில மணி நேரங்களுக்குப் பிறகு எடுத்துக்கொள்ள வேண்டும்."
            ].map((item, index) => (
              <li key={index} style={listItemStyle}>
                <span style={bulletStyle}>›</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default HypothyroidAppTamil;