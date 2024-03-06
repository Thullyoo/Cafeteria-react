import { useState } from 'react';
import './FormNewProduct.scss'
import { TiDelete } from "react-icons/ti";

function FormUpdateProduct (){

    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState(0);
    const [quantidade, setQuantidade] = useState(0);
    const [idd, setIdd] = useState('');

    const urlPut = 'http://localhost:8080/cafe';


    async function atualizandoProduto() {
        try {
            const response = await fetch(urlPut, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id: idd,
                    nome: nome,
                    preco_in_cents: preco,
                    quantidade: quantidade
                })
            });

            if (response.ok) {
                console.log("Produto atualizado com sucesso!");
            } else {
                console.error("Erro ao atualizar produto:", response.status);
            }
        } catch (error) {
            console.error("Erro ao atualizar o produto:", error);
        }
    }
    return(
        <div className="form_container">
            
            <form className='form_newproduct'>
                <span>
                    <h2>Atualizar um produto: </h2>
                    <a href="/admin"><TiDelete className='icon_delete'/>
                </a>           
                </span>
                <span>
                <label htmlFor="idd">Id do produto: </label>
                <input type="text" id='idd' onChange={(e) => setIdd(e.target.value)}/>
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
                <input type="submit" value="Atualizar produto" onClick={(e) =>{ 
                    e.preventDefault();
                    atualizandoProduto();
                } } />
            </form>
        </div>
    )
}

export default FormUpdateProduct;