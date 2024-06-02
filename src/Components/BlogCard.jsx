import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogCard = ({ blog, className }) => {
  return (
    <div
      key={blog.title}
      className={`card w-full border-2 p-5 rounded-lg ${className}`}
    >
      <div className="w-full h-52 rounded-lg overflow-hidden">
        <img src={blog.img} className="w-full h-full" alt="" />
      </div>
      <div className="mt-4">
        <h2 className="mg:text-2xl text-xl font-semibold">{blog.title}</h2>
        <p className="mt-3 md:text-lg text-sm">{blog.desc}</p>
      </div>
      <div className="items-end flex justify-end">
        <Link
          to={`/blog/${blog.address}`}
          className="mt-10 flex items-center gap-2 px-4 py-2 rounded-md border transition-all duration-300 hover:bg-white hover:text-black font-semibold"
        >
          Read More <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
