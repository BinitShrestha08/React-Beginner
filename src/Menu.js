import { pizzaData } from "./pizzasData";
import Pizza from "./Pizza";

export default function Menu() {
  const pizzas = pizzaData;

  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>Authentic Italian cuisine. 6 dishes to choose from</p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still wokring on our menu. Please come back later.</p>
      )}

      {/* <Pizza
        image="pizzas/prosciutto.jpg"
        name={"Pizza Prosciuto"}
        price={10}
      /> */}
    </main>
  );
}
