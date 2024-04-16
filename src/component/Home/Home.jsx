import React, { Component } from 'react'
import { motion } from 'framer-motion'
import ImagesSlider from '../ui/images-slider'
import HeroCard from './Herocard'
import url from '/image.png'

function Home() {
  return (
    <div>
      <div className=" w-full h-[30rem] flex justify-center">
        <img className="w-full h-[30rem]" src={url} alt="" />
      </div>
      <HeroCard
        src="https://digitallabourchowk.com/assets/images/why%20dlc.svg"
        ques1="Why choose"
        ques2="Book My Service"
        ans="Digital Labour Chowk allows you to book Daily Wage Worker tailored to your specific needs, right at your fingertips! Imagine having the power to effortlessly book any skilled daily wage worker Join us at Digital Labour Chowk and witness the transformative power of technology Digital Labour Chowk revolutionizes the way you access workforce services.Say goodbye to the days of laborious searches for workers.Through Digital Labour Chowk, you can swiftly select from a pool of authenticated and verified workers.Our platform empowers you to handpick the perfect worker that match your requirements and budget."
      />
      <HeroCard
        src="https://digitallabourchowk.com/assets/images/why%20dlc.svg"
        ques1="Why choose"
        ques2="Book My Service"
        ans="Digital Labour Chowk allows you to book Daily Wage Worker tailored to your specific needs, right at your fingertips! Imagine having the power to effortlessly book any skilled daily wage worker Join us at Digital Labour Chowk and witness the transformative power of technology Digital Labour Chowk revolutionizes the way you access workforce services.Say goodbye to the days of laborious searches for workers.Through Digital Labour Chowk, you can swiftly select from a pool of authenticated and verified workers.Our platform empowers you to handpick the perfect worker that match your requirements and budget."
      />
      <HeroCard
        src="https://digitallabourchowk.com/assets/images/why%20dlc.svg"
        ques1="Why choose"
        ques2="Book My Service"
        ans="Digital Labour Chowk allows you to book Daily Wage Worker tailored to your specific needs, right at your fingertips! Imagine having the power to effortlessly book any skilled daily wage worker Join us at Digital Labour Chowk and witness the transformative power of technology Digital Labour Chowk revolutionizes the way you access workforce services.Say goodbye to the days of laborious searches for workers.Through Digital Labour Chowk, you can swiftly select from a pool of authenticated and verified workers.Our platform empowers you to handpick the perfect worker that match your requirements and budget."
      />
    </div>
  )
}
const images = [
  // 'https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
]

function Slide() {
  return React.createElement(
    ImagesSlider,
    {
      className: 'h-[45rem]',
      images: images,
    },
    React.createElement(
      motion.div,
      {
        initial: {
          opacity: 0,
          y: -80,
        },
        animate: {
          opacity: 1,
          y: 0,
        },
        transition: {
          duration: 0.6,
        },
        className: 'z-50 flex flex-col justify-center items-center',
      },
      React.createElement(
        motion.p,
        {
          className:
            'font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4',
        },
        'Welcome To bookmyservice',
        React.createElement('br'),
        'Book your services'
      ),
      React.createElement(
        'button',
        {
          className:
            'px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4',
        },
        React.createElement('span', null, 'Join now →'),
        React.createElement('div', {
          className:
            'absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent',
        })
      )
    )
  )
}

export default Home
