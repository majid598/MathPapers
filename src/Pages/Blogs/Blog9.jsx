import Header from "../../Components/Header";

const Blog9 = () => {
  return (
    <div className="w-full py-40 xl:px-40 lg:px-28 md:px-14 px-8">
      <Header />
      <h1 className="text-center xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold">
        Understanding Statistics: Mean, Median, and Mode Explained with
        Real-Life Scenarios
      </h1>
      <p className="lg:text-xl text-center mt-10">
        You might be wondering, "What is statistics?" Simply put, statistics is
        the branch of math that helps us collect, analyze, and make sense of
        data. It's a valuable skill that enables you to make logical decisions
        without feeling overwhelmed by the vast amounts of information at your
        fingertips. In this article, we'll explore some core concepts of
        statistics, such as mean, median, and mode, and discover how these tools
        can help us gain meaningful insights from data.
      </p>
      <p className="lg:text-xl md:text-start text-center mt-5">
        Let&apos;s create a scenario to help us understand the three statistical
        measures.{" "}
      </p>
      <p className="lg:text-xl md:text-start text-center mt-5">
        Imagine you are the head of the loan department in a startup finance
        company. Your job is to assess whether a borrower can be approved for a
        loan based on their past 5 months' earnings.
      </p>
      <p className="lg:text-xl md:text-start text-center mt-5">
        Here are the earnings of Client A and Client B over the last 6 months:
      </p>
      <p className="lg:text-xl md:text-start text-center mt-20">
        The data shows that the earnings can vary each month. So to make an
        assessment we need a statistical parameter- a single number that
        describes the monthly earnings of each borrower. Do we pick the highest
        earnings, do we pick the lowest, or do we select the earnings from a
        month randomly?{" "}
      </p>
      <div className="mt-6">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Mean
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          The mean/average is a statistic that tries to balance out the highs
          and lows to get the overall value of all data points. The following
          diagram illustrates how it can be done:
        </p>
      </div>
      <div className="mt-10 w-full flex justify-center">
        <img
          src="/assets/images/Mean.png"
          className="rounded-lg lg:w-2/3 invert"
          alt=""
        />
      </div>
      <p className="lg:text-xl lg:w-3/4 mt-20 md:text-start text-center">
        Let&apos;s consider Borrower A, we collect the earnings of each month to
        a pool ($71,000 in total), and then equally distribute them between each
        month. We can see that on “average” each month Borrower A has made
        $14,200. This is the mean monthly earnings for Borrower A. <br /> <br />{" "}
        Similarly, for Borrower B, it is $5,000. <br /> <br />
        The mean suggests that Borrower A has a much higher earning than
        Borrower B, but upon close inspection, you&apos;d see that Borrower A
        made a significantly large earning in March. It may have been a gift or
        he could have won the lottery that month. This may be misleading, so we
        may need more statistical parameters before concluding.
      </p>
      <div className="mt-6">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Median
        </h1>
        <p className="lg:text-xl lg:w-3/4 mt-4 md:text-start text-center">
          The earnings for March of Borrower A is an outlier. Outliers are
          values in a data set that stand out (either too high or too low) from
          the rest of the data. The presence of the outlier causes the mean to
          be skewed (biased). <br /> <br />
          The median is an alternative statistical measure. The median is the
          middle value of a dataset arranged in ascending order.
        </p>
      </div>
      <div className="mt-10 w-full flex justify-center">
        <img
          src="/assets/images/Median.png"
          className="rounded-lg lg:w-2/3 invert"
          alt=""
        />
      </div>
      <p className="lg:text-xl mt-20 md:text-start text-center">
        Median for A - $3,800 <br /> <br />
        Median for B - $5,200 <br /> <br />
        Note how the median tells a completely different story than the mean
        regarding the earnings of A and B. This is because the median is not
        sensitive to outliers as it does not consider the extremes.
        <br /> <br /> However, one downside of the median is that it
        doesn&apos;t consider the overall data.
      </p>
      <div className="mt-12">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Mode
        </h1>
        <p className="lg:text-xl mt-4 md:text-start text-center">
          The mode is the most occurring value in the dataset. <br /> <br />
          For Borrower B the mode is $5,200 as it has occurred in 3 out of 5
          months. <br /> <br />
          For Borrower A, there is no mode, as all values are unique.
        </p>
      </div>
      <div className="mt-12">
        <h1 className="xl:text-3xl lg:text-2xl text-xl md:text-start text-center font-semibold">
          Overall insights
        </h1>
        <p className="lg:text-xl mt-4 md:text-start text-center">
          Borrower A: The outlier heavily influences the mean, giving a skewed
          perception of income. The median provides a better measure of typical
          earnings, while the absence of a mode highlights variability. <br />{" "}
          <br />
          Borrower B: Both the mean and median reflect steady earnings, with the
          mode confirming the most common monthly income. This consistent
          pattern is ideal for loan assessments.
        </p>
      </div>
    </div>
  );
};

export default Blog9;
