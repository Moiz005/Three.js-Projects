import { useState } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import DancingBody from './DancingBody';

function Home() {
    return (
      <>
        <Navbar />
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
            <DancingBody />
            <Hero />
        </div>
        <Footer />
      </>
    )
}

export default Home