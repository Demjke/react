const Comment = ({ comment: { id, text, author, createdAD }, onDelete }) => {
    return (
        <div className="comment">
            <div className="comment-info">
                <div className="comment-num">{id}</div>
                <div className="comment-date">{createdAD}</div>
            </div>
            <div className="comment-text">{text}</div>
            <div className="comment-author">{author}</div>
            <button type="button" className="comment-remove" onClick={() => onDelete(id)}>
                delete
            </button>
        </div>
    );
};

export default Comment;
