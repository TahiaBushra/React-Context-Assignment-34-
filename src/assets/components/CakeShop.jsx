import { useContext } from "react";
import { CakeContext } from "./CakeContext";

const CakeShop = () => {
  const { state, dispatch } = useContext(CakeContext);
  const handlePurchase = (quantity) => {
    if (state.stock === 0) {
      return alert("Out of stock!");
    }
    dispatch({ type: "BUY_CAKE", payload: quantity });
  };
  return (
    <div className="bg-white p-8 rounded shadow-md max-w-md w-full justify-center items-center text-center mx-auto antialiased">
      <p className="text-3xl font-semibold mb-4">Welcome to our Cake Shop!</p>
      <p className="mb-4 text-xl">
        Available Cakes: <span className="font-bold">{state.stock}</span>
      </p>
      <button
        className="bg-sky-400 text-white font-semibold px-4 py-2 rounded hover:bg-teal-600"
        onClick={() => handlePurchase(1)}
      >
        Buy A Cake
      </button>
    </div>
  );
};

export default CakeShop;
