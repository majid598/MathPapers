import Header from "../../Components/Header";

const Blog1 = () => {
  return (
    <div className="w-full py-40 xl:px-40 lg:px-28 md:px-14 px-8">
      <Header />
      <h1 className="text-center xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold">
        Area of Circles and Sectors (with visual proof)
      </h1>
      <p className="lg:text-xl text-center mt-10">
        Have you ever wondered how to find the area of a circle? Knowing how to
        calculate the area of circles is an important skill with many practical
        uses in everyday life. For instance, it can help you figure out how much
        paint you need to cover a round table or the amount of fabric required
        to make a circular tablecloth. Understanding the area of circular
        playgrounds can help when planning activities. With so many circular
        objects around us, learning how to find the area of a circle is quite
        useful! This article will guide you on how to find the area of any
        circle easily.
      </p>
      <div className="mt-20 md:text-start text-center">
        <h1 className="xl:text-3xl lg:text-2xl text-xl font-semibold">
          What is a circle?
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4">
          It is a round flat shape that has no corners or edges. A circle is
          practically a single curved line. All the points in this curved line
          are equidistant from a point called the Centre.{" "}
        </p>
        <h1 className="xl:text-3xl lg:text-2xl text-xl font-semibold mt-10">
          What is a sector?
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4">
          A circle sector is like a slice of a circle. It's a part bounded by
          two radii (plural of radius) and an arc.
        </p>
      </div>
      <div className="mt-10 w-full justify-center">
        <img
          src="/assets/images/sector.png"
          className="rounded-lg mx-auto"
          alt=""
        />
      </div>
      <div className="mt-20 md:text-start text-center">
        <h1 className="xl:text-3xl lg:text-2xl text-xl font-semibold">
          Area of a circle
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4">
          The area is the amount of space inside the circle. To find the area of
          a circle, we use a special formula.
        </p>
      </div>
      <div className="mt-28 md:text-start text-center">
        <h4 className="md:text-2xl text-xl font-semibold">
          Let&apos;s see how we can derive this formula step by step:
        </h4>
        <div className="md:pl-12 pl-8">
          <p className="lg:text-xl underline relative lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            First, we can take a circle and divide it into 16 sectors
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/assets/images/sector-formula.png"
            className="rounded-lg lg:w-1/2"
            alt=""
          />
        </div>
        <div className="md:pl-12 pl-8">
          <p className="lg:text-xl relative lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            <span className="underline">
              Now let&apos;s arrange the sectors in an approximate rectangular
              shape.
            </span>{" "}
            The length is approximately half the total circumference of the
            circle.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/assets/images/rec.png"
            className="rounded-lg lg:w-1/2"
            alt=""
          />
        </div>
        <div className="md:pl-12 pl-8">
          <p className="lg:text-xl relative lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            If we divide the circle into smaller sectors the shape will closely
            resemble a rectangle where the
            <span className="underline">length of the rectangle</span> is half
            of the circumference and its width is equivalent to the radius. The
            circumference
            <span className="underline">
              of a circle is , so half of that is .
            </span>
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/assets/images/3.png"
            className="rounded-lg lg:w-1/2"
            alt=""
          />
        </div>
        <li className="py-20 xl:px-20 lg:px-16 md:px-8 list-outside lg:w-2/3">
          The area
          <span className="underline">
            of a rectangle can be calculated by .{" "}
          </span>{" "}
          Therefore
          <span className="underline">the area of this rectangle we</span>
          created <span className="underline">is</span>
        </li>
        <h2 className="md:text-2xl text-xl font-semibold text-center">
          Area of Rectangle
        </h2>
        <h2 className="md:text-2xl text-xl font-semibold text-center">
          Area of Rectangle
        </h2>
        <p className="lg:p-20 py-10 text-center lg:text-xl">
          Note that the approximated rectangle was made by combining the sectors
          of the circle. Thus the area of the rectangle should be equivalent to
          that of the circle. Hence we can derive that:
        </p>
        <div className="mt-20">
          <h1 className="xl:text-3xl lg:text-2xl text-xl font-semibold underline">
            Area of a sector
          </h1>
          <p className="lg:text-xl lg:w-3/4 mt-4 underline">
            To find the area of a sector, we need to know what fraction of the
            whole circle the sector is. For example, if the sector is
            one-quarter (1/4) of the whole circle the area of the sector is
            simply 1/4th of the area of the circle.
          </p>
        </div>
        <div className="mt-20">
          <h1 className="xl:text-3xl lg:text-2xl text-xl font-semibold underline">
            Finding the fraction for a sector
          </h1>
          <p className="lg:text-xl lg:w-3/4 mt-4">
            <span className="underline">
              There are 360 degrees in a circle.
            </span>{" "}
            The central angle of the sector (the angle between the radii that
            make up the sector) can be used to determine what fraction of the
            whole circle it is.
          </p>
        </div>
        <h2 className="xl:text-3xl lg:text-2xl text-xl font-semibold text-center mt-10">
          Area of Sector =
        </h2>
        <p className="lg:text-xl text-center mt-4">
          Following is an illustration of how to calculate the area of a sector
          with a central angle of 45°.
        </p>
      </div>

      <div className="flex justify-center mt-20">
        <img
          src="/assets/images/area_sector_45.png"
          className="rounded-lg lg:w-1/2"
          alt=""
        />
      </div>
    </div>
  );
};

export default Blog1;
