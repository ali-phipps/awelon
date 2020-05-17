/** @jsx jsx */
import React, { useState, useEffect, useRef } from 'react'
import { css, jsx } from '@emotion/core'
import SliderContent from './SliderContent'
import Slide from './Slide'
import Arrow from './Arrow'
import Dots from './Dots'

/**
 * @function Slider
 */
const Slider = props => {
 
  const autoPlayRef = useRef()
  const transitionRef = useRef()
  const { slides } = props
  const firstSlide = slides[0]
  const secondSlide = slides[1]
  const lastSlide = slides[slides.length - 1]

  const [state, setState] = useState({
    activeSlide: 0,
    translate: 0, 
    transition: 0.45,
    _slides: [lastSlide, firstSlide, secondSlide],
    imgWidth: 100
  })

  const { activeSlide , translate, transition, _slides, imgWidth } = state

  useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }

    const smooth = () => {
      transitionRef.current()
    }
    
    setState({...state, imgWidth:window.innerWidth})
    const interval = setInterval(play, props.autoPlay * 1000)
    const transitionEnd = window.addEventListener('transitionend', smooth)

    return () => {
      clearInterval(interval)
      window.removeEventListener('transitionend', transitionEnd)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => {
    autoPlayRef.current = nextSlide
    transitionRef.current = smoothTransition
  })

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 })
  }, [transition])




  const smoothTransition = () => {
    let _slides = []

    // We're at the last slide.
    if (activeSlide === slides.length - 1)
      _slides = [slides[slides.length - 2], lastSlide, firstSlide]
    // We're back at the first slide. Just reset to how it was on initial render
    else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide]
    // Create an array of the previous last slide, and the next two slides that follow it.
    else _slides = slides.slice(activeSlide - 1, activeSlide + 2)

    setState({
      ...state,
      _slides,
      transition: 0,
      translate: imgWidth
    })
  }

  const nextSlide = () => {
setState({
        ...state,
        translate: translate + imgWidth,
        activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1
      })

  }

  const prevSlide = () => {
 
      setState({
        ...state,
        translate: 0,
        activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1
      })
    
  }


  return (
    <div css={SliderCSS}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={imgWidth * _slides.length}
      >
        {_slides.map((_slide, i) => (
          <Slide key={_slide + i} content={_slide} />
        ))}
      </SliderContent>

      {!props.autoPlay && (

      <>
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
      </>
      )}
      <Dots slides={props.slides} activeSlide={activeSlide} />
    </div>
  )
}

const SliderCSS = css`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
  z-index:1;
`
export default Slider