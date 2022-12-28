import React, { useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' 
import Arrow from './Arrow'


export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slides: {
      perView: 3,
      spacing: 15,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    
    },
    created() {
      setLoaded(true)
    }
  })

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">1</div>
          <div className="keen-slider__slide number-slide2">2</div>
          <div className="keen-slider__slide number-slide3">3</div>
          <div className="keen-slider__slide number-slide4">4</div> 
          <div className="keen-slider__slide number-slide5">5</div>
          <div className="keen-slider__slide number-slide6">6</div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(event: any) =>
                event.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(event: any) =>
                event.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
    </>
  )
}
