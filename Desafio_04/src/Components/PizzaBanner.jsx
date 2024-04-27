
const PizzaBanner = () => {
  return (
    <>
      <div className="relative pizzaBanner">
        <img src="./Icons/Pizzabanner.jpg" alt="Descripción de la imagen" className="w-full h-auto" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <h1 className="text-4xl  text-white">¡Pizzeria Mamma Mia!</h1>
          <p className="text-lg text-white">Las Mejores pizzas que podrás encontrar</p>
          <div className="border-b border-white w-30 mx-auto mt-2"></div>
        </div>
      </div>
    </>
  )
}

export default PizzaBanner

