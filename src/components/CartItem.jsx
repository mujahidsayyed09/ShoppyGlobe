import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
} from "../redux/cartSlice";
import './CartItem.css';

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} />
      <div className="item-details">
        <h2>{item.title}</h2>
        <p><strong>Price:</strong> ${item.price}</p>
        <p><strong>Qty:</strong> {item.quantity}</p>
        <div className="quantity-controls">
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
        </div>
        <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
      </div>
    </div>
  );
}
