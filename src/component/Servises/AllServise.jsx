import React from 'react'
import HoverEffect from '../ui/card-hover-effect'

function AllServise() {
  const projects = [
    {
      src: 'https://digitallabourchowk.com/assets/images/mason%20copy.svg',
      title: 'Labour',
      description:
        'Quality Talent at Your Fingertips, Efficiently access Semi-Skilled & Unskilled workers for all Your Construction Needs.',
      link: '/services/labour',
    },
    {
      src: 'https://digitallabourchowk.com/assets/images/mason%20copy.svg',
      title: 'Mason',
      description:
        'Elevate your work speed with expert Masons and reduce construction costs, just a click away.',
      link: '/services/mason',
    },
    {
      src: 'https://digitallabourchowk.com/assets/images/carpenter%20copy.svg',
      title: 'Carpenter',
      description:
        'We bring traditional charm to modern spaces with our exceptional Carpenter Services.',
      link: '/services/carpenter',
    },
    {
      src: 'https://digitallabourchowk.com/assets/images/PAINTER%20copy.svg',
      title: 'Painter',
      description:
        'Transform your spaces with beauty and finesse, Get the Painting job done by our experts and reshape your dream Home',
      link: '/services/painter',
    },
    {
      src: 'https://digitallabourchowk.com/assets/images/electrician%20copy.svg',
      title: 'Electrician',
      description:
        'Count on us for all your professional and dependable electrical jobs that keep your property running smoothly and safely.',
      link: '/services/electrician',
    },
    {
      src: 'https://digitallabourchowk.com/assets/images/plumber%20copy.svg',
      title: 'Plumber',
      description:
        'We deal with everything from small repairs to new installations. Highly trained technicians quickly tackle all your plumbing issues.',
      link: '/services/plumber',
    },
  ]

  return (
    <div>
      <div className="max-w-6xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  )
}

export default AllServise
