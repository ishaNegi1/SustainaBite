import React, { useState } from "react";
import { useSelector } from "react-redux";
import { community } from "../assets/pictures";

const dummyBlogs = [
  {
    id: 1,
    title: "Eco-Friendly Living",
    content:
      "Discover how small changes in your lifestyle can lead to big environmental benefits.",
    image: "https://source.unsplash.com/featured/?nature",
    views: 120,
    stars: 4.5,
    date: "2024-07-25",
    author: "other",
  },
  {
    id: 2,
    title: "Composting 101",
    content: "A beginner's guide to composting your kitchen waste.",
    image: "https://source.unsplash.com/featured/?compost",
    views: 85,
    stars: 4.8,
    date: "2025-01-24",
    author: "me",
  },
];

const filterOptions = ["Most Viewed", "Max Stars", "2025", "2024"];

function Blogs() {
  const user = useSelector((state) => state.auth.user);
  const [blogs, setBlogs] = useState(dummyBlogs);
  const [newBlog, setNewBlog] = useState({ image: "", title: "", content: "" });
  const [filter, setFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = blogs
    .filter((blog) => {
      const blogYear = new Date(blog.date).getFullYear().toString();
      if (!["Most Viewed", "Max Stars", "All", ""].includes(filter)) {
        if (filter !== blogYear) return false;
      }
      if (searchTerm) {
        return (
          blog.title.toLowerCase().includes(searchTerm) ||
          blog.content.toLowerCase().includes(searchTerm) ||
          blog.author.toLowerCase().includes(searchTerm)
        );
      }
      return true;
    })
    .sort((a, b) => {
      switch (filter) {
        case "Most Viewed":
          return b.views - a.views;
        case "Max Stars":
          return b.stars - a.stars;
        default:
          return 0;
      }
    });

  const handleAddBlog = (e) => {
    e.preventDefault();
    const newEntry = {
      ...newBlog,
      id: Date.now(),
      views: 0,
      stars: 0,
      date: new Date().toISOString(),
      author: user.name,
    };
    setBlogs([newEntry, ...blogs]);
    setNewBlog({ image: "", title: "", content: "" });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // const handleDelete = (id) => {
  //   const blog = blogs.find((b) => b.id === id);
  //   if (blog.author !== user?.name) return alert("You can delete only your blogs.");
  //   setBlogs(blogs.filter((b) => b.id !== id));
  // };

  return (
    <>
      <div className="text-center py-20 px-4 bg-[#133221] text-white relative" style={{ backgroundImage: `url(${community})`, backgroundSize: "cover" }}>
        <div className="absolute inset-0 bg-black opacity-65"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold">SustainaBite Blog</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto font-medium">
            Inspiring change, one bite at a time. Dive into stories, solutions, and insights that fight food waste and nourish a sustainable future.
          </p>
        </div>
      </div>

      <div className="bg-[#85CA81] p-6 mt-6">
        <h3 className="text-2xl font-semibold mb-4 text-[#133221]">Add Your Blog</h3>
        <form className="flex flex-col gap-4" onSubmit={handleAddBlog}>
          <label className="text-lg font-medium text-[#133221]">Image URL:</label>
          <input
            type="text"
            placeholder="Image URL"
            value={newBlog.image}
            onChange={(e) => setNewBlog({ ...newBlog, image: e.target.value })}
            required
            className="border-2 border-[#85CA81] rounded-md p-2"
          />
          <label className="text-lg font-medium text-[#133221]">Title:</label>
          <input
            type="text"
            placeholder="Enter title"
            value={newBlog.title}
            onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
            required
            className="border-2 border-[#85CA81] rounded-md p-2"
          />
          <label className="text-lg font-medium text-[#133221]">Content:</label>
          <textarea
            placeholder="Enter content"
            value={newBlog.content}
            onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
            required
            className="border-2 border-[#85CA81] rounded-md p-2"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="bg-[#133221] text-white font-medium text-lg py-2 px-4 rounded hover:bg-[#1a422c] transition"
          >
            Add Blog
          </button>
        </form>
      </div>

      <div className="py-10 flex flex-col sm:flex-row justify-center sm:justify-end items-center">
        <input type="text" placeholder="Search anything..." className="sm:mx-8 border-2 border-[#133221] rounded-md p-2" onChange={handleSearch} />
        <select
          className="border-2 border-[#133221] rounded-md p-2 mt-5 sm:mt-0 sm:mr-10"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">-- Filter By --</option>
          {filterOptions.map((option, idx) => (
            <option key={idx} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="space-y-10 mb-16">
        {filteredBlogs.map((blog) => (
          <div
            key={blog.id}
            className="dark:bg-[#133221] dark:border-[#85CA81] border-2 rounded-lg shadow-xl overflow-hidden flex flex-col sm:flex-row mx-5 text-[#133221] dark:text-white"
          >
            <img src={blog.image} alt={blog.title} className="w-full sm:w-1/3 sm:h-60 h-44 object-cover" />
            <div className="p-6 flex flex-col justify-between w-full">
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-center">
                  <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                  <p className="text-sm font-medium">Author: {blog.author}</p>
                </div>
                <p className="text-base">{blog.content.slice(0, 150)}...</p>
              </div>
              <div className="flex flex-wrap justify-between items-center mt-4">
                <p className="text-sm">Views: {blog.views} | Stars: {blog.stars}</p>
                <p className="text-sm">Date: {new Date(blog.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</p>
                {user?.name === blog.author && (
                  <button
                    className="text-red-500 underline text-sm"
                    onClick={() => handleDelete(blog.id)}
                  >
                    Delete
                  </button>
                )}
                <button className="bg-[#fa453c] text-white rounded-lg px-4 py-1 text-sm mt-2 sm:mt-0 hover:scale-105 transition">
                  See More →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Blogs;
