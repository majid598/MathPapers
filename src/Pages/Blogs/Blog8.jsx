import Header from "../../Components/Header";

const Blog8 = () => {
  return (
    <div className="w-full py-40 xl:px-40 lg:px-28 md:px-14 px-8">
      <Header />
      <h1 className="text-center xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold">
        Identifying and Classifying triangles
      </h1>
      <p className="lg:text-xl text-center mt-10">
        Triangles are shapes that you see everywhere in daily life. Cloth
        hangers, flags, roofs, sandwiches, pizza slices, pyramids, and prisms
        resemble triangles. Triangles have various characteristics that are used
        to classify them into various groups. In this article, let&apos;s
        explore the ways we can classify triangles.
      </p>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          What is a triangle?
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          A polygon is a 2D shape made of straight line segments, forming a
          closed shape. The minimum number of straight-line segments needed to
          create a polygon is three, making a triangle the most basic polygon.
          The main features of a triangle are its three edges, three vertices,
          and three interior angles. Triangles can be classified into various
          groups based on the size of their angles and the length of their
          edges.
        </p>
      </div>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Classifying based on sides
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          We can classify triangles into three main groups by comparing the
          lengths of the three sides.
        </p>
        <div className="md:pl-12 pl-8 mt-5">
          <p className="relative before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            If the three sides of a triangle are equal in length, it is
            classified as an equilateral triangle. Equilateral triangles have
            three lines of symmetry.
          </p>
          <p className="relative before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            If only two sides of a triangle are identical, it is classified as
            an isosceles triangle. Isosceles triangles have two identical angles
            and a single line of symmetry.
          </p>
          <p className="relative before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            If none of the sides of a triangle are identical, then it is
            classified as a scalene triangle. A scalene triangle is not
            symmetrical.
          </p>
        </div>
      </div>

      <div className="mt-10 w-full flex justify-center">
        <img
          src="/assets/images/Images for slides (3).png"
          className="rounded-lg lg:w-2/3 invert"
          alt=""
        />
      </div>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Classifying based on angles
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          The interior angles are the angles formed between each pair of legs of
          the triangle. By comparing the size of the interior angles we can
          categorize triangles as follows:
        </p>
        <div className="md:pl-12 pl-8 mt-5">
          <p className="relative before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            If the three angles of a triangle are acute, it is classified as an
            acute triangle. An acute angle is an angle that is less than a right
            angle (90o). For example, an acute triangle may consist of the
            following triplet of angles : 40o: 60o : 80o.
          </p>
          <p className="relative before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            If one angle of a triangle is obtuse, i.e. greater than a right
            angle, it is classified as an obtuse triangle. For example, a
            triangle with interior angles 30o: 40o : 110o is an obtuse triangle.
          </p>
          <p className="relative before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            If one of the angles of a triangle is a right angle (90o), it is
            classified as a right triangle. Right triangles have many unique
            characteristics described in famous theorems like the Pythagorean
            theorem and branches of math like trigonometry.
          </p>
        </div>
      </div>

      <div className="mt-10 w-full flex justify-center">
        <img
          src="/assets/images/Images for slides (3).png"
          className="rounded-lg lg:w-2/3 invert"
          alt=""
        />
      </div>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Overlapping features
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          Some triangles have properties that fit into more than one of the
          classifications we discussed. Here are a couple of examples:
        </p>
        <div className="md:pl-12 pl-8 mt-5">
          <p className="relative before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            Equilateral Triangle: A triangle with all sides equal in length. We
            know this is an equilateral triangle, but because all its angles are
            also equal (60° each), it can also be classified as an acute
            triangle. So, equilateral triangles are a type of acute triangle.
          </p>
          <p className="relative before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            45°-45°-90° Triangle: This triangle has a right angle, so it&apos;s a
            right triangle. Additionally, the two legs are equal in length
            because the other two angles are both 45°. This makes it an
            isosceles triangle as well.
          </p>
        </div>
      </div>

      <div className="mt-10 w-full flex justify-center">
        <img
          src="/assets/images/isosceles right.png"
          className="rounded-lg lg:w-2/3 invertModeling-real-world-problems-with-linear-inequalities"
          alt=""
        />
      </div>
    </div>
  );
};

export default Blog8;
