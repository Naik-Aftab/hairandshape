"use client"
import React, { useEffect } from "react";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import GLightbox from 'glightbox';

import 'glightbox/dist/css/glightbox.min.css';
import "swiper/css";

export default function YtSlider() {
  useEffect(() => {
    const swiper = new Swiper(".yt-swiper", {
      modules: [Autoplay],
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      spaceBetween: 30,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
        },
      },
    });

    const lightbox = GLightbox({
      selector: '.glightbox2',
    });
    return () => {
      lightbox.destroy();
    };

  }, []);



  return (
    <section className="py-5">
      <div
        className="container yt-swiper"
        style={{ overflow: "hidden" }}
      >
        <h1 className="text-center pb-4 px-3" data-aos="zoom-in"><b>Video Testimonials</b></h1>
        <div className="swiper-wrapper pb-3">
          <div className="swiper-slide d-flex justify-content-center align-items-center" style={{position:'relative'}}>
            <a href="https://www.youtube.com/embed/YoDmEDyiz5M?si=Dchy2K5wHpDWLIg9" className="glightbox2">
              <img src="\Assets\icons\gyne.jpg" alt="image" className="img-fluid shadow rounded" />
            </a>
            <div style={{position:'absolute'}}>
              <img src="\Assets\icons\youtube-color-icon.webp" className="img-fluid" width={100}/>
            </div>
          </div>

          <div className="swiper-slide d-flex justify-content-center align-items-center" style={{position:'relative'}}>
            <a href="https://www.youtube.com/embed/sNLtkwPWmIw?si=uHFFVEy_eYU53KUh" className="glightbox2">
              <img src="\Assets\icons\lipo-1.jpg" alt="image" className="img-fluid shadow rounded" />
            </a>
            <div style={{position:'absolute'}}>
              <img src="\Assets\icons\youtube-color-icon.webp" className="img-fluid" width={100}/>
            </div>
          </div>

          <div className="swiper-slide d-flex justify-content-center align-items-center" style={{position:'relative'}}>
            <a href="https://www.youtube.com/embed/9NAdDdYGk2E?si=Tg8sPrTzY1VIzR48" className="glightbox2">
              <img src="\Assets\icons\lipo-2.jpg" alt="image" className="img-fluid shadow rounded" />
            </a>
            <div style={{position:'absolute'}}>
              <img src="\Assets\icons\youtube-color-icon.webp" className="img-fluid" width={100}/>
            </div>
          </div>

          <div className="swiper-slide d-flex justify-content-center align-items-center" style={{position:'relative'}}>
            <a href="https://www.youtube.com/embed/nWMU9VR4a-U?si=Aab1fE5zz2M0CThv" className="glightbox2">
              <img src="\Assets\icons\male.jpg" alt="image" className="img-fluid shadow rounded" />
            </a>
            <div style={{position:'absolute'}}>
              <img src="\Assets\icons\youtube-color-icon.webp" className="img-fluid" width={100}/>
            </div>
          </div>

          <div className="swiper-slide d-flex justify-content-center align-items-center" style={{position:'relative'}}>
            <a href="https://www.youtube.com/embed/pXe-bBTu9Ig?si=_EEzACaEfW2S9I83" className="glightbox2">
              <img src="\Assets\icons\rhino.jpg" alt="image" className="img-fluid shadow rounded" />
            </a>
            <div style={{position:'absolute'}}>
              <img src="\Assets\icons\youtube-color-icon.webp" className="img-fluid" width={100}/>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
