import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="nav header-nav">
                    <NavLink to="/" className="header-nav__link">
                        Главная
                    </NavLink>
                    <NavLink to="/comments" className="header-nav__link">
                        Коментарии
                    </NavLink>
                    <NavLink to="/counters" className="header-nav__link">
                        Счетчик
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;
