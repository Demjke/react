import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../redux/themeSlice";

const Theme = () => {
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();

    return <button onClick={() => dispatch(toggle())}>{theme ? "Светлая" : "Темная"}</button>;
};

export default Theme;
