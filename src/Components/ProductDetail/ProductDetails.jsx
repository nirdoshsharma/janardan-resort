import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    alert("Item added to cart!");
  };

  if (loading) return <div className="text-center p-8">Loading...</div>;
  if (!product) return <div className="text-center p-8">Product not found</div>;

  return (
    <div className="container mx-auto p-10 my-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-center justify-center p-4 border">
            <img
              src={product.image}
              alt={product.title}
              className="h-64 object-contain"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-gray-500 text-sm">{product.category}</p>

            <div className="text-3xl font-bold text-blue-600">
              ${product.price}
            </div>

            <div className="border-t pt-4">
              <p className="text-gray-600">{product.description}</p>
              <Link
                to="/"
                className="mb-4 inline-block text-blue-600 hover:underline"
              >
                ← Back to Products
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <label>Quantity:</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, e.target.value))}
                className="w-16 px-2 py-1 border rounded"
                min="1"
              />
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={handleAddToCart}
                className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
              >
                Add to Cart
              </button>
              <button className="bg-green-600 text-white py-3 rounded hover:bg-green-700">
                Buy Now
              </button>
            </div>

            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span>🚚 Free Shipping</span>
                <span>|</span>
                <span>🔙 30-Day Returns</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⭐ 4.8/5 Ratings</span>
                <span>|</span>
                <span>💬 250+ Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
