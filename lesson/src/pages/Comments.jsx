import { useCallback, useState } from "react";
import Comment from "../components/lessons2/Comment";

const Comments = () => {
    const [comments, setComments] = useState([
        {
            id: 1,
            text: "Это первый комментарий",
            author: "Name1",
            createdAD: new Date().toLocaleDateString() + new Date().toLocaleTimeString(),
        },
        {
            id: 2,
            text: "Это второй комментарий",
            author: "Name2",
            createdAD: new Date().toLocaleDateString() + new Date().toLocaleTimeString(),
        },
        {
            id: 3,
            text: "Это третий комментарий",
            author: "Name3",
            createdAD: new Date().toLocaleDateString() + new Date().toLocaleTimeString(),
        },
    ]);

    const handleDeleteComment = useCallback(id => {
        setComments(prev => prev.filter(comment => comment.id !== id));
    }, []);

    return (
        <div className="comments">
            <h1>Комментарии</h1>
            <div className="comments-wrapper">
                {comments.map(comment => (
                    <Comment key={comment.id} comment={comment} onDelete={handleDeleteComment} />
                ))}
            </div>
        </div>
    );
};

export default Comments;
