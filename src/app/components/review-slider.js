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
                  <b>Wasim Mirza</b>
                </div>
                <div className="static-rating">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <p>
                  The Clinic was up to mark from Receptionist to Surgeons. From
                  Appointment Booking to completely the surgery. For me Its been
                  3 months 15 days.I went there for my FUE Hair Transplant
                 
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
                  <b>Wasim Mirza</b>
                </div>
                <div className="static-rating">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <p>
                  The Clinic was up to mark from Receptionist to Surgeons. From
                  Appointment Booking to completely the surgery. For me Its been
                  3 months 15 days.I went there for my FUE Hair Transplant
                  
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
                  <b>Wasim Mirza</b>
                </div>
                <div className="static-rating">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <p>
                  The Clinic was up to mark from Receptionist to Surgeons. From
                  Appointment Booking to completely the surgery. For me Its been
                  3 months 15 days.I went there for my FUE Hair Transplant
                 
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
                  <b>Wasim Mirza</b>
                </div>
                <div className="static-rating">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <p>
                  The Clinic was up to mark from Receptionist to Surgeons. From
                  Appointment Booking to completely the surgery. For me Its been
                  3 months 15 days.I went there for my FUE Hair Transplant
                 
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
                  <b>Wasim Mirza</b>
                </div>
                <div className="static-rating">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <p>
                  The Clinic was up to mark from Receptionist to Surgeons. From
                  Appointment Booking to completely the surgery. For me Its been
                  3 months 15 days.I went there for my FUE Hair Transplant
                  
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
                  <b>Wasim Mirza</b>
                </div>
                <div className="static-rating">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <p>
                  The Clinic was up to mark from Receptionist to Surgeons. From
                  Appointment Booking to completely the surgery. For me Its been
                  3 months 15 days.I went there for my FUE Hair Transplant
                 
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
