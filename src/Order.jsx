import Pizza from "./Pizza";


export default function Order() {
  const pizzaType = "Pepperoni";
  const pizzaSize = "M"

  return (
    <div className="Order">
      <h2>Create Order</h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select name="pizza-type" value={pizzaType} >
            <option value="pepperoni">The Pepperoni Pizza</option>
            <option value="hawaiian">The Hawaiian Pizza</option>
            <option value="big_meat">The Big Meat Pizza</option>
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
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input  
                checked={pizzaSize === "M"}
                type="radio"
                name="pizza-size"
                 value="M"
                id="pizza-M"
                />
                <label htmlFor="pizza-s">Medium</label>
              </span>
              <span>
                <input  
                checked={pizzaSize === "L"}
                type="radio"
                name="pizza-size"
                value="L"
                id="pizza-L"
                />
                <label htmlFor="pizza-s">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to Cart</button>
          <div className="order-pizaa">
            <Pizza 
            name = "pepperoni"
            description = "A classic pizza with pepperoni slices and cheese."
            image = "/public/pizzas/pepperoni.webp"
            />
            <p>$13.37</p>
          </div>
        </div>
      </form>
    </div>
  )

}