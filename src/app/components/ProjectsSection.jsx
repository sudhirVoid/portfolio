"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "🏆 SmartGrid AI (Hackathon Winner)",
    description: "Company-wide hackathon winning AI-powered energy consumption prediction simulator. Operators can visualize future consumption patterns and interact with LIDA (Microsoft's visualization LLM) for intelligent chart plotting. Built with Azure Event Grid, NestJS, React, and advanced LLM orchestration.",
    image: "/images/projects/1.jpg",
    tag: ["All", "AI", "Hackathon"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "🏆 Onboardly (Hackathon Winner)",
    description: "Company-wide hackathon winning multi-agentic AI hiring platform. Parses candidate data from GitHub, LinkedIn, and web to validate JD alignment. Features AI-powered video interviews using custom agents and MCP servers. Built with A2A protocol, Azure Functions, NodeJS, Redis, and Elasticsearch.",
    image: "/images/projects/2.png",
    tag: ["All", "AI", "Hackathon"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "🤖 Immigration RFE Assistant",
    description: "AI-powered tool for paralegals in USA to streamline corporate immigration RFE (Request for Evidence) document processing. Uses Azure AI Foundry, RAG architectures, and LLM orchestration to assist with complex immigration workflows and document generation.",
    image: "/images/projects/3.jpg",
    tag: ["All", "AI"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "📚 SkillGPT",
    description: "GenAI-powered personalized learning system with RazorPay integration. Users enter topics they want to learn, and the system generates structured chapters using Chain of Thought prompting and controlled generation techniques. Built with Angular, NodeJS, and Azure APIM.",
    image: "/images/projects/4.png",
    tag: ["All", "AI", "Web"],
    gitUrl: "https://github.com/sudhirVoid/skillGPT",
    previewUrl: "https://skillgpt.netlify.app/",
  },
  {
    id: 5,
    title: "⚡ MarTech AI Platform",
    description: "Event-driven, multi-tenant marketing automation platform with GenAI-powered SQL generation and RAG agents. Automates prospect segmentation and customer interactions while managing large-scale data across SQL and NoSQL databases. Features LangChain, Dialogflow, and context engineering.",
    image: "/images/projects/5.jpg",
    tag: ["All", "AI", "Automation"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "🔬 Eye Disease Detection (Published)",
    description: "Deep Learning research published at ICCPCT 2023. Voting-based approach training 5 Keras applications (ResNet, Xception, etc.) for eye disease prediction. DOI: 10.1109/ICCPCT58313.2023.10245175",
    image: "/images/projects/3.jpg",
    tag: ["All", "AI", "Research"],
    gitUrl: "https://doi.org/10.1109/ICCPCT58313.2023.10245175",
    previewUrl: "https://doi.org/10.1109/ICCPCT58313.2023.10245175",
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
          name="AI"
          isSelected={tag === "AI"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Hackathon"
          isSelected={tag === "Hackathon"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Research"
          isSelected={tag === "Research"}
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
