import TextField from "@mui/material/TextField";
import React, { useState } from "react";

const TextInput = () => {
    const [text, setText] = useState("");

    const handleChangeText = ({ target }) => {
        setText(target.value);
    };
    return (
        <>
            <TextField id="outlined-basic" label="Your name" variant="outlined" onChange={handleChangeText} />
            <p>{text}</p>
        </>
    );
};

export default TextInput;
