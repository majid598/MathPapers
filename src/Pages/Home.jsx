import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import BlogSec from "../Components/BlogSec";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { blog1 } from "../Data/data";
import BlogCard from "../Components/BlogCard";

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="w-full pt-24">
        <div className="w-full h-full xl:grid gap-10 grid-col-2 text-center py-10 pb-6 md:px-20 px-10">
          <div className="relative h-[70vh] w-full">
            <img
              src="/assets/images/hero.jpg"
              alt=""
              className="w-full h-full"
            />
            <div className="flex flex-col items-center justify-center w-full h-full absolute top-0 left-0">
              <h1 className="lg:text-5xl md:text-4xl text-3xl font-semibold">
                The World Of Math Edueks
              </h1>
              <h4 className="mt-2 xl:text-2xl text-xl">
                Unlocking the Power of Math Education
              </h4>
              <p className="mt-5 lg:w-2/3 md:text-lg text-sm">
                Explore the limitless possibilities of learning and teaching
                mathematics in an innovative digital environment. Dive into
                interactive lessons, engage with cutting-edge resources, and
                embark on a journey to mastery in The World Of Math Edueks.
              </p>
              <Link
                to={"/practice/papers"}
                className="lg:py-3 lg:px-6 py-2 md:px-5 px-4 flex gap-4 items-center mt-6 border rounded-md hover:bg-white font-semibold hover:text-black transition-all duration-300"
              >
                Practice Papers <FaArrowRight className="text-sm" />
              </Link>
            </div>
          </div>
          <div className="p-10 xl:flex pl-0 pt-0 w-full hidden flex-col gap-10">
            <BlogCard blog={blog1} className={"text-start xl:block hidden"} />
          </div>
        </div>
      </div>
      <BlogSec />
      <Footer />
    </div>
  );
};

export default Home;
