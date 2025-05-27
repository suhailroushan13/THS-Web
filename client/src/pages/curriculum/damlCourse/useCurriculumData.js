import { useState, useEffect } from "react";

// Default curriculum data structure (same as in CurriculumSection.jsx)
const defaultCurriculumData = {
  title: "DA+ML Curriculum.",
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
              "Mathematics",
              "Number Systems",
              "Linux Basics",
              "HTML and CSS",
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
        title: "Foundations",
        sections: [
          {
            title: "Foundations of Data :",
            type: "text",
            content:
              "The Foundational phase equips you with the technical knowledge and programming skills needed for data analysis and machine learning. You'll explore computer number systems and gain proficiency in the UNIX operating system, including Linux commands for file manipulation and navigation. Additionally, you'll focus on Python, the essential language for data analysis and machine learning, mastering both fundamental and advanced concepts, including data types and structures.",
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
              "Computer Number Systems (Binary, Octal, Decimal, Hexadecimal)",
              "Basic UNIX Architecture & Commands",
              "Shell Scripting Basics (CRON Jobs, Automation)",
              "Introduction to Git & GitHub Version Control",
              "Defining and Calling Functions",
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
        title: "Advanced Python Programming",
        sections: [
          {
            title: "Advanced Python Programming :",
            type: "text",
            content:
              "Dive deep into Python programming, covering advanced concepts such as object-oriented programming principles and computational complexity. You'll also explore essential mathematical topics, including statistics, probability, and linear algebra, to gain a comprehensive understanding of how data is analyzed and manipulated. Additionally, you'll work with key Python libraries for data science.",
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
              "Object-Oriented Programming (OOP) Principles",
              "Essential Mathematics for Data Science",
              "Core Statistical Concepts for Data Analysis",
              "Fundamentals of Probability and Hypothesis Testing",
              "Working with NumPy, Pandas, Matplotlib, and Seaborn",
            ],
          },
        ],
      },
    },
    {
      id: "warmup-4",
      title: "Phase 3",
      subtitle: "Week 12-17",
      icon: "/lightning-bolt.png",
      content: {
        title: "SQL And Machine Learning",
        sections: [
          {
            title: "SQL And Machine Learning :",
            type: "text",
            content:
              "Enter the exciting world of SQL and Machine Learning (ML). You'll learn how to write SQL queries for effective data manipulation and exploration. Additionally, you'll explore various ML applications, including supervised and unsupervised learning algorithms. You'll understand performance metrics and gain hands-on experience with popular algorithms such as Decision Trees, Random Forests, and K-Nearest Neighbors (KNN).",
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
              "SQL Querying for Data Manipulation",
              "Data Munging and Data Wrangling Techniques",
              "Feature Engineering for ML Models",
              "Building Basic Machine Learning Models",
              "Mini-Hackathons focused on Data Munging, Aptitude Classification, and Author Identification.",
            ],
          },
        ],
      },
    },
    {
      id: "warmup-5",
      title: "You Win!",
      subtitle: "Graduation",
      icon: "/lightning-bolt.png",
      content: {
        title: "Graduation",
        sections: [
          {
            title: "Congratulations! 🥳",
            type: "text",
            content:
              "As you reach the culmination of your journey at The Hacking School, join us for an exciting Graduation Day, where you'll showcase your hard work and projects during a Demo Day. This is an opportunity to present your innovative solutions and celebrate your achievements with peers, mentors, and industry professionals. You will receive your final credits, marking your successful completion of the program.\n\nThis celebration will be followed by mock interviews and placement assistance to help you transition smoothly into your tech career.",
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
