import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProjectCard from './components/ProjectCard'
import EscrowForm from './components/EscrowForm'

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="p-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard title="ShibaX" desc="DeFi Meme coin" link="#" />
        <ProjectCard title="BlockFund" desc="Tokenized crowdfunding" link="#" />
        <ProjectCard title="ETHHub" desc="Ethereum community tools" link="#" />
      </div>
      <EscrowForm />
      <Footer />
    </div>
  )
}