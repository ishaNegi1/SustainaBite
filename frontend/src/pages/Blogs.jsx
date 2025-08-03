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
  const [newBlog, setNewBlog] = useState({title: "", content: "" });
  const [filter, setFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [editedBlog, setEditedBlog] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getAllBlogs();
      if (!data.error) setBlogs(data);
      else console.error(data.error);
    };
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
  };

  const handleStarClick = async (id) => {
    const result = await updateStars(id);
    if (result.error) return alert(result.error);
    setBlogs(
      blogs.map((b) => (b._id === id ? { ...b, stars: b.stars + 1 } : b))
    );
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
        <div className="absolute inset-0 bg-black opacity-65"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold">SustainaBite Blog</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto font-medium">
            Inspiring change, one bite at a time. Dive into stories, solutions,
            and insights that fight food waste and nourish a sustainable future.
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
            className="border-2 border-[#85CA81] rounded-md p-2"
          />
          <label className="text-lg font-medium text-[#133221]">Content:</label>
          <textarea
            placeholder="Enter content"
            value={newBlog.content}
            onChange={(e) =>
              setNewBlog({ ...newBlog, content: e.target.value })
            }
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

      <div className="space-y-10 mb-16">
        {filteredBlogs.map((blog) => (
          <div
            key={blog._id}
            className="dark:bg-[#133221] dark:border-[#85CA81] border-2 rounded-lg shadow-xl overflow-hidden flex flex-col sm:flex-row mx-5 text-[#133221] dark:text-white"
          >
            <div className="p-6 flex flex-col justify-between w-full">
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-center">
                  <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                  <p className="text-sm font-medium">
                    Author: {blog.author.name}
                  </p>
                </div>
                <p className="text-base">{blog.content.slice(0, 150)}...</p>
              </div>
              <div className="flex flex-wrap justify-between items-center mt-4">
                <p className="text-sm">
                  Views: {blog.views} | Stars: {blog.stars}
                </p>
                <p className="text-sm">
                  Date:{" "}
                  {new Date(blog.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                {user?._id === blog.author._id && (
                  <>
                    <button
                      className="bg-[#fa453c] text-white rounded-lg px-4 py-1 text-sm transition-all duration-500 ease-linear transform hover:scale-110"
                      onClick={() => handleDelete(blog._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-[#fa453c] text-white rounded-lg px-4 py-1 text-sm transition-all duration-500 ease-linear transform hover:scale-110"
                      onClick={() => handleEditClick(blog)}
                    >
                      Edit
                    </button>
                  </>
                )}
                <button
                  className="bg-[#fa453c] text-white rounded-lg px-4 py-1 text-sm mt-2 sm:mt-0 transition-all duration-500 ease-linear transform hover:scale-110"
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
          </div>
        ))}
      </div>
      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4">
          <div className="bg-white dark:bg-[#133221] text-[#133221] dark:text-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg p-6 relative">
            <div className=" flex justify-end">
              <div className="flex items-center mr-6">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    onClick={() => handleStarClick(selectedBlog._id)}
                    className={` text-3xl transition hover:scale-125 ${
                      n <= selectedBlog.stars
                        ? "text-yellow-400"
                        : "text-gray-400"
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
              <button
                onClick={() => setSelectedBlog(null)}
                className=" bg-[#fa453c] text-white rounded-lg px-4 py-1 text-sm transition-all duration-500 ease-linear transform hover:scale-110 font-bold"
              >
                Close
              </button>
            </div>
            <h2 className="text-3xl font-bold mb-2">{selectedBlog.title}</h2>
            <p className="text-sm font-medium mb-1">
              Author: {selectedBlog.author.name}
            </p>
            <p className="text-sm mb-4 font-medium">
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
            <h2 className="text-2xl font-bold mb-4">Edit Blog</h2>
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
