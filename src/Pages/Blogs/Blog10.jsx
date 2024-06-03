import Header from "../../Components/Header";

const Blog10 = () => {
  return (
    <div className="w-full py-40 xl:px-40 lg:px-28 md:px-14 px-8">
      <Header />
      <h1 className="text-center xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold">
        Modeling real-world problems with linear inequalities
      </h1>
      <p className="lg:text-xl text-center mt-10">
        Imagine you're planning a road trip with a budget of $200 for fuel. The
        cost of gas is $4 per liter, and your car's fuel efficiency is 20 km per
        liter. You need to figure out the maximum distance you can travel
        without exceeding your budget. This is a practical situation where
        understanding and solving inequalities becomes essential. Inequalities
        help us make informed decisions by providing a way to evaluate and
        compare different possibilities within given constraints. In this
        article, we will explore how inequalities work and how they can be
        applied to real-life scenarios like this one.
      </p>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          What is an inequality?
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          Inequalities are like equations, but instead of showing that two
          things are equal, they show that one thing is bigger, smaller, or at
          most equal to another. We use these symbols when writing inequalities:
        </p>
      </div>
      <div className="md:pl-12 pl-8 mt-12">
        <p className="relative before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          {">"} means "greater than"
        </p>
        <p className="relative before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          {"<"} means "less than"
        </p>
        <p className="relative before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          {" "}
        </p>
      </div>
      <p className="lg:text-xl mt-20 lg:w-3/4 md:text-start text-center">
        Let's see how we can model an inequality for the road trip scenario.
      </p>
      <div className="md:pl-12 pl-8 mt-5">
        <p className="relative before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          Assemble the data
        </p>
        <div className="md:pl-12 mt-4 pl-6">
          <p className="relative before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            Your car's fuel efficiency is 20 km per liter.
          </p>
          <p className="relative before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            The cost of gas is $4 per liter.
          </p>
          <p className="relative before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            You have a budget of $200.
          </p>
        </div>
        <p className="relative mt-5 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          Assign letters for the variables:{" "}
          <span className="underline">
            Let d be the distance you can travel in miles.
          </span>
        </p>
        <p className="relative underline mt-5 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          Model the inequality:
        </p>
        <p className="relative mt-5 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          The total cost of gas should be less than or equal to $200.
        </p>
        <p className="relative before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          The liters of gas required would be
        </p>
        <p className="relative underline before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          This gives us the inequality:
        </p>
      </div>

      <div className="w-full flex justify-center">
        <img
          src="/assets/images/inequality.png"
          className="rounded-lg lg:w-2/3 invert"
          alt=""
        />
      </div>
      <div className="md:pl-12 pl-8 mt-5">
        <p className="relative underline before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          Solve the inequality:
        </p>
        <p className="relative mt-5 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          <span className="underline">We can solve inequalities</span> in a
          similar approach to solving linear{" "}
          <span className="underline"> equations</span>.
        </p>
        <p className="relative before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          The objective is to{" "}
          <span className="underline">
            isolate the variable on one side of the inequality by
          </span>{" "}
          carrying out
          <span className="underline"> inverse operations</span>
        </p>
        <p className="relative before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          A key difference when dealing with inequalities is that when you
          divide or multiply an inequality by a negative number the inequality
          sign flips.
        </p>
        <p className="relative underline before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          Let&apos;s solve the inequality we got for the road trip .
        </p>
      </div>

      <div className="mt-10 w-full flex justify-center">
        <img
          src="/assets/images/inequality (1).png"
          className="rounded-lg lg:w-2/3 invert"
          alt=""
        />
      </div>
      <div className="md:pl-12 mt-20 pl-8">
        <p className="relative before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          This determines that you are able to travel up to 1000 km without
          exceeding your budget.
        </p>
      </div>
      <p className="lg:text-xl mt-20 font-semibold text-center">
        Real-world scenarios
      </p>
      <div className="md:pl-12 mt-20 pl-8">
        <p className="relative underline font-semibold before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          Budgeting: Figuring out how much you can spend without exceeding your
          budget.
        </p>
        <p className="lg:text-xl mt-2 md:text-start text-center">
          You have $50 for a week&apos;s allowance. If you want to buy a book
          that costs $30, you use an inequality to see how much you can spend on
          other things:
        </p>
      </div>
      <div className="md:pl-12 mt-20 pl-8">
        <p className="relative underline font-semibold before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          Traveling: Ensuring you don&apos;t exceed a certain weight limit in
          your luggage when traveling by air plane.
        </p>
        <p className="lg:text-xl mt-2 md:text-start text-center">
          Your luggage currently weighs 35kg, but the airline limit is 20kg. You
          need to remove some weight w to comply with the limit.
        </p>
      </div>

      <div className="mt-10 w-full flex justify-center">
        <img
          src="/assets/images/inequality_steps.png"
          className="rounded-lg lg:w-2/3 invert"
          alt=""
        />
      </div>
      <div className="md:pl-12 mt-20 pl-8">
        <p className="lg:text-xl mt-2 md:text-start text-center">
          When we solve this inequality we have to divide both sides by -1. Note
          that the inequality sign flips as mentioned earlier.
          <br /> <br />
          In conclusion, must remove at least 15kg of luggage to stay within the
          weight limit.
        </p>
        <p className="relative mt-6 underline font-semibold before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          Cooking and Baking: Instructions in recipes can be represented using
          inequalities.
        </p>
        <p className="lg:text-xl mt-2 md:text-start text-center">
          The instructions for a cake recipe mention the cake must be baked for
          at least 25 minutes but under 30 minutes. We can represent the
          constraints for the baking time using an inequality.
        </p>
      </div>
    </div>
  );
};

export default Blog10;
