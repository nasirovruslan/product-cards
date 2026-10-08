import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      image: "https://picsum.photos/id/1/300/200",
      name: "Laptop",
      price: 999,
      category: "Electronics",
    },
    {
      id: 2,
      image: "https://picsum.photos/id/20/300/200",
      name: "Smartphone",
      price: 699,
      category: "Electronics",
    },
    {
      id: 3,
      image: "https://picsum.photos/id/30/300/200",
      name: "Headphones",
      price: 149,
      category: "Accessories",
    },
    {
      id: 4,
      image: "https://picsum.photos/id/40/300/200",
      name: "Smart Watch",
      price: 249,
      category: "Accessories",
    },
    {
      id: 5,
      image: "https://picsum.photos/id/60/300/200",
      name: "Camera",
      price: 799,
      category: "Electronics",
    },
    {
      id: 6,
      image: "https://picsum.photos/id/96/300/200",
      name: "Backpack",
      price: 89,
      category: "Fashion",
    },
  ];

  return (
    <div className="app">
  <h1>Our Products</h1>

  <div className="products-grid">
    {products.map((product) => (
      <ProductCard
        key={product.id}
        image={product.image}
        name={product.name}
        price={product.price}
        category={product.category}
      />
    ))}
  </div>
</div>
  );
}

export default App;