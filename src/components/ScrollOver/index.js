import React, { useState, useEffect, Children } from 'react';
import { useResizeDetector } from 'react-resize-detector';

const SCROLL_MARGIN = 6;

const ScrollOver = ({ scrolledContainer: _scrolledContainer, scrolledWrapper: _scrolledWrapper }) => {
  const [scrolledContainer, $scrolledContainer] = useState();
  const [scrolledWrapper, $scrolledWrapper] = useState();
  const [scrolled, $scrolled] = useState();
  const [scrollOverRef, $srollOverRef] = useState();

  useEffect(() => {
    if (scrollOverRef) {
      const scrolledContainer = scrollOverRef.parentNode;
      const scrolledWrapper = scrolledContainer.parentNode;

      // setTimeout(() => scrollOverRef.style.height = `${scrolledWrapper.clientHeight}px`)
      $scrolledContainer(scrolledContainer);
      $scrolledWrapper(scrolledWrapper);
    }

  }, [scrollOverRef]);

  useEffect(() => {
    const scrollEvent = () => {
      requestAnimationFrame(() => $scrolled(Math.floor(scrolledWrapper.scrollTop)));
    }
    
    if (scrolledContainer && scrolledWrapper) {
      scrollEvent();
      scrolledWrapper.addEventListener('scroll', scrollEvent);
    }

    return () => {
      if (scrolledWrapper) {
        scrolledWrapper.removeEventListener('scroll', scrollEvent);
      }
    }
  }, [scrolledContainer])

  useEffect(() => {
    if (scrollOverRef) {
      scrollOverRef.style.height = `${scrolledWrapper.clientHeight}px`;
    }
  }, [scrolledWrapper?.height])

  const overflow = scrolledContainer?.scrollHeight !== scrolledWrapper?.clientHeight;
  const divider = scrolledContainer?.clientHeight / scrolledWrapper?.clientHeight;  //соотношение высоты контейнера контента и высоты видимого контента
  const scrollHeight = scrolledWrapper?.clientHeight / divider - SCROLL_MARGIN * 2; //делим высоту видимого контента на количество видимых блоков
  const scrollBoxOffset = scrolled / divider;

  if (scrolledWrapper?.clientHeight < scrollBoxOffset + scrollHeight + SCROLL_MARGIN) {
    requestAnimationFrame(() => scrolledWrapper.scrollTop = scrolledWrapper.scrollTop - SCROLL_MARGIN)
  }

  return (
    <>
      <div 
        ref={ref => $srollOverRef(ref)}
        style={{ 
          position: 'absolute', 
          right: '0px',
          top: scrolled || 0,
          width: '20px', 
          height: '0%',
          display: scrollOverRef && overflow ? 'flex' : 'none',
        }}
      >
        {scrollOverRef ? (
          <div 
            style={{ 
              position: 'absolute', 
              width: '8px', 
              right: '0px',
              height: `${scrollHeight}px`, 
              top: scrollBoxOffset || 0,
              background: '#d6dee1',
              borderRadius: '20px',
              margin: `${SCROLL_MARGIN}px 0`,
            }}
          />) : null} 
      </div>
    </>
  )
};

export const AutoScrollOver = ({ children }) => {
  const { ref } = useResizeDetector();

  return (
    <div ref={ref} style={{ height: '100%', overflow: 'auto' }}>
      <div style={{ position: 'relative' }}>
        {children}
        <ScrollOver />
      </div>
    </div>
  )
};

export default ScrollOver;
