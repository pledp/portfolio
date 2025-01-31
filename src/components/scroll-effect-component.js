"use client"
import React from 'react'

const FadeInSection = ({
  children, className = "", threshold = 0.6
}) => {
  const domRef = React.useRef();
  
  const [isVisible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // In your case there's only one element to observe:     
      if (entries[0].isIntersecting) {
      
        // Not possible to set it back to false like this:
        setVisible(true);
        
        // No need to keep observing:
        observer.unobserve(domRef.current);
      }
    },
    {
      threshold: threshold,
    });
    observer.observe(domRef.current);
    
    return () => observer.disconnect();
  }, []);

  return (<section ref={ domRef } className={`${className} fade-section ${isVisible ? "is-visible" : ""}`}>{ children }</section>);
};

export default FadeInSection;