import { useParams } from "react-router-dom";
import blogData from "./blogData";
import NavBar from "./../../Shared/NavBar";
import Footer from "./../../Shared/Footer";
import BlogSection from "../HomePage/BlogSectaion";
import Newsletter from './../../Shared/Newsletter';

const BlogDetails = () => {
  const { id } = useParams();
  const post = blogData[parseInt(id)];

  if (!post) {
    return (
      <div className="w-full h-screen bg-gradient-to-b from-[#00000F] via-[#0a1d3a] to-[#3a5f91]  ">
        <div className=" p-8 text-white text-5xl">Article not found :(</div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-[#00000F] via-[#0a1d3a] to-[#3a5f91] w-full h-full">
      <NavBar />
      <div data-aos="fade-up" className="font-Rajdhani text-white">
        {/* صورة الـ cover مع العنوان فوقها والمعلومات في الأسفل يمين ويسار */}
        <div className="relative w-full h-[300px] md:h-[500px]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />

          {/* تراكب غامق فوق الصورة */}
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center px-4 text-center">
            <h1 className="text-[24px] md:text-[40px] font-bold">
              {post.title}
            </h1>
          </div>

          {/* معلومات الناشر والمشاهدات */}
          <div className="absolute bottom-4 left-6 text-sm md:text-lg text-white opacity-80 bg-spaceDark p-4 rounded-2xl ">
            By{" "}
            <span className="text-blue-400 font-semibold">{post.author}</span>
          </div>

          <div className="absolute bottom-4 right-6 text-sm md:text-lg text-white opacity-80 bg-spaceDark p-4 rounded-2xl">
            {new Date(post.date).toLocaleDateString()} ·{" "}
            {post.views.toLocaleString()} views
          </div>
        </div>

        {/* نص المقال */}
        <div  className=" py-10 max-w-4xl mx-auto  font-sans">
          <div data-aos="fade-up" className="text-[18px] leading-7 whitespace-pre-line">
            {post.contentParts.intro}
          </div>

          <hr data-aos="fade-up" className="my-8 border-gray-300 " />

          <div data-aos="fade-up" className="text-[18px] leading-7 whitespace-pre-line">
            {post.contentParts.part1}
          </div>

          <hr data-aos="fade-up" className="my-8 border-gray-300" />

          <div data-aos="fade-up" className="text-[18px] leading-7 whitespace-pre-line">
            {post.contentParts.part2}
          </div>

          <hr data-aos="fade-up" className="my-8 border-gray-300" />

          <div data-aos="fade-up" className="text-[18px] leading-7 whitespace-pre-line">
            {post.contentParts.conclusion}
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="flex justify-center items-center">
        <span className="text-[24px] md:text-[40px] font-bold text-center text-white mt-12">
          Read More Articles ...
        </span>
      </div>

      <BlogSection />
      <Newsletter/>

      <Footer />
    </div>
  );
};

export default BlogDetails;
