import { Link } from "react-router-dom";
import Header from "../Components/Header";
import PracticePapersSidebar from "../Components/PracticePapersSidebar";
import {
  additionWorksheets,
  divisionWorksheets,
  multiplicationWorksheets,
  subtractionWorksheets
} from "../Data/data";

const PracticePapers = () => {
  return (
    <>
      <Header />
      <div className="py-32 flex">
        <div>
          <PracticePapersSidebar />
        </div>
        <div className="flex w-full">
          <div className="flex flex-col">
            <div className="lg:px-0 lg:text-start text-center md:px-10 sm:px-8 px-4 lg:mt-0 mt-10">
              <h1 className="mt-1 mb-2 pl-1 text-4xl font-semibold">
                Math Worksheets
              </h1>
              <p>
                These Math worksheets are similar to the
                <a
                  className="mx-1 text-blue400"
                  href="https://www.dadsworksheets.comhttps://www.dadsworksheets.com/2008/09/05/an-overview-of-rocket-math.html"
                >
                  <i className="font-semibold text-blue-500">RocketMath</i>
                </a>
                , <i>Wolf Swamp</i> or <i>Mastering Math Facts</i> Math
                worksheets used at many schools. These are typically one minute,
                timed tests. Try my super entertaining
                <a
                  className="mx-1 font-semibold text-blue-500"
                  href="https://www.dadsworksheets.comhttps://www.dadsworksheets.com/timer.html"
                >
                  online timer
                </a>{" "}
                if you or your kids are into silly sounds!
              </p>
            </div>
            <div className="w-full py-10 pt-0 lg:px-0 md:px-10 px-5">
              {additionWorksheets.map((sheet, i) => (
                <div className="mt-10">
                  <h2 className="sm:text-xl font-semibold mb-2">
                    {sheet.title}
                  </h2>
                  <div className="w-full grid md:gap-10 gap-5 lg:pr-10 sm:grid-cols-4 grid-cols-2">
                    {sheet.sheets?.map((item) => (
                      <Link to={item.url} key={item.url} className="w-full">
                        <img
                          src={item.img}
                          alt=""
                          className="w-full transition-all duration-300 hover:scale-105"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              {subtractionWorksheets.map((sheet, i) => (
                <div className="mt-10">
                  <h2 className="sm:text-xl font-semibold mb-2">
                    {sheet.title}
                  </h2>
                  <div className="w-full grid md:gap-10 gap-5 lg:pr-10 sm:grid-cols-4 grid-cols-2">
                    {sheet.sheets?.map((item) => (
                      <Link to={item.url} key={item.url} className="w-full">
                        <img
                          src={item.img}
                          alt=""
                          className="w-full transition-all duration-300 hover:scale-105"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              {multiplicationWorksheets.map((sheet, i) => (
                <div className="mt-10">
                  <h2 className="sm:text-xl font-semibold mb-2">
                    {sheet.title}
                  </h2>
                  <div className="w-full grid md:gap-10 gap-5 lg:pr-10 sm:grid-cols-4 grid-cols-2">
                    {sheet.sheets?.map((item) => (
                      <Link to={item.url} key={item.url} className="w-full">
                        <img
                          src={item.img}
                          alt=""
                          className="w-full transition-all duration-300 hover:scale-105"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              {divisionWorksheets.map((sheet, i) => (
                <div className="mt-10">
                  <h2 className="sm:text-xl font-semibold mb-2">
                    {sheet.title}
                  </h2>
                  <div className="w-full grid md:gap-10 gap-5 lg:pr-10 sm:grid-cols-4 grid-cols-2">
                    {sheet.sheets?.map((item) => (
                      <Link to={item.url} key={item.url} className="w-full">
                        <img
                          src={item.img}
                          alt=""
                          className="w-full transition-all duration-300 hover:scale-105"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PracticePapers;
