import { blog1, blogs } from "../Data/data";
import BlogCard from "./BlogCard";

const BlogSec = () => {
  return (
    <div className="py-20 xl:pt-0 xl:px-20 lg:px-16 px-8 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-10">
      <BlogCard blog={blog1} className={"xl:hidden block"} />
      {blogs.map((blog) => (
        <BlogCard blog={blog} />
      ))}
    </div>
  );
};

export default BlogSec;
