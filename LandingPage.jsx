import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    name: 'BlockStarter DAO',
    chain: 'Ethereum',
    status: 'Funding',
    startDate: '2025-07-01',
    endDate: '2025-08-01',
  },
  {
    id: 2,
    name: 'DeFiShield',
    chain: 'BSC',
    status: 'Completed',
    startDate: '2025-05-15',
    endDate: '2025-06-15',
  },
];

export default function LandingPage() {
  const [selectedChain, setSelectedChain] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter((project) => {
    const matchChain = selectedChain === 'All' || project.chain === selectedChain;
    const matchSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchChain && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">CryptoDropX</h1>
        <button className="bg-white text-black px-4 py-2 rounded">Connect Wallet</button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <input
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 rounded bg-gray-800 text-white border border-gray-600"
        />
        <select
          value={selectedChain}
          onChange={(e) => setSelectedChain(e.target.value)}
          className="p-2 rounded bg-gray-800 text-white border border-gray-600"
        >
          <option value="All">All Chains</option>
          <option value="Ethereum">Ethereum</option>
          <option value="BSC">BSC</option>
        </select>
        <button className="bg-blue-600 px-4 py-2 rounded">Add New Project</button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-gray-800 p-4 rounded border border-gray-700">
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p>Chain: {project.chain}</p>
            <p>Status: {project.status}</p>
            <p>
              {project.startDate} → {project.endDate}
            </p>
            <button className="mt-2 px-3 py-1 border rounded">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}
