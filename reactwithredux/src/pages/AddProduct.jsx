import { faCirclePlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import IconButton from "./../component/IconButton";

const AddProduct = () => {
    const dispatch = useDispatch();

    const [addedProduct, setAddedProduct] = useState({
        id: 7,
        img: "https://image.pngaaa.com/700/5273700-middle.png",
        name: "",
        description: "",
        price: "",
        stock: "",
        rating: 0,
        available: true,
        category: "",
        characteristics: [],
        reviews: [],
    });
    const [errorMessage, setErrorMessage] = useState(""); // Состояние для сообщения об ошибке

    const addNewCharacteristic = () => {
        setAddedProduct(prevState => ({
            ...prevState,
            characteristics: [...prevState.characteristics, { "": "" }],
        }));
    };

    const handleCharacteristicChange = (index, field, value) => {
        setAddedProduct(prevState => {
            const updatedCharacteristics = [...prevState.characteristics];
            const currentChar = updatedCharacteristics[index];
            const currentKey = Object.keys(currentChar)[0];
            const currentValue = Object.values(currentChar)[0];

            if (field === "key") {
                updatedCharacteristics[index] = { [value]: currentValue };
            } else {
                updatedCharacteristics[index] = { [currentKey]: value };
            }

            return {
                ...prevState,
                characteristics: updatedCharacteristics,
            };
        });
    };

    const deleteCharacteristic = index => {
        setAddedProduct(prevState => ({
            ...prevState,
            characteristics: prevState.characteristics.filter((_, i) => i !== index),
        }));
    };

    const handleAddProduct = e => {
        e.preventDefault();

        // Проверка основных полей
        if (
            !addedProduct.name ||
            !addedProduct.description ||
            !addedProduct.price ||
            !addedProduct.stock ||
            !addedProduct.category
        ) {
            setErrorMessage("Пожалуйста, заполните все обязательные поля");
            return;
        }

        // Проверка характеристик
        if (addedProduct.characteristics.length > 0) {
            const hasEmptyCharacteristics = addedProduct.characteristics.some(char => {
                const key = Object.keys(char)[0];
                const value = Object.values(char)[0];
                return !key || !value;
            });

            if (hasEmptyCharacteristics) {
                setErrorMessage("Пожалуйста, заполните все поля характеристик или удалите пустые характеристики");
                return;
            }
        }

        // Если все проверки пройдены, очищаем сообщение об ошибке и добавляем товар
        setErrorMessage("");
        console.log(addedProduct);
        dispatch({ type: "products/add", payload: addedProduct });
    };

    return (
        <div className="add-product">
            <div className="container">
                <h1 className="title">Add products</h1>
                <div className="add-product__form form">
                    <input
                        type="text"
                        id="name"
                        placeholder="Название товара"
                        value={addedProduct.name}
                        onChange={e => setAddedProduct({ ...addedProduct, name: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Описание товара"
                        id="description"
                        value={addedProduct.description}
                        onChange={e => setAddedProduct({ ...addedProduct, description: e.target.value })}
                    />
                    <input
                        type="text"
                        id="price"
                        placeholder="Цена"
                        value={addedProduct.price}
                        onChange={e => setAddedProduct({ ...addedProduct, price: e.target.value })}
                    />
                    <input
                        type="text"
                        id="stock"
                        placeholder="Количество"
                        value={addedProduct.stock}
                        onChange={e => setAddedProduct({ ...addedProduct, stock: e.target.value })}
                    />
                    <input
                        type="text"
                        id="category"
                        placeholder="Категория"
                        value={addedProduct.category}
                        onChange={e => setAddedProduct({ ...addedProduct, category: e.target.value })}
                    />

                    <div className="form-characteristics">
                        <div className="form-characteristics__title">Добавить характеристику</div>
                        <div className="form-characteristics__box">
                            {addedProduct.characteristics.map((char, index) => (
                                <div key={index} className="form-characteristics__block">
                                    <label>
                                        Название характеристики
                                        <input
                                            type="text"
                                            value={Object.keys(char)[0]}
                                            onChange={e => handleCharacteristicChange(index, "key", e.target.value)}
                                        />
                                    </label>
                                    <label>
                                        Описание характеристики
                                        <input
                                            type="text"
                                            value={Object.values(char)[0]}
                                            onChange={e => handleCharacteristicChange(index, "value", e.target.value)}
                                        />
                                    </label>
                                    <IconButton
                                        icon={faTrashAlt}
                                        className="product-edit form-characteristics__delete"
                                        onClick={() => deleteCharacteristic(index)}
                                    />
                                </div>
                            ))}
                        </div>
                        <IconButton
                            icon={faCirclePlus}
                            className="product-edit form-characteristics__add"
                            onClick={addNewCharacteristic}
                        />
                    </div>

                    {/* Отображение сообщения об ошибке */}
                    {errorMessage && (
                        <div className="error-message" style={{ color: "red", margin: "10px 0" }}>
                            {errorMessage}
                        </div>
                    )}

                    <button type="button" onClick={handleAddProduct}>
                        Добавить товар
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
