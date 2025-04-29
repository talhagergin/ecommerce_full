
import { useEffect, useState } from 'react';
import './App.css';
import { IProduct } from './model/IProduct';

function App() {
  return (
    <>
     <Header/>
     <ProductList/>
   </>
  )
}

function Header() {
  return (
      <h1>Header</h1>
  )
}

function ProductList() {
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
         price: Math.floor(Math.random() * 100),
        isActive: false
      }])
  }
  return (
    <div>
      <h2>Product List</h2>
      {products.map(p=> (
       <Product key = {p.id} product={p}/>
      ))}
      <button onClick={addProduct}>Add Product</button>
     
    </div>
  )
}

function Product(props: any){
  return (
    <> 
      { props.product.isActive ? (
        <h3>{props.product.name} - {props.product.price}</h3>
      ) : <p>Ürün Satışta değil</p>}
    </>
  )
}

export default App
