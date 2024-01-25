import Child from "./assets/components/Child";
import HOC from "./assets/components/HOC";

const App = () => {
  const authStatus = true;
  return (
    <div>
      <HOC authStatus={authStatus}>
        <Child />
      </HOC>
    </div>
  );
};

export default App;
