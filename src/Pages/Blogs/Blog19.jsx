import Header from "../../Components/Header";

const Blog19 = () => {
  return (
    <div className="w-full py-40 xl:px-40 lg:px-28 md:px-14 px-8">
      <Header />
      <h1 className="text-center xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold">
        Exploring the Various Ways to Represent Numbers
      </h1>
      <p className="lg:text-xl text-center mt-10">
        When working with numbers, it's important to understand that numbers can
        be represented in many different ways. Some representations have
        historical significance while others have emerged for specific use
        cases. In this article, you'll learn about several common
        representations of numbers.
      </p>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Numerals
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          The standard form of numbers is the most common and straightforward
          way of writing and reading numbers. It is the method we use every day
          when dealing with numbers in various aspects of our lives, such as on
          clocks, in books, or in money.
          <br />
          <br />
          In standard form, a number is written using digits 0 through 9, with
          each digit occupying a specific place value based on its position in
          the number. Ex – the number two hundred and fifty-six is represented
          by 256.
        </p>
      </div>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Place value charts
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          Place value is the value of each digit in a number based on its
          position. Place value charts are a way to represent numbers in a way
          that we can more intuitively understand the place values of each
          digit. The place value of a digit increases by ten times as we move
          right to left on the place value chart.
        </p>
      </div>
      <div className="w-full my-20 flex justify-center">
        <img
          src="/assets/images/place_value.png"
          className="rounded-lg lg:w-1/2"
          alt=""
        />
      </div>
      <p className="lg:text-xl lg:w-3/4 mt-4 mx-auto text-center">
        Let&apos;s take the number 234 and find the place value of each digit
        using a place value chart.
      </p>
      <div className="w-full flex justify-center">
        <img
          src="/assets/images/place value with counters (1).png"
          className="rounded-lg lg:w-1/2"
          alt=""
        />
      </div>
      <div className="mt-10">
        <p className="lg:text-xl text-start">
          2 is in the hundreds place and has a value of 200
        </p>
        <p className="lg:text-xl text-start">
          3 is in the tens place and has a value of 30
        </p>
        <p className="lg:text-xl text-start">
          4 is in the ones and has a value of 4
        </p>
        <p className="lg:text-xl text-start">
          The sum of each digit's place value gives the overall value of the
          number:
        </p>
        <p className="lg:text-xl text-start">200 + 30 + 4 = 234</p>
      </div>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Tally marks
        </h1>
        <p className="lg:text-xl mt-4 md:text-start text-center">
          Tally marks are a simple and efficient way to count and record
          numbers. Imagine a classroom election where students are voting for
          their favorite fruit: apples, bananas, or oranges. The teacher can use
          tally marks to keep track of the votes.
        </p>
        <p className="lg:text-xl mt-10 md:text-start text-center">
          As each student votes, the teacher adds a single vertical line next to
          the corresponding fruit for each vote. At every fifth vote for each
          fruit, the teacher draws a diagonal line across the previous 4
          vertical lines to signify a group of 5.
        </p>
      </div>
      <div className="w-full my-20 flex justify-center">
        <img
          src="/assets/images/tally_marks.png"
          className="rounded-lg lg:w-1/2"
          alt=""
        />
      </div>
      <p className="lg:text-xl text-center">
        Tally marks are impractical to represent larger numbers, as it takes
        more time and space.
      </p>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Counters
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          Counters are physical objects used to represent numbers. They can be
          anything from beads to blocks to coins. Using counters helps us
          visualize numbers and understand basic arithmetic operations. One of
          the oldest and most effective tools for using counters is the abacus.
        </p>
      </div>
      <div className="w-full my-20 flex justify-center">
        <img
          src="/assets/images/abacus.jpg"
          className="rounded-lg lg:w-1/3 md:w-1/2"
          alt=""
        />
      </div>
      <p className="lg:text-xl lg:w-3/4 mt-4 mx-auto text-center">
        The abacus is a counting frame that has been used for centuries in
        various cultures to aid in calculations. An abacus consists of a
        rectangular frame with rods or wires, each rod represents a place value
        and has 10 beads in each rod.
        <br /> <br />
        Let&apos;s assume the bottom rod represents the ones place and the rows
        above represent subsequently increasing place values. The representation
        below shows how to represent 2,534 using counters.
      </p>
      <div className="w-full my-20 flex justify-center">
        <img
          src="/assets/images/abacus_rep.png"
          className="rounded-lg lg:w-1/2"
          alt=""
        />
      </div>
    </div>
  );
};

export default Blog19;
