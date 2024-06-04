import { Link } from "react-router-dom";
import Header from "../Components/Header";
import PracticePapersSidebar from "../Components/PracticePapersSidebar";
import {
  additionGroupHeaders,
  additionRedirectUrls,
  additionWorksheetsImages,
  subtractRedirectUrls,
  subtractionGroupHeaders,
  subtractionWorksheetsImages,
} from "../Data/data";

const PracticePapers = () => {
  return (
    <>
      <Header />
      <div className="py-32 flex">
        <div className="">
          <PracticePapersSidebar />
        </div>
        <div className="flex w-full">
          <div className="flex flex-col">
            <h1 className="mt-1 mb-2 pl-1 text-left text-4xl font-semibold">
              Math Worksheets
            </h1>
            <p>
              These addition worksheets are similar to the
              <a
                className="mx-1 text-blue400"
                href="https://www.dadsworksheets.comhttps://www.dadsworksheets.com/2008/09/05/an-overview-of-rocket-math.html"
              >
                <i className="font-semibold text-blue-500">RocketMath</i>
              </a>
              , <i>Wolf Swamp</i> or <i>Mastering Math Facts</i> addition
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
            <div className="w-full grid gap-x-10 gap-y-2 pr-10 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
              {additionWorksheetsImages.map((img, i) => (
                <>
                  {i % 4 === 0 && (
                    <h3 className="col-span-4 text-xl font-semibold mt-6 mb-2">
                      {additionGroupHeaders[i / 4]}
                    </h3>
                  )}
                  <Link to={additionRedirectUrls[i]} className="w-full">
                    <img
                      src={img}
                      alt=""
                      className="w-full transition-all hover:scale-105"
                    />
                  </Link>
                </>
              ))}
              {subtractionWorksheetsImages.map((img, i) => (
                <>
                  {i % 4 === 0 && (
                    <h3 className="col-span-4 text-xl font-semibold mt-6 mb-2">
                      {subtractionGroupHeaders[i / 4]}
                    </h3>
                  )}
                  <Link to={subtractRedirectUrls[i]}>
                    <img
                      src={img}
                      alt=""
                      className="transition-all hover:scale-105"
                    />
                  </Link>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PracticePapers;
