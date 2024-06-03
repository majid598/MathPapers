import Header from "../../Components/Header";

const Blog6 = () => {
  return (
    <div className="w-full py-40 xl:px-40 lg:px-28 md:px-14 px-8">
      <Header />
      <h1 className="text-center xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold">
        Graphing Straight Lines
      </h1>
      <p className="lg:text-xl text-center mt-10">
        We can represent any straight line on a graph using the equation y = mx
        + c. This may seem complex and unintuitive at first, but this article
        will guide you through the basics of graphing straight lines step by
        step.
      </p>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          The slope-intercept form
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          The slope-intercept form is one of many forms of expressing the
          equation of a straight line. The slope-intercept form is :{" "}
        </p>
        <p className="lg:text-xl lg:w-3/4 mt-10 text-center">, where;</p>
        <li className="mt-10 lg:text-xl">
          m is the slope/gradient of the line (how steep it is)
        </li>
        <li className="lg:text-xl">
          c is the y-intercept (where the line crosses the y-axis).
        </li>
      </div>
      <p className="lg:text-xl lg:w-3/4 mt-10 md:text-start text-center">
        The slope-intercept form is convenient when we want to determine points
        that lie on a given straight line. Any pair of (x,y) values that
        satisfies the equation of a straight line are points that lie on the
        line.
      </p>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Gradient/slope(m)
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          The slope tells us how steep the line is. The larger the magnitude of
          the slope the larger the steepness. A positive slope means the line
          goes up as it moves from left to right (increasing). A negative slope
          means it goes down (decreasing).{" "}
        </p>
      </div>

      <div className="mt-10 w-full flex justify-center bg-white">
        <img
          src="/assets/images/slope (1).png"
          className="rounded-lg lg:w-1/2"
          alt=""
        />
      </div>
      <p className="lg:text-xl lg:w-3/4 mt-10 md:text-start text-center">
        Now you should be able to visualize the general direction of a straight
        line based on its slope (the m value in the line equation). However, to
        accurately graph a straight line, we need to consider additional
        features.
      </p>

      <div className="mt-10">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Intercept(c)
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          The y-intercept is the point where the line crosses the y-axis. In the
          equation, y = -x + 1, the y-intercept (c) is 1. This means the line
          crosses the y-axis at (0,1), as illustrated in the rightmost graph of
          the figure above. The equations y = 2x, and y = 0.5x do not have a “c”
          value, hence their y-intercept is at the origin. Therefore any
          equation of the form y = mx will be a straight line that passes
          through the origin (0,0).
        </p>
      </div>
      <div className="mt-10">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Graphing straight lines using a table of values
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          Now let&apos;s plot a line for the equation y = -2x-3 step by step by
          using the things we have learned so far.
        </p>
        <li className="lg:text-xl mt-4">
          We can take the y-intercept point as our first point. For this
          equation, the coordinates for the intercept are (0,-3).
        </li>
        <li className="lg:text-xl mt-1">
          Now let&apos;s use the equation to find a set of points that lie on
          the line. We&apos;ll use a table of values like the one given below.
          Here we can select arbitrary values of x, and use the equation of the
          straight line to determine the corresponding y-coordinates. Usually,
          the values of x you select will be dictated by the limits of the
          x-axis in your graph.
        </li>
      </div>
      <div className="mt-10 w-full flex md:justify-start justify-center">
        <img
          src="/assets/images/table_of_values.png"
          className="rounded-lg lg:w-1/5 sm:w-2/3 w-1/2"
          alt=""
        />
      </div>
      <li className="lg:text-xl mt-6">
        We can plug the x values into the equation and simplify to obtain the
        y-coordinates.{" "}
      </li>
      <p className="lg:text-xl lg:w-3/4 pl-7">
        Let&apos;s find the y-coordinate corresponding to the point with an
        x-coordinate of -2.
        <br /> For x = -2,
      </p>
      <p className="lg:text-xl mt-14 md:text-start text-center">
        This process can be repeated to fill the entire table of values.
      </p>
      <div className="mt-10 w-full flex md:justify-start justify-center">
        <img
          src="/assets/images/table_of_values_filled.png"
          className="rounded-lg lg:w-1/5 sm:w-2/3 w-1/2"
          alt=""
        />
      </div>
      <li className="lg:text-xl mt-12">
        Finally, we can mark the points we generated on a coordinate plane and
        plot the straight line.
      </li>
      <div className="mt-10 w-full flex justify-center">
        <img
          src="/assets/images/drawing_graph.png"
          className="rounded-lg lg:w-1/2"
          alt=""
        />
      </div>
      <p className="lg:text-xl mt-14 text-center">
        It is a good practice to verify that the straight line we have plotted
        is accurate by analyzing the properties like the slope and y-intercept
        discussed earlier. The direction of the straight line accurately
        reflects the negative slope of -2 in the equation hence the graph is
        correct.
      </p>
    </div>
  );
};

export default Blog6;
