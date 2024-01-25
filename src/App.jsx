import CakeAdmin from "./assets/components/CakeAdmin";
import { CakeProvider } from "./assets/components/CakeContext";
import CakeShop from "./assets/components/CakeShop";

const App = () => {
  return (
    <CakeProvider>
      <CakeShop />
      <CakeAdmin />
    </CakeProvider>
  );
};

export default App;
