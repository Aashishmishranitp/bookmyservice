import React from 'react'
import url from '/bg.mp4'

export default function About() {
  return (
    <div className=" h-[40rem] py-16 bg-transparent relative">
      <video
        autoPlay
        loop
        muted
        className=" absolute inset-0 w-full h-full object-cover -z-50 opacity-90"
      >
        <source src={url} />
      </video>
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          {/* <div className="md:5/12 lg:w-5/12">
            <img
              src="https://img.freepik.com/free-photo/warehouse-coworkers-managing-inventory_482257-75294.jpg?size=626&ext=jpg&ga=GA1.1.1319243779.1711584000&semt=ais"
              alt="image"
            />
          </div> */}
          <div className="md:7/12 lg:w-6/12 lg:mt-20 mt-4">
            <h2 className="text-2xl text-[#FF204E] font-bold md:text-4xl">
              "Empowering convenience through AI: Our seamless solution for
              service booking."
            </h2>
            <p className="mt-6 text-[#FF204E] text-xl">
              Welcome to our AI-powered platform, revolutionizing the way you
              book home and office services. From electricians to cleaning
              staff, maids to masons, plumbers, and beyond, our chatbot is here
              to assist you every step of the way. Simply chat with our AI
              assistant, and let it handle the booking process for you. With
              machine learning capabilities, our chatbot learns from each
              interaction, providing personalized recommendations and seamless
              service. Say goodbye to tedious forms and phone calls – welcome to
              the future of service booking.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
