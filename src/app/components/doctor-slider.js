"use client"
import React from 'react';
import { useState } from 'react';

export default function Doctor() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (

        <>

          {/* <!-- ========== Start modal ========== --> */}
          {show && <div className="modal-backdrop fade show"></div>}
          <div className={`modal ${show ? 'd-block' : ''}`} tabIndex="-1" role="dialog">
            <div class="modal-dialog modal-sm modal-dialog-centered">
                <div class="modal-content" style={{backgroundColor: '#f8fbff'}}>
                    <div class="modal-body">
                        <div class="container">
                            <div class="row">
                                <div class="text-end">
                                    <button type="button" class="btn-close" onClick={handleClose}>
                                    </button>
                                </div>
                                <div class="col-12  text-center">
                                    <h2 class="py-2" style={{color:'var(--yellow)'}}><b>Calculate Your Cost</b></h2>
                                </div>
                            </div>
                            <div class="row justify-content-center py-2">
                                <div class="col-md-12">
                                    <form class="contact" >
                                        <div class="form-row text-center">
                                            <div class="form-group py-2">
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--yellow)" class="bi bi-person-circle" viewBox="0 0 16 16">
                                                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"></path>
                                                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"></path>
                                                            </svg></span>
                                                    </div>
                                                    <input type="text" class="form-control" id="name" name="name" placeholder="Full Name" required=""/>
                                                </div>
                                            </div>

                                            <div class="form-group py-2">
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--yellow)" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"></path>
                                                            </svg></span>
                                                    </div>
                                                    <input type="email" class="form-control" id="email" name="email" placeholder="Email Address" required=""/>
                                                </div>
                                            </div>


                                            <div class="form-group py-2">
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--yellow)" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"></path>
                                                            </svg></span>
                                                    </div>
                                                    <input type="tel" class="form-control" id="phone" name="phone" placeholder="Phone No" required="" pattern="[0-9]{10,}"/>
                                                </div>
                                            </div>

                                            <div class="form-group py-2">
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--yellow)" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"></path>
                                                            </svg></span>
                                                    </div>
                                                    <input type="text" class="form-control" id="city" name="city" placeholder="Your Location" required=""/>
                                                </div>
                                            </div>

                                            <button class="hsbtn mt-3 py-2 px-3" id="submitBtn" type="submit">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- ========== End modal ========== --> */}

        <section id='doctor' className='pt-5'>
            <div className="container" style={{overflow:'hidden'}}>
                <h1 className='text-center mb-5' style={{color:'var(--blue)'}} data-aos="zoom-in"><b>&#x275D; Meet The Surgeons &#x275E;</b></h1>

                        <div className="container">
                            <div className='row'>
                                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                                    <div className='doctorInfo my-2'>
                                        <h1 className='' style={{color:'var(--yellow)'}}><b>Dr. Umang Kothari</b></h1>
                                        <h6 className='pb-2'><b>MBBS, M.S(Gen.Surgery), DNB(Plastic Surgery)</b></h6>
                                        <ul>
                                            <li><h6>Founder and Director of &quot;The Hair And Shape Clinic&quot; and Nursing Home</h6></li>
                                            <li><h6>Over 14 years of extensive experience in Aesthetic and Reconstructive surgery</h6></li>
                                            <li><h6>Distinguished as a Premier National Mentor and Global Trainer for Reveal lasers, specializing in microlift and microtight procedures</h6></li>
                                            <li><h6>Renowned for conducting numerous live surgeries at both National and International conferences, coupled with delivering captivating lectures</h6></li>
                                            <li><h6>Founding Member of AAPS (Association of Aesthetic Plastic Surgeons) representing Mumbai, Navi Mumbai, and Thane</h6></li>
                                            <li><h6>Expert in laser-assisted liposuction, pioneering innovative techniques in body contouring and sculpting</h6></li>
                                        </ul>
                                        <div className='row pb-3'>
                                            <h6><b> Proud Member of :</b></h6>
                                            <div className='col-3'><img src='Assets\award\award1.png' alt='logo1' style={{ height:'80px'}}/></div>
                                            <div className='col-3'><img src='Assets\award\award2.png' alt='logo2' style={{ height:'80px'}}/></div>
                                            <div className='col-3'><img src='Assets\award\award3.png' alt='logo3' style={{ height:'80px'}}/></div>
                                            <div className='col-3'><img src='Assets\award\award4.png' alt='logo4' style={{ height:'80px'}}/></div>
                                        </div>
                                        <button class="hsbtn my-2 py-2 px-3" onClick={handleShow}>GET
                                            CONSULTATION NOW</button>
                                    </div>
                                </div>
                                <div data-aos='zoom-in' data-aos-delay='500' className='doctorImage col-12 col-md-6 d-flex justify-content-center align-items-center'>
                                    <img className='img-fluid' src="Assets\surgeons\DrUmang.png" alt="Dr. Umang Kothari" style={{height:'600px'}} />
                                </div>
                            </div>
                            <hr className='mt-0'/>
                        </div>
                  
                        <div className="container py-5">
                            <div className='row'>
                            <div data-aos='zoom-in' data-aos-delay='500' className='doctorImage order-2 order-lg-1 col-12 col-md-6  d-flex justify-content-center align-items-center'>
                                    <img className='img-fluid' src="Assets\surgeons\DrOmkar.png" alt="Dr. Omkar Warang" style={{height:'600px'}} />
                                </div>

                                <div className=" order-1 order-lg-2 col-12 col-md-6 d-flex justify-content-center align-items-center">
                                    <div className='doctorInfo my-2'>
                                        <h1  style={{color:'var(--yellow)'}} ><b>Dr. Omkar Warang</b></h1>
                                        <h6 className='pb-2'><b>MBBS, D.D.V.L , D.N.B.(Dermatology & Sexually Transmitted Diseases)</b></h6>
                                        <ul>
                                            <li><h6>Director of &quot;The Hair And Shape Clinic&quot;</h6></li>
                                            <li><h6>Board Certified Dermatologist with over 7 years of experience in the field of Dermatology & Hair Transplant</h6></li>
                                            <li><h6>Trained in Dermatology & Venereology,and earned Diplomate of National Board (D.N.B) Degree</h6></li>
                                            <li><h6>He is currently associated with various trust hospitals in Malad & Borivali.</h6></li>
                                        </ul>
                                        <button class="hsbtn my-2 py-2 px-3" onClick={handleShow}>GET
                                            CONSULTATION NOW</button>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
        </section>
        </>
    );
}
