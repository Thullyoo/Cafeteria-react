import { useEffect, useState } from "react";
import Header from "../components/Header";
import { CafeType } from "../type/CafeType";
import nopic from '../assets/noprofile-200.png';
import FormNewProduct from '../components/form/FormNewProduct';
import FormDelete from '../components/form/FormDelete';
import './Admin.scss';
import FormUpdateProduct from "../components/form/FormUpdateProduct";

function Admin(){

    const [cafe, setCafe] = useState<CafeType[]>([]);
    const [visibleFormNew, setVisibleFormNew] = useState(false);
    const [visibleFormUp, setVisibleFormUp] = useState(false);
    const [visibleFormDelete, setVisibleFormDelete] = useState(false);


    const urlGet = "http://localhost:8080/cafe";

    useEffect(() => {
        fetch(urlGet)
        .then((response) => { return response.json()})
        .then((data) => {setCafe(data) })
        .catch((err) => console.log(err))
    }, [])


    return (
        <div>
            <header>
                <Header/>
            </header>
            <main className="main_container">
                <div className="main__admin">
                    <div className="admin__info">
                        <img src={nopic} alt="" />
                        <div>
                        <h2>Nome: Leandro</h2>
                        <h2>Idade: 33</h2>
                        <h2>Cargo: Administrador</h2>
                        </div>
                    </div>
                    <div className="products">
                    <div className="btn">
                    <button onClick={(e) => {setVisibleFormNew(true)}}>Adicionar novo produto</button>
                    {visibleFormNew && (
                        <FormNewProduct/>
                    )}
                    <button onClick={(e) =>{setVisibleFormUp(true)}}>Atualizar um produto</button>
                    {visibleFormUp &&(
                        <FormUpdateProduct/>
                    )}
                    <button onClick={(e) =>{setVisibleFormDelete(true)}}>Deletar um produto</button>
                    {visibleFormDelete &&(
                        <FormDelete/>
                    )}
                    </div>  
                        Nome do produto | Preço | Estoque | ID
                        {cafe.length > 0  &&  (
                            cafe.map((cafe: CafeType) =><span key={cafe.nome}>{cafe.nome} | R${cafe.preco_in_cents/100} | {cafe.quantidade} | {cafe.id}</span>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
   }
   
   export default Admin;