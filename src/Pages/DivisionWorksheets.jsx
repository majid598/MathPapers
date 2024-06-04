import { Link } from "react-router-dom";
import Header from "../Components/Header";
import PracticePapersSidebar from "../Components/PracticePapersSidebar";
import {
  divisionGroupHeaders,
  divisionRedirectUrls,
  divisionWorksheetsImages,
} from "../Data/data";

const DivisionWorksheets = () => {
  return (
    <>
      <Header />
      <div className="py-32 flex justify-center">
        <div className="ml-16 2xl:ml-0">
          <PracticePapersSidebar />
        </div>
        <div className="flex w-full">
          <div className="flex flex-col">
            <h1 className="mt-1 mb-2 pl-1 text-left text-4xl font-semibold">
              Division Math Facts Worksheets
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
            <div className="grid grid-cols-4">
              {divisionWorksheetsImages.map((img, i) => (
                <>
                  {i % 4 === 0 && (
                    <h3 className="col-span-4 text-xl font-semibold mt-6 mb-2">
                      {divisionGroupHeaders[i / 4]}
                    </h3>
                  )}
                  <Link to={divisionRedirectUrls[i]}>
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

export default DivisionWorksheets;
