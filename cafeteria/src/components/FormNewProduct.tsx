import './FormNewProduct.scss'
import { TiDelete } from "react-icons/ti";

function FormNewProduct (){
    return(
        <div className="form_container">
            
            <form className='form_newproduct'>
                <span>
                    <h2>Adicionar um novo produto: </h2>
                    <a href="/cafe"><TiDelete className='icon_delete'/>
 </a>           </span>
                <span>
                <label htmlFor="name">Nome do produto: </label>
                <input type="text" id='name'/>
                </span>
                <span>
                <label htmlFor="preco">Preço do produto: </label>
                <input type="text" id='preco'/>
                </span>
                <span>
                <label htmlFor="quantidade" >Quantidade: </label>
                <input type="number" name="quantidade" id="quantidade" />
                </span>
                <input type="submit" value="Adicionar produto" />
            </form>
        </div>
    )
}

export default FormNewProduct;