import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="bg-gray-50  text-white py-16 h-[670px] ">
      <div className="container mx-auto mt-28 text-center">
        <h1 className="text-6xl text-blue-900 font-bold mb-4">Welcome to SpaceX Explorer</h1>
        <p className="text-xl text-blue-700 md:text-2xl mb-8">Explore SpaceX's missions, rockets, launches, and real-time data like never before!</p>
        <Link to='/history' className="bg-blue-300 text-gray-900 px-6 py-3 rounded-full text-lg ">History about us</Link>
      </div>
    </section>

  )
}

export default Home