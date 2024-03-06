import { useEffect, useState } from 'react';
import { CafeType } from '../type/CafeType';
import CardProducts from './CardProducts';
import './Products.scss';


function Products (){

    const [cardCafe, setCardCafe] = useState<CafeType[]>([]);
    
    const urlGet = "http://localhost:8080/cafe";

    useEffect(() => {
        fetch(urlGet)
        .then((response) => { return response.json()})
        .then((data) => {setCardCafe(data) })
        .catch((err) => console.log(err))
    }, [])

    console.log(cardCafe)
    return(
        <div className="products_container">
            {cardCafe.length > 0 && (
                cardCafe.map((cafe: CafeType) => <CardProducts nome={cafe.nome} preco_in_cents={(cafe.preco_in_cents)} quantidade={cafe.preco_in_cents} key={cafe.nome} /> )
            )}
        </div>
        
    )
}

export default Products;