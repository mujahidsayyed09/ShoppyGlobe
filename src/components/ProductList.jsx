import useFetchProducts from '../hooks/useFetchProducts';
import ProductItem from './ProductItem';
import { useState } from 'react';
import Loader from './Loader';
import './ProductList.css';

export default function ProductList() {
  const { products, loading, error } = useFetchProducts("https://dummyjson.com/products");
  const [searchText, setSearchText] = useState('');

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="product-list">
      <input
        className="search-box"
        type="text"
        placeholder="Search Products..."
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />

      {loading && <Loader/>}
      {error && <p>{error}</p>}

      <div className="product-grid">
        {filtered.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
