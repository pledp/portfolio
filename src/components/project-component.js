import React from 'react'
import FadeInSection from './scroll-effect-component';

const Project = ({
  children, className = ""
}) => {

    return (
        <FadeInSection className={`${className}`}>
            {children}
        </FadeInSection>
    );
};

export default Project;