//import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import style from "./style.modules.scss";

export default function Header(props) {
    return (
        <header className="header">
            <nav className="header__nav">
                <li className="header__nav__link header__nav__logo">
                    <img src={logo} alt="logo" className="logo" />
                    Memory
                </li>
                <li className="header__nav__link">
                    Words
                </li>
                <li className="header__nav__link">
                    Cards
                </li>
                <li className="header__nav__link">
                    Memory check
                </li>
            </nav>
        </header>
    );
}