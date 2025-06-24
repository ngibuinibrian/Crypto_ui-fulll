import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-black px-4 py-2 shadow flex justify-between items-center">
      <h1 className="text-2xl font-bold text-green-400">CryptoHub</h1>
      <ul className="flex gap-4 text-white text-sm">
        <li><a href="#">Projects</a></li>
        <li><a href="#">Escrow</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}