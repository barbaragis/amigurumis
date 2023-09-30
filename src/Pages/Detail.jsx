import { useEffect, useState } from "react"
import "../Pages/Detail.css"
import { getProducto } from "../../lib/amigus.requests";
import { useNavigate, useParams } from "react-router-dom";
import ImageCarousel from "../Componentes/ImageCarousel/ImageCarousel";


const WhatsAppButton = () => {
    // Número de teléfono al que se enviará el mensaje de WhatsApp
    const phoneNumber = "1234567890"; // Reemplaza con el número de WhatsApp deseado
  
    // Mensaje predeterminado para enviar en WhatsApp
    const message = "¡Hola! Estoy interesado en tus productos.";
  
    // URL de WhatsApp con el número y el mensaje codificados
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
  
    return (
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <button>Consultar en WhatsApp</button>
      </a>
    );
  };

export const Detail = () => {
    const {id} = useParams();
    const [producto , setProducto] = useState({});


    useEffect(() => {
        getProducto(+id).then((res)=> {
            setProducto(res);
        })
        }, []);

        if(!Object.keys(producto).length) return


    return(
        <>
        <div className="detail-container">
            <div className="detail">
                <ImageCarousel images={producto.images}  className="image-carousel-container" />
            </div>
            <div className="detail-info">
            <h2>{producto.title} </h2>
            <p> {producto.description} </p>
            <span> IMPORTANTE: Los muñecos se hacen a pedido, no contamos con stock. Podés consultar tiempos de entrega actuales por WhatsApp o mail </span>
            <p>Cualquier consulta no dudes en comunicarte a cualquiera de nuestras opciones de contacto!</p>
            <WhatsAppButton />
            </div>
            </div>
        </>

    )
}