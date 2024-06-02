import { useParams } from "react-router-dom";
import { topics } from "../Data/data";

const PracticePage = () => {
  const { id } = useParams();
  const topic = topics.find((item) => item._id === id);

  if (!topic) {
    return <h2>Topic not found</h2>;
  }

  return (
    <div className="w-full">
      <div className="w-full h-screen">
        <h1 className="text-5xl font-semibold text-center">{topic.title}</h1>
        <div>
            <img src={topic.workSheet} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PracticePage;
