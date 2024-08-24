"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex flex-wrap gap-3 border-coolGray-800">
  <div className="flex-1 border border-coolGray-800 p-4 rounded-lg">
    <h3 className="text-lg font-semibold">FrontEnd Tech</h3>
    <ul className="list-disc pl-5">
      <li>HTML/CSS</li>
      <li>Tailwind</li>
      <li>Angular</li>
      <li>React</li>
    </ul>
  </div>

  <div className="flex-1 border border-coolGray-800 p-4 rounded-lg">
    <h3 className="text-lg font-semibold">BackEnd Tech</h3>
    <ul className="list-disc pl-5">
      <li>ExpressJS</li>
      <li>.NET MVC</li>
      <li>Spring Boot</li>
      <li>Kafka, RabbitMQ</li>
    </ul>
  </div>

  <div className="flex-1 border border-coolGray-800 p-4 rounded-lg">
    <h3 className="text-lg font-semibold">Languages</h3>
    <ul className="list-disc pl-5">
      <li>TypeScript</li>
      <li>JavaScript</li>
      <li>Java</li>
      <li>Python</li>
    </ul>
  </div>

  <div className="flex-1 border border-coolGray-800 p-4 rounded-lg">
    <h3 className="text-lg font-semibold">Databases</h3>
    <ul className="list-disc pl-5">
      <li>MS-SQL</li>
      <li>PostgreSQL</li>
      <li>Redis</li>
      <li>Vector Databases</li>
    </ul>
  </div>

  <div className="flex-1 border border-coolGray-800 p-4 rounded-lg">
    <h3 className="text-lg font-semibold">AI Tech</h3>
    <ul className="list-disc pl-5">
      <li>LLM Integrations</li>
      <li>LangChain</li>
      <li>Agent Development</li>
    </ul>
  </div>

  <div className="flex-1 border border-coolGray-800 p-4 rounded-lg">
    <h3 className="text-lg font-semibold">Other Tech</h3>
    <ul className="list-disc pl-5">
      <li>Azure</li>
      <li>Version Control</li>
      <li>Agile Processes</li>
    </ul>
  </div>
</div>


    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Chandigarh Univeristy, India &nbsp;&nbsp; : 8.73 GPA</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Azure Fundamentals</li>
        <li>Soft Computing from NPTEL</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a dynamic Full Stack Developer driven by the mindset of LEARN and IMPLEMENT. My passion for creating innovative solutions is backed by hands-on experience with a robust tech stack. I thrive on solving complex business challenges and have successfully tackled numerous issues for clients in the energy domain. As a quick learner, I relish the opportunity to collaborate with equally passionate teams. I am dedicated to teamwork and excited to contribute to the development of exceptional applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
