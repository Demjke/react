import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const NotesContext = createContext();

const useTheme = () => useContext(ThemeContext);
const useNotes = () => useContext(NotesContext);

const NotesList = () => {
    const { notes } = useNotes();

    return (
        <ul>
            {notes.map((note, index) => (
                <li key={index}>{note}</li>
            ))}
        </ul>
    );
};

const NoteInput = () => {
    const [inputValue, setInputValue] = useState("");
    const { addNote } = useNotes();

    const handleInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const handleAddNote = () => {
        addNote(inputValue);
        setInputValue("");
    };

    return (
        <div>
            <input value={inputValue} onChange={handleInputChange} />
            <button onClick={handleAddNote}>Добавить</button>
        </div>
    );
};

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return <button onClick={toggleTheme}>Нажми чтобы переключить на {theme === "light" ? "темную" : "светлую"}</button>;
};

const Theme = () => {
    const [theme, setTheme] = useState("light");
    const [notes, setNotes] = useState(["Элемент списка 1", "Элемент списка 2"]);

    const toggleTheme = () => {
        setTheme(currentTheme => (currentTheme === "light" ? "dark" : "light"));
    };

    const addNote = note => {
        setNotes(prevNotes => [...prevNotes, note]);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <NotesContext.Provider value={{ notes, addNote }}>
                <div
                    className="content"
                    style={{
                        color: theme === "light" ? "black" : "white",
                        background: theme === "light" ? "white" : "black",
                    }}
                >
                    <h1>Список</h1>
                    <ThemeToggle />
                    <NotesList />
                    <NoteInput />
                </div>
            </NotesContext.Provider>
        </ThemeContext.Provider>
    );
};

export default Theme;
