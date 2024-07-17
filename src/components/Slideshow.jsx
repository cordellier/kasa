import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import './../css/Slideshow.css';

const Slideshow = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToPreviousSlide = useCallback(() => {
        setCurrentSlide(prevSlide => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    }, [images.length]);

    const goToNextSlide = useCallback(() => {
        setCurrentSlide(prevSlide => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    }, [images.length]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft') {
                goToPreviousSlide();
            } else if (event.key === 'ArrowRight') {
                goToNextSlide();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, [goToPreviousSlide, goToNextSlide]);

    const shouldRenderButtons = images.length > 1;

    return (
        <div className="slideshow">
            <div className="slide-container">
                {shouldRenderButtons && (
                    <div
                        onClick={goToPreviousSlide}
                        className="prev"
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && goToPreviousSlide()}
                    >
                        <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white" />
                        </svg>
                    </div>
                )}
                <img src={images[currentSlide]} alt={`Slide ${currentSlide}`} className="slide-image" />
                <div className="slide-counter">{currentSlide + 1}/{images.length}</div>
                {shouldRenderButtons && (
                    <div
                        onClick={goToNextSlide}
                        className="next"
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && goToNextSlide()}
                    >
                        <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white" />
                        </svg>
                    </div>
                )}
            </div>
        </div>
    );
};

Slideshow.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Slideshow;
