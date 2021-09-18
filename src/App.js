import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const products = [
    {name: "Moblie", price: '14000'},
    {name: "LopTop", price: '44000'},
    {name: "Camera", price: '54000'},
    {name: "Watch", price: '1400'},
  ]
  return (
    <div className="App">
      {/* <Prodect name = "Mobile" price="14000"></Prodect>
      <Prodect name = "Loptop" price="140000"></Prodect>
      <Prodect name = "Watch" price="4000"></Prodect> */}
      {/* {
        products.map(product =><Prodect name = {product.name} price={product.price}></Prodect>)
        
      } */}
     <Counter></Counter>

    </div>
  );
}

// state set use 
function Counter() {

  const [count, setState] = useState(0);

  const handleIncrease = () =>{
    const newCount = count + 1;
    setState(newCount);
  }

  return (
    <div>
    <h1>Count: {count}</h1>
    <button onClick={handleIncrease} >Increse</button>
  </div>
  );
  
}

function Prodect (props) {
  const productStyle ={
    borderRadius : "20px",
    
  }
  return (
    <div className="product" style={productStyle}>
      <h2>Name:{props.name}</h2>
      <h4>Price: {props.price}</h4>
    </div>
  );
}

export default App;
