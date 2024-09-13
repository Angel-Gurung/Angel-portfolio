import React from "react";
import projectImage1 from "../assets/projects/img1.webp"; 
import projectImage2 from "../assets/projects/img1.webp";
import projectImage3 from "../assets/projects/img1.webp";
import projectImage4 from "../assets/projects/img1.webp";
import projectImage5 from "../assets/projects/img1.webp";

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description:
        "Created and implemented the UI/UX design and developed a responsive and visually appealing frontend website.",
      photo: projectImage1,
      technologies: "Static Web Development | HTML, CSS, Javascript",
    },
    {
      title: "Project 2",
      description:
        "Developed a dynamic website with both admin and user panels, ensuring a user-friendly interface and optimal experience.",
      photo: projectImage2,
      technologies: "Dynamic Web Development | Java, JSP, MySQL",
    },
    {
      title: "Project 3",
      description:
        "Developed a user-centric UI/UX design as part of a project management course, focusing on user interface design.",
      photo: projectImage3,
      technologies: "Project Management | UI/UX Design",
    },
    {
      title: "Project 4",
      description:
        "Designed and implemented a robust database management system using MySQL, focusing on efficient data storage and retrieval.",
      photo: projectImage4,
      technologies: "Database Management | MySQL",
    },
    {
      title: "Project 5",
      description:
        "Conducted a comprehensive analysis of data science salary trends using Python, extracting insights from large datasets.",
      photo: projectImage5,
      technologies: "Data Science Salary Analysis | Python",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="projects max-w-6xl mx-auto">
        <div className="projects-header text-center mb-12">
          <h1 className="text-5xl font-bold mb-12 whitespace-nowrap flex justify-center items-center text-pink-600">
            Feature Project </h1>
        </div>
        <div className="all-projects grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card flex flex-col bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="project-img">
                <img
                  src={project.photo}
                  alt={project.title}
                  className="object-cover w-full h-48 transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h1 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h1>
                  <h2 className="text-sm text-gray-500 mt-2">
                    {project.technologies}
                  </h2>
                  <p className="mt-3 text-gray-600">
                    {project.description}
                  </p>
                </div>
                <div className="mt-6">
                  <button className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 transition-all duration-300">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
