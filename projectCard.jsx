import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="border rounded-xl p-4 shadow-md bg-white">
      <h2 className="text-xl font-semibold">{project.name}</h2>
      <p className="text-sm text-gray-600">{project.category}</p>
      <p className="text-sm mt-2">{project.description}</p>
      <p className="text-xs mt-2 text-gray-500">
        Launch Date: {project.launchDate}
      </p>
      <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        View Details
      </button>
    </div>
  );
};

export default ProjectCard;