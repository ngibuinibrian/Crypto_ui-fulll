import React from 'react'

export default function ProjectCard({ title, desc, link }) {
  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold text-green-300">{title}</h2>
      <p className="text-sm text-gray-300">{desc}</p>
      <a href={link} className="text-blue-400 underline mt-2 inline-block">View Project</a>
    </div>
  )
}