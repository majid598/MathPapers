import Header from "../../Components/Header";

const Blog18 = () => {
  return (
    <div className="w-full py-40 xl:px-40 lg:px-28 md:px-14 px-8">
      <Header />
      <h1 className="text-center xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold">
        Understanding the Basic Transformations: Rotation and Reflection
      </h1>
      <p className="lg:text-xl text-center mt-10">
        Have you ever wondered how graphic editing apps like Photoshop performed
        basic image editing like rotation and flipping? The underlying
        principles behind this are transformations. All complicated image
        editing, scaling, and mapping applied in real-life applications extend
        from a basic understanding of simple transformations like rotations,
        reflections, dilation, etc. In this article let&apos;s explore how each
        of these transformations works, and how to transform basic shapes.
      </p>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Types of Transformations
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          Transformations can be broadly classified into four main types:
          translation, rotation, reflection, and dilation. The scope of this
          article is rotation and reflection.
        </p>
      </div>
      <div className="mt-12">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Rotation
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          Rotation is a transformation that alters the orientation of a shape or
          object. Real-life activities like turning a steering wheel to change
          the direction of a moving car, rotating a door knob, or tightening a
          screw, all involve rotation.
        </p>
      </div>
      <p className="lg:text-xl text-start">
        To describe a specific rotation we need to define the following:
      </p>
      <div className="md:pl-12 pl-8">
        <p className="lg:text-xl relative lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          The amount of rotation - Several ways can be used to define this, in
          day-to-day life we describe it using turns, such as full turn, half
          turn, quarter turn, etc., in geometry, the angle of rotation is used
          as it is more precise.
        </p>
        <p className="lg:text-xl relative lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          The center of rotation - The point about which the shape/object must
          be rotated.
        </p>
        <p className="lg:text-xl relative lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          The sense - Whether it is a clockwise or anti-clockwise rotation.
        </p>
      </div>
      <p className="lg:text-xl lg:w-3/4 mt-6 md:text-start text-center">
        To perform a rotation on paper you can follow the simple steps below.
        Let&apos;s try to rotate the image given in the diagram below about the
        origin (0,0), by an angle 90° anti-clockwise.{" "}
      </p>

      <div className="w-full flex justify-center">
        <img
          src="/assets/images/pemdas_example.png"
          className="rounded-lg lg:w-1/2 invert"
          alt=""
        />
      </div>
      <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
        Which operation should we carry out first? We could start from the left
        and perform one by one. Or we could do the easy calculations first and
        then proceed. Does it even matter? The answer is yes it does matter.
        Depending on the order the operations are performed we would get
        different answers. <br /> <br />
        To maintain consistency in calculations the world of mathematics has a
        consensus regarding how we should prioritize operations. Let’s learn the
        standard rules that are established.{" "}
      </p>

      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          PEMDAS
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          PEMDAS is an acronym that makes it easier to remember the standard
          order of operations.
        </p>
      </div>
      <div className="md:pl-12 pl-8 mt-10">
        <p className="lg:text-xl underline relative lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          Parentheses: First, perform operations inside parentheses or other
          grouping symbols.
        </p>
        <p className="lg:text-xl underline relative lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          Exponents: Next, calculate exponents and roots.
        </p>
        <p className="lg:text-xl underline relative lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          Multiplication and Division: Then, perform all multiplication and
          division from left to right.
        </p>
        <p className="lg:text-xl underline relative lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          Addition and Subtraction: Finally, perform all addition and
          subtraction from left to right.
        </p>
      </div>
      <div className="w-full mt-20 flex justify-center">
        <img
          src="/assets/images/PEMDAS_order.png"
          className="rounded-lg lg:w-1/3 md:w-1/2"
          alt=""
        />
      </div>
      <div className="mt-8">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Worked Examples
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          Let us go through some examples to solidify our understanding of the
          PEMDAS principle.
        </p>
      </div>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Example 1
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          Here, division and multiplication have a higher level than addition
          and subtraction. Therefore, the correct steps to follow are:{" "}
        </p>
      </div>
      <div className="md:pl-12 pl-8 mt-8">
        <p className="lg:text-xl relative lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          Perform multiplication and division from left to right.
        </p>
        <p className="lg:text-xl mt-10 relative lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          Perform addition and subtraction from left to right.
        </p>
      </div>
      <div className="mt-24">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Example 2
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          Since we have parenthesis in this equation, we have to prioritize the
          operations inside them first.
        </p>
        <p className="lg:text-xl lg:w-3/4 mt-14 md:text-start text-center">
          Then we can perform the next available operation in PEMDAS order which
          is multiplication in this case.
        </p>
      </div>
      <div className="mt-24">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Example 3
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-14 md:text-start text-center">
          In this expression, we can see the operations of division and
          multiplication. Since both of these operations have the{" "}
          <span className="font-semibold">same precedence</span> we just perform
          the operations from
          <span className="font-semibold"> left to right</span>.
        </p>
      </div>
      <div className="mt-24">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Example 4
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-14 md:text-start text-center">
          Let us now consider a more complex example that incorporates all of
          operations in the PEDMAS principle.
        </p>
      </div>
      <p className="lg:text-xl lg:w-3/4 mt-14 mx-auto text-center">
        First, we must evaluate the expressions inside the parentheses. Notice
        how there are multiple operations inside the parentheses. When
        evaluating operations inside the parenthesis, we must still follow the
        PEMDAS principle.
      </p>
    </div>
  );
};

export default Blog18;
