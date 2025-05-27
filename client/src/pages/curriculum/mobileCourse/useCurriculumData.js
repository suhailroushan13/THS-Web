import { useState, useEffect } from "react";

// Default curriculum data structure (same as in CurriculumSection.jsx)
const defaultCurriculumData = {
  title: "React Native Curriculum.",
  phases: [
    {
      id: "warmup-1",
      title: "WARMUP",
      subtitle: "The Basics",
      icon: "/lightning-bolt.png",
      content: {
        title: "PRE REQUISITES' PHASE",
        sections: [
          {
            title: "Full-stack Web Development :",
            type: "text",
            content:
              "To enroll in the mobile development program, applicants must be proficient in web development with the MERN stack (MongoDB, Express.js, React, and Node.js). Novice developers are required to complete the web development course first to build a solid foundation before advancing to mobile development. All students go through skills evaluation to establish their level of proficiency with the Web Development  and readiness to begin the 6-week bootcamp expedition.",
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
              "Web Development with MongoDB, Express.js, React, and Node.",
              "Build Fullstack Web Applications.",
              "DSA skills.",
            ],
          },
        ],
      },
    },
    {
      id: "warmup-2",
      title: "Phase 1",
      subtitle: "Week 0-1",
      icon: "/lightning-bolt.png",
      content: {
        title: "Foundations",
        sections: [
          {
            title: "Foundations of Mobile Dev :",
            type: "text",
            content:
              "Begin by exploring mobile platforms like iOS and Android and their app ecosystems. This phase covers programming fundamentals, introducing JavaScript and essential concepts such as variables, data types, and functions. You'll also learn the basics of HTML and CSS with an emphasis on responsive web design and mobile styling. Additionally, you'll delve into version control using Git and GitHub, highlighting collaborative coding practices.",
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
              "Mastering React Native Development",
              "Leveraging Expo for Seamless Development",
              "Advanced Topics in React Native and Styling Techniques",
            ],
          },
        ],
      },
    },
    {
      id: "warmup-3",
      title: "Phase 2",
      subtitle: "Week 2",
      icon: "/lightning-bolt.png",
      content: {
        title: "Core",
        sections: [
          {
            title: "Core Mobile Technologies :",
            type: "text",
            content:
              "Learn React Native, starting with the setup of your development environment and an introduction to components and JSX. This phase emphasizes styling and layout specific to React Native, along with the concepts of state and props. You'll also explore Redux for effective state management and learn to fetch data from RESTful APIs, managing asynchronous operations seamlessly.",
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
              "React Native setup, components and styling, state management with Redux, and API data handling.",
              "Mastering Debugging and Performance Optimization",
              "Advanced Component Design and Styling Techniques",
              "Theming and Enhanced User Interaction",
            ],
          },
        ],
      },
    },
    {
      id: "warmup-4",
      title: "Phase 3",
      subtitle: "Week 3",
      icon: "/lightning-bolt.png",
      content: {
        title: "Advanced",
        sections: [
          {
            title: "Advanced Mobile Development :",
            type: "text",
            content:
              "Strong focus on navigation and routing in React Native applications, including deep linking and routing strategies. You'll learn to access native device APIs like the camera and location services and utilize third-party libraries to enhance functionality. This phase also covers testing and debugging, equipping you with unit and integration testing strategies along with effective debugging tools",
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
              "Navigation and routing in React Native.",
              "accessing device APIs, using third-party libraries. ",
              "Building Interactive Experiences",
              "Advanced State Management and Component Logic",
              "Enhancing User Interface and Experience",
              "Testing/debugging techniques.",
            ],
          },
        ],
      },
    },
    {
      id: "warmup-5",
      title: "Phase 4",
      subtitle: "Week 4-6",
      icon: "/lightning-bolt.png",
      content: {
        title: "Deployment",
        sections: [
          {
            title: "Deployment & Capstone:",
            type: "text",
            content:
              "Explore the process of building and deploying apps for both iOS and Android, including the submission processes for the App Store and Play Store. Apply all your learned skills in a Capstone Project, where you'll develop a full-featured mobile application that demonstrates your expertise",
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
              "Crafting Your Own Application",
              "Creating Responsive Interfaces",
              "Integrating Backend Functionality",
              "Mastering HTTP Requests and Responses",
              "Utilizing Device Features for Enhanced User Experience",
              "Applying UI Design Principles",
              "Implementing State Management Techniques",
              "Exploring React Native Core CLI for Project Management",
              "Ensuring Compliance for App Store Distribution",
            ],
          },
        ],
      },
    },
    {
      id: "warmup-6",
      title: "YOU WIN!",
      subtitle: "Graduation",
      icon: "/lightning-bolt.png",
      content: {
        title: "Graduation",
        sections: [
          {
            title: "Congratulations!",
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
