"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export const Service = () => {
  return (
    <section>

<h2 className="text-center px-3" style={{color:'white'}} data-aos="zoom-in">Improving The Quality of Your Life Through Better Treatment</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        grabCursor= {true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="service-swiper py-5"
      >

        <SwiperSlide className="d-flex  justify-content-center align-items-center" >
        <div className="m-3 card hairContainer">
          <div className="hairOverlay d-flex justify-content-center align-items-center">
          <ul style={{listStyleType: 'none', paddingLeft: '0px'}}>
            <li><a href="#">Hair Transplant FUT</a></li>
            <li><a href="#">Hair Transplant BIO FUE</a></li>
            <li><a href="#">Hair Transplant BIG FUE</a></li>
            <li><a href="#">Bread Hair Transplant</a></li>
            <li><a href="#">Mustache Hair Transplant</a></li>
            <li><a href="#">PRP</a></li>
            <li><a href="#">GFC</a></li>
          </ul>
          </div>
          <img className="hair-image img-fluid rounded-top" src="/service-icons/Hair-Transplant.png" alt="" />
          <h3 className="text-center">Hair Transplant</h3>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quibusdam?</p>
        </div>
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center align-items-center" >
        <div className="m-3 card hairContainer">
          <div className="hairOverlay d-flex justify-content-center align-items-center">
          <ul style={{listStyleType: 'none', paddingLeft: '0px'}}>
            <li><a href="#">Hair Removal</a></li>
            <li><a href="#">Tattoo Removal</a></li>
            <li><a href="#">Skin Tightening</a></li>
            <li><a href="#">Depigmentation</a></li>
            <li><a href="#">Botox</a></li>
            <li><a href="#">Fillers</a></li>
            <li><a href="#">Thread Lifts</a></li>
          </ul>
          </div>
          <img className="hair-image img-fluid rounded-top" src="/service-icons/Aesthetic.png" alt="" />
          <h4 className="text-center">Aesthetic Medicines</h4>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quibusdam?</p>
        </div>
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center align-items-center" >
        <div className="m-3 card hairContainer">
          <div className="hairOverlay d-flex justify-content-center align-items-center">
          <ul style={{listStyleType: 'none', paddingLeft: '0px'}}>
            <li><a href="#">Acne</a></li>
            <li><a href="#">Psoriasis</a></li>
            <li><a href="#">Vitiligo</a></li>
            <li><a href="#">HIV & AIDS</a></li>
            <li><a href="#">Syphils</a></li>  
          </ul>
          </div>
          <img className="hair-image img-fluid rounded-top" src="/service-icons/Clinic-icon.png" alt="" />
          <h4 className="text-center">Dermatology & STD</h4>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quibusdam?</p>
        </div>
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center align-items-center" >
        <div className="m-3 card hairContainer" >
          <div className="hairOverlay d-flex justify-content-center align-items-center">
          <ul style={{listStyleType: 'none', paddingLeft: '0px'}}>
            <li><a href="#">Hydra Facial</a></li>
            <li><a href="#">Carbon Peel</a></li>
            <li><a href="#">Chemical Peel</a></li>
            <li><a href="#">Skin Brightening</a></li>
          </ul>
          </div>
          <img className="hair-image img-fluid rounded-top" src="/service-icons/Laser.png" alt="" />
          <h3 className="text-center">Laser & Medispa</h3>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quibusdam?</p>
        </div>
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center align-items-center" >
        <div className="m-3 card hairContainer">
          <div className="hairOverlay d-flex justify-content-center align-items-center">
          <ul style={{listStyleType: 'none', paddingLeft: '0px'}}>
            <li><a href="#">Male Surgeries</a></li>
            <li><a href="#">Breast Surgeries</a></li>
            <li><a href="#">Body Surgeries</a></li>
            <li><a href="#">Facial Surgeries</a></li>
          </ul>
          </div>
          <img className="hair-image img-fluid rounded-top" src="/service-icons/Plastic -Surgery.png" alt="" />
          <h3 className="text-center">Plastic Surgery</h3>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quibusdam?</p>
        </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
