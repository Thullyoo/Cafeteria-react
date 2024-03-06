import {  useState } from 'react';
import './FormNewProduct.scss'
import { TiDelete } from "react-icons/ti";

function FormNewProduct (){

    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState(0);
    const [quantidade, setQuantidade] = useState(0);
 
    const urlPut = 'http://localhost:8080/cafe';


    async function adicionandoProduto() {
        try {
            const response = await fetch(urlPut, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    nome: nome,
                    preco_in_cents: preco,
                    quantidade: quantidade
                })
            });

            if (response.ok) {
                console.log("Produto adicionado com sucesso!");
            } else {
                console.error("Erro ao adicionar produto:", response.status);
            }
        } catch (error) {
            console.error("Erro ao adicionar produto:", error);
        }
    }
    return(
        <div className="form_container">
            
            <form className='form_newproduct'>
                <span>
                    <h2>Adicionar um novo produto: </h2>
                    <a href="/admin"><TiDelete className='icon_delete'/>
                </a>           
                </span>
                <span>
                <label htmlFor="name">Nome do produto: </label>
                <input type="text" id='name' onChange={(e) => setNome(e.target.value)}/>
                </span>
                <span>
                <label htmlFor="preco">Preço do produto: </label>
                <input type="number" id='preco' onChange={(e) => setPreco(e.target.valueAsNumber)}/>
                </span>
                <span>
                <label htmlFor="quantidade" >Quantidade: </label>
                <input type="number" name="quantidade" id="quantidade" onChange={(e) => setQuantidade(e.target.valueAsNumber)}/>
                </span>
                <input type="submit" value="Adicionar produto" onClick={(e) =>{ 
                    e.preventDefault();
                    adicionandoProduto();
                } } />
            </form>
        </div>
    )
}

export default FormNewProduct;