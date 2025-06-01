import { useParams } from "react-router-dom";
import blogData from "./blogData";

const BlogDetails = () => {
  const { id } = useParams();
  const post = blogData[parseInt(id)];

  if (!post) {
    return <div className=" p-8">Article not found.</div>;
  }

  return (
    <div className=" px-6 py-10 max-w-4xl mx-auto font-Rajdhani">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-xl mb-6"
      />
      <h1 className="text-[28px] md:text-[36px] font-bold mb-4">{post.title}</h1>
      <p className="text-[18px] leading-7">
        {post.content}
      </p>
    </div>
  );
};

export default BlogDetails;
