import { useState } from "react";
import Footer from "../../Shared/Footer";
import NavBar from "../../Shared/NavBar";
import Newsletter from "./../../Shared/Newsletter";
import HeroSection from "./HeroSection";
import blogData from "./blogData";
import BlogFilters from "./BlogFilters";
import BlogCard from "./BlogCard";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [authorFilter, setAuthorFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [visibleCount, setVisibleCount] = useState(9);

  const authors = [...new Set(blogData.map((post) => post.author))];
  const categories = [...new Set(blogData.map((post) => post.category))];

  const filteredPosts = blogData.filter((post) => {
    const keyword = searchTerm.toLowerCase();
    const matchesKeyword =
      post.title.toLowerCase().includes(keyword) ||
      post.contentParts?.intro.toLowerCase().includes(keyword);

    const matchesAuthor = authorFilter ? post.author === authorFilter : true;
    const matchesCategory = categoryFilter ? post.category === categoryFilter : true;

    return matchesKeyword && matchesAuthor && matchesCategory;
  });

  const displayedPosts = filteredPosts.slice(0, visibleCount);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#00000F] via-[#0a1d3a] to-[#3a5f91] text-white font-Rajdhani">
      <NavBar />
      <HeroSection />

      <div className="px-4 md:px-12 py-8">
        <BlogFilters
          showFilter={showFilter}
          toggleFilter={() => setShowFilter((prev) => !prev)}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          authorFilter={authorFilter}
          setAuthorFilter={setAuthorFilter}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          authors={authors}
          categories={categories}
        />

        <div className="flex flex-col gap-10">
          {displayedPosts.length === 0 && (
            <p className="text-center text-gray-400 mt-20">No articles found.</p>
          )}

          {displayedPosts.map((post, index) => (
            <BlogCard key={index} post={post} index={index} />
          ))}

          {visibleCount < filteredPosts.length && (
            <div data-aos="fade-up" className="flex justify-center mt-8">
              <button
                onClick={() => setVisibleCount((prev) => prev + 9)}
                className="flex items-center whitespace-nowrap w-fit bg-neon rounded-3xl shadow-md hover:scale-105 transition-all duration-300 shadow-white hover:shadow-black hover:text-star hover:shadow-xl px-6 py-2 gap-2 text-[15px] md:text-[17px]"
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default BlogPage;

