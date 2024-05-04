"use client"
import React, { useEffect } from "react";
import Swiper from "swiper";
import { Autoplay,Pagination } from "swiper/modules";
// import GLightbox from 'glightbox';

// import 'glightbox/dist/css/glightbox.min.css';
import "swiper/css/pagination";
import "swiper/css";

export default function YtSlider() {
  useEffect(() => {
    const swiper = new Swiper(".yt-swiper", {
      modules: [Pagination],
      loop: true,
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
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
      pagination: {
        el: ".review-pagination",
        clickable: true,
      },
      allowTouchMove: true,
    });

    // const lightbox = GLightbox({
    //   selector: '.glightbox2',
    // });
    // return () => {
    //   lightbox.destroy();
    // };

  }, []);



  return (
    <section className="py-5">
      <div
        className="container yt-swiper"
        style={{ overflow: "hidden" }}
      >
        <h1 className="text-center pb-4 px-3" data-aos="zoom-in"><b>Video Testimonials</b></h1>
        <div className="swiper-wrapper">
          <div className="swiper-slide d-flex justify-content-center align-items-center">
            {/* <a href="https://www.youtube.com/embed/YoDmEDyiz5M?si=Dchy2K5wHpDWLIg9" className="glightbox2">
              <img src="Assets\icons\gyne.jpg" alt="image" className="img-fluid shadow rounded" />
            </a>
            <div style={{position:'absolute'}}>
              <img src="Assets\icons\youtube-color-icon.webp" className="img-fluid" width={100}/>
            </div> */}
            <iframe className="rounded shadow" width="450" height="300" src="https://www.youtube.com/embed/YoDmEDyiz5M?si=bT1OMhQuV5z-2lb6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

          <div className="swiper-slide d-flex justify-content-center align-items-center" style={{position:'relative'}}>
            {/* <a href="https://www.youtube.com/embed/sNLtkwPWmIw?si=uHFFVEy_eYU53KUh" className="glightbox2">
              <img src="\Assets\icons\lipo-1.jpg" alt="image" className="img-fluid shadow rounded" />
            </a>
            <div style={{position:'absolute'}}>
              <img src="Assets\icons\youtube-color-icon.webp" className="img-fluid" width={100}/>
            </div> */}
            <iframe className="rounded shadow" width="450" height="300" src="https://www.youtube.com/embed/sNLtkwPWmIw?si=vUQTC_fHWpOUaqdF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

          <div className="swiper-slide d-flex justify-content-center align-items-center" style={{position:'relative'}}>
            {/* <a href="https://www.youtube.com/embed/9NAdDdYGk2E?si=Tg8sPrTzY1VIzR48" className="glightbox2">
              <img src="Assets\icons\lipo-2.jpg" alt="image" className="img-fluid shadow rounded" />
            </a>
            <div style={{position:'absolute'}}>
              <img src="Assets\icons\youtube-color-icon.webp" className="img-fluid" width={100}/>
            </div> */}
            <iframe className="rounded shadow" width="450" height="300" src="https://www.youtube.com/embed/9NAdDdYGk2E?si=9Qkny49WBRtdGVpf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

          <div className="swiper-slide d-flex justify-content-center align-items-center" style={{position:'relative'}}>
            {/* <a href="https://www.youtube.com/embed/nWMU9VR4a-U?si=Aab1fE5zz2M0CThv" className="glightbox2">
              <img src="Assets\icons\male.jpg" alt="image" className="img-fluid shadow rounded" />
            </a>
            <div style={{position:'absolute'}}>
              <img src="Assets\icons\youtube-color-icon.webp" className="img-fluid" width={100}/>
            </div> */}
            <iframe width="450" height="300" src="https://www.youtube.com/embed/nWMU9VR4a-U?si=lprLrjv-jsKr7Vn7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

          <div className="swiper-slide d-flex justify-content-center align-items-center" style={{position:'relative'}}>
            {/* <a href="https://www.youtube.com/embed/pXe-bBTu9Ig?si=_EEzACaEfW2S9I83" className="glightbox2">
              <img src="Assets\icons\rhino.jpg" alt="image" className="img-fluid shadow rounded" />
            </a>
            <div style={{position:'absolute'}}>
              <img src="Assets\icons\youtube-color-icon.webp" className="img-fluid" width={100}/>
            </div> */}
            <iframe className="rounded shadow" width="450" height="300" src="https://www.youtube.com/embed/pXe-bBTu9Ig?si=iBKxqxttLwJSRlhZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

        </div>
        <div className="review-pagination text-center pt-4"></div>

      </div>
    </section>
  );
}