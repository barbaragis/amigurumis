import { useNavigate } from "react-router-dom"
import "../Item/Item.css"

export const Item = ({
    id,
    img,
    category,
    title

}) => {

  const navigate= useNavigate();
    return(
      <div className="item"  onClick={() => navigate(`/item/${id}`)}>
          <img src={img} class="producto__imagen" alt="..."/>
          <h5 className="producto__titulo">{title}</h5>
          <p className="producto__categoria">{category}</p>
          <button  className="producto__boton">Ver detalle</button>
        </div>

    )
}