import axios from "axios";

// BASE da URL: https://api.themoviedb.org/3/ 
// URL da API: https://api.themoviedb.org/3/movie/now_playing?api_key=11c0c026c253fb02946d9be5b143d518&language=pt-br&page=1

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

export default api;