import Header from "../../Components/Header";

const Blog14 = () => {
  return (
    <div className="w-full py-40 xl:px-40 lg:px-28 md:px-14 px-8">
      <Header />
      <h1 className="text-center xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold">
        Introduction to Rates, Ratios, and Proportions
      </h1>
      <p className="lg:text-xl text-center mt-10">
        Rates, ratios, and proportions are representations that describe how two
        or more quantities are related. Scaling a recipe up or down requires a
        good understanding of proportions, and failing to hit ratios on a
        concrete mix could have a catastrophic impact on structures. Therefore,
        it is useful and equally important to be able to work with such
        relations. In this article, let&apos;s discuss how to perform
        calculations on real-life examples.
      </p>
      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Rates
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          Rates give us an idea about the change of a quantity with respect to
          another quantity. For example, if a car&apos;s distance from a
          starting point is increasing by 30 miles every hour, then the rate is
          30 mph. We can use this rate to answer questions like:
        </p>
      </div>
      <div className="md:px-16 px-8">
        <p className="lg:text-xl relative mt-6 lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
          What is the distance the car will travel in 2.5 hours?
        </p>

        <p className="lg:text-xl lg:w-3/4 md:text-start text-center">
          We can use cross-multiplication to calculate the distance as shown
          below.
        </p>
        <div className="w-full mt-10 flex justify-center">
          <img
            src="/assets/images/cross-multiplication.png"
            className="rounded-lg lg:w-1/2 invert"
            alt=""
          />
        </div>
        <div className="mt-20">
          <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
            Therefore the distance the car travels in 2.5 hours is 75 miles.
          </p>
          <p className="lg:text-xl relative mt-10 lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            How long will it take for the car to travel 99 miles?
          </p>
          <p className="lg:text-xl lg:w-3/4 md:text-start text-center">
            Here too we can use the same method, but remember that we have to
            include 99 in the miles column.
          </p>
        </div>
        <div className="w-full mt-10 flex justify-center">
          <img
            src="/assets/images/cross-multiplication (1).png"
            className="rounded-lg lg:w-1/2 invert"
            alt=""
          />
        </div>
        <p className="lg:text-xl lg:w-3/4 md:text-start text-center">
          Therefore it will take 3.3 hours to travel 99 miles at the given rate.
        </p>
      </div>

      <div className="mt-20">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Ratios
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          Let&apos;s explore the concept of ratios using one of its well-known
          applications, aspect ratios. The aspect ratio is widely used in
          describing image sizes, especially in cinematography, television,
          image editing apps, etc. The aspect ratio describes the relationship
          between an image&apos;s width and height.{" "}
        </p>
      </div>
      <div className="w-full my-10 flex justify-center">
        <img
          src="/assets/images/aspect ratios.png"
          className="rounded-lg lg:w-1/2"
          alt=""
        />
      </div>
      <div>
        <p className="lg:text-xl lg:w-3/4 mt-4 text-start">
          Some of the standard aspect ratios are:
        </p>
        <div className="md:pl-12 pl-8 mt-5">
          <p className="lg:text-xl relative lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            4:3 - Video computer displays
          </p>
          <p className="lg:text-xl relative lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            16:9 - Widescreens and smartphones (horizontal)
          </p>
          <p className="lg:text-xl relative lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            9:16 - Smartphone vertical display
          </p>
          <p className="lg:text-xl relative lg:before:top-3 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-white before:absolute before:-left-4 before:top-2.5">
            16:10 - Widescreen computer displays and smartphones (horizontal)
          </p>
        </div>
        <p className="lg:text-xl lg:w-3/4 mt-4 text-start">
          But what do these numbers mean?
        </p>
        <p className="lg:text-xl md:text-start text-center">
          Let&apos;s take a 16:9 aspect ratio. To understand any ratio we need
          to know what each number represents. In an aspect ratio, the first
          number represents the width, and the next number represents the
          height. 16:9 (read as sixteen to nine) tells us that if the width of
          the display is 16 units, then its corresponding height would be 9
          units. When carrying out calculations ratios can also represented as a
          fraction. 16:9 (sixteen to nine) would be . Note that the order of
          numbers in ratios is crucial, changing it would represent an entirely
          different relationship. <br /> <br /> We can have a deeper
          understanding of how to interpret ratios by walking through the
          following scenario: <br /> <br />
          Michael buys a widescreen television with a 16:9 display. If the TV
          displays an image that is 3840px wide, then what the the height of the
          image in px?
        </p>
      </div>
      <div className="w-full my-10 flex justify-center">
        <img
          src="/assets/images/169 aspect ratio.png"
          className="rounded-lg lg:w-2/3"
          alt=""
        />
      </div>
      <p className="lg:text-xl md:text-start text-center">
        Here we need to set up a proportion. A proportion states the equivalence
        of two ratios.{" "}
      </p>
      <p className="lg:text-xl mt-5 md:text-start text-center">
        We know that the image ratio must be proportion to the aspect ratio of
        the display, hence:
      </p>
      <p className="lg:text-xl mt-10 text-center">
        We can cross-multiply to solve for the unknown height. As illustrated
        below, the height of the image on the display would be 2160, to maintain
        the 16:9 ratio.
      </p>
    </div>
  );
};

export default Blog14;
