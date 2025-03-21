import { Button, ButtonGroup } from "@mui/material";
import { NavLink } from "react-router-dom";

const routes = {
    Главная: "/",
    Комментарии: "/comments",
    Счетчик: "/counters",
    Уроки: "/lessons",
    ДЗ: "/homeworks",
    Статьи: "/articles",
    Товары: "/products",
    Тема: "/theme",
};

const Header = () => (
    <header className="header">
        <div className="container">
            <ButtonGroup variant="contained">
                {Object.entries(routes).map(([label, path]) => (
                    <Button key={path} component={NavLink} to={path}>
                        {label}
                    </Button>
                ))}
            </ButtonGroup>
        </div>
    </header>
);

export default Header;
