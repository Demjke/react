import { faCartShopping, faHeart, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { remove } from "../redux/slices/productsSlice";
import IconButton from "./IconButton";
import ProductEdit from "./ProductEdit";
import ProductView from "./ProductView";
import { useDispatch } from "react-redux";

const ProductItem = ({
    product,
    isEditing,
    editedProduct,
    handleEdit,
    handleSave,
    handleChange,
    handleCharacteristicChange,
}) => {
    const dispatch = useDispatch();
    return (
        <div
            className={`product${!product.available ? " product-none" : ""}${isEditing ? " product-editor" : ""}`}
            key={product.id}
        >
            <div className="product-img">
                <IconButton icon={faPen} onClick={() => handleEdit(product)} className="product-edit product-btn" />
                <IconButton icon={faHeart} className="product-like product-btn" />
                <IconButton
                    icon={faTrash}
                    onClick={() => dispatch(remove(product.id))}
                    className="product-remove product-btn"
                />
                <IconButton icon={faCartShopping} className="product-cart product-btn" />
                <img src={product.img} alt={`Product-${product.id}`} />
            </div>

            <div className="product-content">
                {isEditing ? (
                    <ProductEdit
                        editedProduct={editedProduct}
                        handleSave={handleSave}
                        handleChange={handleChange}
                        handleCharacteristicChange={handleCharacteristicChange}
                    />
                ) : (
                    <ProductView product={product} handleEdit={handleEdit} dispatch={dispatch} />
                )}
            </div>
        </div>
    );
};

export default ProductItem;
