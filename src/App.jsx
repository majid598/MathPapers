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
import Blog5 from "./Pages/Blogs/Blog5";
import Blog6 from "./Pages/Blogs/Blog6";
import Blog7 from "./Pages/Blogs/Blog7";
import Blog8 from "./Pages/Blogs/Blog8";
import Blog9 from "./Pages/Blogs/Blog9";
import Blog10 from "./Pages/Blogs/Blog10";
import Blog11 from "./Pages/Blogs/Blog11";
import Blog12 from "./Pages/Blogs/Blog12";
import Blog13 from "./Pages/Blogs/Blog13";
import Blog14 from "./Pages/Blogs/Blog14";
import Blog15 from "./Pages/Blogs/Blog15";
import Blog16 from "./Pages/Blogs/Blog16";
import Blog17 from "./Pages/Blogs/Blog17";
import Blog18 from "./Pages/Blogs/Blog18";
import Blog19 from "./Pages/Blogs/Blog19";
import Blog20 from "./Pages/Blogs/Blog20";

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
        <Route
          path="/blog/Factorizing-polynomials-upto-2nd-degree"
          element={<Blog5 />}
        />
        <Route path="/blog/Graphing-Straight-Lines" element={<Blog6 />} />
        <Route
          path="/blog/Identifying-and-Classifying-quadrilaterals"
          element={<Blog7 />}
        />
        <Route
          path="/blog/Identifying-and-Classifying-triangles"
          element={<Blog8 />}
        />
        <Route path="/blog/Introduction-to-statistics" element={<Blog9 />} />
        <Route
          path="/blog/Modeling-real-world-problems-with-linear-inequalities"
          element={<Blog10 />}
        />
        <Route
          path="/blog/Multiplying-and-Dividing-decimals"
          element={<Blog11 />}
        />
        <Route
          path="/blog/Multiplying-and-dividing-fractions"
          element={<Blog12 />}
        />
        <Route
          path="/blog/Pythagorean-Theorem-and-Its-Applications"
          element={<Blog13 />}
        />
        <Route path="/blog/Rates-ratios-and-proportions" element={<Blog14 />} />
        <Route path="/blog/Solving-linear-equations" element={<Blog15 />} />
        <Route path="/blog/System-of-Linear-Equations" element={<Blog16 />} />
        <Route
          path="/blog/The-Power-of-Order-of-Operations"
          element={<Blog17 />}
        />
        <Route
          path="/blog/Transformations-Rotation-and-Reflection"
          element={<Blog18 />}
        />
        <Route
          path="/blog/Understanding-different-representations-of-numbers"
          element={<Blog19 />}
        />
        <Route
          path="/blog/Understanding-Inverse-Proportion"
          element={<Blog20 />}
        />
        <Route path="/topic/:id" element={<PracticePage />} />
      </Routes>
    </Router>
  );
};

export default App;
