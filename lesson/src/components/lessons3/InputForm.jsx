import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";

const InputForm = () => {
    const [inputValue, setInputValue] = useState("");
    const [submittedValue, setSubmittedValue] = useState("");

    useEffect(() => {
        // console.log("Changed", inputValue.length);
    }, [inputValue]);

    const handleSubmit = e => {
        e.preventDefault();
        setSubmittedValue(inputValue);
        setInputValue("");
    };

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    label="Your text"
                    variant="outlined"
                    value={inputValue}
                    onInput={e => setInputValue(e.target.value)}
                />
                <Button type="submit" variant="contained">
                    Submit
                </Button>
            </form>
            {submittedValue && <p>Submitted: {submittedValue}</p>}
        </>
    );
};

export default InputForm;
