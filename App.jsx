import React from "react";
import ProjectCard from "./components/ProjectCard";

const App = () => {
  const projects = [
    {
      name: "MetaLaunch",
      category: "DeFi",
      launchDate: "2025-07-01",
      description: "A decentralized launchpad for metaverse tokens.",
    },
    {
      name: "ChainVote",
      category: "Governance",
      launchDate: "2025-07-10",
      description: "Blockchain-based secure voting platform.",
    },
    {
      name: "TrustLock",
      category: "Escrow",
      launchDate: "2025-07-15",
      description: "Smart-contract powered crypto escrow service.",
    },
  ];

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">🔥 Featured Crypto Projects</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default App;