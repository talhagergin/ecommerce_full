
import { useEffect, useState } from 'react';
import '../App.css';
import { IProduct } from '../model/IProduct';
import Header from './Header';
import ProductList from './ProductList';
import ButtonUsage from './ButtonUsage';
import { Container, CssBaseline } from '@mui/material';

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
    <CssBaseline/> 
     <Header/>
     <Container>
        <ProductList products ={products} addProduct ={addProduct}/>
     </Container>
     <ButtonUsage/>
   </>
  )
}

export default App
