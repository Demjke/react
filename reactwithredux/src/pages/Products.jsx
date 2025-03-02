import ProductsList from "../component/ProductsList";

const Products = () => {
    return (
        <div className="products">
            <div className="container">
                <h1 className="title">Products</h1>
                <ProductsList />
            </div>
        </div>
    );
};

export default Products;
