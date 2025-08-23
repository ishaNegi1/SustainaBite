import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { community } from "../assets/pictures";
import {
  getAllBlogs,
  createBlog,
  deleteBlog,
  updateBlog,
  updateStars,
  updateViews,
} from "../hooks/blogApi";

const filterOptions = ["Most Viewed", "Max Stars", "2025", "2024"];

function Blogs() {
  const user = useSelector((state) => state.auth.user);
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ title: "", content: "" });
  const [filter, setFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [editedBlog, setEditedBlog] = useState(null);
  const [loading, setLoading] = useState(false)

  const fetchBlogs = async () => {
    setLoading(true);
      const data = await getAllBlogs();
      if (Array.isArray(data)) {
    setBlogs(data);
  } else {
    console.error("Invalid blog data received:", data);
    setBlogs([]); 
  }
  setLoading(false);
    };
  useEffect(() => {
    fetchBlogs();
  }, []);

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
          blog.author.name.toLowerCase().includes(searchTerm)
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

  const handleAddBlog = async (e) => {
    e.preventDefault();
    const result = await createBlog(newBlog);
    if (result.error) return alert(result.error);
    setBlogs([result, ...blogs]);
    setNewBlog({ title: "", content: "" });
    fetchBlogs();
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleDelete = async (id) => {
    const confirmed = confirm("Do you want to delete the blog?");
    if (confirmed) {
      const result = await deleteBlog(id);
      if (result.error) return alert(result.error);
      setBlogs(blogs.filter((b) => b._id !== id));
      fetchBlogs();
    }
  };

  const handleEditClick = (blog) => {
    setEditedBlog({ ...blog });
  };

  const handleCancelEdit = () => {
    setEditedBlog(null);
  };

  const handleSaveEdit = async () => {
    const result = await updateBlog(editedBlog._id, {
      title: editedBlog.title,
      content: editedBlog.content,
    });
    if (result.error) return alert(result.error);
    const updatedBlogs = blogs.map((b) =>
      b._id === editedBlog._id ? { ...b, ...editedBlog } : b
    );
    setBlogs(updatedBlogs);
    setEditedBlog(null);
    fetchBlogs();
  };

  const handleStarClick = async (id) => {
    try{
  const result = await updateStars(id);
  if (result.error) {
      alert(result.error);
      return;
    }
  setBlogs((prevBlogs) =>
    prevBlogs.map((b) => (b._id === id ? result : b))
  );
  setSelectedBlog((prev) => (prev && prev._id === id ? result : prev));
}
catch(error){
    alert("An error occurred while starring the blog.");
}
};

  return (
    <>
      <div
        className="text-center py-20 px-4 bg-[#133221] text-white relative"
        style={{
          backgroundImage: `url(${community})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black sm:opacity-60 opacity-40"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold">Sustainability Blogs</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto font-medium">
            Inspiring change, one bite at a time. Dive into stories, solutions, and insights that fight food waste and nourish a sustainable future.
          </p>
        </div>
      </div>

      <div className="bg-[#85CA81] p-6 mt-6">
        <h3 className="text-2xl font-semibold mb-4 text-[#133221]">
          Add Your Blog
        </h3>
        <form className="flex flex-col gap-4" onSubmit={handleAddBlog}>
          <label className="text-lg font-medium text-[#133221]">Title:</label>
          <input
            type="text"
            placeholder="Enter title"
            value={newBlog.title}
            onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
            required
            className="border-2 border-[#85CA81] rounded-md p-2 focus:outline-none"
          />
          <label className="text-lg font-medium text-[#133221]">Content:</label>
          <textarea
            placeholder="Enter content"
            value={newBlog.content}
            onChange={(e) =>
              setNewBlog({ ...newBlog, content: e.target.value })
            }
            required
            className="border-2 border-[#85CA81] rounded-md p-2 focus:outline-none"
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
        <input
          type="text"
          placeholder="Search anything..."
          className="sm:mx-8 border-2 border-[#133221] rounded-md p-2"
          onChange={handleSearch}
        />
        <select
          className="border-2 border-[#133221] rounded-md p-2 mt-5 sm:mt-0 sm:mr-10"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">-- Filter By --</option>
          {filterOptions.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

        {loading ? (<div className="flex justify-center items-center my-36">
        <div className="w-20 h-20 border-8 border-dashed rounded-full animate-spin border-[#fa453c]"></div>
      </div>)
      :
        <div className="space-y-10 mb-16">
        {filteredBlogs.map((blog) => (
          <div
            key={blog._id}
            className="dark:bg-[#133221] border-[#85CA81] border-2 rounded-lg shadow-xl overflow-hidden flex flex-col sm:flex-row mx-5 text-[#133221] dark:text-white"
          >
            <div className="p-6 flex flex-col justify-between w-full">
              <div>
                <div className="flex flex-col justify-between items-center">
                  <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                  <p className=" text-base font-semibold my-2">
                    Author: {blog.author.name}
                  </p>
                </div>
                <p className="text-base">{blog.content.slice(0, 250)}...</p>
              </div>
              <div className=" sm:flex sm:justify-between">
              <div className="flex flex-wrap sm:flex-row flex-col justify-between sm:justify-start items-center my-7">
                <p className=" text-base font-medium sm:mx-2">
                  Views: {blog.views} | Stars: {blog.stars}
                </p>
                <p className="text-base font-medium sm:mx-5 mt-3 sm:mt-0">
                  Date:{" "}
                  {new Date(blog.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
              {user?._id === blog.author._id && (
                <div className=" flex justify-center sm:justify-end items-center my-5">
                  <button
                    className="bg-[#fa453c] text-white rounded-lg px-4 py-2 text-base font-medium transition-all duration-500 ease-linear transform hover:scale-110 mx-2"
                    onClick={() => handleDelete(blog._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-[#fa453c] text-white rounded-lg px-4 py-2 text-base font-medium transition-all duration-500 ease-linear transform hover:scale-110 mx-2"
                    onClick={() => handleEditClick(blog)}
                  >
                    Edit
                  </button>
                </div>
              )}
              </div>
              <button
                className="bg-[#fa453c] text-white rounded-lg px-4 py-2 text-base font-medium sm:w-1/2 sm:mx-auto transition-all duration-500 ease-linear transform hover:scale-110"
                onClick={async () => {
                  await updateViews(blog._id);
                  setBlogs(
                    blogs.map((b) =>
                      b._id === blog._id ? { ...b, views: b.views + 1 } : b
                    )
                  );
                  setSelectedBlog(blog);
                }}
              >
                See More →
              </button>
            </div>
          </div>
        ))}
      </div>}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4">
          <div className="bg-white dark:bg-[#133221] text-[#133221] dark:text-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg p-6 relative">
            <div className=" flex justify-end">
              <div className="flex items-center mr-6">
  <button
    onClick={() => handleStarClick(selectedBlog._id)}
    className={`text-4xl transition hover:scale-125 ${
      selectedBlog.starredBy.includes(user?._id)
        ? "text-yellow-400"
        : "text-gray-400"
    }`}
    disabled={selectedBlog.starredBy.includes(user?._id)} 
  >
    ★
  </button>

              </div>
              <button
                onClick={() => setSelectedBlog(null)}
                className=" bg-[#fa453c] text-white rounded-lg px-4 py-1 text-sm transition-all duration-500 ease-linear transform hover:scale-110 font-bold"
              >
                Close
              </button>
            </div>
            <h2 className="text-3xl font-bold my-7">{selectedBlog.title}</h2>
            <p className="text-base font-semibold mb-1">
              Author: {selectedBlog.author.name}
            </p>
            <p className="text-base mb-4 font-medium">
              Date:{" "}
              {new Date(selectedBlog.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
            <p className="text-lg leading-relaxed whitespace-pre-line">
              {selectedBlog.content}
            </p>
          </div>
        </div>
      )}
      {editedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4">
          <div className="bg-white text-black dark:bg-[#133221] dark:text-white p-6 rounded-lg w-full max-w-3xl overflow-auto max-h-[90vh]">
            <div className="flex justify-end gap-4">
              <button
                onClick={handleCancelEdit}
                className="bg-[#fa453c] text-white rounded-lg px-4 py-2 text-sm transition-all duration-500 ease-linear transform hover:scale-110 font-bold"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEdit}
                className="bg-green-600 text-white rounded-lg px-4 py-2 text-sm transition-all duration-500 ease-linear transform hover:scale-110 font-bold"
              >
                Save Changes
              </button>
            </div>
            <h2 className="text-2xl font-bold my-5">Edit Blog</h2>
            <label className="font-semibold">Title:</label>
            <input
              type="text"
              value={editedBlog.title}
              onChange={(e) =>
                setEditedBlog({ ...editedBlog, title: e.target.value })
              }
              className="w-full p-2 mb-4 border rounded dark:text-black"
            />

            <label className="font-semibold">Content:</label>
            <textarea
              value={editedBlog.content}
              onChange={(e) =>
                setEditedBlog({ ...editedBlog, content: e.target.value })
              }
              className="w-full p-2 mb-4 border rounded dark:text-black"
              rows={8}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Blogs;