import { useState } from "react";
import "./ClickableText.css";

function ClickableText() {
  const messages = [
    { text: "", img: "/assets/christmas-cat.gif" },
    {
      text: "Hi Sarah, I wanted to tell you some reasons why I'm grateful to you!",
    },
    {
      text: "I feel so emotionally safe when I'm with you. For example, when I opened up about my imposter syndrome issues, you were supportive and helped me navigate my anxiety, and as a result I've been able to push myself and do things I would have been too scared to do before.",
    },
    {
      text: "I want to recognize how much effort you put into maintaining our relationship, even when it's not easy. For example, you set aside time for dates and messaging with me every day, even when you're travelling, ill, or short on time. You make me feel like I'm a priority and someone you sincerely want to spend time with, which means so much to me.",
    },
    {
      text: "You've inspired me to grow personally, socially and professionally. I respect you deeply and see you as a role model as well as an equal. For example, I've re-kindled two close friends and more actively maintain my social network, because I noticed this is something you do amazingly well.",
    },
    {
      text: "It's clear you've surrounded yourself with like-minded, friendly people who enjoy your company, and I've enjoyed meeting them all. I also can't wait to meet your family next year!",
    },
    {
      text: "Maybe above all, spending time with you fills me with so much joy and warmth. I'm excited for every date, we always have great conversations and you make me laugh all the time. You're the perfect combination of all the things I want from a girlfriend.",
    },
    {
      text: "Spending this year with you has been amazing and I hope to spend many more with you :)",
    },
  ];

  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };

  return (
    <div className="clickable-text" onClick={handleClick}>
      {messages[index].img && (
        <img
          src={messages[index].img}
          alt="Message Image"
          className="message-image"
        />
      )}
      <p>{messages[index].text}</p>
    </div>
  );
}

export default ClickableText;
