import React from 'react'

export default function EscrowForm() {
  return (
    <div className="p-6 mt-10 bg-gray-800 rounded-xl max-w-2xl mx-auto">
      <h2 className="text-xl mb-4 text-green-300">Escrow Request</h2>
      <form className="flex flex-col gap-3">
        <input type="text" placeholder="Your Name" className="p-2 rounded bg-gray-700 text-white" />
        <input type="text" placeholder="Project Name" className="p-2 rounded bg-gray-700 text-white" />
        <textarea placeholder="Describe the deal" className="p-2 rounded bg-gray-700 text-white" rows="4"></textarea>
        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white py-2 rounded">Submit</button>
      </form>
    </div>
  )
}