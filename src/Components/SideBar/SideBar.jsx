const Sidebar = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="w-64 bg-white p-4 fixed left-0 top-16 bottom-0 h-screen overflow-y-auto ">
      <h2 className="text-xl font-bold mb-4">Categories</h2>

      <div className="flex flex-col gap-2">
        <button
          key="all"
          onClick={() => setSelectedCategory(null)}
          className={`text-left px-4 py-2 rounded-lg transition-colors capitalize cursor-pointer ${
            !selectedCategory
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          All Products
        </button>

        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`text-left px-4 py-2 rounded-lg transition-colors capitalize cursor-pointer ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
