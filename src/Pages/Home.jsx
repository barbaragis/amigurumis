
import { useEffect, useState } from "react"
import "../Pages/Home.css"
import { getProductos } from "../../lib/amigus.requests";
import { ItemListContainer } from "../Componentes/ItemListContainer/ItemListContainer";


export const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() =>{
    getProductos()
      .then(res => setProducts(res))
  } , []);

  useEffect(() =>{
    console.log((products))
  }, [products])



    return(
        <>
        <h1 className="home__titulo"> Nombre </h1>
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.crochetyamigurumis.com/wp-content/uploads/2019/06/IMG_0430-1050x525.jpg" class="d-block w-100 h-50" style={{ maxHeight: "500px" }} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://storage.makerist.de/uploads/orderable_image/219057/image/carousel_large_image_d8f0bedc.jpg" class="d-block w-100 h-50" style={{ maxHeight: "500px" }} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.upb.edu.co/es/imagenes/img-tu-pesebre-amigurumi-1464260358765.jpg" class="d-block w-100 " style={{ maxHeight: "500px" }} alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        <h1 className="home__titulo"> Colecciones </h1>
        <div className="fila-de-imagenes">
          <div class="imagen">
            <img src="https://www.alwaysfreeamigurumi.com/wp-content/uploads/2021/04/always_free_ami_Pikachu_020421_1.jpg" alt="Imagen 1" /> 
            <h3 > Peliculas y series </h3>
          </div>
        <div class="imagen"><img src="https://d22fxaf9t8d39k.cloudfront.net/086afe6687dd00bdb0b4c247299a3802e55ff76bbc485dd7df76a4f9f57b679a1453.jpeg" alt="Imagen 3"/> <h3> Star Wars</h3> </div>
        <div class="imagen">
            <img src="https://falabella.scene7.com/is/image/FalabellaPE/17797818_1?wid=1500&hei=1500&qlt=70" alt="Imagen 1" /> 
            <h3> Mantas</h3>
          </div>
          <div class="imagen">
            <img src="https://i.pinimg.com/736x/31/ef/a9/31efa93b3cab5a58ce6a4f2ed94bd752.jpg" alt="Imagen 1" /> 
            <h3> Varios </h3>
          </div>
    </div>
    <div className="center-container">
  {/* <div className="home__banner">
    <a href="https://www.instagram.com/pavi_s_amigurumi/" target="_blank" rel="noopener noreferrer">
      <img src="" alt="Banner de Instagram" />
    </a>
  </div> */}
</div>
<h2 className="home__titulo"> Todos los amigurumis </h2>
  <ItemListContainer products={products} />
        </>
   )
}