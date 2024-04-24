"use client";
import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import SwiperCore,{ EffectCoverflow, Pagination } from "swiper/core";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function Review() {
  useEffect(() => {
    // Registering Swiper modules
    SwiperCore.use([EffectCoverflow, Pagination]);

    const swiper = new Swiper(".review-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      autoplay: {
        delay: 3000,
      },
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 350,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".review-pagination",
        clickable: true,
      },
    });

    return () => {
      // Cleanup Swiper instance if necessary
      swiper.destroy();
    };
  }, []);

  return (
    <div className="review-container">
      <h1 className="text-center mb-5" style={{ color: "var(--yellow)" }} data-aos="zoom-in">
        <b>Verified Google Reviews</b>
      </h1>
      <div className="swiper-wrapper">
        <div className="swiper-slide review-swiper">
          <div className="picture">
            <div className="item">
              <div className="shadow-effect text-center p-4">
                <div
                  className="py-2"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <img
                    className="m-0"
                    src="/search.png"
                    alt="icon"
                    style={{ width: "20px" }}
                  />
                </div>
                <div className="py-1">
                  <b>Mr Lalchand Rajpur (Cricketer)</b>
                </div>
                <div className="static-rating">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <p>
                 If you want to do hair Transplant Avanza Clinic Should be your first choice in Mumbai.
                                    
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide review-swiper">
          <div className="picture">
                        <div className="item">
              <div className="shadow-effect text-center p-4">
                <div
                  className="py-2"
                  style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    className="m-0"
                    src="/search.png"
                    alt="icon"
                    style={{ width: "20px" }}
                  />
                </div>
                <div className="py-1">
                  <b>Raviteja Gude</b>
                </div>
                <div className="static-rating">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <p>
                  I didt a lot of search and came across Avanza clinic for my hair transplant. Dr Shweta did a good job with the treatment. I felt very comfortable with the procedure and the staff is also nice.
                
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide review-swiper">
          <div className="picture">
                       <div className="item">
              <div className="shadow-effect text-center p-4">
                <div
                  className="py-2"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <img
                    className="m-0"
                    src="/search.png"
                    alt="icon"
                    style={{ width: "20px" }}
                  />
                </div>
                <div className="py-1">
                  <b>Charles DSA</b>
                </div>
                <div className="static-rating">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <p>
                 I am very happy with the overall results and would highly recommend this clinic to anyone who wants to go in for a hair transplant.
                
                 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide review-swiper">
          <div className="picture">
                        <div className="item">
              <div className="shadow-effect text-center p-4">
                <div
                  className="py-2"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <img
                    className="m-0"
                    src="/search.png"
                    alt="icon"
                    style={{ width: "20px" }}
                  />
                </div>
                <div className="py-1">
                  <b>Sanjay Bhatia</b>
                </div>
                <div className="static-rating">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <p>
                  Excellent staff, good doctor and you offer good service to client, may be cost bit on higher side, but they maintaining standard and services.
                                     
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide review-swiper">
          <div className="picture">
                        <div className="item">
              <div className="shadow-effect text-center p-4">
                <div
                  className="py-2"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <img
                    className="m-0"
                    src="/search.png"
                    alt="icon"
                    style={{ width: "20px" }}
                  />
                </div>
                <div className="py-1">
                  <b>Mangesh Dapake</b>
                </div>
                <div className="static-rating">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <p>
               I had done my hair transplant surgery from this clinic and result is outstanding, doctors and staff are well qualified and well trained they are highly supportive after transplant they gives us continues follow up to monitor progress of surgery now in June i have done my crown area transplant and it is also going well there was no any complication in my both surgery I think hair and shape clinic is best clinic for hair transplant with reasonable price
                  
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide review-swiper">
          <div className="picture">
                       <div className="item">
              <div className="shadow-effect text-center p-4">
                <div
                  className="py-2"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <img
                    className="m-0"
                    src="/search.png"
                    alt="icon"
                    style={{ width: "20px" }}
                  />
                </div>
                <div className="py-1">
                  <b>Khalid Shaikh</b>
                </div>
                <div className="static-rating">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <p>
                    Recently got a hair transplant done.
Fantastic result and amazing service with Dr. Omkar and his team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Swiper pagination */}
      <div className="review-pagination text-center pt-4"></div>
    </div>
  );
}
