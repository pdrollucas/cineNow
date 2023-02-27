import { useEffect, useState } from "react";
import api from "../../services/api";
import {Link} from "react-router-dom";
import "../Home/home.css";


function Home(){

    const[filmes, setFilmes] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "11c0c026c253fb02946d9be5b143d518",
                    language: "pt-BR",
                    page: 1
                }
            }) 
            
            setFilmes(response.data.results.slice(0, 10));
            setLoading(false);
        }

        loadFilmes();

    }, [])

    if(loading){
        return(
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <h3>{filme.title}</h3>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}></img>
                            <Link to={`/filme/${filme.id}`} className="filmes_link"> Saiba mais </Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;