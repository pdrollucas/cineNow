import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";

import api from "../../services/api";
import "../Filme/filme.css"

function Filme(){

    const { id } = useParams();
    const [ filme, setFilme ] = useState({});
    const [ loading, setLoading ] = useState(true)
    const navigate = useNavigate();

    useEffect(()=>{
        async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "11c0c026c253fb02946d9be5b143d518",
                    language: "pt-BR",
                }
            })
            .then((response) => {
                setFilme(response.data),
                setLoading(false)
            })
            .catch(() => {
                navigate("/", { replace: true });
                return;
            })
        }

        loadFilme();

        return() => {
            console.log("Componente foi desmontado")
        }
    }, [navigate, id])

    function salvarFilme(){
        const minhaLista = localStorage.getItem("@cineNow");
        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)

        if(hasFilme){
            toast.warning("Esse filme já está na sua lista")
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@cineNow", JSON.stringify(filmesSalvos))
        toast.success("Filme salvo com sucesso :)")
    }

    if(loading){
        return(
            <div className="filme-info">
                <h1>Carregando detalhes do filme...</h1>
            </div>
        )
    }

    return(
        <div className="filme-info">
            <h1>{filme.title}</h1>
            
            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}></img>
            <h3>Sinopse:</h3>
            <span>{filme.overview}</span>
            <p>Avaliação: {filme.vote_average} / 10 </p>

            <div className="area-buttons">
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} trailer`}>Trailer</a>
                </button>
            </div>
        </div>
    )
}

export default Filme;