import { useState } from 'react';
import './FormNewProduct.scss'
import { TiDelete } from "react-icons/ti";

function FormUpdateProduct (){

    const [idd, setIdd] = useState('');

    const urlPut = 'http://localhost:8080/cafe';


    async function deletandoProduto() {
        try {
            const response = await fetch(urlPut, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id: idd
                })
            });

            if (response.ok) {
                console.log("Produto deletado com sucesso!");
            } else {
                console.error("Erro ao deletar produto:", response.status);
            }
        } catch (error) {
            console.error("Erro ao deletar o produto:", error);
        }
    }
    return(
        <div className="form_container">
            
            <form className='form_newproduct'>
                <span>
                    <h2>Deletar o produto: </h2>
                    <a href="/admin"><TiDelete className='icon_delete'/>
                </a>           
                </span>
                <span>
                <label htmlFor="idd">Id do produto: </label>
                <input type="text" id='idd' onChange={(e) => setIdd(e.target.value)}/>
                </span>
                <input type="submit" value="Deletar produto" onClick={(e) =>{ 
                    e.preventDefault();
                    deletandoProduto();
                } } />
            </form>
        </div>
    )
}

export default FormUpdateProduct;