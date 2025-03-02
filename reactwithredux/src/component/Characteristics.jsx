import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import IconButton from "./IconButton";
import InputField from "./InputField";

const Characteristics = ({ characteristics, isEditing, onChange }) => (
    <div className="product-characteristics characteristics">
        <div className="product-subtitle">
            {isEditing ? (
                "Редактировать характеристики:"
            ) : (
                <div className="subtitle-with-icon">
                    Характеристики:
                    <IconButton icon={faCaretDown} className="product-arrow" />
                </div>
            )}
        </div>
        <div className="characteristics-content">
            <div className="characteristics-list">
                {characteristics.map((item, index) =>
                    Object.entries(item).map(([key, value]) => (
                        <div className="characteristics-item" key={index}>
                            <span className="characteristics-name">{key}:</span>
                            {isEditing ? (
                                <InputField value={value} onChange={e => onChange(e, key, index)} />
                            ) : (
                                <span>{value}</span>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    </div>
);

export default Characteristics;
