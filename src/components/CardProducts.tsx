import { MdShoppingCart } from "react-icons/md";
import './CardProducts.scss';
import capuccino from '../assets/cafe1.png';
import { CafeType } from "../type/CafeType";

function CardProducts (cafe: CafeType){
    return(
        <div className="card_container">
            <span className="product_description">
            <img src={capuccino} alt="capuccino" />
            <h2>{cafe.nome}</h2>
            </span>
            <span className="product_price">
            <h2>R$ {(cafe.preco_in_cents / 100)}</h2>
            <h3 className="ball_icon"><MdShoppingCart className="icon_buy"/></h3>
            </span>
        </div>
    )
}

export default CardProducts;