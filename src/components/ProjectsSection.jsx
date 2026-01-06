import React, { useMemo, useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

// ---------------- PERSONAL -> Software Development ----------------
const personalSoftwareProjects = [
  {
    id: 1,
    title: "Ai Saas",
    description:
      "Built and maintained an end-to-end AI SaaS application using PostgreSQL, Express, React, and Node.js. Delivered features enabling users to generate content and images, remove backgrounds, and review resumes. Implemented secure authentication, subscription management, and automated content processing while aligning with user support, deployment, and continuous improvement requirements from the job description.",
    image: "/projects/Ai-Saas Photo.png",
    tags: ["React", "tailwind", "Node.js"],
    demoUrl: "https://ai-saas-plum-mu.vercel.app/",
    githubUrl: "https://github.com/Sreeharri/Ai-SaaS",
  },
  {
    id: 2,
    title: "Ecommerce Website",
    description:
      "Built and maintained a full-stack, content-driven e-commerce platform using React.js, Node.js, Express.js, and MongoDB (MERN stack). Developed features including role-based authentication, product and order management, and Stripe/Cash on Delivery payment processing. Continuously optimized the platform for SEO and core web vitals, implemented administrative tools, and automated deployment workflows to support seamless content migration and user management.",
    image: "/projects/Ecommerce photo.png",
    tags: ["React", "tailwind", "Node.js", "MongoDB", "Express", "Stripe", "Cash on Delivery"],
    demoUrl: "https://github.com/Sreeharri/E-commerce-website.git",
    githubUrl: "https://github.com/Sreeharri/E-commerce-website.git",
  },
  {
    id: 3,
    title: "Salon Booking App",
    description:
      "Designed and developed a scalable salon booking application using the Java stack with Spring Boot and MySQL. Implemented secure authentication and authorization with Keycloak, asynchronous communication using RabbitMQ, and microservices architecture supported by an Edureka server, API Gateway, and Feign Client for inter-service communication. Dockerized the entire application to enable consistent deployments and environment portability. Enhanced the platform with features such as appointment scheduling, service and stylist management, real-time notifications, role-based access control, and performance optimizations, ensuring high availability, maintainability, and a smooth user experience.",
    image: "/projects/Salon Booking photo.png",
    tags: ["Spring Boot", "MySQL", "Docker", "RabbitMQ", "Keycloak",  "Microservices",  "API Gateway",  "Feign Client"],
    demoUrl: "https://github.com/Sreeharri/salon-booking-app.git",
    githubUrl: "https://github.com/Sreeharri/salon-booking-app.git",
  },
];

// ---------------- PERSONAL -> ML & Data Science ----------------
const personalMLProjects = [
  
  {
    id: 11,
    title: "Car Price Prediction Model",
    description: "Developed a machine learning–based car price prediction system that estimates vehicle prices based on features such as brand, model, year of purchase, fuel type, and user entered KM run. Performed data cleaning, feature engineering, and exploratory data analysis to improve model accuracy. Trained and evaluated multiple regression models and selected the best-performing model to deliver reliable and data-driven price predictions.",
    image: "/projects/Car price.png",
    tags: ["Python", "Machine Learning", "Regression", "Data Analysis", "Pandas", "Scikit-learn"],
    demoUrl: "https://github.com/Sreeharri/Car-Price-Predictor.git",
    githubUrl: "https://github.com/Sreeharri/Car-Price-Predictor.git",
  },

  {
    id: 12,
    title: "Movie Recommendation System",
    description: "Developed a content-based movie recommendation system that suggests similar movies based on user-selected preferences. Processed and analyzed a movie dataset by extracting important features such as genres, keywords, and metadata, and transformed them into numerical representations for similarity computation. Implemented cosine similarity to identify and recommend movies with similar content, enabling personalized and relevant movie suggestions. The system improves user experience by helping users discover movies aligned with their interests.",
    image: "/projects/recomendor.png",
   tags: ["Python", "Machine Learning", "Recommender Systems", "Cosine Similarity", "Pandas", "Scikit-learn"],
    demoUrl: "https://github.com/Sreeharri/Movie-Recommender-.git",
    githubUrl: "https://github.com/Sreeharri/Movie-Recommender-.git",
  },

  {
    id: 13,
    title: "Message Spam Detection",
    description: "Built a spam message classification model to identify and filter spam SMS messages using natural language processing techniques. Preprocessed text data through tokenization, stop-word removal, and vectorization, and trained machine learning classifiers to distinguish spam from legitimate messages. Achieved high classification precision by optimizing features and model parameters, enabling efficient and automated spam detection.",
    image: "/projects/spam.png",
 tags: ["Python", "NLP", "Text Classification", "TF-IDF", "Scikit-learn", "Machine Learning"],
    demoUrl: "https://github.com/Sreeharri/Spam-Message-Detector.git",
    githubUrl: "https://github.com/Sreeharri/Spam-Message-Detector.git",
  },
  {
    id: 14,
    title: "Retrieval-Augmented Generation Chatbot",
    description: "Built a RAG (Retrieval-Augmented Generation) system that transforms YouTube videos into a searchable knowledge base. Extracted audio from videos, transcribed it into text, cleaned and semantically chunked the content, and generated vector embeddings to enable efficient similarity search. Integrated an Ollama-hosted LLM to understand user prompts, retrieve the most relevant text chunks based on semantic relevance, and provide accurate, context-aware responses grounded in the source content.",
    image: "/projects/ml.png",
    tags: ["Python", "NLP", "RAG", "LLMs", "Embeddings", "Vector Search"],
    demoUrl: "https://github.com/Sreeharri/Retrieval-Augmented-Generation.git",
    githubUrl: "https://github.com/Sreeharri/Retrieval-Augmented-Generation.git",
  },
];

// ---------------- PERSONAL -> Data Analytics ----------------
const personalAnalyticsProjects = [
  // add your analytics projects here
];

// ---------------- University / Gate ----------------
const universitySpecialProjects = [
  {
    id: 21,
    title: "ArgsMe",
    description: "Working on ArgsMe, a research-based project under the Webis department, focused on building an argument-centric chatbot for structured argumentative analysis. The system generates pro and con arguments, extracts key points, and produces concise summaries for a given topic. My role involved developing the argument generation and clustering pipeline, implementing key point generation and summarization, and designing robust evaluation strategies. Leveraged Large Language Models (LLMs) for argument clustering and key point extraction, and evaluated the results using a combination of LLM-based judgment, semantic similarity, and token-overlap metrics, specifically measuring coverage and redundancy of the generated key points. Additionally, contributed to the project’s UI/UX development using React and JavaScript, ensuring an intuitive and research-friendly user interface.",
    image: "/projects/ArgsMe Photo.png",
tags: [
  "Machine Learning",
  "Natural Language Processing",
  "LLMs",
  "NLI",
  "Argument Mining",
  "Text Summarization",
  "Semantic Similarity",
  "Clustering",
  "Data Science",
  "Data Analysis",
  "React",
  "JavaScript",
  "evaluation Metrics",
]
,
    demoUrl: "https://www.args.me/index.html",
    githubUrl: "https://www.args.me/index.html",
  },
];

const gateProjects = [
  {
    id: 31,
    title: "Time Series real-time Data Visualization Dashboard",
    description: "Served as the Project Owner for a real-time time series data visualization dashboard developed for MKP GmbH as part of an agile, industry-guided project. I was responsible for ensuring overall project success by managing product backlogs, prioritizing requirements, and coordinating closely with the company representative. The system ingests real-time sensor data from river monitoring stations installed on bridges, capturing metrics such as water level, discharge, and temperature. The dashboard allows users to filter and visualize data by river, bridge location, and selectable time ranges (3, 7, 10, 14, and 30 days) using interactive tables and charts. In addition to project ownership responsibilities, I worked as a frontend developer, contributing to dashboard design, UI/UX concept building, and implementation. The solution was built using Figma, Vue.js, TypeScript, Django, Python, Docker, Git, and data processing libraries such as Pandas and NumPy, with TypeScript linting enforced to maintain code quality and consistency.",
    image: "/projects/MKP Project .jpeg",
tags: [
  "Time Series",
  "Real-Time Data",
  "Data Visualization",
  "Dashboards",
  "Frontend Development",
  "Vue.js",
  "TypeScript",
  "Django",
  "Python",
  "Docker",
  "Data Analysis"
]
,
    demoUrl: "",
    githubUrl: "",
  },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("personal"); // personal | university | gate
  const [activePersonalSub, setActivePersonalSub] = useState("software"); // software | ml | analytics

  const activeProjects = useMemo(() => {
    if (activeCategory === "university") return universitySpecialProjects;
    if (activeCategory === "gate") return gateProjects;

    // personal
    if (activePersonalSub === "ml") return personalMLProjects;
    if (activePersonalSub === "analytics") return personalAnalyticsProjects;
    return personalSoftwareProjects;
  }, [activeCategory, activePersonalSub]);

  const tabBase =
    "px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-300";
  const tabActive = "bg-primary text-primary-foreground border-primary";
  const tabInactive =
    "bg-secondary text-secondary-foreground hover:text-primary";

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and
          creativity. Each project is a testament to my dedication to building
          innovative solutions.
        </p>

        {/* TOP LEVEL TABS */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <button
            onClick={() => setActiveCategory("personal")}
            className={`${tabBase} ${
              activeCategory === "personal" ? tabActive : tabInactive
            }`}
          >
            Personal Projects
          </button>

          <button
            onClick={() => setActiveCategory("university")}
            className={`${tabBase} ${
              activeCategory === "university" ? tabActive : tabInactive
            }`}
          >
            University Special Projects
          </button>

          <button
            onClick={() => setActiveCategory("gate")}
            className={`${tabBase} ${
              activeCategory === "gate" ? tabActive : tabInactive
            }`}
          >
            Gate Project (MKP GmbH)
          </button>
        </div>

        {/* PERSONAL SUB-TABS */}
        {activeCategory === "personal" && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActivePersonalSub("software")}
              className={`${tabBase} ${
                activePersonalSub === "software" ? tabActive : tabInactive
              }`}
            >
              Software Development
            </button>

            <button
              onClick={() => setActivePersonalSub("ml")}
              className={`${tabBase} ${
                activePersonalSub === "ml" ? tabActive : tabInactive
              }`}
            >
              Machine Learning & Data Science
            </button>

            <button
              onClick={() => setActivePersonalSub("analytics")}
              className={`${tabBase} ${
                activePersonalSub === "analytics" ? tabActive : tabInactive
              }`}
            >
              Data Analytics
            </button>
          </div>
        )}

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.id}-${tag}`}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {activeProjects.length === 0 && (
          <p className="text-center text-muted-foreground mt-10">
            No projects added in this category yet.
          </p>
        )}

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/Sreeharri"
            target="_blank"
            rel="noreferrer"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
