const ProductItems = ({img, title, price, alt}) => {
    return (
        <>
            <div>
                <img src={img} alt={alt} />
                <h2>{title}</h2>
                <h3>{price}</h3>
            </div>
        </>
    );
}

export default ProductItems;