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
          <h1 className='text-center pb-3 px-3' data-aos="zoom-in"><b>Our Successful Results</b></h1>

<div className='d-flex justify-content-center pb-3'>
<ul class="nav nav-pills mb-3 d-flex justify-content-center py-1 px-2 px-md-5" id="pills-tab" role="tablist" style={{ background:'var(--yellow)',borderRadius:'25px'}}>
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Hair Transplant</button>
  </li>
  <li class="nav-item " role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Plastic Sergury</button>
  </li>  
</ul>
</div>

<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">

  <div className="container-fluid result-swiper" style={{overflow:'hidden'}}>
                <div className="swiper-wrapper">
                    <div className='swiper-slide d-flex justify-content-center align-items-center'>
                     <img
                        src="/comp-ht/Amey.jpg"
                        class="img-fluid rounded"
                        alt="result"
                     />
                     
                    </div>
                    <div className='swiper-slide d-flex justify-content-center align-items-center'>
                    <img
                        src="/comp-ht/Ankur Anand.jpg"
                        class="img-fluid rounded"
                        alt="result"
                     />
                    </div>
                    <div className='swiper-slide d-flex justify-content-center align-items-center'>
                    <img
                        src="/comp-ht/Araj.jpg"
                        class="img-fluid rounded"
                        alt="result"
                     />
                    </div>
                    <div className='swiper-slide d-flex justify-content-center align-items-center'>
                    <img
                        src="/comp-ht/Bhagyesh.jpg"
                        class="img-fluid rounded"
                        alt="result"
                     />
                    </div>
                    <div className='swiper-slide d-flex justify-content-center align-items-center'>
                    <img
                        src="/comp-ht/Chirag.jpg"
                        class="img-fluid rounded"
                        alt="result"
                     />
                    </div>
                    <div className='swiper-slide d-flex justify-content-center align-items-center'>
                    <img
                        src="/comp-ht/Diensh.jpg"
                        class="img-fluid rounded"
                        alt="result"
                     />
                    </div>
                    <div className='swiper-slide d-flex justify-content-center align-items-center'>
                    <img
                        src="/comp-ht/Female.jpg"
                        class="img-fluid rounded"
                        alt="result"
                     />
                    </div>
                    <div className='swiper-slide d-flex justify-content-center align-items-center'>
                    <img
                        src="/comp-ht/ganesh.jpg"
                        class="img-fluid rounded"
                        alt="result"
                     />
                    </div>
                    <div className='swiper-slide d-flex justify-content-center align-items-center'>
                    <img
                        src="/comp-ht/Harshal Kadam.jpg"
                        class="img-fluid rounded"
                        alt="result"
                     />
                    </div>
                    <div className='swiper-slide d-flex justify-content-center align-items-center'>
                    <img
                        src="/comp-ht/Harshit.jpg"
                        class="img-fluid rounded"
                        alt="result"
                     />
                    </div>

                </div> 
                
            </div>

  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
  
  <div className="container-fluid result-swiper" style={{overflow:'hidden'}}>
                <div className="swiper-wrapper">
                    <div className='swiper-slide d-flex justify-content-center align-items-center'>
                     <img
                        src="/Arm lift/A1.webp"
                        class="img-fluid rounded"
                        alt="result"
                     />
                     
                    </div>
                    <div className='swiper-slide d-flex justify-content-center align-items-center'>
                    <img
                        src="/Breast Augmentation/Breast Augmentation 1.webp"
                        class="img-fluid rounded"
                        alt="result"
                     />
                    </div>
                    <div className='swiper-slide d-flex justify-content-center align-items-center'>
                    <img
                        src="/Breast Reduction/Breast Reduction 1.webp"
                        class="img-fluid rounded"
                        alt="result"
                     />
                    </div>
                    <div className='swiper-slide d-flex justify-content-center align-items-center'>
                    <img
                        src="/Gynecomastia/Gynecomastia 1.webp"
                        class="img-fluid rounded"
                        alt="result"
                     />
                    </div>
                    <div className='swiper-slide d-flex justify-content-center align-items-center'>
                    <img
                        src="/Liposuction/Liposuction 1.webp"
                        class="img-fluid rounded"
                        alt="result"
                     />
                    </div>
                    <div className='swiper-slide d-flex justify-content-center align-items-center'>
                    <img
                        src="/Rhinoplasty/Rhinoplasty 1.webp"
                        class="img-fluid rounded"
                        alt="result"
                     />
                    </div>
                    <div className='swiper-slide d-flex justify-content-center align-items-center'>
                    <img
                        src="/Thigh Liposuction/Thigh Liposuction 1.webp"
                        class="img-fluid rounded"
                        alt="result"
                     />
                    </div>
                    <div className='swiper-slide d-flex justify-content-center align-items-center'>
                    <img
                        src="/Tummy Liposuction/Tummy Liposuction 1.webp"
                        class="img-fluid rounded"
                        alt="result"
                     />
                    </div>
                    <div className='swiper-slide d-flex justify-content-center align-items-center'>
                    <img
                        src="/Tummy Tuck/Tummy Tuck 1.webp"
                        class="img-fluid rounded"
                        alt="result"
                     />
                    </div>

                </div> 
                
            </div>


  </div>
</div>
        </section>

    );
}
