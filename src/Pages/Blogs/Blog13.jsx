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
          There are several proofs for the Pythagoras theorem. Below is a visual
          proof of the theorem:
        </p>
      </div>
      <div className="w-full mt-20 flex justify-center">
        <img
          src="/assets/images/Pythagoras theorem.png"
          className="rounded-lg lg:w-2/3"
          alt=""
        />
      </div>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Applications of the Pythagorean Theorem
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          The Pythagorean theorem finds practical applications, with its most
          straightforward use being the determination of the missing side of a
          right triangle. It allows for the calculation of the third side when
          two sides of a right triangle are known. The example below shows a
          right triangle with a height of 9 inches and a hypotenuse of 15
          inches. The base can be determined as shown:
        </p>
      </div>
      <div className="w-full mt-20 flex justify-center">
        <img
          src="/assets/images/Pythagoras sample.png"
          className="rounded-lg lg:w-2/3 invert"
          alt=""
        />
      </div>
      <div className="mt-20">
        <p className="lg:text-xl lg:w-3/4 mt-4 text-start">
          Some real-life applications that extend from this use case are the
          following:
        </p>
        <div className="md:pl-12 pl-8 mt-5">
          <p className="lg:text-xl relative lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            Finding the distance between two points on the Cartesian plane.
            Let&apos;s we want to find the shortest distance between (1,6) and
            (8,-3) on the cartesian plane.
          </p>
        </div>
      </div>
      <div className="w-full my-20 flex justify-center">
        <img
          src="/assets/images/application_1.png"
          className="rounded-lg lg:w-1/2"
          alt=""
        />
      </div>
      <div className="md:pl-12 pl-8 mt-5">
        <p className="lg:text-xl lg:w-3/4 md:text-start text-center">
          We can construct a right angle with the side AB as the hypotenuse.{" "}
        </p>
      </div>
      <div className="w-full my-20 flex justify-center">
        <img
          src="/assets/images/application_2.png"
          className="rounded-lg lg:w-1/2"
          alt=""
        />
      </div>
      <div className="md:pl-12 pl-8 mt-5">
        <p className="lg:text-xl lg:w-3/4 md:text-start text-center">
          This construction will make the application of the Pythagoras theorem
          apparent: The height and width of the triangle can be found by
          calculating the difference between the y-coordinates (6 - -3 = 9), and
          x-coordinates (8-1 = 7) respectively.
        </p>
        <p className="lg:text-xl lg:w-3/4 mt-5 text-start">
          Applying the Pythagoras theorem we get:
        </p>
      </div>
      <div className="md:pl-12 pl-8 mt-24">
        <p className="lg:text-xl relative lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          Determining the maximum height a ladder can reach.
        </p>
        <p className="lg:text-xl lg:w-3/4 md:text-start text-center">
          Imagine you have a ladder that is 17ft long. You need to set the base
          of the ladder at least 4 feet away from a vertical wall for stability.
          What would be the maximum height you can reach on the wall?
        </p>
        <p className="lg:text-xl mt-5 lg:w-3/4 md:text-start text-center">
          Since the wall is at right angles to the floor, the wall, floor, and
          ladder make up a right triangle as shown below.
        </p>
      </div>
      <div className="w-full my-20 flex justify-center">
        <img
          src="/assets/images/right angles.png"
          className="rounded-lg lg:w-1/2"
          alt=""
        />
      </div>
      <div className="md:pl-12 pl-8 mt-24">
        <p className="lg:text-xl mt-5 md:text-start text-center">
          We can now use the length of the ladder and the distance to the base
          to determine the vertical height(h).
        </p>
      </div>
      <div className="md:pl-12 pl-8 lg:mt-32 mt-24">
        <p className="lg:text-xl relative lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          Forming right angles
        </p>
        <p className="lg:text-xl lg:w-3/4 md:text-start text-center">
          Back in the day, when Egyptians wanted to divide land into rectangular
          plots for cultivation and other purposes, they used a clever approach
          to accurately create right angles.
        </p>
        <div className="w-full mt-5 flex justify-center">
          <img
            src="/assets/images/Pythagorean triples (1).png"
            className="rounded-lg"
            alt=""
          />
        </div>
        <p className="lg:text-xl mt-20 text-center">
          They formed triangles using ropes with side lengths that fit the
          Pythagorean theorem (Pythagorean triples such as 3, 4, and 5). By
          ensuring the lengths of the sides of the triangle adhered to this
          relationship, they could construct perfect right angles and create
          precise rectangular plots.
        </p>
      </div>
    </div>
  );
};

export default Blog13;
