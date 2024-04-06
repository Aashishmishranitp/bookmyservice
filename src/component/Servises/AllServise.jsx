import React from 'react'
import HoverEffect from '../ui/card-hover-effect'

function AllServise() {
  const projects = [
    {
      src: 'https://digitallabourchowk.com/assets/images/mason%20copy.svg',
      title: 'Labour',
      description:
        'Quality Talent at Your Fingertips, Efficiently access Semi-Skilled & Unskilled workers for all Your Construction Needs.',
      link: 'https://stripe.com',
    },
    {
      src: 'https://digitallabourchowk.com/assets/images/mason%20copy.svg',
      title: 'Mason',
      description:
        'Elevate your work speed with expert Masons and reduce construction costs, just a click away.',
      link: 'https://netflix.com',
    },
    {
      src: 'https://digitallabourchowk.com/assets/images/carpenter%20copy.svg',
      title: 'Carpenter',
      description:
        'We bring traditional charm to modern spaces with our exceptional Carpenter Services.',
      link: 'https://google.com',
    },
    {
      src: 'https://digitallabourchowk.com/assets/images/PAINTER%20copy.svg',
      title: 'Painter',
      description:
        'Transform your spaces with beauty and finesse, Get the Painting job done by our experts and reshape your dream Home',
      link: 'https://meta.com',
    },
    {
      src: 'https://digitallabourchowk.com/assets/images/electrician%20copy.svg',
      title: 'Electrician',
      description:
        'Count on us for all your professional and dependable electrical jobs that keep your property running smoothly and safely.',
      link: 'https://amazon.com',
    },
    {
      src: 'https://digitallabourchowk.com/assets/images/plumber%20copy.svg',
      title: 'Plumber',
      description:
        'We deal with everything from small repairs to new installations. Highly trained technicians quickly tackle all your plumbing issues.',
      link: 'https://microsoft.com',
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  )
}

export default AllServise
