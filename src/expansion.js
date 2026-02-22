import React from "react";

function Expansion() {
  return (
    <div style={{ padding: "80px 20px", textAlign: "center" }}>
      <h1>National Expansion Strategy</h1>
      <p style={{ maxWidth: "900px", margin: "20px auto", lineHeight: "1.6" }}>
        Alliance Health Network Corp. is actively expanding operations across 
        multiple Canadian provinces including Ontario and Newfoundland and Labrador.
        Our growth strategy focuses on partnerships with hospitals, long-term care
        facilities, developmental service providers, and government agencies.
      </p>

      <h2>Current & Target Provinces</h2>
      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        <li>Ontario</li>
        <li>Newfoundland & Labrador</li>
        <li>Nova Scotia (Planned)</li>
        <li>New Brunswick (Planned)</li>
      </ul>
    </div>
  );
}

export default Expansion;