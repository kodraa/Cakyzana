import React, { useState } from "react";
import EasyGpt from "easygpt";
import { TypeAnimation } from "react-type-animation";
import "./gpt.css"; // Import CSS file for styling
import styled from "styled-components";

function Chatbot() {
  const [response, setResponse] = useState("");
  const [userQuestion, setUserQuestion] = useState("");
  const [isAsking, setIsAsking] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const gpt = new EasyGpt();
  gpt.setApiKey("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");

  const ask = async () => {
    setIsAsking(true);
    setResponse("");

    // Add a prompt you would like to say to ChatGPT.
    gpt.addRule(
      "Pretend your name is Alex and you are not an AI you are a cake baking assistant you are extremely smart and helpful you are currently chatting with a customer on a website and you have to make sure to answer questions related to baking only in addition to questions related to baking, like giving alternatives. You should also answer questions related to converting units, like ml to cups, and other units like these else you should apologize and not answer the question and dont proceed to explain it in any way shape or form just apologize, make sure the user wont ask questions not related to baking or the utensils for baking and our website. You are answer question related to utensils with less details and ask him to go to utensil pages to know more. You should also answer questions related to baking, like giving alternatives. You should also answer questions related to converting units, like ml to cups, and other units like these.Cakyzana is an: E-learning platform that offers a comprehensive selection of online courses for baking and cake designing E-commerce platform that sells products related to baking and cake design Provide live classes, on-demand course viewing, courses for all levels and fields, and LBP payment options. However, it is limited to only Lebanon.we have collection of utensils used for measuring, fondant modeling, piping, and cake decorating. These utensils come in a variety of shapes, sizes, and materials, depending on their purpose. The measuring spoons and cups are made of stainless steel and rubber and come in a package of four. The cake ruler, made of plastic, is used to measure the length and width of cakes. The modeling pens set 1 is a set of four utensils made of stainless steel and used for fondant modeling.  The modeling pens set 2, made of stainless steel and rubber, contains five pens with multiple rubber heads for fondant shaping.  The modeling pens set 3 is a set of four wooden utensils with multiple heads for fondant shaping.  The piping heads set 1 and 2 are both sets of stainless steel piping heads, with 5 and 10 pieces respectively.  The piping bags come in a package of three and are used for piping frosting onto cakes. The table turner, made of ceramic, is used for decorating and frosting cakes. The circle and square cake trays are made of carbon steel and are used to bake and serve cakes in different shapes and sizes. we have classes;The classes are grouped into three main categories: Baking, Filling, and Fondant.  Each category has several items that you can choose from, each with its own title, image, class section, duration, and description. For example, in the Baking category, you can learn how to bake different cakes like vanilla cake, red velvet cake, and lemon cake. In the Filling category, you can learn how to make different cream fillings like coffee cream, toffee cream, and dark chocolate cream. Finally, in the Fondant category, you can learn how to make fondant in different colors like orange, blue, and pink, and how to match the colors with the fondant.  Each class offers a clear description of what you will learn during the class, and the duration of each class is listed.     "
    );

    gpt.addMessage(userQuestion);

    // Get the response from ChatGPT.
    const response = await gpt.ask();
    setResponse(response.content);
    console.log(response.content);
    setIsAsking(false);

    // Add user question and ChatGPT response to chat history
    setChatHistory([
      ...chatHistory,
      { question: userQuestion, response: response.content },
    ]);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      {/* Chat button */}
      <button className="chat-button" onClick={toggleChat}>
        💬
      </button>

      {/* Chat box */}
      <GptContainer className={isChatOpen ? "active" : ""}>
        {/* <div className={"test-gpt-container "}> */}
        <div className={"chat-box"}>
          <div className="chat-header">ChattyZana</div>
          <div className="chat-body">
            {/* Render chat history */}
            {chatHistory.map((item, index) => (
              <div className="chat-message" key={index}>
                <div className="question">{item.question}</div>
                <div className="response">{item.response}</div>
              </div>
            ))}
            {/* Render typing indicator while waiting for response */}
            {isAsking && (
              <div className="chat-message typing-indicator">
                ChatGPT is typing...
              </div>
            )}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message here..."
              className="ask-input"
              value={userQuestion}
              onChange={(e) => {
                setUserQuestion(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.keyCode === 13 && userQuestion.trim() !== "") {
                  ask();
                  setUserQuestion("");
                }
              }}
            />
            <button
              className="ask-btn"
              onClick={() => {
                !userQuestion ? alert("Please ask a question") : ask();
                setUserQuestion("");
              }}
              disabled={isAsking}
            >
              Ask
            </button>
          </div>
        </div>
      </GptContainer>
    </>
  );
}

export default Chatbot;

const GptContainer = styled.div`
  position: fixed;
  bottom: 8%;
  right: 0;
  margin-right: 6%;
  width: 25%;
  height: 70%;
  min-width: 300px;
  min-height: 500px;
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  opacity: 0;
  transform: scale(0);
  transform-origin: bottom right 60px;
  transition: all 0.3s ease;

  &.active {
    opacity: 1;
    transform: scale(1);
    transition: all 0.3s ease;
  }
`;
