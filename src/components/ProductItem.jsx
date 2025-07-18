import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import './ProductItem.css';

export default function ProductItem({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <div className="btns">
        <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        <Link to={`/product/${product.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
}
