import Header from "../components/Header";
import { FaCoffee } from "react-icons/fa";

import './Home.scss'

function Home(){
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main className="home_container">
                <div className="title_home">
                    <h2>Vai um café?</h2>
                    <button><a href="/cafe">Experimentar nossos cafés <FaCoffee/></a></button>
                </div>
                <div className="img_home">
                    
                </div>
            </main>
        </div>
    );
   }
   
   export default Home;