import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { edit } from "../redux/slices/productsSlice";
import ProductItem from "./ProductItem";

const ProductsList = () => {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const [editingId, setEditingId] = useState(null);
    const [editedProduct, setEditedProduct] = useState({});

    const handleEdit = product => {
        setEditingId(product.id);
        setEditedProduct({ ...product });
    };

    const handleChange = (e, key) => {
        return setEditedProduct(prevState => {
            return { ...prevState, [key]: e.target.value };
        });
    };

    const handleCharacteristicChange = (e, key, index) => {
        setEditedProduct(prevState => {
            const updatedCharacteristics = [...prevState.characteristics];
            updatedCharacteristics[index] = {
                ...updatedCharacteristics[index],
                [key]: e.target.value,
            };

            return {
                ...prevState,
                characteristics: updatedCharacteristics,
            };
        });
    };

    const handleSave = () => {
        dispatch(edit({ id: editingId, updatedProduct: editedProduct }));
        setEditingId(null);
    };

    return (
        <div className="products-wrapper">
            {products.length ? (
                products.map(product => (
                    <ProductItem
                        key={product.id}
                        product={product}
                        isEditing={editingId === product.id}
                        editedProduct={editedProduct}
                        handleEdit={handleEdit}
                        handleSave={handleSave}
                        handleChange={handleChange}
                        handleCharacteristicChange={handleCharacteristicChange}
                    />
                ))
            ) : (
                <div>Товаров нет</div>
            )}
        </div>
    );
};

export default ProductsList;
