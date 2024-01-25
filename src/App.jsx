import { useState } from "react";
import ComponentOne from "./assets/components/ComponentOne";

const App = () => {
  const [kiwi, setKiwi] = useState(10);
  return <ComponentOne kiwi={kiwi} />;
};
export default App;
