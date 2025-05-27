import { useState, useEffect } from "react";

// Default curriculum data structure (same as in CurriculumSection.jsx)
const defaultCurriculumData = {
  title: "MERN Curriculum.",
  phases: [
    {
      id: "warmup-1",
      title: "WARMUP",
      subtitle: "The Basics",
      icon: "/lightning-bolt.png",
      content: {
        title: "PRE BOOTCAMP PHASE",
        sections: [
          {
            title: "Programming Fundamentals :",
            type: "text",
            content:
              "The basics are the building blocks of programming. All students must begin with web development fundamentals to ensure that they are prepared for success and have a solid foundation to build on as they progress through the curriculum. The pre-bootcamp phase is followed by a skills evaluation to establish the student's level of proficiency with the fundamentals of programming and readiness to begin the 17-week bootcamp expedition.",
          },
          {
            title: "Technologies :",
            type: "tech",
            content: [
              { name: "HTML5", icon: "/course-page/html.png" },
              { name: "CSS3", icon: "/course-page/css.png" },
              { name: "JS", icon: "/course-page/js.png" },
              { name: "VS", icon: "/course-page/vs.png" },
              { name: "Terminal", icon: "/course-page/terminal.png" },
              { name: "GIT", icon: "/course-page/git.png" },
            ],
          },
          {
            title: "What You'll Learn :",
            type: "list",
            content: [
              "Learn how things are displayed  and organized on a website.",
              "Learn how things are displayed  and organized on a website.",
              "Learn how things are displayed  and organized on a website.",
            ],
          },
        ],
      },
    },
    {
      id: "warmup-2",
      title: "Phase 1",
      subtitle: "Week 0-7",
      icon: "/lightning-bolt.png",
      content: {
        title: "Foundation",
        sections: [
          {
            title: "The Foundational Weeks :",
            type: "text",
            content:
              "Start your coding journey with The Hacking School’s Foundation Phase. Master number systems, Linux basics, Git & GitHub, and JavaScript. Learn binary, file navigation, Bash scripting, and modern JavaScript. Build real-world projects like CLI tools and explore secure data handling with encryption and decoding. Gain practical skills through hands-on projects ",
          },
          {
            title: "Technologies :",
            type: "tech",
            content: [
              { name: "Linux", icon: "/course-page/linux.png" },
              { name: "JS", icon: "/course-page/js.png" },
              { name: "VS", icon: "/course-page/vs.png" },
              { name: "Git", icon: "/course-page/git.png" },
              { name: "Terminal", icon: "/course-page/terminal.png" },
            ],
          },
          {
            title: "What You'll Learn :",
            type: "list",
            content: [
              "Proficiency in Linux operating system fundamentals",
              "Mastery of Git version control system",
              "Competence in JavaScript programming",
              "Weather CLI tool for accessing weather information",
              "GitHub CLI tool for managing GitHub repositories",
              "TODO CLI tool for task management",
            ],
          },
        ],
      },
    },
    {
      id: "warmup-3",
      title: "Phase 2",
      subtitle: "Week 8-11",
      icon: "/lightning-bolt.png",
      content: {
        title: "Front-End",
        sections: [
          {
            title: "Front-End Tech :",
            type: "text",
            content:
              "Master the fundamentals of frontend technologies to create dynamic, responsive user interfaces. Starting with HTML5 and CSS3, you'll build a strong foundation in web design and layout. Next, dive into JavaScript's DOM to manipulate web elements dynamically. You'll then set up a React development environment and learn to build Single Page Applications (SPAs). Topics include JSX, components, props, state management, lifecycle methods, event handling, conditional rendering, and React Hooks. Finally, explore advanced techniques like private routes, the Context API for global state, and preparing your projects for deployment.",
          },
          {
            title: "Technologies :",
            type: "tech",
            content: [
              { name: "HTML", icon: "/course-page/html.png" },
              { name: "CSS", icon: "/course-page/css.png" },
              { name: "JS", icon: "/course-page/js.png" },
              { name: "Figma", icon: "/course-page/figma.png" },
              { name: "React", icon: "/course-page/react.png" },
            ],
          },
          {
            title: "What You'll Learn :",
            type: "list",
            content: [
              "Ability to translate Figma designs into code",
              "Proficiency in JavaScript for implementing frontend logic",
              "Creation of frontend applications using React",
              "Responsive websites",
              "Portfolio websites",
              "Minesweeper game",
              "GitHub search engine app",
            ],
          },
        ],
      },
    },
    {
      id: "warmup-4",
      title: "Phase 3",
      subtitle: "Week 12-14",
      icon: "/lightning-bolt.png",
      content: {
        title: "Back-End",
        sections: [
          {
            title: "Back-End Tech :",
            type: "text",
            content:
              "Transitioning to backend development, this phase focuses on building robust server-side applications. Learn Express.js for web apps and APIs, mastering routing, HTTP request handling, and API testing with Postman. Dive into MongoDB for seamless data management, integrating it with Express.js, and explore MongoDB Atlas for cloud-based solutions. Build RESTful APIs and streamline database interactions with Mongoose.js to enhance your backend development skills. \n\n Additionally, you'll explore Next.js, Server-Side Rendering (SSR), TypeScript, WebSockets, and Socket.io.",
          },
          {
            title: "Technologies :",
            type: "tech",
            content: [
              { name: "Node.js", icon: "/course-page/node.png" },
              { name: "Express.js", icon: "/course-page/express.png" },
              { name: "MongoDB", icon: "/course-page/mongodb.png" },
            ],
          },
          {
            title: "What You'll Learn :",
            type: "list",
            content: [
              "Implementation of APIs for data exchange",
              "Database modeling for efficient data management",
              "API testing for ensuring application reliability",
              "Integration of frontend and backend components",
              "Full Stack Project 1",
            ],
          },
        ],
      },
    },
    {
      id: "warmup-5",
      title: "Phase 4",
      subtitle: "Week 15-17",
      icon: "/lightning-bolt.png",
      content: {
        title: "Advanced",
        sections: [
          {
            title: "Introduction to Node.js :",
            type: "text",
            content:
              "In this segment, you'll explore advanced web technologies, including Next.js for dynamic applications with Server-Side Rendering (SSR) and TypeScript. Learn to implement WebSockets and Socket.io for real-time communication, and utilize Replit for collaborative development. \n\n Work with OpenAI APIs to create generative AI applications, building a RAG app using Groq (Llama-3) and Llama-index with Hugging Face, while gaining experience with open-source large language models (LLMs). This phase equips you with cutting-edge skills in modern web development and AI integration.",
          },
          {
            title: "Technologies :",
            type: "tech",
            content: [],
          },
          {
            title: "What You'll Learn :",
            type: "list",
            content: ["xyz", "xyz"],
          },
        ],
      },
    },
    {
      id: "warmup-6",
      title: "Phase 5",
      subtitle: "Week 18",
      icon: "/lightning-bolt.png",
      content: {
        title: "Cloud",
        sections: [
          {
            title: "Cloud Deployment Strategies :",
            type: "text",
            content:
              "The last phase focuses on essential cloud deployment strategies for scaling and ensuring the reliability of web applications. You'll learn to deploy frontend and backend servers effectively on AWS, exploring strategies like continuous and blue-green deployment. \n\n Gain insights into load balancing techniques to distribute traffic across instances, enhancing performance. Work with key technologies such as AWS, Nginx for web server deployment, and Route 53 for DNS management.",
          },
          {
            title: "Technologies :",
            type: "tech",
            content: [],
          },
          {
            title: "What You'll Learn :",
            type: "list",
            content: [
              "Deployment of frontend applications and backend servers on the AWS Cloud",
              "Various deployment strategies and their implementation",
              "Load balancing techniques for optimizing application performance",
            ],
          },
        ],
      },
    },
    {
      id: "warmup-7",
      title: "YOU WIN!",
      subtitle: "Graduation",
      icon: "/lightning-bolt.png",
      content: {
        title: "Graduation",
        sections: [
          {
            title: "Congratulations! 🥳",
            type: "text",
            content:
              "As you reach the culmination of your journey at The Hacking School, join us for an exciting Graduation Day, where you’ll showcase your hard work and projects during a Demo Day. This is an opportunity to present your innovative solutions and celebrate your achievements with peers, mentors, and industry professionals. You will receive your final credits, marking your successful completion of the program. \n\n This celebration will be followed by mock interviews and placement assistance to help you transition smoothly into your tech career.",
          },
        ],
      },
    },
    // Other phases are included in the CurriculumSection component
  ],
};

/**
 * Custom hook to fetch and manage curriculum data
 * @param {string} jsonUrl - URL to fetch JSON data from (optional)
 * @param {object} initialData - Initial data to use (optional)
 * @returns {object} - { curriculumData, loading, error, setCurriculumData }
 */
const useCurriculumData = (jsonUrl = null, initialData = null) => {
  const [curriculumData, setCurriculumData] = useState(
    initialData || defaultCurriculumData
  );
  const [loading, setLoading] = useState(!!jsonUrl);
  const [error, setError] = useState(null);

  useEffect(() => {
    // If no URL is provided, use the initial or default data
    if (!jsonUrl) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(jsonUrl);

        if (!response.ok) {
          throw new Error(
            `Failed to fetch curriculum data: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();

        // Validate the data structure
        if (!data.title || !Array.isArray(data.phases)) {
          throw new Error("Invalid curriculum data format");
        }

        setCurriculumData(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching curriculum data:", err);
        setError(err.message);
        // Fall back to default data on error
        setCurriculumData(initialData || defaultCurriculumData);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [jsonUrl, initialData]);

  // Function to update curriculum data programmatically
  const updateCurriculumData = (newData) => {
    if (typeof newData === "object" && newData !== null) {
      setCurriculumData(newData);
    } else {
      setError("Invalid data format for curriculum update");
    }
  };

  return {
    curriculumData,
    loading,
    error,
    setCurriculumData: updateCurriculumData,
  };
};

export default useCurriculumData;
