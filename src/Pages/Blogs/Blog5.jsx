import Header from "../../Components/Header";

const Blog5 = () => {
  return (
    <div className="w-full py-40 xl:px-40 lg:px-28 md:px-14 px-8">
      <Header />
      <h1 className="text-center xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold">
        Factorizing quadratic expressions
      </h1>
      <p className="lg:text-xl text-center mt-10">
        When you start learning about algebra you are introduced to quadratic
        expressions. To simplify algebraic expressions and understand the
        various characteristics of quadratic functions factorization is a useful
        technique. Let&apos;s dive into how to factorize quadratic expressions.
      </p>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Identifying a quadratic expression
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          A quadratic expression is a polynomial where the highest power of the
          variable/unknown is 2. <br /> Challenge:
          <br />
          Which of the following are quadratic expressions?
        </p>
        <li className="mt-5"></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </div>
      <p className="lg:text-xl mt-10 text-center">
        From the above expression 1, 2, 4, and 5 are all quadratic expressions.
        Expression 3 is cubic as the highest power of the variable (a) is 3.
      </p>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Factorizing quadratic expressions
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4">
          Factorizing an expression is about rewriting an expression as a
          product of one or more expressions. In quadratic expressions we are
          looking to convert expressions of the form into the following form:
          <br /> <br /> <br />
          To do this we can utilize the ac method.
        </p>
      </div>
      <div className="mt-4">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          The ac method
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          Consider the example
        </p>
        <p className="lg:text-xl lg:w-3/4 mt-6">
          Step 1: Identify the coefficients a,b, and c <br />
          a is the coefficient of , therefore a = 2 <br />
          b is the coefficient of x, therefore b = -7 <br />
          c is the constant term, therefore c = 6 <br />
        </p>
        <p className="lg:text-xl lg:w-3/4 mt-12 md:text-start text-center">
          Step 2: Determine ac <br /> <br /> <br />
          ac = 12 <br /> <br />
          Step 3: Select the suitable factor pair of ac <br />
          Here we need to consider the factor pairs of -12, which can be used to
          rewrite the middle term. <br />
          The factor pairs of -12 are:
        </p>
        <li className="mt-5"></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <p className="lg:text-xl lg:w-3/4 mt-5 md:text-start text-center">
          Out of these, we need to pick the factor pairs of which the sum is
          equivalent to -7 (b). The factor -3 and -4 should be selected as -3 +
          -4 = -7.
        </p>
        <p className="lg:text-xl lg:w-3/4 mt-12 md:text-start text-center">
          Step 4: Rewrite the middle term as a sum of the selected factor pair
        </p>
        <p className="lg:text-xl lg:w-3/4 mt-12">Step 5: Factorize in pairs</p>
        <p className="lg:text-xl lg:w-3/4 mt-2 md:text-start text-center">
          Now that we have broken down the quadratic expression into 4 terms, we
          can factorize in pairs, as shown below.{" "}
        </p>
      </div>
      <div className="mt-10 w-full flex justify-center">
        <img
          src="/assets/images/factorizing_steps.png"
          className="rounded-lg lg:w-1/2 invert"
          alt=""
        />
      </div>
      <p className="lg:text-xl mt-10 text-center">
        To factorize we select the common factor out of each expression:
      </p>
      <p className="lg:text-xl mt-20">Step 6: Factorize fully</p>
      <p className="lg:text-xl mt-20 md:text-start text-center">
        We can see that (2x-3) is a common factor hence we can rearrange the
        expression as: <br /> (2x-3)(x-2)
      </p>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Special Quadratic Expressions
        </h1>
        <li className="lg:text-xl mt-6">Difference of squares</li>
        <p className="lg:text-xl lg:w-3/4 pl-7">
          The difference of squares is a special form of quadratic expressions.
          It takes the form:
        </p>
        <p className="lg:text-xl lg:w-3/4 pl-7 mt-10">
          This can be factored into:
        </p>
        <p className="lg:text-xl lg:w-3/4 pl-7 mt-10">
          Example: Factorize <br />
          This can be recognized as the difference of squares : <br />
          Therefore it can be factored as :
        </p>
        <li className="lg:text-xl mt-4">c = 0</li>
        <p className="lg:text-xl lg:w-3/4 pl-7 mt-10">
          When a quadratic expression has the form , where there is no term
          independent of x, it can be factored as follows:
        </p>
        <p className="lg:text-xl lg:w-3/4 pl-7 mt-10">
          Example: Factorize <br />
          This can be factored in by identifying the common factors :{" "}
        </p>
      </div>
    </div>
  );
};

export default Blog5;
