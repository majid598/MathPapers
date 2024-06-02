import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="w-full">
      <nav
        className={`w-full h-24 flex xl:px-20 lg:px-16 md:px-10 px-8 pl-0 items-center z-[999] transition-all duration-500 justify-between border-b-2 fixed top-0 right-0 ${
          isScrolled && "bg-blur"
        }`}
      >
        <Link to="/" className="h-full">
          <img src="/assets/images/logo.png" className="h-full invert" alt="" />
        </Link>
        <div>
          <Link
            to={"/activities"}
            className="lg:py-3 lg:px-6 py-2 md:px-5 px-4 rounded-md border transition-all duration-300 hover:bg-white hover:text-black font-semibold"
          >
            Activities
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
