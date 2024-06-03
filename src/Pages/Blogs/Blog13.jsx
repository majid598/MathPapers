import Header from "../../Components/Header";

const Blog13 = () => {
  return (
    <div className="w-full py-40 xl:px-40 lg:px-28 md:px-14 px-8">
      <Header />
      <h1 className="text-center xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold">
        Pythagorean Theorem and Its Applications
      </h1>
      <p className="lg:text-xl text-center mt-10">
        The most famous theorem in geometry is the Pythagorean Theorem. Although
        the credit for discovering and formalizing the theorem goes to the
        brilliant Greek mathematician Pythagoras, its applications and use cases
        can be traced back much further and to various parts of the world.
        Let&apos;s explore what the Pythagorean Theorem is all about and examine
        some of its practical applications.
      </p>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          The Pythagorean Theorem
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          The Pythagorean theorem, describing the relationship between the three
          sides of a right triangle, is attributed to the ancient Greek
          mathematician and philosopher Pythagoras. In a right triangle, the
          Pythagorean theorem applies, stating that the square of the length of
          the hypotenuse is equal to the sum of the squares of the lengths of
          the other two sides. This relationship is fundamental in solving
          problems involving right triangles.
        </p>
        <p className="lg:text-xl lg:w-3/4 mt-10 md:text-start text-center">
          What if your friend felt extra generous and gave you more pizza
          slices? Now you have 4 times as many slices as you had originally. To
          represent that, we{" "}
          <span className="font-semibold">multiply the numerator </span> by 4
        </p>
      </div>
      <div className="w-full mt-20 flex justify-center">
        <img
          src="/assets/images/numerator.png"
          className="rounded-lg lg:w-2/3"
          alt=""
        />
      </div>
      <div className="mt-20">
        <p className="lg:text-xl lg:w-3/4 md:text-start text-center">
          Therefore, it is clear that to multiply a fraction by a whole number,
          we must
          <span className="font-semibold">
            {" "}
            multiply the fraction's numerator by the whole number
          </span>{" "}
          .
        </p>
        <h1 className="xl:text-3xl mt-10 lg:text-2xl text-xl md:text-start text-center font-semibold">
          Multiplying fractions by fractions
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-6 text-start">
          Let&apos;s consider the expression,
        </p>

        <p className="lg:text-xl lg:w-3/4 mt-24 md:text-start text-center underline">
          Let&apos;s try to solve this using the pizza example. You have 3 pizza
          slices, which represents 3/8 of the whole pizza. Now, you want to
          share half of your 3 slices with a friend.
        </p>
        <p className="lg:text-xl lg:w-3/4 mt-4 text-start">
          <span className="underline">Here's how</span> you can do it:
        </p>
        <div className="md:pl-12 pl-8 mt-5">
          <p className="lg:text-xl relative underline lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            Take your 3 slices and cut each into two equal parts.
          </p>
          <p className="lg:text-xl mt-2 relative underline lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            This will give you 6 smaller slices, each representing 1/16 of the
            whole pizza
          </p>
          <p className="lg:text-xl mt-2 relative underline lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            Since you're giving your friend half of your original 3 slices,
            you'll give 3 of these smaller 1/16 slices.
          </p>
        </div>
        <p className="lg:text-xl underline lg:w-3/4 mt-4 text-start">
          Therefore, of is
        </p>
      </div>

      <div className="w-full flex justify-center">
        <img
          src="/assets/images/multiplying (1).png"
          className="rounded-lg lg:w-2/3"
          alt=""
        />
      </div>
      <p className="lg:text-xl lg:w-3/4 md:text-start text-center">
        In general, to multiply two fractions we multiply the numerators and
        denominators of each fraction together. Using our pizza example:
      </p>

      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Dividing fractions by fractions
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          When we divide whole numbers, such as 10 divided by 5, we are
          essentially asking, "How many groups of 5 are there in 10?" In other
          words, we want to know how many times 5 can fit into 10. <br /> <br />
          We can approach dividing fractions similarly. Consider the following
          division:
        </p>
      </div>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Using a pie analogy:
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          Imagine we have two pies. One pie is divided into 3 equal slices and
          the other into 6 slices.
        </p>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          We want to compare 2 slices from the pie with 3 slices to 2 slices
          from the pie with 6 slices. How many parts of can fit into ?
        </p>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          By inspection, the answer is 2, as we can fit it two times in the
          3-slice pie. Hence, we have that:
        </p>
      </div>
      <div className="w-full mt-20 flex justify-center">
        <img
          src="/assets/images/dividing_fractions.png"
          className="rounded-lg lg:w-1/3 w-2/3"
          alt=""
        />
      </div>
      <p className="lg:text-xl mt-20 lg:w-3/4 md:text-start text-center">
        By inspection, the answer is 2 as we can fit it two times in the 3-slice
        pie. Hence we have that:
      </p>
      <p className="lg:text-xl mt-10 lg:w-3/4 md:text-start text-center">
        This visual approach becomes inefficient for more complex fraction
        divisions.{" "}
      </p>
      <p className="lg:text-xl mt-6 lg:w-3/4 md:text-start text-center">
        Instead, we can make a simple adjustment to convert division to
        multiplication.
      </p>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl text-start font-semibold">
          Step 1: Obtain the reciprocal of the divisor
        </h1>
        <p className="lg:text-xl mt-4 md:text-start text-center">
          The reciprocal of a fraction is found by inverting or flipping the
          numerator and denominator. For example, the reciprocal of is . Note:
          When working with whole numbers, we treat them as fractions with a
          denominator of 1 so the reciprocal of 6 is .
        </p>
      </div>
      <div className="mt-10">
        <h1 className="xl:text-3xl lg:text-2xl text-xl text-start font-semibold">
          Step 2: Multiply the fractions
        </h1>
        <p className="lg:text-xl mt-4 md:text-start text-center">
          Now you can multiply the dividend by the reciprocal of the divisor
          obtained in step 1 to obtain the final answer.
        </p>
        <p className="lg:text-xl mt-12 md:text-start text-center">
          Let&apos;s calculate the answer using the reciprocal. Instead of
          dividing by directly, we can multiply by the reciprocal of, which is
          to get the answer.
        </p>
      </div>
    </div>
  );
};

export default Blog13;
