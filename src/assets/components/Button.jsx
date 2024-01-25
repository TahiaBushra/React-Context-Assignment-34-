const Button = ({ handler, placeholder }) => {
  return <button onClick={handler}>{placeholder}</button>;
};

export default Button;
