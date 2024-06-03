import Header from "../../Components/Header";

const Blog15 = () => {
  return (
    <div className="w-full py-40 xl:px-40 lg:px-28 md:px-14 px-8">
      <Header />
      <h1 className="text-center xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold">
        Solving Equations (Single variable)
      </h1>
      <p className="lg:text-xl text-center mt-10">
        Linear equations state the equality of two expressions involving a
        variable. The solution to an equation is the value of the variable that
        satisfies the given condition. We solve equations by isolating the
        variable (unknown) on one side of the equation to find its value.
      </p>
      <div className="mt-24">
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          At the heart of linear equations lies the idea of balance. The equal
          signs represent that is equal to . Our task is to isolate the variable
          x while ensuring both sides remain equal.
        </p>
        <p className="lg:text-xl lg:w-3/4 mt-5 md:text-start text-center">
          Think of the linear equation as a balanced seesaw. If we add or remove
          weight from one side, the seesaw would lose its balance and one side
          would go up. However, if we add or remove weights on both sides, it
          remains balanced. We can use this same principle to solve linear
          equations. Whatever operation we perform on one side, we must perform
          on the other to maintain balance.
        </p>
      </div>
      <div className="w-full mt-10 flex justify-center">
        <img
          src="/assets/images/Solving_equation_1.png"
          className="rounded-lg lg:w-2/3"
          alt=""
        />
      </div>
      <p className="lg:text-xl mt-20 lg:w-3/4 md:text-start text-center">
        Let&apos;s solve this linear equation step by step.{" "}
      </p>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Simplify Both Sides
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          We can start by simplifying both sides of the equation. Combine like
          terms and perform any necessary operations to make the equation as
          straightforward as possible. Notice that we aren&apos;t removing or
          adding anything extra to either side. We are just simplifying the
          expressions on both sides. Therefore, the equation will remain
          balanced during this step.
        </p>
      </div>
      <div className="w-full mt-10 flex justify-center">
        <img
          src="/assets/images/solving_equation_2.png"
          className="rounded-lg lg:w-2/3"
          alt=""
        />
      </div>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Isolate the Variable
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          Now, we need to isolate the variable (x) on one side of the equation.
          To achieve this, we must perform the inverse of each operation
          involving the variable on both sides of the equation.
        </p>
        <p className="lg:text-xl lg:w-3/4 mt-8 md:text-start text-center">
          In our example equation, we can get rid of +4 by subtracting 4 from
          that side of the equation.
        </p>
        <p className="lg:text-xl lg:w-3/4 mt-8 md:text-start text-center">
          If we do that the left side of the equation would be 4 less than the
          right side and the equation would lose the balance.{" "}
        </p>
      </div>

      <div className="w-full mt-20 flex justify-center">
        <img
          src="/assets/images/solving_equation_3.png"
          className="rounded-lg lg:w-2/3"
          alt=""
        />
      </div>

      <p className="lg:text-xl lg:w-3/4 mt-10 md:text-start text-center">
        We can subtract 4 from the right side to preserve the balance (equality)
        of the equation.
      </p>
      <div className="w-full my-10 flex justify-center">
        <img
          src="/assets/images/solving_equation_5.png"
          className="rounded-lg lg:w-2/3"
          alt=""
        />
      </div>
      <div className="mt-8">
        <p className="lg:text-xl lg:w-3/4 mt-4 text-start">
          We have to follow the same process for all the other operations
          associated with the variable.
        </p>
        <div className="md:pl-12 pl-8 mt-5">
          <p className="lg:text-xl relative lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            If something is added to the variable, we subtract it from both
            sides.
          </p>
          <p className="lg:text-xl relative lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            If the variable is multiplied by a number, we divide both sides by
            that number.
          </p>
          <p className="lg:text-xl relative lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            If it&apos;s divided by a number, we multiply both sides by that
            number.
          </p>
        </div>
      </div>
      <div className="w-full my-10 flex justify-center">
        <img
          src="/assets/images/solving_equation_4.png"
          className="rounded-lg lg:w-2/3"
          alt=""
        />
      </div>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Check Your Solution
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          We found the value of x to be 10. It is a good practice to check your
          answer by substituting the answer for x in the original equation. If
          everything simplifies to a true statement, you&apos;ve solved the
          equation correctly!
        </p>
      </div>
      <div className="mt-20">
        <h1 className="xl:text-3xl mt-4 lg:text-2xl text-xl md:text-start text-center font-semibold">
          Let's Practice with Examples
        </h1>
        <h1 className="xl:text-3xl mt-12 lg:text-2xl text-xl text-start font-semibold">
          Example #1
        </h1>
        <div className="md:pl-12 pl-8 mt-5">
          <p className="lg:text-xl relative mt-10 underline lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            Step one - Simplify both sides.
          </p>
          <p className="lg:text-xl mt-6 relative underline lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            Step two - Isolate the variable
          </p>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="xl:text-3xl mt-12 lg:text-2xl text-xl text-start font-semibold">
          Example #2
        </h1>
        <div className="md:pl-12 pl-8 mt-5">
          <p className="lg:text-xl relative mt-10 underline lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            Step one - Simplify both sides.
          </p>
          <p className="lg:text-xl ml-6 mt-6 relative underline lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            In this example, both sides are already simplified.
          </p>
          <p className="lg:text-xl relative mt-10 underline lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            Step two - Isolate the variable
          </p>
          <p className="lg:text-xl ml-6 mt-6 relative underline lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            Subtract 2x from both sides to move the variable terms to one side
          </p>
        </div>
        <p className="lg:text-xl mt-24 text-center">
          Add 4 to both sides to isolate the variable x
        </p>
        <div className="md:pl-12 pl-8">
          <p className="lg:text-xl mt-24 relative underline lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            Step three - Check the solution
          </p>
          <p className="lg:text-xl mt-24 text-center">+ 6</p>
          <p className="lg:text-xl mt-2 text-center">✅</p>
        </div>
      </div>
    </div>
  );
};

export default Blog15;
