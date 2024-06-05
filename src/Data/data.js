import data from "../games.json";
const {
  HiddenObjectGames,
  Skill,
  TripeaksGolf,
  BrainGames,
  MahjongSolitaire,
  Puzzles,
  Match3Games,
  Shooting,
  Pinball,
  MahjongGames,
  Board,
  TowerDefense,
  Arkanoid,
  Sports,
  Retro,
  Billiards,
  Platform,
  Snake,
  PacMaze,
} = data;

export const games = [
  ...HiddenObjectGames,
  ...Skill,
  ...TripeaksGolf,
  ...BrainGames,
  ...MahjongSolitaire,
  ...Puzzles,
  ...Match3Games,
  ...Shooting,
  ...Pinball,
  ...MahjongGames,
  ...Board,
  ...TowerDefense,
  ...Arkanoid,
  ...Sports,
  ...Retro,
  ...Billiards,
  ...Platform,
  ...Snake,
  ...PacMaze,
];

export const blog1 = {
  img: "area_sector_45.png",
  title: "Area of Circles and Sectors ",
  desc: "Have you ever wondered how to find the area of a circle? Knowing how to calculate the area of circles is an important skill with many practical uses in everyday life. For instance, it can help you figure out how much paint...",
  address: "Area-of-circles-and-sectors",
};

export const blogs = [
  {
    img: "comparing-fractions (2).png",
    title: "Comparing fractions",
    desc: "Fractions are a way of representing parts of wholes. Comparing the size of fractions is not as straightforward as comparing numbers as there are several components like the numerator and denominator that come into...",
    address: "Comparing-fractions",
  },
  {
    img: "mixed.png",
    title: "Converting between mixed numbers and...",
    desc: "Mixed numbers and improper fractions are different ways of expressing fractions greater than 1. Mixed numbers are commonly used in everyday language when talking about quantities such as time, mass...",
    address: "Converting-between-mixed-numbers-and-improper-fractions",
  },
  {
    img: "equivalent.jpg",
    title: "Equivalent Fractions Made Simple",
    desc: "Fractions are numbers that are used to represent parts of wholes. Sometimes that have dissimilar numerators and denominators can represent the same amount. Such fractions are known as equivalent...",
    address: "Equivalent-Fractions-Made-Simple",
  },
  {
    img: "factorizing.jpg",
    title: "Factorizing polynomials upto 2nd degree",
    desc: "When you start learning about algebra you are introduced to quadratic expressions. To simplify algebraic expressions and understand the various characteristics of quadratic functions factorization is a useful technique. Let’s dive into how to factorize quadratic expressions...",
    address: "Factorizing-polynomials-upto-2nd-degree",
  },
  {
    img: "graphical.png",
    title: "Graphing Straight Lines",
    desc: "We can represent any straight line on a graph using the equation y = mx + c. This may seem complex and unintuitive at first, but this article will guide you through the basics of graphing straight lines step by step...",
    address: "Graphing-Straight-Lines",
  },
  {
    img: "identifying.png",
    title: "Identifying and Classifying quadrilaterals",
    desc: "Did you know that the shapes we see every day like the page of a book, painting, photo frames, TV screens, etc are quadrilaterals? There are different types of quadrilaterals with unique characteristics. In this article, let’s explore the most common types of quadrilaterals and learn how to identify them...",
    address: "Identifying-and-Classifying-quadrilaterals",
  },
  {
    img: "triangles.png",
    title: "Identifying and Classifying triangles",
    desc: "Triangles are shapes that you see everywhere in daily life. Cloth hangers, flags, roofs, sandwiches, pizza slices, pyramids, and prisms resemble triangles. Triangles have various characteristics that are used to classify them into various groups. In this article, let’s explore the ways we can classify triangles.",
    address: "Identifying-and-Classifying-triangles",
  },
  {
    img: "understanding.png",
    title: "Introduction to statistics",
    desc: "You might be wondering, 'What is statistics?' Simply put, statistics is the branch of math that helps us collect, analyze, and make sense of data. It's a valuable skill that enables you to make logical decisions without feeling overwhelmed by the vast amounts of information at your...",
    address: "Introduction-to-statistics",
  },
  {
    img: "modelinglinearineqintro.jpg",
    title: "Modeling real-world problems with linear...",
    desc: "Imagine you're planning a road trip with a budget of $200 for fuel. The cost of gas is $4 per liter, and your car's fuel efficiency is 20 km per liter. You need to figure out the maximum distance you can travel without exceeding your budget. This is a practical situation where...",
    address: "Modeling-real-world-problems-with-linear-inequalities",
  },
  {
    img: "decimal.jpg",
    title: "Multiplying and Dividing decimals",
    desc: "Decimals are used in everyday life for money, measurements, and more. Therefore, it's essential to know how to add, subtract, multiply, and divide decimals. This article will guide you through these operations with worked examples...",
    address: "Multiplying-and-Dividing-decimals",
  },
  {
    img: "maxresdefault.jpg",
    title: "Multiplying and dividing fractions",
    desc: "Understanding fractions is a fundamental part of mathematics, and learning how to multiply and divide them is crucial for students. This article will help you master these skills with step-by-step explanations and visual examples...",
    address: "Multiplying-and-dividing-fractions",
  },
  {
    img: "pythagoras_applications_2.png",
    title: "Pythagorean Theorem and Its Applications",
    desc: "The most famous theorem in geometry is the Pythagorean Theorem. Although the credit for discovering and formalizing the theorem goes to the brilliant Greek mathematician Pythagoras, its applications and use cases can be traced back much further and to various parts of the...",
    address: "Pythagorean-Theorem-and-Its-Applications",
  },
  {
    img: "ratio.png",
    title: "Rates_ ratios_ and proportions",
    desc: "Rates, ratios, and proportions are representations that describe how two or more quantities are related. Scaling a recipe up or down requires a good understanding of proportions, and failing to hit ratios on a concrete mix could have a catastrophic impact on structures. Therefore, it is...",
    address: "Rates-ratios-and-proportions",
  },
  {
    img: "linear-equation.webp",
    title: "Solving linear equations",
    desc: "Linear equations state the equality of two expressions involving a variable. The solution to an equation is the value of the variable that satisfies the given condition. We solve equations by isolating the variable (unknown) on one side of the equation to find its value...",
    address: "Solving-linear-equations",
  },
  {
    img: "solving_linear.jpg",
    title: "System of Linear Equations",
    desc: "Systems of equations are a collection of one or more relationships between two or more variables. A solution/s to such a system of equations is values of variables that satisfy all equations. In this article, we’ll explore how to solve systems of linear equations with two variables...",
    address: "System-of-Linear-Equations",
  },
  {
    img: "order_of.jpg",
    title: "The Power of Order of Operations",
    desc: "Operations are actions you can perform on a number such as addition, subtraction, multiplication, division, etc. When there is only one operation it’s pretty straightforward. You can just perform the necessary algorithm to get the answer...",
    address: "The-Power-of-Order-of-Operations",
  },
  {
    img: "transformation.jpg",
    title: "Transformations (Rotation and Reflection)",
    desc: "Have you ever wondered how graphic editing apps like Photoshop performed basic image editing like rotation and flipping? The underlying principles behind this are transformations. All complicated image editing, scaling, and mapping applied in real-life applications extend from a...",
    address: "Transformations-Rotation-and-Reflection",
  },
  {
    img: "place_value.png",
    title: "Understanding different representations of numbers",
    desc: "When working with numbers, it's important to understand that numbers can be represented in many different ways. Some representations have historical significance while others have emerged for specific use cases. In this...",
    address: "Understanding-different-representations-of-numbers",
  },
  {
    img: "quiz (2).png",
    title: "Understanding Inverse Proportion",
    desc: "Being able to mathematically interpret the behavior of one quantity in relation to another is highly useful in many real-life applications. For example, if we know the quantity of flour it takes to make one large pizza, we can calculate the amount of flour required to make three pizzas...",
    address: "Understanding-Inverse-Proportion",
  },
];

export const additionWorksheets = [
  {
    title: "Spaceship Math Addition A: 1+2, 2+1, 1+3, 3+1",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-a-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-a-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-a-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-a-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-a-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-a-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-a-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-a-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Addition B: 1+4, 4+1, 1+1",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-b-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-b-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-b-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-b-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-b-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-b-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-b-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-b-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Addition C: 1+5, 5+1, 2+2",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-c-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-c-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-c-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-c-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-c-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-c-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-c-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-c-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Addition D: 1+6, 6+1, 3+3",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-d-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-d-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-d-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-d-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-d-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-d-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-d-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-d-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Addition E: 1+7, 7+1, 4+4",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-e-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-e-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-e-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-e-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-e-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-e-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-e-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-e-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Addition F: 1+8, 8+1, 5+5",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-f-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-f-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-f-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-f-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-f-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-f-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-f-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-f-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Addition G: 1+9, 9+1, 0 + Any Number",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-g-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-g-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-g-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-g-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-g-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-g-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-g-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-g-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Addition H: 2+3, 3+2, 6+6",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-h-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-h-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-h-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-h-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-h-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-h-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-h-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-h-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Addition I: 4+2, 2+4, 7+7",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-i-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-i-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-i-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-i-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-i-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-i-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-i-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-i-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Addition J: 5+2, 2+5, 8+8",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-j-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-j-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-j-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-j-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-j-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-j-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-j-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-j-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Addition K: 6+2, 2+6, 9+9",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-k-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-k-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-k-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-k-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-k-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-k-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-k-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-k-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Addition L: 7+2, 2+7, 4+7, 7+4",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-l-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-l-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-l-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-l-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-l-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-l-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-l-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-l-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Addition M: 8+2, 2+8, 8+6, 6+8",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-m-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-m-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-m-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-m-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-m-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-m-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-m-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-m-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Addition N: 9+2, 2+9, 9+6, 6+9",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-n-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-n-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-n-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-n-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-n-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-n-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-n-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-n-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Addition O: 4+3, 3+4, 6+7, 7+6",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-o-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-o-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-o-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-o-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-o-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-o-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-o-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-o-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Addition P: 5+3, 3+5, 7+8, 8+7",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-p-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-p-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-p-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-p-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-p-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-p-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-p-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-p-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Addition Q: 5+8, 8+5, 7+9, 9+7",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-q-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-q-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-q-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-q-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-q-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-q-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-q-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-q-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Addition R: 6+3, 3+6, 5+9, 9+5",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-r-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-r-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-r-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-r-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-r-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-r-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-r-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-r-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Addition S: 7+3, 3+7, 8+9, 9+8",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-s-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-s-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-s-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-s-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-s-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-s-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-s-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-s-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Addition T: 8+3, 3+8, 4+9, 9+4",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-t-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-t-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-t-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-t-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-t-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-t-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-t-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-t-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Addition U: 9+3, 3+9, 5+7, 7+5",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-u-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-u-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-u-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-u-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-u-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-u-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-u-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-u-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Addition V: 4+5, 5+4, 4+8, 8+4",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-v-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-v-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-v-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-v-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-v-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-v-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-v-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-v-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Addition W: 4+6, 6+4, 5+6, 6+5",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-w-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-w-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-w-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-w-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-w-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-w-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-w-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-w-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Addition X: All Problems Practice",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-x-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-x-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-x-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-x-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-x-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-x-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-x-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-x-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Addition Y: All Problems Practice",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-y-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-y-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-y-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-y-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-y-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-y-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-y-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-y-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Addition Z: All Problems (No Zero)",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-z-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-z-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-z-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-z-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-z-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-z-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-z-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/addition/spaceship-math-z-v4.html",
      },
    ],
  },
];
export const subtractionWorksheets = [
  {
    title: "Spaceship Math Subtraction A: 3-2, 3-1, 4-3, 4-1",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-a-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-a-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-a-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-a-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-a-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-a-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-a-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-a-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Subtraction B: 5-4, 5-1, 2-1",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-b-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-b-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-b-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-b-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-b-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-b-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-b-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-b-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Subtraction C: 6-1, 6-5, 4-2",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-c-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-c-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-c-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-c-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-c-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-c-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-c-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-c-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Subtraction D: 7-1, 7-6, 6-3",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-d-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-d-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-d-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-d-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-d-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtractionspaceship-math-d-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-d-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-d-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Subtraction E: 8-1, 8-7, 8-4",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-e-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-e-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-e-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-e-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-e-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-e-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-e-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-e-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Subtraction F: 9-1, 9-8, 10-5",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-f-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-f-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-f-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-f-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-f-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-f-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-f-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-f-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Subtraction G: 10-1, 10-9, Any Number Minus Zero",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-g-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-g-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-g-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-g-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-g-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-g-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-g-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-g-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Subtraction H: 5-3, 5-2, 12-6",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-h-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-h-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-h-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-h-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-h-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-h-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-h-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-h-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Subtraction I: 6-2, 6-4, 14-7",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-i-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-i-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-i-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-i-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-i-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-i-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-i-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-i-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Subtraction J: 7-2, 7-5, 16-8",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-j-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-j-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-j-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-j-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-j-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-j-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-j-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-j-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Subtraction K: 8-2, 8-6, 18-9",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-k-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-k-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-k-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-k-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-k-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-k-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-k-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-k-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Subtraction L: 9-2, 9-7, 11-7, 11-4",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-l-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-l-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-l-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-l-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-l-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-l-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-l-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-l-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Subtraction M: Any Number Minus Itself",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-m-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-m-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-m-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-m-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-m-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-m-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-m-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-m-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Subtraction N: 10-2, 10-8, 14-8, 14-6",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-n-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-n-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-n-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-n-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-n-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-n-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-n-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-n-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Subtraction O: 11-2, 11-9, 15-9, 15-6",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-o-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-o-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-o-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-o-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-o-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-o-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-o-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-o-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Subtraction P: 7-3, 7-4, 13-7, 13-6",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-p-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-p-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-p-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-p-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-p-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-p-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-p-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-p-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Subtraction Q: 8-3, 8-5, 15-8, 15-7",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-q-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-q-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-q-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-q-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-q-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-q-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-q-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-q-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Subtraction R: 13-8, 13-5, 16-9, 16-7",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-r-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-r-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-r-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-r-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-r-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-r-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-r-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-r-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Subtraction S: 9-3, 9-6, 14-9, 14-5",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-s-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-s-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-s-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-s-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-s-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-s-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-s-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-s-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Subtraction T: 10-3, 10-7, 17-9, 17-8",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-t-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-t-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-t-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-t-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-t-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-t-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-t-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-t-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Subtraction U: 11-3, 11-8, 13-9, 13-4",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-u-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-u-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-u-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-u-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-u-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-u-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-u-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-u-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Subtraction V: 12-3, 12-9, 12-7, 12-5",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-v-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-v-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-v-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-v-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-v-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-v-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-v-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-v-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Subtraction W: 9-5, 9-4, 12-8, 12-4",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-w-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-w-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-w-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-w-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-w-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-w-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-w-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-w-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Subtraction X: 10-6, 10-4, 11-6, 11-5",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-x-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-x-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-x-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-x-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-x-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-x-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-x-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-x-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Subtraction Y: All Problems Practice",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-y-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-y-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-y-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-y-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-y-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-y-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-y-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-y-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Subtraction Z: All Problems Practice",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-z-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-z-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-z-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-z-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-z-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-z-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-z-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/subtraction/spaceship-math-z-v4.html",
      },
    ],
  },
];

export const multiplicationWorksheets = [
  {
    title: "Spaceship Math Multiplication A: Any Number Times One",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-a-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-a-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-a-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-a-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-a-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-a-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-a-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-a-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Multiplication B: Any Number Times Zero",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-b-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-b-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-b-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-b-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-b-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-b-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-b-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-b-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Multiplication C: 2x2, 2x3, 3x2",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-c-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-c-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-c-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-c-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-c-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-c-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-c-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-c-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Multiplication D: 2x4, 4x2, 2x5, 5x2",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-d-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-d-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-d-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-d-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-d-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplicationspaceship-math-d-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-d-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-d-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Multiplication E: 6x2, 2x6, 7x2, 2x7",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-e-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-e-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-e-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-e-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-e-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-e-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-e-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-e-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Multiplication F: 8x2, 2x8, 9x2, 2x9",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-f-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-f-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-f-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-f-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-f-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-f-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-f-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-f-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Multiplication G: 9x3, 3x9, 9x4, 4x9",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-g-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-g-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-g-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-g-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-g-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-g-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-g-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-g-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Multiplication H: 9x5, 5x9, 3x3",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-h-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-h-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-h-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-h-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-h-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-h-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-h-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-h-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Multiplication I: 9x6, 6x9, 4x4",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-i-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-i-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-i-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-i-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-i-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-i-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-i-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-i-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Multiplication J: 9x7, 7x9, 5x5",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-j-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-j-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-j-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-j-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-j-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-j-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-j-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-j-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Multiplication K: 9x8, 8x9, 6x6",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-k-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-k-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-k-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-k-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-k-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-k-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-k-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-k-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Multiplication L: 3x4, 4x3, 7x7",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-l-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-l-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-l-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-l-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-l-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-l-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-l-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-l-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Multiplication M: 3x5, 5x3, 8x8",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-m-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-m-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-m-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-m-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-m-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-m-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-m-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-m-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Multiplication N: 3x6, 6x3, 9x9",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-n-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-n-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-n-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-n-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-n-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-n-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-n-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-n-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Multiplication O: 3x7, 7x3, 3x8, 8x3",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-o-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-o-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-o-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-o-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-o-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-o-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-o-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-o-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Multiplication P: 7x8, 8x7, 6x8, 8x6",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-p-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-p-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-p-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-p-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-p-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-p-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-p-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-p-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Multiplication Q: 5x8, 8x5, 4x8, 8x4",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-q-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-q-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-q-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-q-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-q-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-q-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-q-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-q-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Multiplication R: 7x6, 6x7, 7x5, 5x7",

    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-r-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-r-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-r-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-r-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-r-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-r-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-r-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-r-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Multiplication S: 7x4, 4x7, 6x5, 5x6",

    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-s-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-s-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-s-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-s-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-s-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-s-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-s-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-s-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Multiplication T: 5x4, 4x5, 4x6, 6x4",

    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-t-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-t-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-t-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-t-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-t-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-t-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-t-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-t-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Multiplication U: All Problems Practice",

    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-u-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-u-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-u-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-u-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-u-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-u-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-u-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-u-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Multiplication V: All Problems Practice",

    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-v-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-v-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-v-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-v-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-v-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-v-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-v-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-v-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Multiplication W: All Problems Practice",

    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-w-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-w-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-w-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-w-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-w-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-w-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-w-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-w-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Multiplication X: No x1 or x0 Problems",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-x-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-x-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-x-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-x-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-x-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-x-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-x-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/multiplication/spaceship-math-x-v4.html",
      },
    ],
  },
];

export const divisionWorksheets = [
  {
    title: "Spaceship Math Division A: Any Number Divided by One",

    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-a-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-a-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-a-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-a-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-a-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-a-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-a-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-a-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Division B: Any Number Divided by Itself",

    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-b-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-b-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-b-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-b-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-b-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-b-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-b-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-b-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Division C: 4/2, 6/2, 6/3",

    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-c-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-c-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-c-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-c-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-c-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-c-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-c-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-c-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Division D: 8/2, 8/4, 10/2, 10/5",

    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-d-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-d-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-d-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-d-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-d-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/divisionspaceship-math-d-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-d-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-d-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Division E: 12/2, 12/6, 14/2, 14/7",

    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-e-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-e-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-e-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-e-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-e-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-e-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-e-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-e-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Division F: 16/2, 16/8, 18/2, 18/9",

    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-f-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-f-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-f-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-f-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-f-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-f-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-f-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-f-v4.html",
      },
    ],
  },
  {
    title: "SpaceshipMath Division G: Divisors Larger Than Dividend",

    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-g-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-g-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-g-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-g-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-g-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-g-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-g-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-g-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Division H: 27/9, 27/3, 36/9, 36/4",

    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-h-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-h-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-h-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-h-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-h-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-h-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-h-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-h-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Division I: 45/9, 45/5, 9/3",

    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-i-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-i-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-i-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-i-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-i-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-i-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-i-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-i-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Division J: 54/9, 54/6, 16/4",

    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-j-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-j-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-j-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-j-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-j-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-j-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-j-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-j-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Division K: 63/9, 63/7, 25/5",

    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-k-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-k-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-k-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-k-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-k-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-k-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-k-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-k-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Division L: 72/9, 72/8, 36/6",

    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-l-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-l-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-l-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-l-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-l-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-l-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-l-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-l-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Division M: 12/3, 12/4, 49/7",

    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-m-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-m-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-m-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-m-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-m-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-m-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-m-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-m-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Division N: 15/3, 15/5, 64/8",

    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-n-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-n-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-n-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-n-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-n-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-n-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-n-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-n-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Division O: 18/3, 18/6, 81/9",

    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-o-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-o-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-o-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-o-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-o-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-o-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-o-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-o-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Division P: 21/3, 21/7, 24/3, 24/8",

    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-p-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-p-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-p-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-p-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-p-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-p-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-p-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-p-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Division Q: 56/8, 56/7, 48/8, 48/6",

    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-q-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-q-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-q-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-q-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-q-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-q-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-q-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-q-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Division R: 40/8, 40/5, 32/8, 32/4",

    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-r-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-r-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-r-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-r-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-r-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-r-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-r-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-r-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Division S: 42/7, 42/6, 35/7, 35/5",

    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-s-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-s-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-s-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-s-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-s-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-s-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-s-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-s-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Division T: 28/7, 28/4, 30/6, 30/5",

    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-t-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-t-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-t-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-t-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-t-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-t-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-t-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-t-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Division U: 20/5, 20/4, 24/6, 24/4",

    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-u-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-u-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-u-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-u-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-u-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-u-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-u-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-u-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Division V: All Problems Practice",

    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-v-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-v-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-v-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-v-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-v-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-v-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-v-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-v-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Division W: All Problems Practice",

    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-w-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-w-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-w-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-w-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-w-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-w-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-w-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-w-v4.html",
      },
    ],
  },
  {
    title: "Spaceship Math Division X: All Problems Practice",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-x-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-x-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-x-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-x-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-x-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-x-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-x-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/division/spaceship-math-x-v4.html",
      },
    ],
  },
];

export const graphicFractionsWorksheets = [
  {
    title: "Draw the Fraction: Simple Fractions",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/graphic-fractions/draw-fractions-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/graphic-fractions/draw-fractions-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/graphic-fractions/draw-fractions-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/graphic-fractions/draw-fractions-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/graphic-fractions/draw-fractions-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/graphic-fractions/draw-fractions-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/graphic-fractions/draw-fractions-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/graphic-fractions/draw-fractions-v4.html",
      },
    ],
  },
  {
    title: "Draw the Fraction: Simple Fractions 2",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/graphic-fractions/draw-fractions-2-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/graphic-fractions/draw-fractions-2-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/graphic-fractions/draw-fractions-2-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/graphic-fractions/draw-fractions-2-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/graphic-fractions/draw-fractions-2-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/graphic-fractions/draw-fractions-2-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/graphic-fractions/draw-fractions-2-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/graphic-fractions/draw-fractions-2-v4.html",
      },
    ],
  },
  {
    title: "Draw the Fraction: Mixed Fractions 1",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/graphic-fractions/mixed-fractions-1-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/graphic-fractions/mixed-fractions-1-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/graphic-fractions/mixed-fractions-1-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/graphic-fractions/mixed-fractions-1-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/graphic-fractions/mixed-fractions-1-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/graphic-fractions/mixed-fractions-1-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/graphic-fractions/mixed-fractions-1-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/graphic-fractions/mixed-fractions-1-v4.html",
      },
    ],
  },
  {
    title: "Draw the Fraction: Mixed Fractions 2",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/graphic-fractions/mixed-fractions-2-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/graphic-fractions/mixed-fractions-2-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/graphic-fractions/mixed-fractions-2-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/graphic-fractions/mixed-fractions-2-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/graphic-fractions/mixed-fractions-2-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/graphic-fractions/mixed-fractions-2-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/graphic-fractions/mixed-fractions-2-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/graphic-fractions/mixed-fractions-2-v4.html",
      },
    ],
  },
  {
    title: "Fraction from Drawing: Simple Fractions",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/graphic-fractions/fraction-from-pie-graphic-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/graphic-fractions/fraction-from-pie-graphic-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/graphic-fractions/fraction-from-pie-graphic-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/graphic-fractions/fraction-from-pie-graphic-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/graphic-fractions/fraction-from-pie-graphic-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/graphic-fractions/fraction-from-pie-graphic-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/graphic-fractions/fraction-from-pie-graphic-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/graphic-fractions/fraction-from-pie-graphic-v4.html",
      },
    ],
  },
  {
    title: "Fraction from Drawing: Simple Fractions 2",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/graphic-fractions/fraction-from-pie-graphic-2-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/graphic-fractions/fraction-from-pie-graphic-2-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/graphic-fractions/fraction-from-pie-graphic-2-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/graphic-fractions/fraction-from-pie-graphic-2-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/graphic-fractions/fraction-from-pie-graphic-2-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/graphic-fractions/fraction-from-pie-graphic-2-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/graphic-fractions/fraction-from-pie-graphic-2-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/graphic-fractions/fraction-from-pie-graphic-2-v4.html",
      },
    ],
  },
  {
    title: "Fraction from Drawing: Mixed Fractions 1",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/graphic-fractions/mixed-fraction-from-pie-graphic-3-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/graphic-fractions/mixed-fraction-from-pie-graphic-3-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/graphic-fractions/mixed-fraction-from-pie-graphic-3-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/graphic-fractions/mixed-fraction-from-pie-graphic-3-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/graphic-fractions/mixed-fraction-from-pie-graphic-3-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/graphic-fractions/mixed-fraction-from-pie-graphic-3-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/graphic-fractions/mixed-fraction-from-pie-graphic-3-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/graphic-fractions/mixed-fraction-from-pie-graphic-3-v4.html",
      },
    ],
  },
  {
    title: "Fraction from Drawing: Mixed Fractions 2",
    sheets: [
      {
        img: "https://www.dadsworksheets.com/worksheets/graphic-fractions/mixed-fraction-from-pie-graphic-4-v1-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/graphic-fractions/mixed-fraction-from-pie-graphic-4-v1.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/graphic-fractions/mixed-fraction-from-pie-graphic-4-v2-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/graphic-fractions/mixed-fraction-from-pie-graphic-4-v2.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/graphic-fractions/mixed-fraction-from-pie-graphic-4-v3-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/graphic-fractions/mixed-fraction-from-pie-graphic-4-v3.html",
      },
      {
        img: "https://www.dadsworksheets.com/worksheets/graphic-fractions/mixed-fraction-from-pie-graphic-4-v4-medium.jpg",
        url: "https://www.dadsworksheets.com/worksheets/graphic-fractions/mixed-fraction-from-pie-graphic-4-v4.html",
      },
    ],
  },
];