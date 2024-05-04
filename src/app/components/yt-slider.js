"use client";
import React, { useEffect } from "react";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Awards() {
  useEffect(() => {
    const swiper = new Swiper(".result-swiper", {
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
    <section className="py-5">
      <div
        className="container result-swiper"
        style={{ overflow: "hidden" }}
      >
        <h1 className="text-center pb-4 px-3" data-aos="zoom-in"><b>Awards and Recognition</b></h1>
        <div className="swiper-wrapper">
          <div className="swiper-slide d-flex justify-content-center align-items-center">
            <img src="/award/award1.png" class="img-fluid rounded" alt="result" style={{height:'150px',width:'150px'}} />
          </div>
          <div className="swiper-slide d-flex justify-content-center align-items-center">
            <img src="/award/award2.png" class="img-fluid rounded" alt="result" style={{height:'150px',width:'150px'}}/>
          </div>
          <div className="swiper-slide d-flex justify-content-center align-items-center">
            <img src="/award/award3.png" class="img-fluid rounded" alt="result" style={{height:'150px',width:'150px'}}/>
          </div>
          <div className="swiper-slide d-flex justify-content-center align-items-center">
            <img src="/award/award4.png" class="img-fluid rounded" alt="result" style={{height:'150px',width:'150px'}}/>
          </div>
          
        </div>
      </div>
    </section>
  );
}
