import React from 'react'

function About() {
  return (
    <>
    <h1 className='text-6xl mb-4'>Github Find User App</h1>
    <p className='mb-4 text-2xl font-light'>
      A React app to search GitHub profiles and see profile details. This
      project was made by
      <a href='https://www.github.com/matt-marino/'>
        {' '}
        Matt Marino
      </a>.
    </p>
    <p className='text-lg text-gray-400'>
      Version <span className='text-greyk'>1.0.0</span>
    </p>
  </>
  )
}

export default About
