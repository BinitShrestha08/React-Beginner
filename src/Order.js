export default function Order({ closeHour }) {
  return (
    <div className="order">
      <button className="btn" onClick={() => alert("Order Successful !")}>
        Order
      </button>
    </div>
  );
}
