import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import blogData from "../BlogPage/blogData";
import Button2 from "../../Components/Button2";

const BlogSection = () => {
  return (
    <div
      data-aos="fade-up"
      className=" h-auto py-[24px] md:py-[48px] grid gap-[24px] justify-center items-center font-Rajdhani text-white "
    >
      <div className="  h-auto md:h-[88px] flex flex-col md:flex-row justify-between items-center px-4 md:px-0 mx-8">
        <div className=" text-[28px] md:text-[40px] font-medium leading-[32px] md:leading-[44px] tracking-[-0.4px] text-left">
          Articles
        </div>
        <div className="flex border-b-[1px] border-blackButton items-center mt-4 md:mt-0">
          <Link to={"/blogpage"}>
            <button className="flex items-center whitespace-nowrap pb-1 text-[16px] md:text-[18px]">
              More Articles
              <ArrowRightIcon className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </button>
          </Link>
        </div>
      </div>
      <div className="h-auto w-full grid items-center justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 md:px-12 md:gap-6">
        {blogData.slice(0, 3).map((post, index) => (
          <Link to={`/blog/${index}`} key={index}>
            <div className="flex flex-col justify-around items-center text-center w-full gap-[8px] cursor-pointer">
              <img
                alt={`blog-image-${index}`}
                src={post.image}
                className="w-full h-[250px] md:h-[325px] object-cover rounded-3xl shadow-2xl shadow-neon hover:shadow-white transition-all duration-500 delay-150"
              />
              <p className="text-[18px] md:text-[20px] font-medium leading-[24px] md:leading-[28px] text-left">
                {post.title}
              </p>
              <div className="flex w-full items-center mb-4">
                <Button2>Read More</Button2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
