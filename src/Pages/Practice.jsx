import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { topics } from "../Data/data";

const Practice = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="w-full min-h-screen pt-32 p-20">
        <div className="w-full grid grid-cols-3 gap-10">
          {topics.map((topic) => (
            <Link
              to={`/topic/${topic._id}`}
              className="link w-full min-h-[60vh] relative rounded-xl border-2 overflow-hidden"
            >
              <div className="w-full h-full">
                <img src={topic.workSheet} alt="" />
              </div>
              <div className="box flex flex-col justify-end p-5 items-center w-full h-full absolute bg-black/30 transition-all duration-300 opacity-0 hover:opacity-100 top-0 left-0">
                <div className="absolute text-center -bottom-full transition-all duration-300">
                  <h1 className="text-2xl font-semibold text-black">
                    {topic.title}
                  </h1>
                  <p className="text-black">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Temporibus dolorum est expedita voluptatem tempore. At
                    deleniti asperiores fugiat nostrum exercitationem inventore
                    sunt. Tempore deleniti quia nesciunt iste fuga! Alias,
                    ullam.
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Practice;
