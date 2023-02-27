import './header.css';
import { Link } from "react-router-dom";

function Header(){
    return(
        <header>
            <Link to="/" className='logo'>Cine Now</Link>
            <Link to="/favoritos" className='favoritos'>Meus filmes</Link>
        </header>
    )
}

export default Header;