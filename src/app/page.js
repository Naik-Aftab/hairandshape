"use client"
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Doctor from './components/doctor-slider';
import { Service } from './components/service-slider';
import Review from './components/review-slider';
import Results from './components/results';
import Awards from './components/awards';
import { About } from './components/about';


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

            {/* <!-- ========== Start doctor ========== --> */}
            <section style={{background: 'linear-gradient(to bottom, rgba(255, 246, 209, 0.5), rgba(255, 246, 209, 0.5)), url(/bg/pattern4.jpg) center/cover'}}>
            <Doctor />                
            </section>            
            {/* <!-- ========== End doctor ========== --> */}

            {/* <!-- ========== Start About ========== --> */}
            <About />
            {/* <!-- ========== End About ========== --> */}



            {/* <!-- ========== Start Service ========== --> */}
            <section className='py-5' style={{background:'var(--light)'}}>
            <Service />
            </section>
            {/* <!-- ========== End Service ========== --> */}

            {/* <!-- ========== Start whychooseus ========== --> */}
            
            <section className='py-5'>
                <div className='container choose'>
                    <h1 className='text-center pb-5' data-aos="zoom-in" ><b>Why Choose Us ?</b></h1>
                    <div className='row'>
                        <div className='col-md-4 col-12 mb-5'>
                            <div data-aos="fade-down" data-aos-delay="200"  className='card shadow mx-3 d-flex flex-column align-items-center text-align-center' >
                                <img src="doctor-icon.png" className="img-fluid rounded p-2" alt="icon1" width="100px" />
                                 <div className='text-center py-3 px-4'>
                                    <h4 className=''>Board Certified Team of Doctors</h4>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4 col-12 mb-5 '>
                            <div data-aos="fade-down" data-aos-delay="300" className='card shadow mx-3 d-flex flex-column align-items-center text-align-center'>
                                <img src="staff.png" className="img-fluid rounded p-2" alt="icon2" width="100px" />
                                 <div className='text-center py-3 px-4'>
                                    <h4 className='mb-1'>Well Trained & Experienced Staff</h4>
                                </div>
                            </div>
                        </div>  

                     <div className='col-md-4 col-12 mb-5'>
                            <div data-aos="fade-down" data-aos-delay="400" className='card shadow mx-3 d-flex flex-column align-items-center text-align-center'>
                                <img src="OT.png" className="img-fluid rounded p-2" alt="icon3" width="100px"/>
                                 <div className='text-center py-3 px-4'>
                                    <h4 className='mb-1'>Two fully equipped Operation theatres</h4>
                                </div>
                            </div>
                        </div>
                     </div>
                     <div className='row'>
                        <div className='col-md-4 col-12 mb-5'>
                            <div data-aos="fade-down" data-aos-delay="500" className='card shadow mx-3 d-flex flex-column align-items-center text-align-center'>
                                <img src="/filler-icon.png" className="img-fluid rounded p-2" alt="icon4" width="100px"/>
                                 <div className='text-center py-3 px-4'>
                                    <h4 className=''>Dedicated room for botox, fillers & lasers</h4>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4 col-12 mb-5'>
                            <div data-aos="fade-down" data-aos-delay="600" className='card shadow mx-3 d-flex flex-column align-items-center text-align-center'>
                                <img src="/hair.png" className="img-fluid rounded p-2" alt="icon5" width="100px"/>
                                 <div className='text-center py-3 px-4'>
                                    <h4 className='mb-1'>Holistic approach for Hair Loss</h4>
                                </div>
                            </div>
                        </div>  

                     <div className='col-md-4 col-12 mb-5'>
                            <div data-aos="fade-down" data-aos-delay="700" className='card shadow mx-3 d-flex flex-column align-items-center text-align-center'>
                                <img src="/care.png" className="img-fluid rounded p-2" alt="icon6" width="100px"/>
                                 <div className='text-center py-3 px-4'>
                                    <h4 className='mb-1'>Prioritizing patient care and privacy.</h4>
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
