import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { fertilizer1 } from "../assets/pictures";
import { getAllProducts } from "../hooks/fertilizerApi";
import { placeOrder, getCoinBalance } from "../hooks/orderApi";
import PageSeo from "../components/PageSeo";
import { Link } from "react-router-dom";
import { likeFertilizer, dislikeFertilizer } from "../hooks/fertilizerApi";

const Fertilizer = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [coinBalance, setCoinBalance] = useState(0);
  const [coinUsed, setCoinUsed] = useState(0);
  const [orderData, setOrderData] = useState({
    address: "",
    pincode: "",
    phone: "",
    landmark: "",
  });

  const fetchProducts = async () => {
    setLoading(true);
    const result = await getAllProducts();
    if (result.error) {
      alert(result.error);
    } else {
      setProducts(result);
    }
    setLoading(false);
  };

  const fetchBalance = async () => {
    try {
      const res = await getCoinBalance();
      setCoinBalance(res.balance);
    } catch (error) {
      console.error("Error fetching balance", error);
    }
  };

  useEffect(() => {
    fetchBalance();
    fetchProducts();
  }, []);

  const closeModal = () => {
    setSelectedProduct(null);
    setOrderData({ address: "", phone: "" });
  };

  const handleOrder = async (e) => {
    e.preventDefault();
    const orderDetails = {
      productId: selectedProduct._id,
      address: orderData.address,
      pincode: orderData.pincode,
      phone: orderData.phone,
      landmark: orderData.landmark,
      coinUsed: coinUsed,
      finalPrice: Math.max(selectedProduct.price - coinUsed, 0),
    };
    const result = await placeOrder(orderDetails);
    if (result.error) {
      alert(result.error);
    } else {
      closeModal();
      setOrderPlaced(true);
    }
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

      {loading ? (
        <div className="flex justify-center items-center my-36">
          <div className="w-20 h-20 border-8 border-dashed rounded-full animate-spin border-[#fa453c]"></div>
        </div>
      ) : (
        <div className=" my-10 px-10">
          <div className=" text-center font-semibold text-xl text-[#133221] bg-[#85CA81] py-2">
            Your Coin Balance: {coinBalance}
          </div>
          {orderPlaced && (
            <div className="mt-6 p-6 text-center bg-green-200 border border-[#133221] text-[#133221] rounded-lg space-y-3">
              <h2 className="text-2xl font-semibold">Thank You!</h2>
              <p className="text-lg font-normal">
                Your fertilizer order has been successfully placed.
              </p>
              <p className="text-lg font-normal">
                Our team is preparing your order for delivery. You will receive
                a call before dispatch.
              </p>
              <p className="font-medium text-lg">
                You can track the status of your order anytime on your{" "}
                <Link to="/dashboard" className="text-green-700 font-semibold">
                  Dashboard
                </Link>
                .
              </p>
              <p className="text-base font-medium">
                Thank you for choosing sustainable farming solutions. 🌱
              </p>
            </div>
          )}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 sm:gap-y-28 gap-y-20 my-20 sm:px-10 ">
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
                  <div className=" flex justify-between mt-4">
                    <p className=" text-[#133221] dark:text-white font-medium">
                      ₹{product.price} ({product.packSize})
                    </p>
                    <p
                      className={`${
                        product.stock === "In Stock"
                          ? " text-green-600 dark:text-[#85CA81]"
                          : " text-red-600 dark:text-[#fa453c]"
                      } font-medium`}
                    >
                      {product.stock}
                    </p>
                  </div>
                  <div className="flex mt-5 space-x-6">
                    <button
                      onClick={async (e) => {
                        e.stopPropagation();
                        const res = await likeFertilizer(product._id);
                        setProducts((prev) =>
                          prev.map((p) =>
                            p._id === product._id
                              ? {
                                  ...p,
                                  likes: res.likes,
                                  dislikes: res.dislikes,
                                }
                              : p
                          )
                        );

                        if (selectedProduct?._id === product._id) {
                          setSelectedProduct((prev) => ({
                            ...prev,
                            likes: res.likes,
                            dislikes: res.dislikes,
                          }));
                        }
                      }}
                      className="flex items-center space-x-1 text-green-600 dark:text-[#85CA81]"
                    >
                      <FontAwesomeIcon icon={faThumbsUp} className="w-5 h-5" />
                      <span>{product.likes?.length || 0}</span>
                    </button>

                    <button
                      onClick={async (e) => {
                        e.stopPropagation();
                        const res = await dislikeFertilizer(product._id);
                        setProducts((prev) =>
                          prev.map((p) =>
                            p._id === product._id
                              ? {
                                  ...p,
                                  likes: res.likes,
                                  dislikes: res.dislikes,
                                }
                              : p
                          )
                        );

                        if (selectedProduct?._id === product._id) {
                          setSelectedProduct((prev) => ({
                            ...prev,
                            likes: res.likes,
                            dislikes: res.dislikes,
                          }));
                        }
                      }}
                      className="flex items-center space-x-1 
                      text-red-600 dark:text-[#fa453c]"
                    >
                      <FontAwesomeIcon
                        icon={faThumbsDown}
                        className="w-5 h-5"
                      />
                      <span>{product.dislikes?.length || 0}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {selectedProduct && (
              <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4">
                <div className="bg-white dark:bg-[#133221] text-[#133221] dark:text-white max-w-lg w-full max-h-[90vh] overflow-y-auto rounded-lg py-6 px-7 relative">
                  <button
                    onClick={closeModal}
                    className=" absolute top-3 right-5 text-[#fa453c] font-extrabold text-xl mb-7"
                  >
                    ✕
                  </button>

                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-48 object-cover rounded-lg my-7"
                  />
                  <h2 className="text-2xl font-semibold dark:text-white">
                    {selectedProduct.name}
                  </h2>
                  <p className=" dark:text-gray-300 mt-5 mb-4">
                    {selectedProduct.description}
                  </p>
                  <div className=" flex justify-between items-center my-6">
                    <p className="font-bold text-lg ">
                      ₹{selectedProduct.price} {selectedProduct.packSize}
                    </p>
                    <p
                      className={`${
                        selectedProduct.stock === "In Stock"
                          ? " text-green-600 dark:text-[#85CA81]"
                          : " text-red-600 dark:text-[#fa453c]"
                      } font-medium text-lg`}
                    >
                      {selectedProduct.stock}
                    </p>
                  </div>
                  <div className=" flex my-4 justify-end">
                    <div className=" flex mr-5">
                      <FontAwesomeIcon
                        icon={faThumbsUp}
                        className=" w-5 h-5 text-green-600 dark:text-[#85CA81]"
                      />
                      <p className=" ml-1">
                        {selectedProduct.likes?.length || 0}
                      </p>
                    </div>
                    <div className=" flex">
                      <FontAwesomeIcon
                        icon={faThumbsDown}
                        className=" w-5 h-5 text-red-600 dark:text-[#fa453c]"
                      />
                      <p className=" ml-1">
                        {selectedProduct.dislikes?.length || 0}
                      </p>
                    </div>
                  </div>
                  {selectedProduct.stock === "In Stock" ? (
                    <form onSubmit={handleOrder} className="my-6 space-y-8">
                      <input
                        type="text"
                        placeholder="Enter Address"
                        value={orderData.address}
                        onChange={(e) =>
                          setOrderData({
                            ...orderData,
                            address: e.target.value,
                          })
                        }
                        required
                        className="w-full border-b-2 text-base rounded-md dark:border-white border-[#133221] bg-transparent py-2 px-3 focus:outline-none"
                      />
                      <input
                        type="text"
                        placeholder="Enter Pincode"
                        value={orderData.pincode}
                        onChange={(e) => {
                          const val = e.target.value;
                          if (/^\d{0,6}$/.test(val)) {
                            setOrderData({
                              ...orderData,
                              pincode: e.target.value,
                            });
                          }
                        }}
                        required
                        className="w-full border-b-2 text-base rounded-md dark:border-white border-[#133221] bg-transparent py-2 px-3 focus:outline-none"
                      />
                      <input
                        type="tel"
                        placeholder="Enter Phone Number"
                        value={orderData.phone}
                        onChange={(e) => {
                          const val = e.target.value;
                          if (/^\d{0,10}$/.test(val)) {
                            setOrderData({
                              ...orderData,
                              phone: e.target.value,
                            });
                          }
                        }}
                        required
                        className="w-full border-b-2 text-base rounded-md dark:border-white border-[#133221] bg-transparent py-2 px-3 focus:outline-none"
                      />
                      <input
                        type="text"
                        placeholder="Enter Landmark"
                        value={orderData.landmark}
                        onChange={(e) =>
                          setOrderData({
                            ...orderData,
                            landmark: e.target.value,
                          })
                        }
                        required
                        className="w-full border-b-2 text-base rounded-md dark:border-white border-[#133221] bg-transparent py-2 px-3 focus:outline-none"
                      />
                      <div className="mb-2">
                        <label className="block mb-1 text-base">
                          Apply Coins (Max {coinBalance}):
                        </label>
                        <input
                          type="number"
                          min="0"
                          max={coinBalance}
                          placeholder="Enter coins"
                          value={coinUsed}
                          onChange={(e) => {
                            let val = e.target.value;
                            if (val === "") {
                              setCoinUsed("");
                              return;
                            }
                            val = Number(val);
                            if (val < 0) val = 0;
                            if (val > coinBalance) val = coinBalance;
                            setCoinUsed(val);
                          }}
                          required
                          className="w-full border-b-2 text-base rounded-md dark:border-white border-[#133221] bg-transparent py-2 px-3 focus:outline-none"
                        />
                      </div>
                      <div className="mt-4 text-lg font-semibold text-center">
                        Final Price: ₹
                        {Math.max(selectedProduct.price - coinUsed, 0)}{" "}
                        <span className="text-base font-medium dark:text-white">
                          (after applying {coinUsed} coins)
                        </span>
                      </div>
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
                    <p className=" bg-[#fa453c] text-white rounded-lg px-2 text-center py-1 sm:text-lg font-medium transition-all duration-300 transform hover:scale-105 my-10">
                      Sorry, the product is currently out of stock
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Fertilizer;
