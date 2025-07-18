import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import ProductList from './components/ProductList';
// import ProductDetail from './components/ProductDetail';
// import Cart from './components/Cart';
// import NotFound from './components/NotFound';
import { Suspense, lazy } from 'react';
import './components/Loader.css';
import './App.css';

const Header = lazy(() => import('./components/Header'));
const ProductList = lazy(() => import('./components/ProductList'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const Cart = lazy(() => import('./components/Cart'));
const NotFound = lazy(() => import('./components/NotFound'));

function App() {
  return (
    <Router>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
