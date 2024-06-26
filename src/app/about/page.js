"use client"
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Doctor from "../components/doctor-slider";
import Results from "../components/results";
import ContactForm from "../components/contact-form";
import { About } from '../components/about';

const Aboutpage = () => {
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
            "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(Assets/clinic/about.jpeg)",
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
      <About />
      {/* <!-- ========== End About ========== --> */}

      <section style={{background: 'linear-gradient(to bottom, rgba(255, 246, 209, 0.5), rgba(255, 246, 209, 0.5)), url(Assets/patterns/pattern4.jpg) center/cover'}}>
        <Doctor />
      </section>

      <Results />
      <ContactForm />
    </div>
  );
};

export default Aboutpage;
