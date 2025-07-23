# 🛒 ShoppyGlobe – E-commerce React Application

GitHub Link: https://github.com/mujahidsayyed09/ShoppyGlobe
Published Website Link: https://shoppyglobev1.netlify.app/

ShoppyGlobe is a basic e-commerce web application built with **React**, designed to showcase a functional online shopping experience. The application includes product listing, detailed product views, shopping cart management, search functionality, and responsive design.
---
## 🚀 How to Run the Project

```bash
# Clone the repo
git clone https://github.com/mujahidsayyed09/ShoppyGlobe.git
cd shoppyglobe

# Install dependencies
npm install

# Start development server
npm run dev
```

> Visit [http://localhost:5173](http://localhost:5173) to view the app in your browser.
## 📌 Objective

To create a scalable and modular React-based e-commerce platform that fetches real-time data, supports dynamic routing, global state management using Redux, and responsive design using plain CSS.


```
src/
│
├── components/
│   ├── Header.jsx
│   ├── ProductList.jsx
│   ├── ProductItem.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   ├── CartItem.jsx
│   └── NotFound.jsx
│
├── redux/
│   ├── store.js
│   └── cartSlice.js
│
├── hooks/
│   └── useFetchProducts.js
│
├── App.jsx
├── index.js
└── styles/
    
```

- **App**: Main root component
- **Header**: Navigation with links and cart icon
- **ProductList**: Lists all fetched products
- **ProductItem**: Individual product with “Add to Cart” button
- **ProductDetail**: Displays selected product info using route param
- **Cart**: Shows cart items with quantity update and remove options
- **CartItem**: Individual item within the cart
- **NotFound**: 404 route fallback

---

- Props are used throughout to pass product data and cart item details.
- All components are **functional** and **reusable**.
- Implemented prop-type validation where applicable.

---

## 🔄 Data Fetching with `useEffect` 

### ✅ Product List 
- `useEffect` fetches data from `https://dummyjson.com/products`
- Data is stored in local state
- A **custom hook** `useFetchProducts` is used for clean abstraction

### ✅ Product Detail 
- Uses `useParams` from React Router to fetch and display single product info

### ✅ Error Handling 
- Graceful fallback UI for failed API requests

---

## 🔄 State Management with Redux 

### ✅ Redux Store
- `cartSlice` manages cart state (add, remove, update quantity)
- Actions and selectors are properly implemented

### ✅ Product Search Feature 
- Real-time search implemented in ProductList using input + filter

---

## 🖱️ Event Handling

- **Add to Cart**: Each `ProductItem` includes a button to dispatch Redux `addToCart` action
- **Remove from Cart**: Each `CartItem` includes a remove button
- All actions are dispatched correctly via Redux

---

## 🧭 Routing – React Router 

- **React Router** for navigation
- Routes:
  - `/` → Home (Product List)
  - `/product/:id` → Product Detail
  - `/cart` → Cart Page
  - `*` → NotFound (404)
- Dynamic route params for product detail pages

---

## ⚡ Performance Optimization

- Implemented **React.lazy** and **Suspense** for:
  - `ProductDetail`
  - `Cart`
  - `NotFound`
- Improves performance via **code splitting**

---

## 🎨 Styling and Responsiveness

- All components styled using **plain CSS** (`.css` files)
- Responsive layouts for:
  - Mobile
  - Tablet
  - Desktop
- Clean and modern design aesthetic

---

## 🛠️ Tech Stack

- **Frontend**: React, JSX, CSS
- **Routing**: React Router DOM
- **State Management**: Redux Toolkit
- **API**: [DummyJSON Products API](https://dummyjson.com/products)

---


