"use client"
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Doctor from './components/doctor-slider';
import { Service } from './components/service-slider';
import Review from './components/review-slider';
import Results from './components/results';
import Awards from './components/awards';


export default function Home() {

    useEffect(() => {
        AOS.init({
             duration: 1000,
             once: false,
           })
     }, [])

    return (
        <>
            {/* <!-- ========== Start Section ========== --> */}

            <section> 
                <div className="container-fluid p-0">
                     <video className="banner-video" src="/banner-video.mp4" poster="" muted preload="auto" loop autoPlay></video>
                </div>
             </section>

            {/* <!-- ========== End Section ========== --> */}

            {/* <!-- ========== Start About ========== --> */}

            <section className='py-5 px-3' style={{background:'url(/bg/bg-image3.jpg)',backgroundSize:'cover',backgroundPosition:'center',color:'#fff'}}>
                <div className="container about-container">
                    <div className="row">
                        <div  className=" col-12 col-md-6 d-flex justify-content-center align-items-center" data-aos="zoom-in" data-aos-delay="50">
                            <img src="/cropped-clinic.png" class="img-fluid rounded" alt="clinic image" style={{border:'1px solid var(--yellow)', boxShadow:'0 0 15px 2px var(--yellow)' }} />
                        </div>
                        <div className="col-12 col-md-6 py-5 d-flex justify-content-center align-items-center" data-aos="fade-up">
                            <div>
                                <h5 className='text-center text-md-start' style={{color:'var(--yellow)'}}>About Our Clinic</h5>
                                <h3 className='text-center text-md-start'>Your Ultimate Aesthetic Destination</h3>
                                <p>The Hair And Shape Clinic is a Day Care Aesthetic Centre that brings to you a wide array of services all under one roof ranging from Hair Transplant, Laser and Cosmetology (Peels, Skin rejuvenation treatments, Botox, fillers and may more), Plastic surgery (Liposuction, Tummy tucks, Breast Implants, Bodycontouring, and similar) and Integrated Obesity Clinic (Physician / Dietician /Yoga Therapist/Bariatric Surgery/Plastic Surgeon).</p>
                                <ul>
                                   <li>Board Certified Team of Doctors</li> 
                                   <li>Well Trained and Experienced Staff</li> 
                                   <li>Two fully equipped state of the art Operation theatres</li> 
                                   <li>Dedicated treatment room for botox, fillers and lasers (US FDA approved)</li> 
                                   <li>Holistic approach for Hair Loss</li> 
                                   <li>Patient friendly and utmost importance to Patient care and Privacy.</li> 
                                </ul>   
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ========== End About ========== --> */}


            {/* <!-- ========== Start doctor ========== --> */}
            <section style={{background: 'linear-gradient(to bottom, rgba(255, 246, 209, 0.5), rgba(255, 246, 209, 0.5)), url(/bg/pattern4.jpg) center/cover'}}>
            <Doctor />                
            </section>            
            {/* <!-- ========== End doctor ========== --> */}            

            {/* <!-- ========== Start Service ========== --> */}
            <section className='py-5' style={{background:'radial-gradient(at center, #193bac, #03113f)'}}>
            <Service />
            </section>
            {/* <!-- ========== End Service ========== --> */}

            {/* <!-- ========== Start whychooseus ========== --> */}
            
            <section className='py-5' style={{background:'var(--light)'}}>
                <div className='container choose'>
                    <h1 className='text-center pb-5' data-aos="zoom-in" ><b>Embark On A Journey To Enhanced Beauty With Us</b></h1>
                    <div className='row'>
                        <div className='col-md-4 col-12 mb-5'>
                            <div className='card shadow mx-3 d-flex flex-column align-items-center text-align-center'>
                                <img src="doctor-icon.png" className="img-fluid rounded p-2" alt="icon1" width="100px" />
                                 <div className='text-center py-3 px-4'>
                                    <h4 className=''>Board Certified Team of Doctors</h4>
                                    {/* <p>asda asda sadas  fdg dfgd dfgdf vxcvxcvv xcvx asda fdsf  dfgdf asda fdsfs s sdaa</p> */}
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4 col-12 mb-5 '>
                            <div className='card shadow mx-3 d-flex flex-column align-items-center text-align-center'>
                                <img src="staff.png" className="img-fluid rounded p-2" alt="icon2" width="100px" />
                                 <div className='text-center py-3 px-4'>
                                    <h4 className='mb-1'>Well Trained & Experienced Staff</h4>
                                    {/* <p>asda asda sadas  fdg dfgd dfgdf vxcvxcvv xcvx asda fdsf  dfgdf asda fdsfs s sdaa</p> */}
                                </div>
                            </div>
                        </div>  

                     <div className='col-md-4 col-12 mb-5'>
                            <div className='card shadow mx-3 d-flex flex-column align-items-center text-align-center'>
                                <img src="OT.png" className="img-fluid rounded p-2" alt="icon3" width="100px"/>
                                 <div className='text-center py-3 px-4'>
                                    <h4 className='mb-1'>Two fully equipped Operation theatres</h4>
                                    {/* <p>asda asda sadas  fdg dfgd dfgdf vxcvxcvv xcvx asda fdsf  dfgdf asda fdsfs s sdaa</p> */}
                                </div>
                            </div>
                        </div>
                     </div>
                     <div className='row'>
                        <div className='col-md-4 col-12 mb-5'>
                            <div className='card shadow mx-3 d-flex flex-column align-items-center text-align-center'>
                                <img src="/filler-icon.png" className="img-fluid rounded p-2" alt="icon4" width="100px"/>
                                 <div className='text-center py-3 px-4'>
                                    <h4 className=''>Dedicated room for botox, fillers & lasers</h4>
                                    {/* <p>asda asda sadas  fdg dfgd dfgdf vxcvxcvv xcvx asda fdsf  dfgdf asda fdsfs s sdaa</p> */}
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4 col-12 mb-5'>
                            <div className='card shadow mx-3 d-flex flex-column align-items-center text-align-center'>
                                <img src="/hair.png" className="img-fluid rounded p-2" alt="icon5" width="100px"/>
                                 <div className='text-center py-3 px-4'>
                                    <h4 className='mb-1'>Holistic approach for Hair Loss</h4>
                                    {/* <p>asda asda sadas  fdg dfgd dfgdf vxcvxcvv xcvx asda fdsf  dfgdf asda fdsfs s sdaa</p> */}
                                </div>
                            </div>
                        </div>  

                     <div className='col-md-4 col-12 mb-5'>
                            <div className='card shadow mx-3 d-flex flex-column align-items-center text-align-center'>
                                <img src="/care.png" className="img-fluid rounded p-2" alt="icon6" width="100px"/>
                                 <div className='text-center py-3 px-4'>
                                    <h4 className='mb-1'>Prioritizing patient care and privacy.</h4>
                                    {/* <p>asda asda sadas  fdg dfgd dfgdf vxcvxcvv xcvx asda fdsf  dfgdf asda fdsfs s sdaa</p> */}
                                </div>
                            </div>
                        </div>
                     </div>                   
                </div>
 
            </section>

            {/* <!-- ========== End whychooseus ========== --> */}
            

            {/* <!-- ========== Start review ========== --> */}
            <section style={{background:'radial-gradient(at center, #193bac, #03113f)'}}>
            <Review />
            </section>
            {/* <!-- ========== End review ========== --> */}
            
            {/* <!-- ========== Start result ========== --> */}
            <Results />
            {/* <!-- ========== End result ========== --> */}
            
            {/* <!-- ========== Start Awards ========== --> */}
            <section style={{background:'var(--light)', color:'var(--blue)' }}>
            <Awards />
            </section>
            {/* <!-- ========== End Awards ========== --> */}
        </>
    );
}
