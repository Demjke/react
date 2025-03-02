import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                    <div className="header-logo">
                        <img
                            src="https://img.freepik.com/premium-vector/free-vector-beautiful-flying-hummingbird-design-element-banners-posters-leaflets-brochur_1009653-1.jpg?semt=ais_hybrid"
                            alt="Logo"
                        />
                    </div>
                    <nav className="header-nav nav">
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>
                        <NavLink className="nav-link" to="/products">
                            Products
                        </NavLink>
                        <NavLink className="nav-link" to="/add-product">
                            Add product
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
