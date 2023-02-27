import { useEffect, useState } from "react";
import "../Favoritos/favoritos.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Favoritos(){

    const[filmes, setFilmes] = useState([])

    useEffect(() => {
        const minhaLista = localStorage.getItem("@cineNow");
        setFilmes(JSON.parse(minhaLista)|| [])
    }, [])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter((filme) => {
            return(filme.id !== id)
        })

        setFilmes(filtroFilmes);
        localStorage.setItem("@cineNow", JSON.stringify(filtroFilmes))
        toast.success("Filme excluído com sucesso")
    }

    return(
        <div className="meus-filmes">
            <h1>Meus filmes</h1>

            {filmes.length === 0 && <span> Você não tem nenhum filme salvo :( </span>}

            <ul>
                {filmes.map((filme) => {
                    return(
                        <li key={filme.id}>
                            <p>{filme.title}</p>
                            <div>
                                <Link to={`/filme/${filme.id}`} className="link-detalhes">Ver detalhes</Link>
                                <button onClick={() => excluirFilme(filme.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;