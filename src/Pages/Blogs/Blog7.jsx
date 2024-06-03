import Header from "../../Components/Header";

const Blog7 = () => {
  return (
    <div className="w-full py-40 xl:px-40 lg:px-28 md:px-14 px-8">
      <Header />
      <h1 className="text-center xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold">
        Identifying and Classifying quadrilaterals
      </h1>
      <p className="lg:text-xl text-center mt-10">
        Did you know that the shapes we see every day like the page of a book,
        painting, photo frames, TV screens, etc are quadrilaterals? There are
        different types of quadrilaterals with unique characteristics. In this
        article, let&apos;s explore the most common types of quadrilaterals and
        learn how to identify them.
      </p>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          What is a quadrilateral?
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          A quadrilateral is a four-sided polygon. All quadrilaterals have the
          following set of properties:
        </p>
        <div className="md:pl-12 pl-8 mt-5">
          <p className="relative before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            It has 4 sides, vertices, and angles.
          </p>
          <p className="relative before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            The sum of the four interior angles is 360°.
          </p>
          <p className="relative before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            The perimeter of a quadrilateral is the sum of all four sides.
          </p>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          The Parallelogram
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          A parallelogram is defined as a quadrilateral with parallel opposite
          sides.
        </p>
      </div>
      <div className="mt-10 w-full flex justify-center">
        <img
          src="/assets/images/Parallelogram.png"
          className="rounded-lg lg:w-2/3"
          alt=""
        />
      </div>
      <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
        Apart from having characteristics of any quadrilateral, parallelograms
        have the following unique properties:
      </p>
      <div className="md:pl-12 pl-8 mt-5">
        <p className="relative before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          Opposite angles are equal
        </p>
        <p className="relative before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          Opposite sides are equal in length
        </p>
        <p className="relative before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          The diagonals of a parallelogram bisect each other
        </p>
      </div>
      <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
        The above diagram illustrates a general parallelogram, but there are
        other parallelograms with special features that are classified
        separately. The special parallelograms are:
      </p>
      <div className="md:pl-12 pl-8">
        <p className="lg:text-xl lg:w-3/4 relative before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5 mt-4 md:text-start text-center">
          <span className="font-bold">The Rhombus</span> - The rhombus closely
          resembles the parallelogram illustrated earlier, but the unique
          feature that makes the rhombus special is that all four sides are of
          equal length.
        </p>
        <p className="lg:text-xl lg:w-3/4 relative before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5 mt-4 md:text-start text-center">
          <span className="font-bold">The rectangle</span> - The rectangle is
          unique because of its interior angles. The interior angles of a
          rectangle are all right angles. Note that, rectangles are a special
          type of parallelogram, hence have all the characteristics of a
          parallelogram mentioned above.
        </p>
        <p className="lg:text-xl lg:w-3/4 relative before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5 mt-4 md:text-start text-center">
          <span className="font-bold">The square</span> - The square is special
          because it is a regular polygon, i.e all of its sides and interior
          angles are equal. A square is also a special type of parallelogram as
          it is a polygon with parallel opposite sides.
        </p>
      </div>
      <div className="mt-10 w-full flex justify-center">
        <img
          src="/assets/images/special Parallelograms.png"
          className="rounded-lg lg:w-1/2"
          alt=""
        />
      </div>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          The Trapezoid
        </h1>
        <p className="lg:text-xl mt-4 md:text-start text-center">
          The presence of a single pair of parallel edges can uniquely identify
          a trapezoid/trapezium. Following are some variants of trapezoids.
        </p>
      </div>

      <div className="mt-10 w-full flex justify-center">
        <img
          src="/assets/images/trapezoid_variants.png"
          className="rounded-lg lg:w-1/2"
          alt=""
        />
      </div>
      <p className="lg:text-xl lg:w-3/4 mx-auto mt-10 text-center">
        The isosceles trapezoid shown below is a special variant of the
        trapezoid where the non-parallel pair of sides are equal in length.{" "}
      </p>

      <div className="mt-10 w-full flex justify-center">
        <img
          src="/assets/images/trapezoid isoscles.png"
          className="rounded-lg lg:w-1/2"
          alt=""
        />
      </div>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          The Kite/Diamond
        </h1>
        <p className="lg:text-xl mt-2 mb-4 md:text-start text-center">
          The kite (or diamond) shape resembles both a kite and a diamond. It's
          important not to confuse a kite with a rhombus. A key difference is
          that a kite does not have any parallel sides. One important property
          of a kite is that it has two pairs of adjacent sides that are equal in
          length, resulting in one line of symmetry.
        </p>
      </div>
      <div className="mt-10 w-full flex justify-center">
        <img
          src="/assets/images/Kite.png"
          className="rounded-lg lg:w-2/3"
          alt=""
        />
      </div>
      <div className="mt-10">
        <p className="lg:text-xl font-bold lg:w-3/4 mt-4 md:text-start text-center">
          Summary of Properties
        </p>
      </div>
    </div>
  );
};

export default Blog7;
