import Header from "../../Components/Header";

const Blog16 = () => {
  return (
    <div className="w-full py-40 xl:px-40 lg:px-28 md:px-14 px-8">
      <Header />
      <h1 className="text-center xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold">
        Solving System of Linear Equations
      </h1>
      <p className="lg:text-xl text-center mt-10">
        Systems of equations are a collection of one or more relationships
        between two or more variables. A solution/s to such a system of
        equations is values of variables that satisfy all equations. In this
        article, we&apos;ll explore how to solve systems of linear equations
        with two variables.
      </p>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Substitution
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          Substitution involves replacing one variable in terms of another to
          yield an equation that consists of a single variable.
          <br />
          <br />
          Consider the following system of linear equations:
        </p>
      </div>
      <div className="w-full mt-10 flex justify-center">
        <img
          src="/assets/images/linear.png"
          className="rounded-lg lg:w-1/2"
          alt=""
        />
      </div>
      <div className="mt-20">
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          We can replace y in the 2nd equation using the expression for y in the
          1st equation.{" "}
        </p>
        <p className="lg:text-xl mt-8 lg:w-3/4 md:text-start text-center">
          Now the above equation can be simplified, and solved to determine the
          value of x.
        </p>
      </div>
      <div className="lg:mt-32 mt-20">
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          After determining the value of x, it can be substituted in any one of
          the equations in the system to determine the value of y.
        </p>
        <p className="lg:text-xl mt-6 lg:w-3/4 text-start">
          Let&apos;s substitute x =9 in the first equation: <br />y =
        </p>
        <p className="lg:text-xl mt-10 lg:w-3/4 text-start">
          Hence the solution to the system of equations is x = 9 and y = .
        </p>
      </div>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Elimination
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          Another approach to solving a system of equations is through
          elimination. This method involves adding or subtracting equations
          systematically to eliminate one of the variables. The steps to be
          followed in solving the following system are given below:Another
          approach to solving a system of equations is through elimination. This
          method involves adding or subtracting equations systematically to
          eliminate one of the variables. The steps to be followed in solving
          the following system are given below:
        </p>
      </div>
      <div className="w-full mt-10 flex justify-center">
        <img
          src="/assets/images/simultaneous_elimination.png"
          className="rounded-lg lg:w-1/2 invert"
          alt=""
        />
      </div>
      <div className="w-full flex justify-center">
        <img
          src="/assets/images/simultaneous (2).png"
          className="rounded-lg lg:w-1/2 invert"
          alt=""
        />
      </div>
      <p className="lg:text-xl lg:w-3/4 mt-4 mx-auto text-center">
        Sometimes the original forms of the equations may not have variables
        with identical coefficients. The following system is one such example.
      </p>
      <div className="w-full mt-24 flex justify-center">
        <img
          src="/assets/images/linear (2).png"
          className="rounded-lg lg:w-1/2"
          alt=""
        />
      </div>
      <p className="lg:text-xl md:text-start mt-20 text-center">
        In this case, we can select any variable to eliminate. To eliminate a
        variable we have to rewrite the equations so that the coefficients of
        the selected variable in both equations are identical. <br />
        <br />
        Let&apos;s try to eliminate the variable x. In the first equation, the
        coefficient of x is 1, and in the second it is 3. We can multiply both
        sides of the first equation by 3, to match the coefficients of x.{" "}
      </p>
      <p className="lg:text-xl text-start mt-8">The new equation would be:</p>
      <p className="lg:text-xl md:text-start mt-16 text-center">
        To eliminate the variable x, we can subtract the 2nd equation from the
        modified equation (1&apos;)
      </p>
      <div className="w-full mt-24 flex justify-center">
        <img
          src="/assets/images/simultaneous_2 (2).png"
          className="rounded-lg lg:w-1/2 invert"
          alt=""
        />
      </div>
      <p className="lg:text-xl text-start mt-10">
        The solution to the system of equations is x = -2 and y = -6.
      </p>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Graphical Approach
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          The graphical approach is a visual method of solving systems of
          equations. The solutions of simultaneous equations with two unknown
          variables correspond to the point of intersection of their graphs.
        </p>
        <p className="lg:text-xl text-start mt-6">
          Let&apos;s use the graphical approach to solve the following system of
          equations:
        </p>
      </div>
      <div className="w-full mt- flex justify-center">
        <img
          src="/assets/images/graphical_system.png"
          className="rounded-lg lg:w-1/2 invert"
          alt=""
        />
      </div>
      <p className="lg:text-xl lg:w-3/4 mx-auto tracking-tight text-center">
        Both the equations in the system are linear equations, hence they are
        represented as straight lines of a cartesian plane. Once we plot the
        graphs of the two equations, we can obtain the solution to the system.
      </p>
      <div className="w-full mt-20 flex justify-center">
        <img
          src="/assets/images/graphical approach.png"
          className="rounded-lg lg:w-1/2 invert"
          alt=""
        />
      </div>
      <p className="lg:text-xl lg:w-3/4 mx-auto tracking-tight text-center">
        The coordinates of the point of intersection of the two lines are
        (0.5,1). Hence the solution to the system of equations is x = 0.5 and y
        = 1.
      </p>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Inconsistent systems
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          Not all systems of equations can be solved. Inconsistent systems are
          those that do not have any solutions. To intuitively understand why
          some pairs of equations might not have a solution, consider the
          graphical representation of their solutions. <br /> <br />
          Imagine a system of equations where the two lines are parallel. Since
          parallel lines never intersect, there is no point that satisfies both
          equations simultaneously. Therefore, this system has no solution.{" "}
          <br /> <br />
          Algebraically, you can determine if a system of two equations is
          inconsistent by comparing the slopes of the lines. If the slopes are
          equal but the y-intercepts are different, the lines are parallel and
          the system is inconsistent.
        </p>
      </div>
    </div>
  );
};

export default Blog16;
