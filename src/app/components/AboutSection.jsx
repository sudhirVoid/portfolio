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
    <h3 className="text-lg font-semibold">🤖 AI & LLM</h3>
    <ul className="list-disc pl-5">
      <li>LangChain & RAG</li>
      <li>Azure AI Foundry</li>
      <li>MCP Servers</li>
      <li>Multi-Agent Systems</li>
      <li>Context Engineering</li>
      <li>Pinecone & FAISS</li>
    </ul>
  </div>

  <div className="flex-1 border border-coolGray-800 p-4 rounded-lg">
    <h3 className="text-lg font-semibold">☁️ Cloud & DevOps</h3>
    <ul className="list-disc pl-5">
      <li>Azure Functions</li>
      <li>Event Hub & CosmosDB</li>
      <li>Docker & CI/CD</li>
      <li>APIM & Redis</li>
      <li>GitHub Copilot</li>
    </ul>
  </div>

  <div className="flex-1 border border-coolGray-800 p-4 rounded-lg">
    <h3 className="text-lg font-semibold">⚙️ Backend</h3>
    <ul className="list-disc pl-5">
      <li>Node.js & NestJS</li>
      <li>.NET Core & FastAPI</li>
      <li>Python & TypeScript</li>
      <li>High-Throughput APIs</li>
      <li>Event-Driven Architecture</li>
    </ul>
  </div>

  <div className="flex-1 border border-coolGray-800 p-4 rounded-lg">
    <h3 className="text-lg font-semibold">🎨 Frontend</h3>
    <ul className="list-disc pl-5">
      <li>React & Angular</li>
      <li>Next.js</li>
      <li>Tailwind CSS</li>
    </ul>
  </div>

  <div className="flex-1 border border-coolGray-800 p-4 rounded-lg">
    <h3 className="text-lg font-semibold">🗄️ Databases</h3>
    <ul className="list-disc pl-5">
      <li>PostgreSQL & MS-SQL</li>
      <li>Vector DBs (Pinecone)</li>
      <li>Redis & CosmosDB</li>
      <li>Elasticsearch</li>
    </ul>
  </div>

  <div className="flex-1 border border-coolGray-800 p-4 rounded-lg">
    <h3 className="text-lg font-semibold">🔧 Tools</h3>
    <ul className="list-disc pl-5">
      <li>n8n Workflows</li>
      <li>SendGrid & Twilio</li>
      <li>Git & Agile</li>
    </ul>
  </div>
</div>


    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="flex flex-wrap gap-3 border-coolGray-800">
  <div className="flex-1 border border-coolGray-800 p-4 rounded-lg">
  <ul className="list-disc pl-2">
        <li>Chandigarh Univeristy, India &nbsp;&nbsp; : 8.73 GPA</li>
      </ul>
  </div>
  </div>
      
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="flex flex-wrap gap-3 border-coolGray-800">
  <div className="flex-1 border border-coolGray-800 p-4 rounded-lg">
  <ul className="list-disc pl-2">
        <li>🏆 Azure Developer Associate (AZ-204)</li>
        <li>☁️ Azure Fundamentals (AZ-900)</li>
        <li>🤖 Azure AI Fundamentals (AI-900)</li>
      </ul>
  </div>
  </div>

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
          AI-focused Software Engineer with 3+ years of experience building intelligent systems and enterprise applications. I specialize in <span className="text-primary-400 font-semibold">LLM orchestration, RAG architectures, and multi-agent systems</span> using Azure AI Foundry, LangChain, and MCP servers. Built AI-powered solutions for corporate immigration workflows, energy forecasting, and hiring platforms. Experienced in developing high-throughput APIs handling <span className="text-primary-400 font-semibold">1400+ requests/second</span> with cloud-native technologies. Published researcher in Deep Learning. Passionate about leveraging AI to solve complex business challenges.
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
