// Higher Order Component
const HOC = ({ children, authStatus }) => {
  if (authStatus) {
    return children;
  } else {
    return <p>Your not sign in!</p>;
  }
};

export default HOC;
