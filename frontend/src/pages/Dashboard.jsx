import React, { useState, useEffect } from "react";
import { dashboard } from "../assets/pictures";
import PageSeo from "../components/PageSeo";
import {getMyDonations} from "../hooks/donateApi"
import { getMyBlogs } from "../hooks/blogApi";

const Dashboard = () => {

  const [donations, setDonations] = useState([]);
   const [blogs, setBlogs] = useState([]);
   const [loadingDonations, setLoadingDonations] = useState(false);
   const [showAllDonations, setShowAllDonations] = useState(false);
   const [loadingBlogs, setLoadingBlogs] = useState(false);
   const [showAllBlogs, setShowAllBlogs] = useState(false);

  const fetchDonations = async () => {
    setLoadingDonations(true);
      const donations = await getMyDonations();
      if (donations.error) {
        alert(donations.error);
      } 
      else{
        setDonations(donations);
      }
      setLoadingDonations(false);
    };

  const fetchBlogs = async() => {
    setLoadingBlogs(true)
    const blogs = await getMyBlogs();
    if (blogs.error) {
        alert(blogs.error);
      } 
      else{
        setBlogs(blogs);
      }
      setLoadingBlogs(false);
  }

  useEffect(() => {
    fetchDonations();
    fetchBlogs();
  }, []);

  const displayedDonations = showAllDonations ? donations : donations.slice(0, 4);
  const displayedBlogs = showAllBlogs ? blogs : blogs.slice(0, 4);

  return (
    <>
    <PageSeo
  title="Dashboard"
  description="Manage donations, pickups, blogs, compost collections, leftover recipes, and fertilizer purchases all in one place."
  keywords="dashboard, food donation management, compost collection, leftover recipes, blogs, fertilizer purchase, SustainaBite"
/>

      <div
        className="text-center py-20 px-4 bg-[#133221] text-white relative"
        style={{
          backgroundImage: `url(${dashboard})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black sm:opacity-60 opacity-40"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold">Dashboard</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto font-medium">
            Your impact, your journey - track donations, monitor pickups, and
            see the difference you're making in real time.
          </p>
        </div>
      </div>

      <div className=" mx-auto px-4 pt-12 pb-8">
        <h2 className="text-2xl text-[#133221] dark:text-[#ffffff]  font-bold mb-10 text-center">My Donations</h2>

        {loadingDonations ? (
          <div className="flex justify-center items-center my-20">
        <div className="w-14 h-14 border-8 border-dashed rounded-full animate-spin border-[#fa453c]"></div>
      </div>
        ) : donations.length === 0 ? (
          <p>You haven't made any donations yet.</p>
        ) : (
          <>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 sm:px-5 px-3">
            {displayedDonations.map((donation) => (
              <div
                key={donation._id}
                className=" bg-[#FFFFFF] text-[#133221] dark:bg-[#21583a] dark:text-white rounded-lg shadow-xl shadow-[rgba(0,0,0,0.5)] dark:shadow-[rgba(78,77,77,0.5)] transition-transform duration-300 hover:scale-110 overflow-hidden border-2 border-[#85CA81]"
              >
            {donation.image && (
    <img
      src={donation.image}
      alt="Donation"
      className="w-full h-44 object-cover p-2 rounded-xl"
    />
  )}
                <div className="p-2 space-y-1 text-sm">
                  <h3 className=" font-semibold">{donation.foodType}</h3>
                  <p>
                    <span className="font-medium">Quantity:</span>{" "}
                    {donation.quantity}
                  </p>
                  <p>
                    <span className="font-medium">Preferred Pickup:</span>{" "}
                    {donation.preferredTime}
                  </p>
                  <p>
                    <span className="font-medium">Date:</span>{" "}
                    {new Date(donation.date).toLocaleDateString()}
                    </p>
                    <p>
                    <span className="font-medium">Time:</span>{" "}
                    {new Date(donation.date).toLocaleTimeString()}
                  </p>

                  <p>
                    <span className="font-medium">Status:</span>{" "}
                    <span
                      className={`${
                        donation.status === "Picked Up"
                          ? "text-green-600"
                          : "text-[#fa453c]"
                      } font-semibold`}
                    >
                      {donation.status}
                    </span>
                  </p>

                  {donation.status === "Picked up" && (
                    <p className="text-yellow-600 font-bold">
                      Coins Earned: {donation.coin || 2}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          {donations.length > 4 && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAllDonations(!showAllDonations)}
                  className="bg-[#fa453c] text-white mt-5 rounded-lg px-8 py-1 sm:text-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  {showAllDonations ? "See Less" : "See More"}
                </button>
              </div>
            )}
          </>
        )}
      </div>

      <div className=" mx-auto px-4 mt-16 mb-16">
        <h2 className="text-2xl text-[#133221] dark:text-[#ffffff] font-bold mb-10 text-center">My Blogs</h2>
        {loadingBlogs ? (
          <div className="flex justify-center items-center my-20">
        <div className="w-14 h-14 border-8 border-dashed rounded-full animate-spin border-[#fa453c]"></div>
      </div>
        ) : blogs.length === 0 ? (
          <p className="mb-10">You haven't posted any blog yet.</p>
        ) : (
          <>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 sm:px-5 px-3">
            {displayedBlogs.map((blog) => (
              <div
                key={blog._id}
                className=" bg-[#FFFFFF] text-[#133221] dark:bg-[#21583a] dark:text-white rounded-lg shadow-xl shadow-[rgba(0,0,0,0.5)] dark:shadow-[rgba(78,77,77,0.5)] transition-transform duration-300 hover:scale-110 overflow-hidden p-3 border-2 border-[#85CA81]"
              >
              <p className=" text-base font-medium mb-2">{blog.title}</p>
              <p className=" text-sm">
                    <span className="font-medium">Views:</span>{" "}
                    {blog.views}
                    </p>
              <p className=" text-sm">
                    <span className="font-medium">Stars:</span>{" "}
                    {blog.stars}
                    </p>
              <p className=" text-sm">
                    <span className="font-medium">Date:</span>{" "}
                    {new Date(blog.date).toLocaleDateString()}
                    </p>
                    <p className=" text-sm">
                    <span className="font-medium">Time:</span>{" "}
                    {new Date(blog.date).toLocaleTimeString()}
                  </p>
         </div>
        ))}
            </div>
             {blogs.length > 4 && (
              <div className="text-center my-8">
                <button
                  onClick={() => setShowAllBlogs(!showAllBlogs)}
                  className="bg-[#fa453c] text-white mt-5 rounded-lg px-8 py-1 sm:text-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  {showAllBlogs ? "See Less" : "See More"}
                </button>
              </div>
            )}
         </>       
          )
        }
      </div>

    </>
  );
};

export default Dashboard;
