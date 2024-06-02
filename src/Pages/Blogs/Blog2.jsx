import Header from "../../Components/Header";

const Blog2 = () => {
  return (
    <div className="w-full py-40 xl:px-40 lg:px-28 md:px-14 px-8">
      <Header />
      <h1 className="text-center xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold">
        Comparing fractions
      </h1>
      <p className="lg:text-xl text-center mt-10">
        Fractions are a way of representing parts of wholes. Comparing the size
        of fractions is not as straightforward as comparing numbers as there are
        several components like the numerator and denominator that come into
        play. Let&apos;s find out various methods of comparing fractions and use
        them to solve problems.
      </p>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          The numerator and denominator
        </h1>
        <p className="lg:text-xl mt-4 md:text-start text-center">
          A fraction consists of a numerator and denominator. The denominator
          tells us how many parts the whole is split into, and the numerator
          tells us how many of those parts are in the quantity being
          represented. For example, if you scored 7/13 on a test, that means the
          test was broken down into a total of 13 points, of which you earned 7.
        </p>
        <p className="lg:text-xl mt-10 md:text-start text-center">
          Now, what if you scored 8/15 on another test? Did you do better,
          equally well, or worse than the last test? If you simply look at the
          number of points scored, it might seem like you did better on the
          second test. However, you might argue that the second test had a
          larger number of points. This is why both the numerator and
          denominator of fractions play a role when comparing their sizes.
          Let&apos;s look at different ways of comparing fractions and then come
          back to answer this question.
        </p>
      </div>
      <h1 className="xl:text-3xl lg:text-2xl text-xl font-semibold mt-20 md:text-start text-center">
        Visual Inspection
      </h1>
      <p className="lg:text-xl mt-4 md:text-start text-center">
        Representing fractions using bar models or fraction circles can be
        helpful. For example, the following fraction circles represent ¾ and ⅔
        respectively, it is apparent that ¾ is a bigger portion of the whole.{" "}
        <br />
        You can also incorporate fraction walls like the one below to compare
        various fractions easily.
      </p>
      <div className="mt-10 w-full flex justify-center">
        <img
          src="/assets/images/comparing-fractions (2).png"
          className="rounded-lg lg:w-1/2"
          alt=""
        />
      </div>
      <div className="mt-20">
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          Notice how ⅔ on the bar model is slightly shorter than ¾ on the bar
          model.
        </p>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          While visual inspection is convenient, it doesn't always work. Think
          about the original question where we tried to compare the scores on
          two tests. It would be extremely difficult to draw fraction circles to
          represent 8/15 and 7/13 by hand. Thus, we need an alternative approach
          that is more versatile.
        </p>
      </div>
      <div className="mt-12">
        <h4 className="xl:text-3xl lg:text-2xl text-xl font-semibold md:text-start text-center">
          Numerical approach
        </h4>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          If you think of fractions with identical denominators like 3/4 and
          1/4, or 10/90 and 29/90 these pairs of fractions are easy to compare.
          We know for certain that 3 quarters are bigger than 1 quarter because
          we are evaluating similar-sized parts.
        </p>
        <p className="lg:text-xl lg:w-3/4 mt-10 md:text-start text-center">
          We can build upon this concept to help us compare fractions with
          different denominators. Let&apos;s take 2/3 and 7/15, we can convert
          2/3 into an equivalent fraction with a denominator of 15, by
          multiplying the numerator and denominator by 5. Hence 2/3 is
          equivalent to 10/15. This process is like taking the slices of thirds,
          and breaking it further down so that we have equally sized parts as
          the fraction being compared with.{" "}
        </p>
        <div className="flex justify-center mt-20">
          <img
            src="/assets/images/sample.png"
            className="rounded-lg lg:w-1/2"
            alt=""
          />
        </div>
        <p className="lg:text-xl mt-10 md:text-start text-center">
          Now we can conclude that 10 parts out of 15, is larger than 7 parts
          out of 15.
        </p>
        <p className="lg:text-xl mt-10 md:text-start text-center">
          So now let&apos;s try to answer the question posed at the beginning of
          this article. Is 17/25 a better score than 8/15.
        </p>
        <p className="lg:text-xl mt-10 md:text-start text-center">
          We need to pick a common denominator for both fractions. The best
          choice is the LCM of 25 and 15, which is 75. So let&apos;s convert
          each fraction to equivalent forms with a denominator of 75
          <br />{" "}
          <span className="font-semibold mt-3 inline-block">17/25 = 51/75</span>
          <br />{" "}
          <span className="font-semibold mt-3 inline-block">8/15 = 48/75</span>
        </p>
        <div className="flex justify-center mt-20">
          <img
            src="/assets/images/comparing_fractions.png"
            className="rounded-lg lg:w-1/2"
            alt=""
          />
        </div>
        <p className="lg:text-xl mt-10 text-center">
          Now we can inspect the numerators and conclude that 17/25 is larger
          than 8/15, hence scoring 17 out of 25 is a better achievement.{" "}
        </p>
      </div>
    </div>
  );
};

export default Blog2;
