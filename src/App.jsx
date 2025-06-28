
// delete the React import
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Order from "./Order";
import PizzaOfTheDay from "./pizzaOfTheDay";

// delete the Pizza component

const App = () => {
  return (
    <StrictMode>
      <div>
        <h1>Padre Gino's Pizza – Order Now</h1>
        <Order />
        <PizzaOfTheDay/>
      </div>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);