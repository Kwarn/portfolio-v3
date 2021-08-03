import ecommerceImage1 from "../../assets/ecommerce1.png";
import ecommerceImage2 from "../../assets/ecommerce2.png";
import ecommerceImage3 from "../../assets/ecommerce3.png";
import ecommerceImage4 from "../../assets/ecommerce4.png";
import ecommerceImage5 from "../../assets/ecommerce5.png";
import nodeProjectsImage1 from "../../assets/nodeprojects1.png";
import nodeProjectsImage2 from "../../assets/nodeprojects2.png";
import portfolioV2Image1 from "../../assets/portfoliov2image1.png";
import portfolioV2Image2 from "../../assets/portfoliov2image2.png";
import portfolioV2Image3 from "../../assets/portfoliov2image3.png";
import portfolioV2Image4 from "../../assets/portfoliov2image4.png";
import portfolioV2Image5 from "../../assets/portfoliov2image5.png";
import portfolioImage1 from "../../assets/portfolio1.png";
import burgerBuilderImage1 from "../../assets/burgerbuilder1.png";
import slotsGame from "../../assets/squarePlayground.png";
import excelSearcherimage1 from "../../assets/excelsearcher1.png";
import fitnessAppImage from "../../assets/fitness.png";

export const projectData = [
  {
    title: "Current project",
    images: [
      ecommerceImage1,
      ecommerceImage2,
      ecommerceImage3,
      ecommerceImage4,
      ecommerceImage5,
    ],
    liveDemoLink: { Ecommerce: "https://e-commerce-d1b62.web.app/home" },
    previewTechStack: "Javascript, React, Node, Express, GraphQl, Apollo, AWS",
    gitHubLink: { Ecommerce: "https://github.com/Kwarn/e-commerce" },
    description: `
    Built on behalf of a flooring wholesaler, with the primary goal of further practicing full-stack development.
    The mission is to provide the client with a site they can manage and display their products on, with an end goal of completing the functionality to gain access to the retail market.
    The current work on the site is focused on fleshing out administrator functionality to allow all CRUD operations via the back-end.
    `,
    technicalPractices: `The frontend is built with React & styled-components.
    ApolloClient is used to handle state management and for it's GraphQl interface.
    The backend is a Node Express server which uses GraphQL for handling most requests, with the exception of storing images which uses a REST endpoint with multer-s3 to store images in an AWS S3 bucket.`,
  },
  {
    title: "Node projects",
    images: [nodeProjectsImage1, nodeProjectsImage2],
    liveDemoLink: "",
    previewTechStack: "Javascript, Node, Graphql, MongoDB, AWS",
    gitHubLink: {
      "Server-side rendered":
        "https://github.com/Kwarn/node-the-complete-guide",

      "GraphQl-blog": "https://github.com/Kwarn/blog-REST-API/",

      "Blog front-end": "https://github.com/Kwarn/blog-frontend",
    },
    description: `
    During my research on how to build the backend for my current project I decided to take a comprehensive NodeJs course to gain a more complete understanding of backend systems instead of piecing things together from docs & smaller tutorials.
     These project were built & customized along the way.
    The most valuable experience I gained from these projects was converting between different approaches within each project, this gave me a solid understanding of the core principles and the varying ways of achieving them.
    `,
    technicalPractices: ` The REST API uses EJS to serve HTML, nodemailer for signup & password reset processes, csurf with express-sessions and connect-mongodb-session, stripe for mock payments and pdfkit to generate invoices.
    The app was originally used an SQL database with sequelize and now uses mongoDB with mongoose.

    The GraphQL API uses Json-web-token & bcrypt to handle authentication, mongoose with MongoDB to store user data, multer to handle file uploads and express-validator for validation.`,
  },

  {
    title: "Portfolios",
    images: [
      portfolioV2Image1,
      portfolioV2Image2,
      portfolioV2Image3,
      portfolioV2Image4,
      portfolioV2Image5,
      portfolioImage1,
    ],
    previewTechStack: "Javascript, React, Firebase, CSS",
    liveDemoLink: {
      v1: "https://portfolio-v1-9290a.web.app/",
      v2: "https://portfolio-v2-631c4.web.app",
    },
    gitHubLink: {
      v1: "https://github.com/Kwarn/portfolio-v1",
      v2: "https://github.com/Kwarn/portfolio",
    },
    description: `
       As I have improved over the years I've updated my portfolio to serve as a live example of my progress.
         The functionality of the v2 portfolio is likely more technically impressive than the portfolio you're currently viewing, however I felt the complexity of the design was ultimately detrimental to the UX, along with some pitfalls of experimenting with a less conventional desktop-first approach to responsiveness.`,
    technicalPractices:
      "IntersectionObserver API for LazyLoading & scroll-to navigation, Function throttling to prevent scrolling through menu too quickly, EmailJS API allowing direct messaging from React to inbox, File-saver library for direct downloading of CV from react, Form validation, Fully responsive design catering from 4k users to 320x568 iPhone 5 users",
  },
  {
    title: "Other JS projects",
    images: [burgerBuilderImage1, slotsGame],
    liveDemoLink: {
      "Burger Builder": "https://react-burger-builder-679aa.web.app/",
      "Slots Game": "https://square-playground.web.app/",
    },
    previewTechStack: "Javascript, React, Redux, Redux-Saga, Firebase, CSS",
    gitHubLink: {
      "Sales Feedback": "https://github.com/Kwarn/lettings-feedback-aggregator",
      "Burger Builder": "https://github.com/Kwarn/burger-builder",
      "Slots Game": "https://github.com/Kwarn/square-playground",
    },
    courseLink:
      "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    description: `
    These are a few of my earlier projects.

    Sales Feedback: Designed to work like SalesForce, displays analytics charts based on feedback from successful/failed lettings, on hold while current project takes precedence.
    Burger builder: Create and order your own customized burger.
    Slots Game: based on Math.random() my first attempt at react.
    
    `,

    lessons: `Asynchronous actions with Async-Await, Promises & Axios. Functional vs class based components.
      Through practising multiple popular approaches to asynchronous actions I've gained a solid understanding of how they fit into the larger React Ecosystem.
      I found one of the most impactful practice in this project was to convert the app from mostly older class-based components using lifecycle hooks (componentDidMount) to newer functional components using React Hooks (useEffect).`,
    technicalPractices: `Multiple approaches to handling State, Preservation of user's session with Authentication tokens and localStorage, Promises & Asynchronous actions with Thunk/Sagas & Fetch/Axios, Class-based components and Functional components, Higher order components, React.Memo and performance tweaks, Database rules configuration.`,
  },
  {
    title: "Python projects",
    images: [excelSearcherimage1, fitnessAppImage],
    previewTechStack: "Python, Tkinter, SQLite3",
    gitHubLink: {
      "Excel Searcher": "https://github.com/Kwarn/Fizzy-Lookup",
      "Fitness App": "https://github.com/Kwarn/fitness",
    },
    description: `
      Python was the first "real" language I learned, these are my first projects.
      Excel Searcher: Uses a data analysis library to convert an excel spreadsheet to columns and rows displayed by a GUI library, which is then searchable using a combination of 7 drop-down menus.
      Fitness App: tracks/stores workout & meals caloric information.`,
    lessons: `The importance of accurately communicating a description of the clients needs so that unnecessary or miscommunicated functionality didn't waste development time.`,

    technicalPractices:
      "Importing and reading XML files with Pandas, Tkinter scrollable canvas frames, Multiple uses of widgets, Grid place & pack layout management, Commutative search algorithm.",
  },
];
