import Footer from "../../Shared/Footer";
import NavBar from "../../Shared/NavBar";
import blogData from "./blogData";
import { ArrowRightIcon, FunnelIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import HeroSection from "./HeroSection";
import { useState } from "react";
import Newsletter from './../../Shared/Newsletter';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [authorFilter, setAuthorFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState(""); // إضافة حالة لتصنيف المقال
  const [showFilter, setShowFilter] = useState(false);

  // قائمة المؤلفين الفريدة
  const authors = [...new Set(blogData.map(post => post.author))];

  // قائمة التصنيفات الفريدة
  const categories = [...new Set(blogData.map(post => post.category))];

  // تصفية المقالات حسب البحث، الكاتب، والتصنيف
  const filteredPosts = blogData.filter(post => {
    const matchesKeyword =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.contentParts?.intro.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesAuthor = authorFilter ? post.author === authorFilter : true;

    const matchesCategory = categoryFilter ? post.category === categoryFilter : true;

    return matchesKeyword && matchesAuthor && matchesCategory;
  });

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#00000F] via-[#0a1d3a] to-[#3a5f91] text-white font-Rajdhani">
      <NavBar />
      <HeroSection />

      <div className="px-4 md:px-12 py-8">
        {/* زر إظهار/إخفاء الفلاتر على الشاشات الصغيرة */}
        <div className="flex justify-end mb-4 md:hidden">
          <button
            onClick={() => setShowFilter(!showFilter)}
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

        {/* بار الفلاتر - يظهر دائماً على md+، وعلى small يظهر حسب showFilter */}
        {(showFilter || window.innerWidth >= 768) && (
          <div data-aos="fade-up" className="flex flex-col md:flex-row gap-6 bg-[#ffffff0a] rounded-3xl p-6 shadow-xl mb-8 items-center">
            {/* بحث نصي */}
            <input
              type="text"
              placeholder="Search by keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow p-2 rounded-md text-black min-w-[150px]"
            />

            {/* فلتر حسب الكاتب */}
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

            {/* فلتر حسب التصنيف */}
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

        {/* قائمة المقالات */}
        <div  className="flex flex-col gap-10">
          {filteredPosts.map((post, index) => (
            <Link to={`/blog/${index}`} key={index}>
              <div data-aos="fade-up" className="flex flex-col md:flex-row items-center gap-6 w-full bg-[#ffffff0a] rounded-3xl shadow-xl hover:shadow-white transition-all duration-300">
                {/* صورة المقال */}
                <img
                  alt={`blog-image-${index}`}
                  src={post.image}
                  className="w-full md:w-1/2 h-[220px] md:h-[280px] object-cover rounded-2xl shadow-xl"
                />

                {/* محتوى المقال */}
                <div className="flex flex-col justify-between h-full text-left w-full p-4">
                  <p className="text-[22px] md:text-[26px] font-semibold leading-[32px] mb-6 font-Orbitron">
                    {post.title}
                  </p>

                  <div className="flex flex-wrap text-sm text-gray-300 gap-4 mb-4">
                    <span>By <span className="text-star">{post.author}</span></span>
                    <span>{post.date}</span>
                    <span>{post.views} views</span>
                    <span className="italic px-2 py-1 bg-star text-white rounded-md text-[12px]  animate-bounce">{post.category}</span>
                  </div>

                  <p className="text-[15px] md:text-[17px] text-gray-200 mb-4 line-clamp-3">
                    {post.contentParts?.intro}
                  </p>

                  <button className="flex items-center whitespace-nowrap w-fit bg-neon rounded-3xl shadow-md hover:scale-105 transition-all duration-300 shadow-white hover:shadow-black hover:text-star hover:shadow-xl px-6 py-2 gap-2 text-[15px] md:text-[17px]">
                    Read More
                    <ArrowRightIcon className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              </div>
            </Link>
          ))}
          {filteredPosts.length === 0 && (
            <p className="text-center text-gray-400 mt-20">No articles found.</p>
          )}
        </div>
      </div>
      <Newsletter/>
      <Footer />
    </div>
  );
};

export default BlogPage;
