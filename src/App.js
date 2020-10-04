import React from 'react';
import ProductTable from './components/ProductTable'
import './App.css';
import Navbar from './components/Navbar';
import Montre from './assets/montre.jpg';
import Veste from './assets/veste.jpg';
import Balance from './assets/balance.jpg';
import Jupe from './assets/jupe.jpg';
import Telephone from './assets/telephone.jpg';
import Echarpe from './assets/echarpe.jpg'


const PRODUCTS = [
  {
    image : Montre,
    price : 2000,
    name : 'montre',
    category: 'electronics',

  },
  {
    image : Veste,
    price : 3000,
    name : 'veste',
    category: 'clothes',

  },
  {
    image : Balance,
    price : 2000,
    name : 'balance',
    category: 'electronics',

  },
  {
    image : Jupe,
    price : 2000,
    name : 'jupe',
    category: 'clothes',

  },
  {
    image : Telephone,
    price : 2000,
    name : 'Telephone',
    category: 'electronics',

  },
  {
    image : Echarpe,
    price : 2000,
    name : 'Echarpe',
    category: 'clothes',

  }
]
function App() {
  return (
    <div className="App">
      <Navbar title='Marketplace'/>
      <div className='container'>
     <ProductTable data={PRODUCTS}/>
     </div>
    </div>
  );
}

export default App;
