import React from 'react';
import Image from 'next/image';

export default function Doctor() {

    return (
        <section id='doctor' className='pt-5'>
            <div className="container" style={{overflow:'hidden'}}>
                <h1 className='text-center mb-5' style={{color:'var(--blue)'}} data-aos="zoom-in"><b>&#x275D; Meet The Surgeons &#x275E;</b></h1>

                        <div className="container">
                            <div className='row'>
                                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                                    <div className='doctorInfo my-2'>
                                        <h1 className='pb-2' style={{color:'var(--yellow)'}}><b>Dr. Umang Kothari</b></h1>
                                        <ul>
                                            <li><h6>MBBS, M.S(Gen.Surgery), DNB(Plastic Surgery)</h6></li>
                                            <li><h6>Founder of &quot;The Hair And Shape Clinic&quot;</h6></li>
                                            <li><h6>10 years in the field of Aesthetic and Reconstructive surgery</h6></li>
                                            <li><h6>Renowned specialist plastic surgeon based in Mumbai.</h6></li>
                                            <li><h6>Premier National Mentor in Cutting-Edge Liposuction Techniques.</h6></li>
                                            <li><h6>Elevating Plastic Surgery Worldwide as a Trainer.</h6></li>
                                        </ul>
                                        <button class="hsbtn my-2 border-0 py-2 px-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">GET
                                            CONSULTATION NOW</button>
                                    </div>
                                </div>
                                <div data-aos='zoom-in' data-aos-delay='500' className='doctorImage col-12 col-md-6 d-flex justify-content-center align-items-center'>
                                    <img className='img-fluid shadow rounded' src="/Umang-sir.webp" alt="Dr. Umang Kothari"  />
                                </div>
                            </div>
                        </div>
                  
                        <div className="container py-5">
                            <div className='row'>
                            <div data-aos='zoom-in' data-aos-delay='500' className='doctorImage col-12 col-md-6  d-flex justify-content-center align-items-center'>
                                    <img className='img-fluid' src="/DrOmkar.png" alt="Dr. Omkar Warang" />
                                </div>

                                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                                    <div className='doctorInfo my-2'>
                                        <h1 className='pb-2' style={{color:'var(--yellow)'}} ><b>Dr. Omkar Warang</b></h1>
                                        <ul>
                                            <li><h6>MBBS, D.D.V.L , D.N.B.(Dermatology & Sexually Transmitted Diseases)</h6></li>
                                            <li><h6>Director of &quot;The Hair And Shape Clinic&quot;</h6></li>
                                            <li><h6>Board Certified Dermatologist with over 7 years of experience in the field of Dermatology & Hair Transplant</h6></li>
                                            <li><h6>Trained in Dermatology & Venereology,and earned Diplomate of National Board (D.N.B) Degree</h6></li>
                                            <li><h6>He is currently associated with various trust hospitals in Malad & Borivali.</h6></li>
                                        </ul>
                                        <button class="hsbtn my-2 border-0 py-2 px-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">GET
                                            CONSULTATION NOW</button>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>

                
              
            
        </section>

    );
}
