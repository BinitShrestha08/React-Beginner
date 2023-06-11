import { useState } from "react";
import Order from "./Order";

export default function Footer() {
  const [counter, setCounter] = useState(0);

  const date = new Date("June 11, 2023");
  date.setDate(date.getDate() + counter);

  console.log(date.getDay());

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = daysOfWeek[date.getDay()];
  console.log(dayName);

  //   const isOpen = hour >= openHour && hour <= closeHour;

  // if (hour >= openHour && hour <= closeHour) alert("We're currently closed. ");
  // else alert(" Sorry we're closed");

  // if (!isOpen)
  //   return (
  //     <p>
  //       We're happy to welcome you between {openHour}:00 & {closeHour}:00
  //     </p>
  //   );

  return (
    <footer className="footer">
      <button
        onClick={() => setCounter((counter) => counter - 1)}
        className="btn"
      >
        -
      </button>
      <input
        type="text"
        value={counter}
        onChange={(e) => setCounter(Number(e.target.value))}
        className="input"
      />
      <button
        onClick={() => setCounter((counter) => counter + 1)}
        className="btn"
      >
        +
      </button>
      <p>
        {dayName === "Sunday" || dayName === "Saturday"
          ? "Store is Closed on Sundays and Saturdays. No Pizzas 🍕😢"
          : counter > 0
          ? `${counter} days from today is ${date.toDateString()}. Store is Open 🍕😋 !!`
          : `${Math.abs(
              counter
            )} days ago was ${date.toDateString()}. Store was Open 🍕😋 !!`}
      </p>
      <Order />
      {/* <span>{date.toDateString()}</span> */}
    </footer>
  );
}
