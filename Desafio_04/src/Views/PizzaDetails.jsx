// PizzaDetail.js
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PizzaDetails = () => {
  const { id } = useParams();
  const [pizzaDetails, setPizzaDetails] = useState(null);

  useEffect(() => {
    const fetchPizzaDetails = async () => {
      try {
        const response = await fetch("/pizzas.json");
        if (!response.ok) {
          throw new Error("Failed to fetch pizza details");
        }
        const data = await response.json();
        const pizza = data.find((pizza) => pizza.id === id);
        console.log(pizza);
        if (pizza) {
          setPizzaDetails(pizza);
        } else {
          throw new Error("Pizza not found");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPizzaDetails();
  }, [id]);


  return (
    <>
      <div className="flex justify-center pt-8 pb-8">
        <div className="flex border border-gray-300 rounded-lg shadow-md overflow-hidden">
          <div className="w-1/3 p-4">
            <img
              src={pizzaDetails?.img}
              alt="Pizza"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="w-2/3 p-4" style={{ maxWidth: "600px" }}>
            <h1 className="text-xl font-bold mb-2">
              {pizzaDetails?.name.charAt(0).toUpperCase() +
                pizzaDetails?.name.slice(1)}
            </h1>
            <p className="text-l mb-4">{pizzaDetails?.desc}</p>
            <div className="border-b-2 border-gray-200 w-30 mx-auto mt-4"></div>
            <p className="text-md mt-2 font-semibold mb-2">Ingredientes:</p>
            {pizzaDetails?.ingredients?.map((ingredient, index) => (
              <div
                key={index}
                className="ingredientList  p-1 pl-5 flex items-center"
              >
                <img
                  src="/Icons/pizza.png"
                  alt="pizza"
                  className="mr-2"
                />
                <p className="text-sm ">{ingredient}</p>
              </div>
            ))}

            <div className="border-b-2 border-gray-200 w-30 mx-auto mt-4"></div>
            <p className="text-lg font-bold mb-4">${pizzaDetails?.price}</p>
            <button className="bg-red-600 hover:bg-red-500 text-white  py-2 px-4 rounded">
              <p className="text-sm">&#x1F6D2; Añadir</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PizzaDetails;
