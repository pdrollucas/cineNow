import "./erro.css";
import { Link } from "react-router-dom";

function Erro(){
    return(
        <div className="erro">
            <h1>404</h1>
            <h2>Erro: página não encontrada</h2>
            <Link to="/" className="link">Página inicial</Link>
        </div>
    )
}

export default Erro;