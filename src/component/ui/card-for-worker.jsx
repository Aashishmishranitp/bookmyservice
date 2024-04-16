import React from 'react'
import { useState } from 'react'
// import { cn } from '../../utils/cn'
import { AnimatePresence, motion } from 'framer-motion'

function HoverEffect({ items, className }) {
  let [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 ${className}`}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.title}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === idx && (
            <span
              className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
              layoutId="hoverBackground"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.15 },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15, delay: 0.2 },
              }}
            />
          )}
          <Card>
            <CardImage>{item.src}</CardImage>
            <div className=" flex gap-10">
              <CardTitle>{item.title}</CardTitle>
              <CardRatting>{item.ratting}</CardRatting>
            </div>
            <CardDescription>{item.description}</CardDescription>
            <CardBtn />
          </Card>
        </a>
      ))}
    </div>
  )
}

function Card({ className, children }) {
  return (
    <div
      className={`rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 ${className}`}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}

function CardImage({ className, children }) {
  return <img src={children} />
}

function CardTitle({ className, children }) {
  return (
    <h4 className={`text-zinc-100 font-bold tracking-wide mt-2 ${className}`}>
      {children}
    </h4>
  )
}
function CardRatting({ className, children }) {
  return (
    <h4 className={`text-zinc-100 font-bold tracking-wide mt-2  ${className}`}>
      ⭐{children}
    </h4>
  )
}

function CardBtn({ className, children }) {
  return (
    <div className=" flex justify-between mt-4">
      <button className="px-4 py-2 text-lg text-white bg-[#FF204E] rounded-lg">
        View record
      </button>
      <button className="px-4 py-2 text-lg text-white bg-[#FF204E] rounded-lg">
        Book
      </button>
    </div>
  )
}

function CardDescription({ className, children }) {
  return (
    <p
      className={`mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm ${className}`}
    >
      {children}
    </p>
  )
}

export default HoverEffect
