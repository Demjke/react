import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import Characteristics from "./Characteristics";
import IconButton from "./IconButton";
import InputField from "./InputField";

const ProductEdit = ({ editedProduct, handleSave, handleChange, handleCharacteristicChange }) => (
    <>
        <InputField value={editedProduct.name} onChange={e => handleChange(e, "name")} />
        <InputField value={editedProduct.descriptions} onChange={e => handleChange(e, "descriptions")} />
        <InputField value={editedProduct.price} onChange={e => handleChange(e, "price")} type="number" />
        <InputField value={editedProduct.stock} onChange={e => handleChange(e, "stock")} type="number" />
        <InputField value={editedProduct.rating} onChange={e => handleChange(e, "rating")} type="number" />
        <Characteristics
            characteristics={editedProduct.characteristics}
            isEditing={true}
            onChange={handleCharacteristicChange}
        />
        <IconButton icon={faSquareCheck} onClick={handleSave} className="product-save product-btn" />
    </>
);

export default ProductEdit;
