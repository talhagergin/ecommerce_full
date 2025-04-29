
import { useEffect, useState } from 'react';
import '../App.css';
import { IProduct } from '../model/IProduct';
import Header from './Header';
import ProductList from './ProductList';

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch("http://localhost:5003/api/products")
    .then(response => response.json())
    .then(data => setProducts(data));
  },[]); //komponent ilk yüklendiğinde çalışır
  

  function addProduct(){
    setProducts([...products,
      {id: products.length + 1,
         name: "Product" + (products.length + 1), 
         description: "Description" + (products.length + 1),
         price: Math.floor(Math.random() * 100),
        isActive: false
      }])
  }
  return (
    <>
     <Header  products ={products}/>
     <ProductList products ={products} addProduct ={addProduct}/>
   </>
  )
}

export default App
