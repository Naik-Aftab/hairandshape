"use client"
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';


export default function Results() {
    useEffect(() => {
        const swiper = new Swiper('.result-swiper', {
            modules: [Autoplay],
            loop: true,
            autoplay: {
                delay: 3000, // Auto slide delay in milliseconds
                disableOnInteraction: false, // Enable autoplay even when user interacts with the slider
            },
            spaceBetween: 30, // Space between slides in pixels
            breakpoints: {
                // Define settings for different screen sizes
                320: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 4,
                },
            },
        });
    }, []);

    return (
        <section className='py-5'>
            <div className="container-fluid result-swiper" style={{overflow:'hidden'}}>
                <h1 className='text-center py-3 px-3' data-aos="zoom-in"><b>Improving The Quality of Your Aesthetics Through Better</b></h1>
                <div className="swiper-wrapper">
                    <div className='swiper-slide d-flex justify-content-center align-items-center'>
                     <img
                        src="/results/Img 1.jpg"
                        class="img-fluid rounded"
                        alt="result"
                     />
                     
                    </div>
                    <div className='swiper-slide d-flex justify-content-center align-items-center'>
                    <img
                        src="/results/Img 2.jpg"
                        class="img-fluid rounded"
                        alt="result"
                     />
                    </div>
                    <div className='swiper-slide d-flex justify-content-center align-items-center'>
                    <img
                        src="/results/Img 3.jpg"
                        class="img-fluid rounded"
                        alt="result"
                     />
                    </div>
                    <div className='swiper-slide d-flex justify-content-center align-items-center'>
                    <img
                        src="/results/Img 4.jpg"
                        class="img-fluid rounded"
                        alt="result"
                     />
                    </div>
                    <div className='swiper-slide d-flex justify-content-center align-items-center'>
                    <img
                        src="/results/Img 5.jpg"
                        class="img-fluid rounded"
                        alt="result"
                     />
                    </div>
                    <div className='swiper-slide d-flex justify-content-center align-items-center'>
                    <img
                        src="/results/Img 6.jpg"
                        class="img-fluid rounded"
                        alt="result"
                     />
                    </div>
                    <div className='swiper-slide d-flex justify-content-center align-items-center'>
                    <img
                        src="/results/Img 7.jpg"
                        class="img-fluid rounded"
                        alt="result"
                     />
                    </div>

                </div> 
                
            </div>
        </section>

    );
}
