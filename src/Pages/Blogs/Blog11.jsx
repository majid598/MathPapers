import Header from "../../Components/Header";

const Blog11 = () => {
  return (
    <div className="w-full py-40 xl:px-40 lg:px-28 md:px-14 px-8">
      <Header />
      <h1 className="text-center xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold">
        Working with decimals (Addition, subtraction, multiplication, and
        division)
      </h1>
      <p className="lg:text-xl text-center mt-10">
        Decimals are used in everyday life for money, measurements, and more.
        Therefore, it's essential to know how to add, subtract, multiply, and
        divide decimals. This article will guide you through these operations
        with worked examples.
      </p>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Adding and subtracting Decimals
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          To add or subtract decimals, align the decimal points using the column
          method, just like with whole numbers. Placeholders (zeroes) may be
          needed to ensure each column is filled. For example, when subtracting
          21.56 from 33.7, add a zero to 33.7 to make it 33.70. This helps when
          you have to borrow from a place as illustrated in the diagram below.
        </p>
      </div>
      <div className="w-full flex justify-center">
        <img
          src="/assets/images/decimal subtraction.png"
          className="rounded-lg lg:w-2/3 invert"
          alt=""
        />
      </div>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Multiplication and division of decimals by 10, 100, and 1000
        </h1>
        <div className="md:pl-12 pl-8 mt-12">
          <p className="lg:text-xl relative before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full lg:before:top-3 before:bg-white before:absolute before:-left-4 before:top-2.5">
            Multiplication
          </p>
          <p className="lg:text-xl lg:w-3/4 mt-6 md:text-start text-center">
            To multiply numbers with decimals by powers of 10, like 10, 100, and
            1000 it is convenient to visualize using a place value chart. <br />{" "}
            <br />
            Note that each time we multiply by 10, the value of each digit
            increases thus it shifts one place to the left. The following place
            value chart illustrates how the digits of 23.56 shift when
            multiplied by 10.
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <img
          src="/assets/images/place_value_chart_multiplying.png"
          className="rounded-lg lg:w-2/3"
          alt=""
        />
      </div>

      <div className="md:pl-12 pl-8 mt-5">
        <p className="lg:text-xl mt-20 lg:w-3/4 text-start">
          The result is 235.6.
        </p>
        <p className="lg:text-xl mt-20 lg:w-3/4 md:text-start text-center">
          100 is 10 x 10, which is identical to multiplying a number by 10
          twice. Hence, to multiply 1.25 by 100 we have to shift each digit two
          places to the left, to give 125. <br /> <br /> You can apply the same
          approach to multiply any decimal number by any power of 10. <br />{" "}
          <br />
          Challenge: Multiply 2.27 by 1000. (Note: Include placeholders for
          empty places.)
        </p>
        <p className="lg:text-xl lg:w-3/4 text-start">Answer:</p>
      </div>

      <div className="w-full flex justify-center">
        <img
          src="/assets/images/place value chart multiply.png"
          className="rounded-lg lg:w-2/3"
          alt=""
        />
      </div>
      <div className="md:pl-12 pl-8 mt-5">
        <p className="lg:text-xl relative lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          Division
        </p>
        <p className="lg:text-xl lg:w-3/4 md:text-start text-center mt-5">
          Division can be thought of as the opposite of multiplication. When we
          divide a decimal by powers of 10, the value decreases, hence the
          digits shift to the right. The following diagram illustrates how to
          divide 105 by 100.
        </p>
      </div>

      <div className="mt-10 w-full flex justify-center">
        <img
          src="/assets/images/Images for slides (4).png"
          className="rounded-lg lg:w-2/3"
          alt=""
        />
      </div>
      <div className="md:pl-12 pl-8">
        <p className="lg:text-xl lg:w-3/4 md:text-start text-center">
          Here the result is 1.05.
        </p>
      </div>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Multiplication of numbers with decimals
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          To multiply decimals, convert them into whole numbers by multiplying
          by powers of 10. <br /> <br />
          Consider the multiplication of 2.25 by 1.4. 2.25 can be multiplied by
          100 to convert it to the whole number 225. While 1.4 can be multiplied
          by 10 to convert it to 14.{" "}
          <span className="font-semibold">
            Remember that we will be undoing these changes at the end!
          </span>{" "}
          <br /> <br />
          After converting the decimals to whole numbers, we can multiply them.{" "}
          <br /> <br /> We multiplied the multipliers by 100 and 10 for our
          convenience but this means that we have a result that is larger than
          the actual result, hence we need to undo the changes. We multiplied
          the multiplier by 100 and also by 10, so to reverse this we must
          divide the result by 100 and 10 (or directly divide by 1000). <br />{" "}
          <br />
          Using the place value chart method for division we can divide 3150 by
          1000 to get 3.15 as shown below.
        </p>
        <p className="lg:text-xl text-start mt-5">Thus 2.25 x 1.4 = 3.15</p>
      </div>
      <div className="mt-10">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Division of numbers with decimals
        </h1>
        <h1 className="xl:text-3xl lg:text-2xl mt-3 text-xl md:text-start text-center font-semibold">
          Consider the division of 23.85 by 1.8
        </h1>
        <div className="md:pl-12 mt-5 pl-8">
          <p className="lg:text-xl relative mt-6 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            Convert the divisor to a whole number by multiplying both the
            divisor and the dividend by the same power of 10. Here, multiply by
            10:
          </p>
          <div className="md:pl-12 pl-8">
            <p className="lg:text-xl relative mt-2 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
              1.5 becomes 15
            </p>
            <p className="lg:text-xl relative  before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
              23.85 becomes 238.5.
            </p>
          </div>
          <p className="lg:text-xl relative mt-2 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            Perform the long division as you would with whole numbers. Remember
            to place the decimal point in the quotient in line with that of the
            dividend.
          </p>
        </div>
      </div>
      <div className="mt-10 w-full flex justify-center">
        <img
          src="/assets/images/division.png"
          className="rounded-lg lg:w-2/3 invert"
          alt=""
        />
      </div>
      <div className="md:pl-12 mt-20 pl-8">
        <p className="lg:text-xl relative mt-6 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          Final answer: Unlike multiplication, if we make the same change to
          both the divisor and the dividend, the changes balance out, and thus
          we don&apos;t have to make any further adjustments to the answer.
        </p>
        <p className="lg:text-xl relative mt-2 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5"></p>
      </div>
    </div>
  );
};

export default Blog11;
