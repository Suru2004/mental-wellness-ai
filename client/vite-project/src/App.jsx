import { useState } from "react";

function App() {
  const [mood, setMood] = useState("");
  const [response, setResponse] = useState("");

  const handleMoodSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mood }),
      });
      const data = await res.json();
      setResponse(data.reply);
    } catch (err) {
      setResponse("Oops! Something went wrong. Please try again later.");
      console.error(err);
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "40px",
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#333" }}>🌱 AI Mental Wellness Assistant</h1>
      <p style={{ color: "#555", fontSize: "18px" }}>
        Your safe, confidential, and empathetic space 💙
      </p>

      {/* Input Section */}
      <form onSubmit={handleMoodSubmit} style={{ marginTop: "30px" }}>
        <input
          type="text"
          placeholder="How are you feeling today?"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          style={{
            padding: "12px",
            width: "300px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
          required
        />
        <button
          type="submit"
          style={{
            marginLeft: "10px",
            padding: "12px 25px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Share
        </button>
      </form>

      {/* AI Response */}
      {response && (
        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            backgroundColor: "#4CAF50",
            color: "white",
            borderRadius: "10px",
            maxWidth: "500px",
            marginLeft: "auto",
            marginRight: "auto",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            textAlign: "left",
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>AI’s Response 💡</h3>
          <p style={{ lineHeight: "1.6", fontSize: "16px" }}>{response}</p>
        </div>
      )}
    </div>
  );
}

export default App;
