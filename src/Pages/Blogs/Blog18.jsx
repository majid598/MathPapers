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

      <div className="w-full my-20 flex justify-center">
        <img
          src="/assets/images/rotate_example.png"
          className="rounded-lg lg:w-1/2"
          alt=""
        />
      </div>
      <p className="lg:text-xl lg:w-3/4 mt-4 mx-auto text-center">
        Step 1: Indicate the 90° angle using a protractor from a chosen vertex
        of the source as illustrated below.
      </p>
      <div className="w-full my-20 flex justify-center">
        <img
          src="/assets/images/step 1.png"
          className="rounded-lg lg:w-1/2"
          alt=""
        />
      </div>
      <p className="lg:text-xl text-start">
        Step 2: Trace the source onto a tracing paper. <br />
        Step 3: Hold down the tracing paper with a pencil on the center of
        rotation. <br />
        Step 4: Rotate the tracing paper (anticlockwise) and copy the image.
      </p>
      <div className="w-full my-20 flex justify-center">
        <img
          src="/assets/images/step 2.png"
          className="rounded-lg lg:w-1/2"
          alt=""
        />
      </div>
      <div className="mt-12">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Reflection
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          Reflection, also known as a flip, mirrors a figure over a specified
          line called the line of reflection. The image created is a mirror
          image of the original figure.
        </p>
      </div>
      <p className="lg:text-xl text-start">
        To describe a specific rotation we need to define the following:
      </p>
      <div className="md:pl-12 pl-8">
        <p className="lg:text-xl relative lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          The mirror line - On a cartesian plane, a line is defined by a linear
          equation which can be generalized into the format y = mx + c.
        </p>
      </div>
      <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
        Example: Reflecting a letter 'L' over the y-axis on a Cartesian plane
        results in a backward 'L'. The size and shape of the letter remain
        unchanged.
      </p>
      <div className="w-full my-20 flex justify-center">
        <img
          src="/assets/images/Reflection.png"
          className="rounded-lg lg:w-1/2"
          alt=""
        />
      </div>
      <p className="lg:text-xl lg:w-3/4 md:text-start text-center">
        Every point in the image is the same distance from the line of
        reflection as their corresponding points in the source.
      </p>
      <p className="lg:text-xl lg:w-3/4 text-start">
        Example #2 : The following shows a reflection along the mirror line of
        equation y = 3x + 1
      </p>
      <div className="w-full my-20 flex justify-center">
        <img
          src="/assets/images/Reflection 2.png"
          className="rounded-lg lg:w-1/2"
          alt=""
        />
      </div>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Mathematical Properties of Rotation and Reflection
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 text-start">
          Transformations exhibit certain mathematical properties:
        </p>
        <p className="lg:text-xl lg:w-3/4 md:text-start text-center">
          Isometry: Both rotations and reflections, are isometries. This means
          they preserve distances and angles, keeping the original shape and
          size intact.
          <br />
          Orientation: Reflections and rotation change the orientation of an
          image.
        </p>
      </div>
    </div>
  );
};

export default Blog18;
