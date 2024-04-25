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
                  <b>Ajit Khedekar</b>
                </div>
                <div className="static-rating">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <p>
It was great experience at the hair and shape clinic Dr. Omkar and his team during
                                    pre - post of surgery. Still my process is on going. I am very excited for my final
                                    new look. Thankyou so much to all team.               </p>
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
                  <b>Deepika</b>
                </div>
                <div className="static-rating">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <p>
I had the privilege of being under Dr. Umang Kothari’s care. He is an outstanding
                                    healthcare professional. Dr. Kothari is friendly, thorough and collaborative. He
                                    made me feel assured throughout my treatment and empowered me to make informed
                                    choices about my health.                </p>
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
                  <b>Swapnil Varute</b>
                </div>
                <div className="static-rating">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <p>Hi, This is my Second experience with Hair &amp; shape clinic. Resently i have done my both chest Gynecomastia surgery, surgery was very painless. Dr. Umang kothari is very well experienced and friendly surgen. Also Mr. Kundan is very good staff.. </p>
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
                    The Clinic was up to mark from Receptionist to Surgeons. From Appointment Booking to completely the surgery. For me Its been 3 months 15 days.I went there for my FUE Hair Transplant Surgery. And it's just 3 + months and the result are very Good.Thanks to my Doctor, whatever they have prescribed I have did exactly the same from medicine to Diet from time to time and that's why I'm getting the best result. Now I can only say that it's worth the money coming to The Hair and Shape Clinic. 
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
                  <b>Dipesh</b>
                </div>
                <div className="static-rating">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <p>
Great experience. The staff and doctors are all wonderful and they take care of you. The procedure was fast and only took 6-7 hours. The injecting of the anesthesia was the only uncomfortable part of the procedure. I can’t wait for my results in 6-12 months from now                  
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
