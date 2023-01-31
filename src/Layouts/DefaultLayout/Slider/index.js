import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import Images from '~/assets/Images/Images';

const cx = classNames.bind(styles);

const sliderImage = [
    {
        img: Images.slideshow1,
    },
    {
        img: Images.slideshow2,
    },
    {
        img: Images.slideshow3,
    },
];

function Slider() {
    const [slideCurr, setSlideCurr] = useState(0);
    const length = sliderImage.length;

    const prevSlide = () => {
        setSlideCurr(slideCurr === 0 ? length - 1 : slideCurr - 1);
    };

    const nextSlide = () => {
        setSlideCurr(slideCurr === length - 1 ? 0 : slideCurr + 1);
    };

    useEffect(() => {
        const runSlider = setTimeout(() => {
            setSlideCurr(slideCurr === length - 1 ? 0 : slideCurr + 1);
        }, 7000);

        return () => clearTimeout(runSlider);
    }, [slideCurr]);

    return (
        <div className={cx('wrapper')}>
            <FontAwesomeIcon className={cx('next')} icon={faArrowCircleLeft} onClick={prevSlide} />
            <FontAwesomeIcon className={cx('prev')} icon={faArrowCircleRight} onClick={nextSlide} />
            {sliderImage.map((image, index) => (
                <div key={index} className={index === slideCurr ? cx('slideActive') : cx('slide')}>
                    {index === slideCurr && <img src={image.img} alt="slider" />}
                </div>
            ))}
        </div>
    );
}

export default Slider;
