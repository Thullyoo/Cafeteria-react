import Header from "../components/Header";
import Menu from "../components/Menu";
import Products from "../components/Products";
import './Cafe.scss';

function Cafe(){
    return(
        <div>
            <header>
                <Header/>
            </header>
            <main>
                <Menu/>
                <Products/>
            </main>
        </div>
    )
}

export default Cafe;