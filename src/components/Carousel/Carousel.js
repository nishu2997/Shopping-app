import React, { useContext, useEffect, useState } from "react";
import Image from "../Image/Image";
import imageList from "../../carousels";
import "./Carousel.css";
import AppContext from "../../contexts/AppContext";
const Carousel = () => {
  let timer = null;
  let previousTime = new Date().getTime();
  const windowSize = useContext(AppContext).window.windowSize;
  const [itemList, setItemList] = useState(() => {
    const slides = [];
    imageList.map((slide) => {
      slides.push(
        <div key={slide.id} className='slide'>
          <Image
            imageObj={{
              id: slide.id,
              width: "100%",
              height: "100%",
              src: slide.url,
            }}
          />
        </div>
      );
    });
    return slides;
  });

  const getElementsAndSiblings = () => {
    const slides = document.querySelector(".slides");
    const activeSlide = slides.querySelector(".slide.active");
    let prevSlide = null;
    let nextSlide = null;
    if (activeSlide != null) {
      prevSlide = activeSlide.previousElementSibling;
      nextSlide = activeSlide.nextElementSibling;
    }
    return {
      slides: slides,
      activeSlide: activeSlide,
      prevSlide: prevSlide,
      nextSlide: nextSlide,
    };
  };
  const handleTransform = (transition, transform) => {
    const { slides, activeSlide } = getElementsAndSiblings();
    activeSlide.classList.remove("active");
    slides.style.transition = transition;
    slides.style.transform = transform;
  };

  const handlePrev = () => {
    let { slides, activeSlide, prevSlide } = getElementsAndSiblings();
    if (prevSlide == null) {
      const transition = "";
      const transform =
        "translateX(-" +
        slides.children[slides.children.length - 1].style.left +
        ")";
      handleTransform(transition, transform);
      activeSlide = slides.children[0];
      activeSlide.classList.add("active");
      prevSlide = slides.children[1];
    }
    setTimeout(() => {
      const transition = "transform 200ms ease-out";
      const transform = "translateX(-" + prevSlide.style.left + ")";
      handleTransform(transition, transform);
      prevSlide.classList.add("active");
    }, 100);
  };

  const handleNext = () => {
    let { slides, activeSlide, nextSlide } = getElementsAndSiblings();
    if (nextSlide == null) {
      const transition = "";
      const transform = "translateX(0px)";
      handleTransform(transition, transform);
      activeSlide = slides.children[0];
      activeSlide.classList.add("active");
      nextSlide = slides.children[1];
    }
    setTimeout(() => {
      const transition = "transform 200ms ease-out";
      const transform = "translateX(-" + nextSlide.style.left + ")";
      handleTransform(transition, transform);
      nextSlide.classList.add("active");
    }, 100);
  };

  const setLeftPosition = () => {
    const { slides } = getElementsAndSiblings();
    const slideList = slides.children;
    slides.style.width = 100 * itemList.length + "%";
    for (let i = 0; i < slideList.length; i++) {
      slideList[i].style.width = 100 / itemList.length + "%";
      slideList[i].style.left =
        slides.children[0].getBoundingClientRect().width * i + "px";
    }
  };

  const setActiveClass = () => {
    const { slides, activeSlide } = getElementsAndSiblings();
    if (activeSlide != null) {
      slides.style.transition = "";
      slides.style.transform = "translateX(-" + activeSlide.style.left + ")";
    } else {
      slides.children[0].classList.add("active");
    }
  };
  const initializeSlider = () => {
    setLeftPosition();
    setActiveClass();
  };
  const stopAnimation = () => {
    if (timer != null) clearInterval(timer);
  };

  const startAnimation = () => {
    timer = setInterval(() => {
      handleNext();
    }, 3000);
  };
  const handleNextAnnimation = () => {
    const currentTime = new Date().getTime();
    if (currentTime - previousTime > 0 && currentTime - previousTime < 500) {
      setTimeout(() => handleNext(), previousTime + 500 - currentTime);
      previousTime = previousTime + 500;
    } else if (currentTime - previousTime > 500) {
      previousTime = currentTime;
      handleNext();
    }
  };
  const handlePrevAnnimation = () => {
    const currentTime = new Date().getTime();
    if (currentTime - previousTime > 0 && currentTime - previousTime < 500) {
      setTimeout(() => handlePrev(), previousTime + 500 - currentTime);
      previousTime = previousTime + 500;
    } else if (currentTime - previousTime > 500) {
      previousTime = currentTime;
      handlePrev();
    }
  };
  useEffect(() => {
    initializeSlider();
    startAnimation();
    return () => stopAnimation();
  }, [windowSize]);
  return (
    <div
      className='slider'
      onMouseOver={stopAnimation}
      onMouseOut={startAnimation}
    >
      <div className='slides'>{itemList}</div>
      <div className='slider-prev-button'>
        <div className='prev-button' onClick={handlePrevAnnimation}>
          <Image
            imageObj={{
              id: "slider-prev-button",
              width: "40px",
              height: "40px",
              src: "https://img.icons8.com/ios/72/less-than.png",
            }}
          />
        </div>
      </div>
      <div className='slider-next-button'>
        <div className='next-button' onClick={handleNextAnnimation}>
          <Image
            imageObj={{
              id: "slider-next-button",
              width: "40px",
              height: "40px",
              src: "https://img.icons8.com/ios/72/more-than.png",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
