import { FormEvent, useState } from 'react';
import './Menu.scss';
import FormNewProduct from './FormNewProduct';

function Menu(){

    const [ visibleForm, setVisibleForm] = useState(false);

    function Slaainda(e:FormEvent){
            e.preventDefault();
    }

    return (
        <div className="menu_container">
        <form onSubmit={Slaainda} className='menu__options'>  
            <div className="options__value">
                <span className='options__title'><h2>Filtros: </h2></span>
                    <h2>Valor:</h2>
                    <span className='options__filter_value'>
                        <input type="number"/>
                        <p>até</p>
                        <input type="number"/>
                    </span>
                </div>
                <div className='options__select'>
                    <h2>Filtrar por:</h2>
                    <span>
                        <input type="checkbox" name="cold" id="cold" />
                        <label htmlFor="">Gelado</label>
                    </span>
                    
                    <span>
                        <input type="checkbox" name="hot" id="hot" />
                        <label htmlFor="">Quente</label>
                    </span>

                    <span>
                        <input type="checkbox" name="amargo" id="amargo" />
                        <label htmlFor="">Amargo</label>
                    </span>

                    <span>
                        <input type="checkbox" name="sugar" id="sugar" />
                        <label htmlFor="">Doce</label>
                    </span>
                </div>
                <div className="options_search">
                      <input type="submit" value="Filtrar" />
                      <button>Remover filtro</button>
                </div> 
                <div>
                    <button onClick={(e) => {setVisibleForm(true)}}>Adicionar novo produto</button>
                    {visibleForm && (
                        <FormNewProduct/>
                    )}
                </div>  
           </form>
        </div>
    );
   }
   
   export default Menu;