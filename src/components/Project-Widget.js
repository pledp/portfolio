import React from 'react'
import FadeInSection from './scroll_effect';

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