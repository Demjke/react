import React, { createContext, useContext } from "react";

export const ThemeContext = createContext();

const ThemeButton = () => {
    const theme = useContext(ThemeContext);
    return <button style={{ background: theme.background, color: theme.color }}>Theme</button>;
};

export default ThemeButton;
