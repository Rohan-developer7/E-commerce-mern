import products from "../data/products";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div className="mt-6">
      <h1 className="text-2xl font-semibold mb-6">Latest Products</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
