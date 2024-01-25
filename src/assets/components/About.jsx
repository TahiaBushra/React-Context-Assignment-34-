import { useState } from "react";
import Button from "./Button";

const About = () => {
  const [color, setColor] = useState("blck");
  const handleClick = () => {
    setColor("#BFACB5");
  };
  return (
    <div>
      <p style={{ color }}>This is about component.</p>
      <Button placeholder={"Change Color"} handler={handleClick} />
    </div>
  );
};

export default About;
