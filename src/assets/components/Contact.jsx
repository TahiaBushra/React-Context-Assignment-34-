import { useState } from "react";
import Button from "./Button";

const Contact = () => {
  const [text, setText] = useState("This is contact component.");
  const handleClick = () => {
    setText("Hi, this is component!");
  };
  return (
    <div>
      <p>{text}</p>
      <Button placeholder={"Change Text"} handler={handleClick} />
    </div>
  );
};

export default Contact;
