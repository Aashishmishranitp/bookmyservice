import React from 'react'
import { Link } from 'react-router-dom'

function ServicesCard(props) {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src={props.src}
          alt={`{props.ServiceName} image`}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.ServiceName}</div>
          <p className="text-gray-700 text-base">{props.ServiceDescription}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <Link
            to="#"
            className="text-white bg-[#FF204E] hover:bg-[#D4312B] focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Explore More
          </Link>
        </div>
      </div>
    </>
  )
}

export default ServicesCard
