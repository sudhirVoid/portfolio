"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Automation Projects",
    description: "Worked on Many Autoamtion Projects for the clients. The automation that I have perfomed mainly is Martech automation where we designed a product that enables user to make flows and execute them based on lead generated. Also worked on Billing Automation projects for big energy domain clients.",
    image: "/images/projects/1.jpg",
    tag: ["All", "Web","Automation"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "SkillGPT",
    description: "This enables user to enter the title they want to learn. With the power of Generative AI we generate the structured chapters for them so that they can grasp the content in short period of time.",
    image: "/images/projects/2.png",
    tag: ["All", "Web", "Angular", "NodeJS"],
    gitUrl: "https://github.com/sudhirVoid/skillGPT",
    previewUrl: "https://skillgpt.netlify.app/",
  },
  {
    id: 3,
    title: "Self Driving Car",
    description: "The concept of Behavioural Cloning is used where we find the pattern of driver in specific scenario. Then those patterns are trained to the model and self driving car is tested in different scenario.",
    image: "/images/projects/3.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Creative Child",
    description: "A platform to practice general Computer Science related Questions.",
    image: "/images/projects/4.png",
    tag: ["All", "Web","API Handling"],
    gitUrl: "https://github.com/sudhirVoid/creativeChild",
    previewUrl: "https://creativechild.netlify.app/",
  },
  {
    id: 5,
    title: "Mentor And Freelancer",
    description: "I am always open to help the students in their final year struggling to complete their project. I use to provide them mentorship so with proper guidance they can follow the right path and complete their deadline in time.",
    image: "/images/projects/5.jpg",
    tag: ["All", "Web","API Handling"],
    gitUrl: "https://github.com/sudhirVoid/creativeChild",
    previewUrl: "https://creativechild.netlify.app/",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
