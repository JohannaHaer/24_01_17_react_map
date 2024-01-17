import ProductItems from "../productItems/ProductItems";

const ProductList = ({products}) => {
    return ( 
        <>
            <h1>Our Specials</h1>
            {products.map((product, index) => {
                return (
                    <section key = {index}>
                        <ProductItems
                        img = {product.img}
                        alt = {product.alt}
                        title = {product.title}
                        price = {product.price}
                        />
                    </section>
                )
            })}
        </>
    );
}

export default ProductList;