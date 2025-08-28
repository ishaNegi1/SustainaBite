import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { fertilizer1 } from "../assets/pictures";
import PageSeo from "../components/PageSeo";

const Fertilizer = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [orderData, setOrderData] = useState({
    address: "",
    phone: "",
    landmark: "",
  });

  const closeModal = () => {
    setSelectedProduct(null);
    setOrderData({ address: "", phone: "" });
  };

  const handleOrder = (e) => {
    e.preventDefault();
    const orderDetails = {
      productId: selectedProduct._id,
      address: orderData.address,
      phone: orderData.phone,
      landmark: orderData.landmark,
    };
    console.log("Order Placed:", orderDetails);
    closeModal();
  };

  return (
    <>
      <PageSeo
        title="Fertilizer Purchase"
        description="Buy eco-friendly compost fertilizer made from collected organic waste."
        keywords="fertilizer, organic compost, eco-friendly farming, SustainaBite"
      />
      <div
        className="text-center py-20 px-4 bg-[#133221] text-white relative"
        style={{
          backgroundImage: `url(${fertilizer1})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black sm:opacity-60 opacity-40"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold">Fertilizer Purchase</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto font-medium">
            Closing the loop - turning kitchen scraps into green gold. Join us
            in transforming everyday waste into a cleaner, greener tomorrow.
          </p>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 my-20 px-10 ">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-[#FFFFFF] text-[#133221] dark:bg-[#21583a] dark:text-white rounded-lg shadow-xl shadow-[rgba(0,0,0,0.5)] dark:shadow-[rgba(78,77,77,0.5)] transition-transform duration-300 hover:scale-110 overflow-hidden p-3 border-2 border-[#85CA81]"
              onClick={() => setSelectedProduct(product)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <h3 className="text-xl font-semibold text-[#133221] dark:text-white">
                {product.name}
              </h3>
              <div className=" flex justify-between mt-2">
                <p className=" text-[#133221] dark:text-white font-medium">
                  ₹{product.price}/Kg
                </p>
                <p
                  className={`${
                    product.stock === "In Stock"
                      ? " text-green-600"
                      : " text-red-600"
                  } font-medium`}
                >
                  {product.stock}
                </p>
              </div>
              <div className=" flex my-3">
                <div className=" flex">
                  <FontAwesomeIcon icon={faThumbsUp} className=" w-5 h-5" />
                  <p className=" mx-1">{product.like}</p>
                </div>
                <div className=" flex mx-5">
                  <FontAwesomeIcon icon={faThumbsDown} className=" w-5 h-5" />
                  <p className=" mx-1">{product.dislike}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4">
            <div className="bg-white dark:bg-[#133221] text-[#133221] dark:text-white max-w-lg w-full max-h-[90vh] overflow-y-auto rounded-lg py-6 px-10 relative">
              <button
                onClick={closeModal}
                className=" absolute top-3 right-5 text-[#fa453c] font-extrabold text-xl mb-7"
              >
                ✕
              </button>

              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-48 object-cover rounded-lg mb-4 mt-7"
              />
              <h2 className="text-2xl font-semibold dark:text-white">
                {selectedProduct.name}
              </h2>
              <p className=" dark:text-gray-300 mt-2 mb-4">
                {selectedProduct.description}
              </p>
              <div className=" flex justify-between items-center">
                <p className="font-bold text-lg ">
                  ₹{selectedProduct.price}/Kg
                </p>
                <p
                  className={`${
                    selectedProduct.stock === "In Stock"
                      ? " text-green-600"
                      : " text-red-600"
                  } font-medium`}
                >
                  {selectedProduct.stock}
                </p>
              </div>
              <div className=" flex my-3 justify-end">
                <div className=" flex mr-5">
                  <FontAwesomeIcon icon={faThumbsUp} className=" w-5 h-5" />
                  <p className=" ml-1">{selectedProduct.like}</p>
                </div>
                <div className=" flex">
                  <FontAwesomeIcon icon={faThumbsDown} className=" w-5 h-5" />
                  <p className=" ml-1">{selectedProduct.dislike}</p>
                </div>
              </div>
              {selectedProduct.stock === "In Stock" ? (
                <form onSubmit={handleOrder} className="my-6 space-y-6">
                  <input
                    type="text"
                    placeholder="Enter Address"
                    value={orderData.address}
                    onChange={(e) =>
                      setOrderData({ ...orderData, address: e.target.value })
                    }
                    required
                    className="w-full border-b-2 text-sm rounded-md dark:border-white border-[#133221] bg-transparent py-2 px-3 focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Enter Phone Number"
                    value={orderData.phone}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (/^\d{0,10}$/.test(val)) {
                        setOrderData({ ...orderData, phone: e.target.value });
                      }
                    }}
                    required
                    className="w-full border-b-2 text-sm rounded-md dark:border-white border-[#133221] bg-transparent py-2 px-3 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Enter Landmark"
                    value={orderData.landmark}
                    onChange={(e) =>
                      setOrderData({ ...orderData, landmark: e.target.value })
                    }
                    required
                    className="w-full border-b-2 text-sm rounded-md dark:border-white border-[#133221] bg-transparent py-2 px-3 focus:outline-none"
                  />
                  <div className=" text-center my-10">
                    <button
                      type="submit"
                      className="bg-[#fa453c] text-white rounded-lg px-9 py-1 sm:text-lg font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      Place Order
                    </button>
                  </div>
                </form>
              ) : (
                <p className=" text-[#fa453c] font-medium text-lg text-center my-4">
                  Sorry, the product is currently out of stock
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Fertilizer;
