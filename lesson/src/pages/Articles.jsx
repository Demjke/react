import React from "react";
import { Route, Routes } from "react-router-dom";
import ArticleDetails from "../components/lessons4/ArticleDetails";
import ArticleList from "../components/lessons4/ArticleList";

const Articles = () => {
    const articles = [
        { id: 1, title: "Статья 1", content: "Содержимое статьи 1" },
        { id: 2, title: "Статья 2", content: "Содержимое статьи 2" },
        { id: 3, title: "Статья 3", content: "Содержимое статьи 3" },
    ];

    return (
        <div>
            <h1>Приложение для просмотра статей</h1>
            <Routes>
                <Route path=":id" element={<ArticleDetails articles={articles} />} />
                <Route path="/" element={<ArticleList articles={articles} />} />
            </Routes>
        </div>
    );
};

export default Articles;
