
// delete the React import
import { StrictMode , useState } from "react";
import { createRoot } from "react-dom/client";
import Order from "./Order";
import PizzaOfTheDay from "./pizzaOfTheDay";
import Header from "./Header";
import { CartContext } from "./contexts";

// delete the Pizza component

const App = () => {
  
  const cartHook = useState([]);
  return (
    <StrictMode>
     <CartContext.Provider value={cartHook}>
       <div>
        <Header/>
        <Order />
        <PizzaOfTheDay/>
       </div>
     </CartContext.Provider>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);