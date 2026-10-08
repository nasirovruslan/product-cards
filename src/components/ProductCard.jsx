function ProductCard({ image, name, price, category }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />

      <div className="product-info">
        <h2>{name}</h2>

        <p className="product-category">
          Category: {category}
        </p>

        <p className="product-price">
          ${price}
        </p>

        <button className="add-to-cart">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;