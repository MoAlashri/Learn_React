import { usePizzaOfTheDay } from "./usePizzaOfTheDay";

const intl = new Intl.NumberFormat("en-US" ,{
  style:"currency",
  currency:"USD",
})

const PizzaOfTheDay = () => {

  const pizzaOfTheDay = usePizzaOfTheDay();
  if (!pizzaOfTheDay) {
    return <div>Loading...</div>
  }

  return (
    <div className = "pizza-of-the-day">
      <h2>Pizza Of The Day</h2>
      <div>
        <div className="pizza-of-the-day-info">
        <h3>{pizzaOfTheDay.name}</h3>
        <p>{pizzaOfTheDay.discription}</p>
        <p className="pizza-of-the-day-price">
          from : {intl.format(pizzaOfTheDay.sizes.S)}
        </p>
      </div>
      <div>
        <img
        className="pizza-of-the-day-image"
        src={pizzaOfTheDay.image}
        alt={pizzaOfTheDay.name}
        />
      </div>
      </div>
    </div>
  )
}

export default PizzaOfTheDay