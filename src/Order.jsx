import { useEffect, useState } from "react";
import Pizza from "./Pizza";

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})

export default function Order() {

  const[pizzaTypes,setPizzaTypes] = useState([]);
  const [pizzaType,setPizzaType]= useState("pepperoni");
  const [pizzaSize,setPizzaSize] =useState("M");
  const [loading, setLoading] = useState(true);

  let price , selectedPizza;

  if(!loading){
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id)
    price = intl.format(selectedPizza.sizes[pizzaSize])
  }
  async function fetchPizzaTypes() {
    const pizzaRes = await fetch("/api/pizzas")
    const pizzaJson = await pizzaRes.json();
    setPizzaTypes(pizzaJson);
    setLoading(false);
  };
  useEffect(() => {
    fetchPizzaTypes();

  },[])
  
  return (
    <div className="Order">
      <h2>Create Order</h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select 
            onChange={(e) => setPizzaType(e.target.value)}
            name="pizza-type"
             value={pizzaType} >
           {
            pizzaTypes.map((pizza) => (
              <option 
              key={pizza.id}
              value={pizza.id}>
               {pizza.name}
              </option>
            ))}
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza Size</label>
            <div>
              <span>
                <input  
                checked={pizzaSize === "S"}
                type="radio"
                name="pizza-size"
                 value="S"
                id="pizza-S"
                onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-S">Small</label>
              </span>
              <span>
                <input  
                checked={pizzaSize === "M"}
                type="radio"
                name="pizza-size"
                 value="M"
                id="pizza-M"
                onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-M">Medium</label>
              </span>
              <span>
                <input  
                checked={pizzaSize === "L"}
                type="radio"
                name="pizza-size"
                value="L"
                id="pizza-L"
                onChange={(e) => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-L">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to Cart</button>
          <div className="order-pizaa">
            <Pizza 
            name = {selectedPizza?.name || "Loading..."}
            description = {selectedPizza?.description || "Loading..."}
            image = {selectedPizza?.image || "Loading..."}
            />
            <p>{price}</p>
          </div>
        </div>
      </form>
    </div>
  )

}