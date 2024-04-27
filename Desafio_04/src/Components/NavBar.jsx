import  { useContext  } from 'react';
import { CarritoContext } from './CarritoContext';

const NavBar = () => {
  const { total } = useContext(CarritoContext);
  return (
    <nav className="bg-white bgNabar h-16">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between  mx-auto p-4">
        <div className='flex navPizza'>   
          <img src="../../public/Icons/pizza.png" alt="pizza" />
          <h1>Pizzeria Mamma Mia!</h1>
        </div>
    
        <div className='flex navPizza'>
          <img src="/Icons/carrito.png" alt="carrito" />
          <h1>Total: {total}</h1>
        </div>
      </div>
    </nav>
  )
}

export default NavBar