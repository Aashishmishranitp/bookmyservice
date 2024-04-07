import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

class ImagesSlider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
      loading: false,
      loadedImages: [],
    }
  }

  handleNext = () => {
    this.setState((prevState) => ({
      currentIndex:
        prevState.currentIndex + 1 === this.props.images.length
          ? 0
          : prevState.currentIndex + 1,
    }))
  }

  handlePrevious = () => {
    this.setState((prevState) => ({
      currentIndex:
        prevState.currentIndex - 1 < 0
          ? this.props.images.length - 1
          : prevState.currentIndex - 1,
    }))
  }

  componentDidMount() {
    this.loadImages()
    this.setupKeyboardListeners()
    this.setupAutoplay()
  }

  componentWillUnmount() {
    this.removeKeyboardListeners()
    this.clearAutoplayInterval()
  }

  loadImages = () => {
    this.setState({ loading: true })
    const loadPromises = this.props.images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = image
        img.onload = () => resolve(image)
        img.onerror = reject
      })
    })

    Promise.all(loadPromises)
      .then((loadedImages) => {
        this.setState({ loadedImages, loading: false })
      })
      .catch((error) => console.error('Failed to load images', error))
  }

  setupKeyboardListeners = () => {
    window.addEventListener('keydown', this.handleKeyDown)
  }

  removeKeyboardListeners = () => {
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      this.handleNext()
    } else if (event.key === 'ArrowLeft') {
      this.handlePrevious()
    }
  }

  setupAutoplay = () => {
    if (this.props.autoplay) {
      this.autoplayInterval = setInterval(() => {
        this.handleNext()
      }, 5000)
    }
  }

  clearAutoplayInterval = () => {
    clearInterval(this.autoplayInterval)
  }

  render() {
    const { overlay, overlayClassName, className, direction } = this.props
    const { currentIndex, loadedImages, loading } = this.state

    const slideVariants = {
      initial: {
        scale: 0,
        opacity: 0,
        rotateX: 45,
      },
      visible: {
        scale: 1,
        rotateX: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: [0.645, 0.045, 0.355, 1.0],
        },
      },
      upExit: {
        opacity: 1,
        y: '-150%',
        transition: {
          duration: 1,
        },
      },
      downExit: {
        opacity: 1,
        y: '150%',
        transition: {
          duration: 1,
        },
      },
    }

    const areImagesLoaded = loadedImages.length > 0

    return (
      <div
        className={`${
          className || ''
        } overflow-hidden h-full w-full relative flex items-center justify-center`}
        style={{
          perspective: '1000px',
        }}
      >
        {areImagesLoaded && this.props.children}
        {areImagesLoaded && overlay && (
          <div
            className={`absolute inset-0 bg-black/60 z-40 ${
              overlayClassName || ''
            }`}
          />
        )}

        {areImagesLoaded && (
          <AnimatePresence>
            <motion.img
              key={currentIndex}
              src={loadedImages[currentIndex]}
              initial="initial"
              animate="visible"
              exit={direction === 'up' ? 'upExit' : 'downExit'}
              variants={slideVariants}
              className="image h-full w-full absolute inset-0 object-cover object-center"
            />
          </AnimatePresence>
        )}
      </div>
    )
  }
}

export default ImagesSlider
