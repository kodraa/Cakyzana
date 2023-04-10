import React, { useState } from "react";
import EasyGpt from "easygpt";
import { TypeAnimation } from "react-type-animation";

function TestGpt() {
  const [response, setResponse] = useState("");
  const [userQuestion, setUserQuestion] = useState("");
  const [isAsking, setIsAsking] = useState(false);

  const gpt = new EasyGpt();

  gpt.setApiKey("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");

  const ask = async () => {
    setIsAsking(true);

    setResponse("");

    // Add a prompt you would like to say to ChatGPT.
    // gpt
    //   // Give some instructions to the AI
    //   .addRule("your rule here");

    gpt.addMessage(userQuestion);

    // Get the response from ChatGPT.
    const response = await gpt.ask();
    setResponse(response.content);
    console.log(response.content);
    setIsAsking(false);
  };

  return (
    <div className="Home">
      <div className="AISection">
        <input
          type="text"
          placeholder="Ask us anything:"
          className="askInput"
          onChange={(e) => {
            setUserQuestion(e.target.value);
          }}
        />
        <button
          className="askBtn"
          onClick={() => {
            !userQuestion ? alert("Please ask a question") : ask();
          }}
          disabled={isAsking}
        >
          {isAsking ? "Asking..." : "Ask"}
        </button>
        <div className="AIResponse-Text">
          {!response ? (
            ""
          ) : (
            <TypeAnimation
              sequence={[response]}
              speed={60} // Custom Speed from 1-99 - Default Speed: 40
              style={{ backgroundColor: "#ffa600" }}
              wrapper="span" // Animation will be rendered as a <span>
              // repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default TestGpt;
