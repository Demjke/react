import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

function ToDoList() {
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);

    const addItem = () => {
        setList([...list, input]);
        setInput("");
    };

    const deleteItem = id => {
        setList(list.filter((_, item) => item !== id));
    };

    return (
        <div>
            <div className="todo">
                <List>
                    {list.map((item, id) => {
                        return (
                            <ListItem key={id}>
                                <ListItemIcon onClick={() => deleteItem(id)}>
                                    <IconButton aria-label="delete" size="large">
                                        <DeleteIcon fontSize="large" />
                                    </IconButton>
                                </ListItemIcon>
                                <ListItemText primary={item} />
                            </ListItem>
                        );
                    })}
                </List>
                <TextField
                    id="filled-basic"
                    label="text"
                    value={input}
                    variant="filled"
                    size="small"
                    onChange={({ target }) => setInput(target.value)}
                />
                <Button variant="contained" size="large" onClick={addItem}>
                    add
                </Button>
            </div>
        </div>
    );
}

export default ToDoList;
