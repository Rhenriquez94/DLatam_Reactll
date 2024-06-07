import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../Components/CarritoContext';

const Home = () => {
  const [pizzasData, setPizzasData] = useState([]);
  const { agregarAlCarrito } = useContext(CarritoContext);

  const handleAgregarAlCarrito = (pizza) => {
    const precio = parseFloat(pizza.price);
    if (!isNaN(precio)) {
      agregarAlCarrito(pizza);
    } else {
      console.error('Precio de pizza no válido:', pizza.price);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/pizzas.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPizzasData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 pt-8">
      <div className="flex flex-wrap -mx-4">
        {pizzasData.map((pizza, index) => (
          <div key={index} className="w-full md:w-1/5 lg:w-1/5 px-4 mb-8">
            <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
              <img
                className="w-full h-40 object-cover object-center"
                src={pizza.img}
                alt={pizza.img}
              />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800">
                  {pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}
                </h2>
                <div className="border-b-2 border-gray-200 w-30 mx-auto mt-2"></div>
                <p className="text-md mt-2 font-semibold mb-2">Ingredientes:</p>
                {pizza.ingredients.map((ingredient, index) => (
                  <div key={index} className="ingredientList  p-1 pl-5 flex items-center">
                    <img src="/Icons/pizza.png" alt="pizza" className="mr-2" />
                    <p className="text-sm ">{ingredient}</p>
                  </div>
                ))}
                <div className="border-b-2 border-gray-200 w-30 mx-auto mt-4"></div>
                <div className="w-30 mx-auto mt-4 text-center font-semibold">
                  <h1 className="text-base">${pizza.price}</h1>
                </div>
                <div className="mt-4 flex justify-between">
                  <Link to={`/pizza/${pizza.id}`}>
                    <button className="bg-cyan-400 hover:bg-cyan-200 text-white py-1 px-4 rounded">
                      <p className="text-sm">&#x1F440; Ver Más</p>
                    </button>
                  </Link>
                  <button
                    className="bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded"
                    onClick={() => handleAgregarAlCarrito(pizza)}>
                    <p className="text-sm">&#x1F6D2; Añadir</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
























// import  { useState, useEffect,useContext  } from 'react';
// import { Link } from 'react-router-dom';
// import { CarritoContext } from '../Components/CarritoContext';

// const Home = () => {
//   const [pizzasData, setPizzasData] = useState([]);


//   const { agregarAlCarrito } = useContext(CarritoContext);

//   const handleAgregarAlCarrito = (producto) => {
//     agregarAlCarrito(producto);
//   };





//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('../../public/pizzas.json');
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         setPizzasData(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="container mx-auto px-4 pt-8">
//       <div className="flex flex-wrap -mx-4">
//         {pizzasData.map((pizza, index) => (
//           <div key={index} className="w-full md:w-1/5 lg:w-1/5 px-4 mb-8">
//             <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
//               <img
//                 className="w-full h-40 object-cover object-center"
//                 src={pizza.img}
//                 alt={pizza.img}
//               />
//               <div className="p-4">
//                 <h2 className="text-lg font-bold text-gray-800">
//                   {pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}
//                 </h2>
//                 <div className="border-b-2 border-gray-200 w-30 mx-auto mt-2"></div>
//                 <p className="text-md mt-2 font-semibold mb-2">
//                   Ingredientes:
//                 </p>
//                 {pizza.ingredients.map((ingredient, index) => (
//                   <div key={index} className="ingredientList  p-1 pl-5 flex items-center">
//                     <img src="../../public/Icons/pizza.png" alt="pizza" className="mr-2" />
//                     <p className="text-sm ">
//                       {ingredient}
//                     </p>
//                   </div>
//                 ))}
//                 <div className="border-b-2 border-gray-200 w-30 mx-auto mt-4"></div>
//                 <div className="w-30 mx-auto mt-4 text-center font-semibold">
//                   <h1 className="text-base">${pizza.price}</h1>
//                 </div>
//                 <div className="mt-4 flex justify-between">
//                   <Link to={`/pizza/${pizza.id}`}>
//                     <button className="bg-cyan-400 hover:bg-cyan-200 text-white py-1 px-4 rounded">
//                       <p className="text-sm">&#x1F440; Ver Más</p>
//                     </button>
//                   </Link>
//                   <button
//                     className="bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded"
//                     onClick={() => handleAgregarAlCarrito(producto)}>
//                     <p className="text-sm">&#x1F6D2; Añadir</p>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
