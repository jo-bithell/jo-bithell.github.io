import { useState } from 'react';
import './ClickableText.css';

function ClickableText() {
  const messages = [
    { text: "", img: "/assets/cat.gif" },
    { text: "You are:", img: "" },
    { text: "The Úrsula Iguarán to my José Arcadio Buendía.", img: "/assets/1000-years-of-solitude.png" },
    { text: "The Imelda to my Dickie.", img: "/assets/the-bee-sting.jpg" },
    { text: "Maybe not the best example.", img: "/assets/the-bee-sting.jpg" },
    { text: "The Yeong-hye to my... yeah let's not do that one.", img: "/assets/the-vegetarian.jpg" },
    { text: "You're amazing and I keep finding new reasons why you're amazing." },
    { text: ":)" }
  ];

  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };

  return (
    <div className="clickable-text" onClick={handleClick}>
      {messages[index].img && <img src={messages[index].img} alt="Message Image" className="message-image" />}
      <p>{messages[index].text}</p>
    </div>
  );
}

export default ClickableText;