import { Link, useLocation } from "react-router-dom";

const PracticePapersSidebar = () => {
  const location = useLocation();
  const links = [
    {
      name: "Addition worksheets",
      address: "/practice/addition-worksheets",
    },
    {
      name: "Subtraction worksheets",
      address: "/practice/subtraction-worksheets",
    },
    {
      name: "Multiplication worksheets",
      address: "/practice/multiplication-worksheets",
    },
    {
      name: "Long multiplication worksheets",
      address: "/practice/long-multiplication-worksheets",
    },
    {
      name: "Division worksheets",
      address: "/practice/division-worksheets",
    },
    {
      name: "Mixed operations worksheets",
      address: "/practice/mixed-operations-worksheets",
    },
  ];
  return (
    <div className="bg-red-500 w-[22rem]">
      <div className="h-[calc(100vh-6rem)] w-[20rem] top-24 left-0 fixed flex flex-col border-r-2 rounded-xl p-5">
        <Link
          to="/practice/papers"
          className={`w-full p-2 rounded-md text-start font-semibold ${
            location.pathname === "/practice/papers"
              ? "bg-white text-blue-900"
              : "hover:bg-white/30"
          }`}
        >
          All
        </Link>
        {links.map((i) => (
          <Link
            key={i}
            to={i.address}
            className={`w-full p-2 mt-0.5 rounded-md text-start font-semibold ${
              location.pathname === i.address
                ? "bg-white text-blue-900"
                : "hover:bg-white/30"
            }`}
          >
            {i.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PracticePapersSidebar;
