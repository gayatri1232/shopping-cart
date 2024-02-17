import React, { useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Shirts', price: 54, image: 'https://contents.mediadecathlon.com/p1962413/22b34652329f4e15af383d0c0c9cf377/p1962413.jpg?format=auto&quality=70&f=650x0', rating: 4 },
    { id: 2, name: 'Party Wear Gowns', price: 75, image: 'https://siricollections.in/cdn/shop/products/sl1067_1080x1080.jpg?v=1678514157', rating: 3 },
    { id: 3, name: 'Watch', price: 80, image: 'https://fossil.scene7.com/is/image/FossilPartners/FS5991_main?$sfcc_fos_large$', rating: 5 },
    { id: 4, name: 'Apple iPhone ', price: 900, image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694674142/Croma%20Assets/Communication/Mobiles/Images/300742_0_s39fc7.png', rating: 5 },
  ]);

  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };
  
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };
  
  const incrementQuantity = (productId) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };
  
  const decrementQuantity = (productId) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">Shopping Cart</div>
          <div className="search-bar">
            <input type="text" placeholder="Search products..." />
          </div>
          <div className="categories">
            <select>
              <option value="">All Categories</option>
              <option value="clothing">clothing</option>
              <option value="watches">watches</option>
              <option value="iphones">iphones</option>
            </select>
          </div>
          <div className="cart-icon">
            <span>Cart ({cart.length})</span>
          </div>
        </nav>
      </header>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <div className="rating">Rating: {product.rating}</div>
              <div className="quantity">
                <button onClick={() => decrementQuantity(product.id)}>-</button>
                <span>{product.quantity || 0}</span>
                <button onClick={() => incrementQuantity(product.id)}>+</button>
              </div>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
