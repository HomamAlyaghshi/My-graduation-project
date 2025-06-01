import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const BlogCard = ({ post, index }) => (
  <Link to={`/blog/${index}`}>
    <div
      data-aos="fade-up"
      className="flex flex-col md:flex-row items-center gap-6 w-full bg-spaceMid rounded-3xl shadow-xl hover:shadow-white transition-all duration-500 "
    >
      <img
        alt={`blog-image-${index}`}
        src={post.image}
        className="w-full md:w-1/2 h-[220px] md:h-[280px] object-cover rounded-2xl shadow-xl"
      />

      <div className="flex flex-col justify-between h-full text-left w-full p-4">
        <p className="text-[22px] md:text-[26px] font-semibold leading-[32px] mb-6 font-Orbitron">
          {post.title}
        </p>

        <div className="flex flex-wrap text-sm text-gray-300 gap-4 mb-4">
          <span>
            By <span className="text-star">{post.author}</span>
          </span>
          <span>{post.date}</span>
          <span>{post.views} views</span>
          <span className="italic px-2 py-1 bg-star text-white rounded-md text-[12px] animate-bounce">
            {post.category}
          </span>
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
);

export default BlogCard;
