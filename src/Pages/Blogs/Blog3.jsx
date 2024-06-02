import Header from "../../Components/Header";

const Blog3 = () => {
  return (
    <div className="w-full py-40 xl:px-40 lg:px-28 md:px-14 px-8">
      <Header />
      <h1 className="text-center xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold">
        Comparing fractions
      </h1>
      <p className="lg:text-xl text-center mt-10">
        Mixed numbers and improper fractions are different ways of expressing
        fractions greater than 1. Mixed numbers are commonly used in everyday
        language when talking about quantities such as time, mass, and other
        measurements. For example, you might hear phrases like "one and a half
        kilos" or "two and three-quarter miles". This article will guide you
        through what mixed numbers and improper fractions are, and how to
        convert between these two forms.
      </p>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Improper fractions
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          In contrast to proper fractions, improper fractions are identified as
          fractions that have a numerator greater than the denominator. This
          simply is a representation of quantities that are present in amounts
          greater than a whole. <br />
          Let&apos;s imagine the diagram below shows the amount of pizza left
          over after a party. What is the quantity available as a fraction of a
          whole pizza?
        </p>
      </div>
      <div className="mt-10 w-full flex justify-center">
        <img
          src="/assets/images/pizza.png"
          className="rounded-lg lg:w-1/2"
          alt=""
        />
      </div>
      <p className="lg:text-xl mt-4 text-center">
        We can see that each whole pizza is broken down into sixths, hence each
        slice is ⅙ of a whole pizza. Now there&apos;s a total of 17 such slices
        on the table. So that can be represented as 17/6. Maybe a more intuitive
        way to represent this is by considering the number of whole pizzas
        separately and the remaining as a fraction. This is exactly what mixed
        numbers do.
      </p>
      <div className="mt-10">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Mixed numbers
        </h1>
        <p className="lg:text-xl mt-4 md:text-start text-center">
          Mixed numbers use a format that separates the number of wholes from
          the parts. <br />
          For the pizza example, we can say that there are 2 whole pizzas and 5
          sixths remaining. Hence, the mixed number is written as . <br />
          and represent the same quantity.
          <br />
          How can we convert between improper fractions and mixed numbers?
        </p>
      </div>
      <div className="mt-10">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Improper fraction to mixed number
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          An improper fraction can be converted to a mixed number by dividing
          the numerator by the denominator. The quotient will be the number of
          wholes, and the remainder is the numerator of the fractional part of
          the mixed number. Note that the denominator remains unchanged.
        </p>
      </div>
      <div className="mt-10 w-full flex justify-center">
        <img
          src="/assets/images/improper to mixed.png"
          className="rounded-lg lg:w-1/2"
          alt=""
        />
      </div>
      <p className="lg:text-xl mt-10 md:text-start text-center">
        Therefore there are 2 wholes and 5 remainder. The mixed number is
      </p>
      <div className="mt-6">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Mixed Number to improper fraction
        </h1>
        <p className="lg:text-xl mt-2 md:text-start text-center">
          To convert a mixed number to an improper fraction, we can follow the
          steps below:
        </p>
        <li>Multiply the denominator by the number of wholes</li>
        <li>Add the result from step 1 to the numerator</li>
        <li>
          The result of step 2 will be the numerator of the improper fraction
        </li>
        <li>The denominator will remain unchanged.</li>
        <p className="lg:text-xl mt-4 md:text-start text-center">
          The process of converting into an improper fraction is shown below.
        </p>
      </div>
      <div className="mt-10 w-full flex justify-center">
        <img
          src="/assets/images/mixed to improper.png"
          className="rounded-lg lg:w-1/2"
          alt=""
        />
      </div>
      <div>
        <p className="lg:text-xl mt-10 md:text-start text-center">
          Challenge: Write 150% as a fraction and then convert it to a mixed
          number A percentage is always out of 100. <br />
          150% = <br />
          This is an improper fraction as the numerator is greater than the
          denominator. To convert this into a mixed number we can simply divide
          the numerator by the denominator.
        </p>
        <p className="lg:text-xl mt-10 md:text-start text-center">
          Therefore the mixed number is . By simplifying the fraction to its
          lowest form we get:
          <br />
          150% =
        </p>
      </div>
    </div>
  );
};

export default Blog3;
