import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Activities from "./Pages/Activities";
import Blog1 from "./Pages/Blogs/Blog1";
import Blog2 from "./Pages/Blogs/Blog2";
import Game from "./Pages/Game";
import Home from "./Pages/Home";
import Practice from "./Pages/Practice";
import PracticePage from "./Pages/PracticePage";
import Blog3 from "./Pages/Blogs/Blog3";
import Blog4 from "./Pages/Blogs/Blog4";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/game/:name" element={<Game />} />
        <Route path="/practice/papers" element={<Practice />} />
        <Route path="/blog/Area-of-circles-and-sectors" element={<Blog1 />} />
        <Route path="/blog/Comparing-fractions" element={<Blog2 />} />
        <Route
          path="/blog/Converting-between-mixed-numbers-and-improper-fractions"
          element={<Blog3 />}
        />
        <Route
          path="/blog/Equivalent-Fractions-Made-Simple"
          element={<Blog4 />}
        />
        <Route path="/topic/:id" element={<PracticePage />} />
      </Routes>
    </Router>
  );
};

export default App;
