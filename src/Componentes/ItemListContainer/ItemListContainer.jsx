import { Item } from "../Item/Item"
import "../ItemListContainer/ItemListContainer.css"


export const ItemListContainer = ({products}) =>{

    if (!products) {
        return(
            <div>no hay productos</div>
        )
    }

    return (
        <div className="item-list">
        {
            products.map((product) =>(
        <Item key={product.id}
        id={product.id}
        img={product.img}
        title={product.title}
        category={product.category}  />
            ))
        }
        
        </div>
    )
}