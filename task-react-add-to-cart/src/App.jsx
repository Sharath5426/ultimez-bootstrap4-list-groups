import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const products = [
  {
    id: 1,
    name: "Men Solid Orange",
    price: 499,
    image: "https://ultimez.com/tasks/assets/images/image1.jpeg",
  },
  {
    id: 2,
    name: "Men Graphic Print",
    price: 451,
    image: "https://ultimez.com/tasks/assets/images/image2.jpeg",
  },
  {
    id: 3,
    name: "Men Graphic Print",
    price: 599,
    image: "https://ultimez.com/tasks/assets/images/image3.jpeg",
  },
  {
    id: 4,
    name: "Men Striped Polo",
    price: 479,
    image: "https://ultimez.com/tasks/assets/images/image4.jpeg",
  },
  {
    id: 5,
    name: "Men Striped Black",
    price: 349,
    image: "https://ultimez.com/tasks/assets/images/image5.jpeg",
  },
  {
    id: 6,
    name: "Men Typography",
    price: 600,
    image: "https://ultimez.com/tasks/assets/images/image6.jpeg",
  },
  {
    id: 7,
    name: "Men Printed Hooded",
    price: 334,
    image: "https://ultimez.com/tasks/assets/images/image7.jpeg",
  },
  {
    id: 8,
    name: "Embroidered Red Shirt",
    price: 453,
    image: "https://ultimez.com/tasks/assets/images/image8.jpeg",
  },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId)
    );
  };

  const getSubtotal = (item) => {
    return item.price * item.quantity;
  };

  const grandTotal = cart.reduce(
    (total, item) => total + getSubtotal(item),
    0
  );

  return (
    <div className="container py-4">
      <div className="bg-secondary text-white p-4 rounded mb-4">
        <h2>Add To Cart Task</h2>

        <p>
          Display products, add products to cart, remove products from cart,
          update quantities and calculate the grand total without page
          refresh.
        </p>
      </div>

      <h2 className="mb-4">Final Output Result</h2>

      <div className="row">
        {/* Products List */}
        <div className="col-lg-7 mb-4">
          <h3>Products List</h3>

          <div className="table-responsive">
            <table className="table table-bordered align-middle">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{
                          width: "55px",
                          height: "65px",
                          objectFit: "cover",
                        }}
                      />
                    </td>

                    <td>{product.name}</td>

                    <td>Rs. {product.price}</td>

                    <td>
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => addToCart(product)}
                      >
                        Add To Cart
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Shopping Cart */}
        <div className="col-lg-5">
          <h3>Shopping Cart</h3>

          {cart.length === 0 ? (
            <div className="border rounded p-4 text-center">
              <h5>Your shopping cart is empty.</h5>
            </div>
          ) : (
            <>
              <div className="table-responsive">
                <table className="table table-bordered align-middle">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Subtotal</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <img
                            src={item.image}
                            alt={item.name}
                            style={{
                              width: "45px",
                              height: "55px",
                              objectFit: "cover",
                            }}
                          />
                        </td>

                        <td>{item.name}</td>

                        <td>Rs. {item.price}</td>

                        <td>{item.quantity}</td>

                        <td>Rs. {getSubtotal(item)}</td>

                        <td>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="text-end border-top pt-3">
                <h4>Grand Total: Rs. {grandTotal}</h4>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;