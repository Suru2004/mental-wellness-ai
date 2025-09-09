from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow frontend to access backend

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    mood = data.get("mood", "")

    # Simple AI response logic
    if "sad" in mood.lower():
        reply = (
            "I’m really sorry to hear that 💙. "
            "It’s okay to feel this way. "
            "Try deep breathing or journaling. "
            "Would you like a helpline?"
        )
    elif "happy" in mood.lower():
        reply = (
            "That’s amazing! 🌟 Keep cherishing these moments. "
            "Want me to save this as a positive entry?"
        )
    elif "anxious" in mood.lower() or "worried" in mood.lower():
        reply = (
            "It’s natural to feel anxious sometimes. "
            "Try focusing on one small step at a time. 💡"
        )
    else:
        reply = "Thanks for sharing. 💡 Your feelings are valid. You’re not alone."

    return jsonify({"reply": reply})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)

