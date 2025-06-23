import React, { useState } from 'react';

export default function AddProjectPage() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    chain: 'Ethereum',
    fundingGoal: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted project:', formData);
    alert('Project submitted! (Simulated)');
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add New Project</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Project Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-gray-800 border border-gray-600"
        />
        <textarea
          name="description"
          placeholder="Project Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-gray-800 border border-gray-600"
        />
        <select
          value={formData.chain}
          onChange={(e) => setFormData({ ...formData, chain: e.target.value })}
          className="w-full p-2 rounded bg-gray-800 border border-gray-600"
        >
          <option value="Ethereum">Ethereum</option>
          <option value="BSC">Binance Smart Chain</option>
          <option value="Polygon">Polygon</option>
        </select>
        <input
          name="fundingGoal"
          placeholder="Funding Goal (ETH)"
          value={formData.fundingGoal}
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-gray-800 border border-gray-600"
        />
        <button type="submit" className="bg-blue-600 px-4 py-2 rounded">Submit Project</button>
      </form>
    </div>
  );
}
