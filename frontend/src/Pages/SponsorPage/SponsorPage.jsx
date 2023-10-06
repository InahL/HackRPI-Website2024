import React from 'react';

const SponsorPage = () => {
  return (
    <div id="sponsor" 
    className="SponsorPage" 
    style = {{
      testAlign: 'center', 
      width: "80%", 
      margin: 'auto'
      }}
      >
        <h1 
        className="header"style={{ 
          fontFamily: 'Mokoto', 
          fontSize: 46, 
          height: 35 
          }}
          >
            Sponsorship
        </h1>
        <p style={{ 
          fontSize: 20, 
          marginTop: 20 }}>
        Introduction
      </p>
      <p style={{ 
        fontSize: 20 
        }}
        >
        more
      </p>
      <p style={{ 
        fontSize: 20 
        }}
        >
        contact us at <a 
        href="@.com">@example.com
        </a>.
      </p>
    </div>
  );
}

export default SponsorPage;