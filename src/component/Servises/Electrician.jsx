import React from 'react'
import HoverEffect from '../ui/card-for-worker'

function Electrician() {
  const worker = [
    {
      src: 'https://digitallabourchowk.com/assets/images/mason%20copy.svg',
      title: 'Shyam Kumar',
      description:
        'Quality Talent at Your Fingertips, Efficiently access Semi-Skilled & Unskilled workers for all Your Construction Needs.',
    },
    {
      src: 'https://digitallabourchowk.com/assets/images/mason%20copy.svg',
      title: 'Ram Kumar',
      description:
        'Elevate your work speed with expert Masons and reduce construction costs, just a click away.',
    },
    {
      src: 'https://digitallabourchowk.com/assets/images/carpenter%20copy.svg',
      title: 'Mudiya Devi',
      description:
        'We bring traditional charm to modern spaces with our exceptional Carpenter Services.',
    },
    {
      src: 'https://digitallabourchowk.com/assets/images/PAINTER%20copy.svg',
      title: 'Raj',
      ratting: 4.7,
      description:
        " I'm an electrician and hava mere than 10 years of experience.My specialization in Home electricity solutions, AC and Coor reparing.",
    },
    {
      src: 'https://digitallabourchowk.com/assets/images/electrician%20copy.svg',
      title: 'Chandra Prakash',
      description:
        'Count on us for all your professional and dependable electrical jobs that keep your property running smoothly and safely. My specialization in Home electricity solutions, AC and Coor reparing.',
    },
    {
      src: 'https://digitallabourchowk.com/assets/images/plumber%20copy.svg',
      title: 'Rounk Raj',
      description:
        'We deal with everything from small repairs to new installations. Highly trained technicians quickly tackle all your plumbing issues.',
    },
  ]

  return (
    <div className="max-w-8xl mx-auto px-8 my-8">
      <h1 className=" text-center text-3xl text-white">
        View the profile of worker and book your service
      </h1>
      <HoverEffect items={worker} />
    </div>
  )
}

export default Electrician
