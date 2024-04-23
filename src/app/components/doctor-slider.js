"use client"
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';

export default function Doctor() {
    useEffect(() => {
        const swiper = new Swiper('.doctor-swiper', {
            modules: [Navigation,Autoplay],
            loop: true,
            autoplay: {
                delay: 3000, // auto slide delay in milliseconds
                disableOnInteraction: false // enable autoplay even when user interacts with the slider
            },  
            navigation: {
                nextEl: '.doctor-next',
                prevEl: '.doctor-prev',
            },
            pagination: {
                el: '.doctor-pagination',
                clickable: true,
            },
            speed: 500,
        });
    }, []);

    return (
        <section id='doctor' className='pt-5'>
            <div className="container doctor-swiper" style={{overflow:'hidden'}}>
                <h1 className='text-center pb-2' style={{color:'var(--blue)'}} data-aos="zoom-in"><span>&#x275D;</span> Best Aesthetics Surgeons in Mumbai <span>&#x275E;</span></h1>

                <div className="swiper-wrapper">
                    <div className='swiper-slide'>
                        <div className="container-fluid">
                            <div className='row'>
                                <div className="col-12 col-md-7 order-2 order-md-1 d-flex justify-content-center align-items-center">
                                    <div className='doctorInfo my-2'>
                                        <h1 style={{color:'var(--yellow)'}}>Dr. Umang Kothari</h1>
                                        <ul>
                                            <li><h6>MBBS, M.S(Gen.Surgery), DNB(Plastic Surgery)</h6></li>
                                            <li><h6>Founder of &quot;The Hair And Shape Clinic&quot;</h6></li>
                                            <li><h6>10 years in the field of Aesthetic and Reconstructive surgery</h6></li>
                                            <li><h6>Renowned specialist plastic surgeon based in Mumbai.</h6></li>
                                            <li><h6>Premier National Mentor in Cutting-Edge Liposuction Techniques.</h6></li>
                                            <li><h6>Elevating Plastic Surgery Worldwide as a Trainer.</h6></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='doctorImage col-12 col-md-5 order-1 order-md-2 d-flex justify-content-center align-items-center'>
                                    <Image className='img-fluid' src="/DrUmang.png" width={400} height={500} alt="Dr. Umang Kothari" style={{filter: 'drop-shadow(0px 0px 10px var(--yellow))'}} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='swiper-slide'>
                        <div className="container">
                            <div className='row'>
                                <div className="col-12 col-md-7 order-2 order-md-1 d-flex justify-content-center align-items-center">
                                    <div className='doctorInfo my-2'>
                                        <h1 style={{color:'var(--yellow)'}} >Dr. Omkar Warang</h1>
                                        <ul>
                                            <li><h6>MBBS, D.D.V.L , D.N.B.(Dermatology & Sexually Transmitted Diseases)</h6></li>
                                            <li><h6>Director of &quot;The Hair And Shape Clinic&quot;</h6></li>
                                            <li><h6>Board Certified Dermatologist with over 7 years of experience in the field of Dermatology & Hair Transplant</h6></li>
                                            <li><h6>Trained in Dermatology & Venereology,and earned Diplomate of National Board (D.N.B) Degree</h6></li>
                                            <li><h6>He is currently associated with various trust hospitals in Malad & Borivali.</h6></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='doctorImage col-12 col-md-5 order-1 order-md-2 d-flex justify-content-center align-items-center'>
                                    <Image className='img-fluid' src="/DrOmkar.png" width={400} height={500} alt="Dr. Omkar Warang" style={{filter: 'drop-shadow(0px 0px 10px var(--yellow))'}} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div> 
                {/* <div className="doctor-navigation py-3 py-md-0 d-flex justify-content-center align-items-center g-2">
                    <div className="doctor-prev me-3 d-flex justify-content-center align-items-center  p-2 rounded-circle bg-light" style={{border:'2px solid var(--yellow)'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="var(--blue)" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
                        </svg>
                    </div>
                    <div className="doctor-next d-flex justify-content-center align-items-center rounded-circle  p-2 bg-light" style={{border:'2px solid var(--yellow)'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="var(--blue)" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                        </svg>
                    </div>
                </div> */}
            </div>
        </section>

    );
}
