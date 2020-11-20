import React, { useState } from 'react';
import "./Carou.css"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2020-07/rr.jpg',
    altText: 'IL VA FAIRE TOUT NOIR !!!',
    caption: 'IL VA FAIRE TOUT NOIR !!!'
  },
  {
    src: 'https://www.rokai.fr/wp-content/uploads/2019/03/enrochements-3-provinces-e1553522422804.jpg',
    altText: 'Slide 2',
    caption: 'THESE STONES ARE BEAUTIFUL'
  },
  {
    src: 'https://i.pinimg.com/originals/1e/6c/bc/1e6cbc954124bfd6146e0f15b28d9456.jpg',
    altText: 'Slide 3',
    caption: 'WOOOAAAAAAW'
  }
];

const Carou = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem className="CarouselItemCss"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="imgChanging" src={item.src} alt={item.altText} />
        <CarouselCaption className="CarouselCaptionItem" captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div className="CarouselItemCss">
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}

export default Carou;