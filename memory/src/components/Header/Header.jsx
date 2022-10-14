import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import style from "./style.modules.scss";

export default function Header(props) {
    return (
        <header className="header">
            <nav className="header__nav">
                <li className="header__nav__link header__nav__logo">
                    <Link to="/main"><img src={logo} alt="logo" className="logo" /></Link>
                    <Link className="head-title" to="/main">Memory</Link>
                </li>
                <li className="header__nav__link">
                    <Link className="header__nav__link" to="/main">Words</Link>
                </li>
                <li className="header__nav__link">
                    <Link className="header__nav__link" to="/cards">Cards</Link>
                </li>
                <li className="header__nav__link">
                    <Link className="header__nav__link" to="/game">Game</Link>
                </li>
            </nav>
        </header>
    );
}