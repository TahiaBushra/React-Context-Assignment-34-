import { useContext } from "react";
import { CakeContext } from "./CakeContext";

const CakeAdmin = () => {
  const { state, dispatch } = useContext(CakeContext);
  const handleRestock = (quantity) => {
    if (state.stock === 10) {
      return alert("Stock Full");
    } else if (state.stock < 10) {
      const updateQuantity = quantity - state.stock;
      dispatch({ type: "RESTOCK_CAKE", payload: updateQuantity });
    }
  };
  return (
    <div className="bg-white p-8 rounded shadow-md max-w-md w-full justify-center items-center text-center mx-auto antialiased">
      <h1 className="text-3xl font-semibold mb-4">
        Welcome to Cake Shop Admin
      </h1>
      <p className="mb-4 text-xl">
        Stock: <span className="font-bold">{state.stock}</span>
      </p>
      <button
        className="bg-green-700 text-white font-semibold px-4 py-2 rounded hover:bg-lime-500"
        onClick={() => handleRestock(10)}
      >
        Restock Cakes
      </button>
    </div>
  );
};

export default CakeAdmin;
