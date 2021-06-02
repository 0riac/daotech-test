import React, { useState, useEffect } from 'react';
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
      if (scrolledContainer) {
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
  const divider = scrolledContainer?.clientHeight / scrolledWrapper?.clientHeight;

  return (
    <>
      <div 
        ref={ref => $srollOverRef(ref)}
        style={{ 
          position: 'absolute', 
          right: '0px',
          top: scrolled,
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
              height: `${scrolledWrapper?.clientHeight / divider - SCROLL_MARGIN * 2}px`, 
              top: scrolled / divider,
              background: '#d6dee1',
              'border-radius': '20px',
              margin: `${SCROLL_MARGIN}px 0`
            }}
          />) : null} 
      </div>
    </>
  )
};

export const AutoScrollOver = ({ children }) => {
  return (
    <div style={{ position: 'relative' }}>
      {children}
      <ScrollOver />
    </div>
  )
};

export default ScrollOver;
