import { Link } from "react-router-dom";
import Header from "../Components/Header";
import PracticePapersSidebar from "../Components/PracticePapersSidebar";
import { divisionWorksheets } from "../Data/data";

const DivisionWorksheets = () => {
  return (
    <>
      <Header />
      <div className="py-32 flex justify-center">
        <div>
          <PracticePapersSidebar />
        </div>
        <div className="flex w-full">
          <div className="flex flex-col">
            <div className="lg:px-0 md:px-10 lg:text-start text-center sm:px-8 px-4 lg:mt-0 mt-10">
              <h1 className="mt-1 mb-2 pl-1 text-4xl font-semibold">
                Division Math Facts Worksheets
              </h1>
              <p>
                These division worksheets are similar to the
                <a
                  className="mx-1 text-blue400"
                  href="https://www.dadsworksheets.comhttps://www.dadsworksheets.com/2008/09/05/an-overview-of-rocket-math.html"
                >
                  <i className="font-semibold text-blue-500">RocketMath</i>
                </a>
                , <i>Wolf Swamp</i> or <i>Mastering Math Facts</i> division
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
            <div className="w-full py-10 lg:px-0 md:px-10 px-5">
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

export default DivisionWorksheets;
