"use client"
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Doctor from "../components/doctor-slider";
import Results from "../components/results";
import ContactForm from "../components/contact-form";

const About = () => {
  useEffect(() => {
    AOS.init({
         duration: 1000,
         once: false,
       })
 }, [])

  return (
    <div>
      {/* <!-- ========== Start Banner ========== --> */}
      <section
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/about.jpeg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          className="container-fluid d-flex align-items-center justify-content-center"
          style={{ height: "350px" }}
        >
          <span style={{ color: "#fff", fontSize: "44px", fontWeight: "700" }}>
            ABOUT US
          </span>
        </div>
      </section>
      {/* <!-- ========== End Banner ========== --> */}

 {/* <!-- ========== Start About ========== --> */}

 <section className='py-5 px-3' style={{background:'url(/bg/bg-image3.jpg)',backgroundSize:'cover',backgroundPosition:'center',color:'#fff'}}>
                <div className="container about-container">
                    <div className="row">
                        <div  className="col-12 col-md-6 d-flex justify-content-center align-items-center" data-aos="zoom-in" data-aos-delay="50">
                            <img src="/cropped-clinic.png" class="img-fluid rounded " alt="clinic image" style={{border:'1px solid var(--yellow)', boxShadow:'0 0 15px 2px var(--yellow)' }} />
                        </div>
                        <div className="col-12 col-md-6 pt-5 d-flex justify-content-center align-items-center" data-aos="fade-up">
                            <div>
                                <h5 className='text-center text-md-start' style={{color:'var(--yellow)'}}>About Our Clinic</h5>
                                <h3 className='text-center text-md-start'>Your Ultimate Aesthetic Destination</h3>
                                <p className=''>The Hair And Shape Clinic is a Day Care Aesthetic Centre that brings to you a wide array of services all under one roof ranging from Hair Transplant, Laser and Cosmetology (Peels, Skin rejuvenation treatments, Botox, fillers and may more), Plastic surgery (Liposuction, Tummy tucks, Breast Implants, Bodycontouring, and similar) and Integrated Obesity Clinic (Physician / Dietician /Yoga Therapist/Bariatric Surgery/Plastic Surgeon).</p>
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


      <section style={{ background: "var(--light)" }}>
        <Doctor />
      </section>
      <Results />
      <ContactForm />
    </div>
  );
};

export default About;
