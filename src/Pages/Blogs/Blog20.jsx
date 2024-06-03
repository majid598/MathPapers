import Header from "../../Components/Header";

const Blog20 = () => {
  return (
    <div className="w-full py-40 xl:px-40 lg:px-28 md:px-14 px-8">
      <Header />
      <h1 className="text-center xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold">
        Understanding Inverse Proportion: Real-Life Applications and
        Calculations{" "}
      </h1>
      <p className="lg:text-xl text-center mt-10">
        Being able to mathematically interpret the behavior of one quantity in
        relation to another is highly useful in many real-life applications. For
        example, if we know the quantity of flour it takes to make one large
        pizza, we can calculate the amount of flour required to make three
        pizzas. However, not all quantities behave in a straightforward manner
        like flour and the number of pizzas. In this article, we&apos;ll explore
        how to calculate quantities in indirectly proportional relationships.{" "}
      </p>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Inverse Proportion
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          Two quantities are considered to be in inverse proportion if one
          quantity increases as the other decreases, or vice versa. Consider a
          scenario of painting a house. If it takes 5 hours for a painter to
          paint a room, what would happen to the time taken if 2 painters are
          working simultaneously? The time decreases. Unlike in the example of
          the pizza recipe, here as the number of painters increases, the time
          taken to complete the job decreases. In this scenario, the two
          quantities—number of painters and time taken—show an inverse
          proportion relationship.
        </p>
      </div>
      <div className="mt-5">
        <h1 className="xl:text-3xl lg:text-2xl text-xl text-start font-semibold">
          Challenge:
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 text-start">
          Which of the following quantities shows an indirect proportion
          relationship
        </p>
      </div>
      <div className="w-full my-20 flex justify-center">
        <img
          src="/assets/images/quiz (2).png"
          className="rounded-lg lg:w-1/2"
          alt=""
        />
      </div>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Answer:
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          Scenarios 1 and 3 are examples of inverse proportion. In scenario 2,
          the two quantities, weight and height, are not related to each other.
          In scenario 4, the tips collected increase with the number of
          customers served hence is a direct proportion, not an inverse.
          <br /> <br />
          Now that we know how to identify quantities that are in inverse
          proportion, let&apos;s look at how to perform calculations in such
          scenarios.
        </p>
      </div>
      <div className="mt-5">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          The inverse proportional formula
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          Let us take the average speed of a car and the number of minutes it
          takes to complete a lap on a race track as x and y respectively.
        </p>
      </div>
      <p className="lg:text-xl lg:w-3/4 mt-20 text-start">
        Clearly, as x (the speed) increases, y (the time taken) decreases, hence
        the quantities are in inverse proportion. But let&apos;s say we wanted
        to calculate how much time the car will take to complete the lap at an
        average speed of 80 km/h or we would like to know at what average speed
        the car needs to travel to complete the lap within 30 minutes. This is
        where the inverse proportional formula comes into play:
        <br /> <br />
        The inverse proportional formula is used to mathematically represent an
        inverse proportion relationship. The general form of the inverse
        proportional formula is:
      </p>
      <div className="w-full flex justify-center">
        <img
          src="/assets/images/inverse proportion formula.png"
          className="rounded-lg lg:w-1/2 invert"
          alt=""
        />
      </div>
      <p className="lg:text-xl md:text-start text-center">
        Where y and x are the quantities in an inverse proportion relationship
        and “k” is the constant of proportionality.{" "}
      </p>
      <p className="lg:text-xl text-start">
        So the formula relating s and t would be:
      </p>
      <div className="w-full flex justify-start">
        <img
          src="/assets/images/inverse proportion formula (1).png"
          className="rounded-lg lg:w-52 w-40 invert"
          alt=""
        />
      </div>
      <div className="mt-20">
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          We can use a pair of the recorded values to determine the value of k.{" "}
          <br /> <br />
          Since we know that at an average speed of 40 km/h, the time taken to
          complete (y) was 36, we can plug these values into the formula to
          obtain k.
        </p>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          36 = k/40 <br />
          k = 40*36 <br />k = 1440
        </p>
        <p className="lg:text-xl lg:w-3/4 mt-5 text-start">
          So we can update the formula as:
        </p>
      </div>
      <div className="mt-12">
        <p className="lg:text-xl lg:w-3/4 mt-5 text-start">
          Now we can use the formula to answer the questions proposed earlier:
        </p>
        <div className="md:pl-12 pl-8 mt-5">
          <p className="lg:text-xl font-semibold relative lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            How long will the car take to complete the lap at an average speed
            of 80 km/h?
          </p>
          <p className="lg:text-xl lg:w-3/4 mt-2 text-start">
            Replace s (the average speed) with 80, and solve for t.{" "}
          </p>
        </div>
        <div className="md:pl-12 pl-8 mt-24">
          <p className="lg:text-xl lg:w-3/4 mt-2 text-start">
            So it will take 18 minutes.
          </p>
          <p className="lg:text-xl mt-4 font-semibold relative lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            At what average speed does the car need to travel to complete the
            lap within 30 minutes?
          </p>
          <p className="lg:text-xl lg:w-3/4 mt-2 text-start">
            This time let&apos;s replace t (the time taken) with 30 and solve
            for s.
          </p>
          <p className="lg:text-xl lg:w-3/4 mt-24 text-start">
            So the car must travel at an average speed of 48 km/h.
          </p>
        </div>
        <p className="lg:text-xl lg:w-3/4 mx-auto text-center mt-20">
          By understanding and applying the concept of inverse proportion, we
          can solve various real-life problems where one quantity changes
          inversely with another.
        </p>
      </div>
    </div>
  );
};

export default Blog20;
