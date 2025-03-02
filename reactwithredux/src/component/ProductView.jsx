import Characteristics from "./Characteristics";

const ProductView = ({ product }) => (
    <>
        <div className="product-name">{product.name}</div>
        <div className="product-descriptions">{product.descriptions}</div>
        <div className="product-category">
            Категория: <span>{product.category}</span>
        </div>
        <div className="product-price">
            {product.price} <span>$</span>
        </div>
        <div className="product-stock">
            Количество: <span>{product.stock}</span>
        </div>
        <div className="product-rating">
            Рейтинг: <span>{product.rating}</span>
        </div>
        <Characteristics characteristics={product.characteristics} isEditing={false} />
        <div className="product-reviews reviews">
            <div className="product-subtitle">Отзывы:</div>
            <div className="reviews-content">
                <div className="reviews-list">
                    {product.reviews.map(({ id, name, comment, rating }) => (
                        <div className="reviews-item" key={id}>
                            <div className="reviews-author">{name}</div>
                            <div className="reviews-comment">{comment}</div>
                            <div className="reviews-rating">
                                Рейтинг: <span>{rating}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
);

export default ProductView;
