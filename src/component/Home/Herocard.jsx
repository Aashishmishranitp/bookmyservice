import React from 'react'

function HeroCard(props) {
  return (
    <>
      <div className="w-full  flex justify-center items-center">
        <div className=" w-4/6 xl:flex  my-4 mx-4 bg-gradient-to-r from-purple-500 to-pink-500 ">
          <img className="w-[500px] h-[500px]" src={props.src} alt="" />
          <div className=" xl:mt-12 mt-4 flex flex-col items-center ">
            <p className="text-white text-lg mt-4">{props.ques1}</p>
            <p className="text-white font-extrabold text-2xl ">{props.ques2}</p>
            <p className=" text-white mt-2 xl:mt-10 xl:mr-10 mb-4 mx-2 ">
              {props.ans}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroCard
