import Button from "@mui/material/Button";
import { useState } from "react";

const Visible = ({ text }) => {
    const [block, setBlock] = useState(true);
    return (
        <>
            <Button type="submit" variant="contained" onClick={() => setBlock(!block)}>
                Show and hide
            </Button>
            {block && <p>{text}</p>}
        </>
    );
};

export default Visible;
