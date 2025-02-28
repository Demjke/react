import TextField from "@mui/material/TextField";
import React, { useState } from "react";

const TemperatureConverter = () => {
    const [celsiy, setCelsiy] = useState("");
    const [farengate, setFarengate] = useState("");

    const celsiyToFarengate = ({ target }) => {
        const celsiusValue = target.value;
        if (celsiusValue === "") {
            setCelsiy(target.value);
            setFarengate("");
        } else {
            const fahrenheitValue = (celsiusValue * 9) / 5 + 32;
            setCelsiy(celsiusValue);
            setFarengate(fahrenheitValue);
        }
    };

    const farengateToCelsiy = ({ target }) => {
        const fahrenheValue = target.value;
        if (fahrenheValue === "") {
            setFarengate(target.value);
            setCelsiy("");
        } else {
            const celsiusValue = ((fahrenheValue - 32) * 5) / 9;
            setFarengate(fahrenheValue);
            setCelsiy(celsiusValue);
        }
    };

    return (
        <div>
            <div className="converter">
                <TextField
                    id="standard-basic"
                    label="Celsius (°C)"
                    type="number"
                    value={celsiy}
                    variant="standard"
                    onChange={celsiyToFarengate}
                />
                <TextField
                    id="standard-basic"
                    label="Fahrenheit (°F)"
                    value={farengate}
                    variant="standard"
                    onChange={farengateToCelsiy}
                />
            </div>
        </div>
    );
};

export default TemperatureConverter;
