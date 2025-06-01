import { FunnelIcon, XMarkIcon } from "@heroicons/react/24/outline";

const BlogFilters = ({
  showFilter,
  toggleFilter,
  searchTerm,
  setSearchTerm,
  authorFilter,
  setAuthorFilter,
  categoryFilter,
  setCategoryFilter,
  authors,
  categories,
}) => {
  return (
    <>
      {/* زر إظهار/إخفاء الفلاتر */}
      <div className="flex justify-end mb-4 md:hidden">
        <button
          onClick={toggleFilter}
          className="flex items-center gap-2 bg-neon text-black px-4 py-2 rounded-3xl shadow-md hover:scale-105 transition-all duration-300"
        >
          {showFilter ? (
            <>
              <XMarkIcon className="w-5 h-5" />
              Hide Filters
            </>
          ) : (
            <>
              <FunnelIcon className="w-5 h-5" />
              Show Filters
            </>
          )}
        </button>
      </div>

      {(showFilter || window.innerWidth >= 768) && (
        <div
          data-aos="fade-up"
          className="flex flex-col md:flex-row gap-6 bg-[#ffffff0a] rounded-3xl p-6 shadow-xl mb-8 items-center"
        >
          {/* بحث نصي */}
          <input
            type="text"
            placeholder="Search by keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow p-2 rounded-md text-black min-w-[150px]"
          />

          {/* فلتر الكاتب */}
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <label className="font-medium whitespace-nowrap">Author:</label>
            <select
              value={authorFilter}
              onChange={(e) => setAuthorFilter(e.target.value)}
              className="p-2 rounded-md text-black min-w-[150px]"
            >
              <option value="">All Authors</option>
              {authors.map((author) => (
                <option key={author} value={author}>
                  {author}
                </option>
              ))}
            </select>
          </div>

          {/* فلتر التصنيف */}
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <label className="font-medium whitespace-nowrap">Category:</label>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="p-2 rounded-md text-black min-w-[150px]"
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogFilters;
