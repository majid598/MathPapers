import { useState } from "react";

const PracticePapersSidebar = () => {
  const topics = [
    "Addition worksheets",
    "Subtraction worksheets",
    "Multiplication worksheets",
    "Long multiplication worksheets",
    "Division worksheets",
    "Mixed operations worksheets",
  ];
  const [selectedTopic, setSelectedTopic] = useState("All");
  return (
    <div className="bg-red-500 w-[22rem]">
      <div className="h-[calc(100vh-6rem)] w-[20rem] top-24 left-0 fixed border-r-2 rounded-xl p-5">
        <button
          onClick={() => setSelectedTopic("All")}
          className={`w-full p-2 rounded-md text-start font-semibold ${
            selectedTopic === "All" && "bg-white text-blue-900"
          }`}
        >
          All
        </button>
        {topics.map((i) => (
          <button
            key={i}
            onClick={() => setSelectedTopic(i)}
            className={`w-full p-2 rounded-md text-start font-semibold ${
              selectedTopic === i && "bg-white text-blue-900"
            }`}
          >
            {i}{" "}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PracticePapersSidebar;
