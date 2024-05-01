"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export const Service = () => {
  return (
    <section>
<p className="text-center mb-0" ><b>What We Do ?</b></p>
<h1 className="text-center px-3" style={{color:'var(--blue)'}} data-aos="zoom-in"><b>Our Specialized Services</b></h1>

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
          <div className="hairOverlay d-flex justify-content-center align-items-center" style={{padding:'0 10px 0 35px'}}>
          <ul style={{color:'white'}}>
            <li><a href="/services/Hair-Transplant-FUT">Hair Transplant FUT</a></li>
            <li><a href="/services/Hair-Transplant-BIO-FUE">Hair Transplant BIO FUE</a></li>
            <li><a href="/services/Hair-Transplant-BIG-FUE">Hair Transplant BIG FUE</a></li>
            <li><a href="/services/Beard-Hair-Transplant">Bread Hair Transplant</a></li>
            <li><a href="/services/Mustache-Hair-Transplant">Mustache Hair Transplant</a></li>
            <li><a href="/services/PRP">PRP</a></li>
            <li><a href="/services/GFC">GFC</a></li>
          </ul>
          </div>
          <img className="hair-image img-fluid rounded-top" src="/service-icons/Hair-Transplant.png" alt="" />
          <h3 className="text-center">Hair Transplant</h3>
          <p className="text-center px-2">Hair transplant restores hair by relocating follicles from donor to recipient areas.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center align-items-center" >
        <div className="m-3 card hairContainer">
          <div className="hairOverlay d-flex justify-content-center align-items-center">
          <ul style={{color:'white'}}>
            {/* <li><a href="#">Male Surgeries</a></li> */}
            <li><a href="/services/Liposuction">Liposuction</a></li>
            <li><a href="#">Hi-Definition Lipo</a></li>
            <li><a href="/services/Tummy-Tuck">Tummy Tuck</a></li>
            <li><a href="/services/Mommy-Makeover">Mommy Makeover</a></li>
            <li><a href="/services/Butt-Lift">Butt Contouring</a></li>
            <li><a href="/services/Arm-Lift">Arm Contouring</a></li>
            <li><a href="/services/Thigh-Lift">Thigh Contouring</a></li>
          </ul>
          </div>
          <img className="hair-image img-fluid rounded-top" src="/service-icons/Plastic -Surgery.png" alt="" />
          <h3 className="text-center">Body Surgeries</h3>
          <p className="text-center px-2">Body surgeries reshape and enhance physical features through surgical procedures.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center align-items-center" >
        <div className="m-3 card hairContainer">
          <div className="hairOverlay d-flex justify-content-center align-items-center">
          <ul style={{color:'white'}}>
            <li><a href="/services/Hair-Removal">Hair Removal</a></li>
            <li><a href="/services/Tattoo-Removal">Tattoo Removal</a></li>
            <li><a href="/services/Skin-Tightening">Skin Tightening</a></li>
            <li><a href="/services/Depigmentation">Depigmentation</a></li>
            <li><a href="/services/Botox">Botox</a></li>
            <li><a href="/services/Fillers">Fillers</a></li>
            <li><a href="/services/Thread-Lifts">Thread Lifts</a></li>
          </ul>
          </div>
          <img className="hair-image img-fluid rounded-top" src="/service-icons/Aesthetic.png" alt="" />
          <h4 className="text-center">Aesthetic Medicines</h4>
          <p className="text-center px-2">Enhances appearance through non-invasive procedures like botox, fillers, etc.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center align-items-center" >
        <div className="m-3 card hairContainer">
          <div className="hairOverlay d-flex justify-content-center align-items-center">
          <ul style={{color:'white'}}>
            <li><a href="/services/Rhinoplasty">Rhinoplasty</a></li>
            <li><a href="#">Chin Surgery</a></li>
            <li><a href="/services/Brow-Lift">Brow Lift</a></li>
            <li><a href="/services/Face-Lift">Face Lift</a></li>
            <li><a href="/services/Lip-Reduction">Lip Reduction</a></li>
            <li><a href="/services/Eyelid-Surgery">Eyelid Surgery</a></li>
          </ul>
          </div>
          <img className="hair-image img-fluid rounded-top" src="/service-icons/Plastic -Surgery.png" alt="" />
          <h3 className="text-center">Facial Surgeries</h3>
          <p className="text-center px-2">Enhance facial features through procedures like rhinoplasty, facelifts, etc.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center align-items-center" >
        <div className="m-3 card hairContainer">
          <div className="hairOverlay d-flex justify-content-center align-items-center">
          <ul style={{color:'white'}}>
            <li><a href="/services/Acne">Acne</a></li>
            <li><a href="/services/Psoriasis">Psoriasis</a></li>
            <li><a href="/services/Vitiligo">Vitiligo</a></li>
            <li><a href="/services/HIV-&-AIDS">HIV & AIDS</a></li>
            <li><a href="/services/Syphils">Syphils</a></li>  
          </ul>
          </div>
          <img className="hair-image img-fluid rounded-top" src="/service-icons/Clinic-icon.png" alt="" />
          <h4 className="text-center">Dermatology & STD</h4>
          <p className="text-center px-2">Treats skin conditions & STDs through diagnosis, treatment, and prevention strategies.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center align-items-center" >
        <div className="m-3 card hairContainer" >
          <div className="hairOverlay d-flex justify-content-center align-items-center">
          <ul style={{color:'white'}}>
            <li><a href="/services/Hydra-Facial">Hydra Facial</a></li>
            <li><a href="/services/Carbon-Peel">Carbon Peel</a></li>
            <li><a href="/services/Chemical-Peel">Chemical Peel</a></li>
            <li><a href="/services/Skin-Brightening">Skin Brightening</a></li>
          </ul>
          </div>
          <img className="hair-image img-fluid rounded-top" src="/service-icons/Laser.png" alt="" />
          <h3 className="text-center">Laser & Medispa</h3>
          <p className="text-center px-2">Offer rejuvenating treatments like laser therapy and skincare services.</p>
        </div>
        </SwiperSlide>        
        <SwiperSlide className="d-flex justify-content-center align-items-center" >
        <div className="m-3 card hairContainer">
          <div className="hairOverlay d-flex justify-content-center align-items-center">
          <ul style={{color:'white'}}>
            <li><a href="/services/Breast-Augmentation">Breast Augmentation</a></li>
            <li><a href="/services/Breast-Lift">Breast Lift</a></li>
            <li><a href="/services/Breast-Reduction">Breast Reduction</a></li>
            <li><a href="#">Breast Implant/Fat</a></li>
            <li><a href="/services/Inverted-Nipple">Inverted Nipple</a></li>
            <li><a href="/services/Gynecomastia">Gynecomastia</a></li>
          </ul>
          </div>
          <img className="hair-image img-fluid rounded-top" src="/service-icons/Plastic -Surgery.png" alt="" />
          <h3 className="text-center">Breast Surgeries</h3>
          <p className="text-center px-2">Alter breast size or shape through procedures like augmentation & reduction.</p>
        </div>
        </SwiperSlide>
        
      </Swiper>
    </section>
  );
};
