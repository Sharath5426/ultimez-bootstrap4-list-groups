export async function getServerSideProps() {
  const response = await fetch("https://fakestoreapi.com/products");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const products = await response.json();

  return {
    props: {
      products,
    },
  };
}

export default function Home({ products }) {
  return (
    <main className="container">
      <h1>Products List</h1>

      <div className="products">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />

            <div className="product-info">
              <h2>{product.title}</h2>

              <p className="category">{product.category}</p>

              <p className="description">{product.description}</p>

              <div className="bottom">
                <strong>${product.price}</strong>
                <button>Add to Cart</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}