import imgPastel from '../Icons/imgPastel.png'
const Home = () => {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="text-center d-flex flex-column align-items-center">
          <h1>Bienvenidos a <b>Happy Cake</b></h1>
          <p>El lugar de los pasteles felices</p>
          <img 
            src={imgPastel} 
            alt=""
            width="180"
            height="180" 
          />
        </div>
      </div>
    
    </>
    
  )
}

export default Home