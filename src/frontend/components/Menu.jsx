import styles from './Menu.module.css'
import './Navbar.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    const [isTransparent, setTransparent] = useState(false);

    //Scroll
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    function handleScroll() {
        const scrollTop = window.pageYOffset;

        if (scrollTop > 0) {
            setTransparent(true);
        } else if (scrollTop === 0) {
            setTransparent(false);
        }
    }

    return (
        <nav className={isTransparent ? "transparent" : "color"}>
            <ul className={`ul ${isTransparent ? "teste" : ""}`}>
                <Link to="/"><li>Página Inicial</li></Link>
                <li>Sobre</li>
                <li>Contato</li>
                <li>Pontos de coleta</li>
                <Link to="/login"><li>Login/Cadastro</li></Link>
            </ul>
        </nav>
    )
}

export default Menu