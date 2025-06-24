import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-black py-4 text-center text-sm text-gray-400">
      © {new Date().getFullYear()} CryptoHub. Built with 💻 from Kenya.
    </footer>
  )
}