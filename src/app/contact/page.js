import React from "react";

export default function Contact() {
  return (
    <>
      {/* <!-- ========== Start Banner ========== --> */}
      <section
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/contact.jpg)",
          backgroundPosition:'center',
          backgroundSize: 'cover',
        }}
      >
        <div
          className="container-fluid d-flex align-items-center justify-content-center"
          style={{ height: "350px" }}
        >
          <span style={{ color: "#fff", fontSize: "44px", fontWeight: "700" }}>
            CONTACT
          </span>
        </div>
      </section>
      {/* <!-- ========== End Banner ========== --> */}

      {/*<!-- ========== Start Address ========== -->*/}
      <section className="py-5" style={{background:'var(--blue)', color:'var(--yellow)'}}>
        <div className="container contact-pg">
          <div className="row ">
            <div className="col-md ">
              <h5><b>Clinic Location</b></h5>
              <span className="under-line" ></span>

              <ul className="icon-list">
                <li className="icon-item">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-geo-alt-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                    </svg>
                  </div>
                  Lotus Link Square Building,
                  <br /> Mithchowky, Malad West,
                  <br /> Mumbai, Maharashtra.
                  <br /> 400064
                </li>
              </ul>
            </div>
            <div className="col-md ">
              <h5><b>Contact Info</b></h5>
              <span className="under-line"></span>
              <ul className="icon-list">
                <li className="icon-item">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-telephone-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                      />
                    </svg>
                  </div>
                  Phone : +91 7900035194
                </li>
                <li className="icon-item">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-envelope-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                    </svg>
                  </div>
                  hairnshape@gmail.com
                </li>
                <li>
                  <div className="contactmedia p-2 d-flex">
                    <a
                      href="https://www.youtube.com/channel/UC--tA9JII4zPVYIayk5qUdA"
                      className="mx-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-youtube"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/hairandshape/"
                      className="mx-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-facebook"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com/hairnshape_clinic?igshid=1l1taxuxah68g"
                      className="mx-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-instagram"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                      </svg>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md ">
              <h5><b>Working Time</b></h5>
              <span className="under-line"></span>
              <ul className="icon-list">
                <li className="icon-item">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-clock-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                    </svg>
                  </div>
                  Monday - Friday : 10:00 am - 7:00 pm
                </li>
                <li className="icon-item">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-clock-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                    </svg>
                  </div>
                  Saturday : 10:00 am - 5:00 pm
                </li>
                <li className="icon-item">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-clock-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                    </svg>
                  </div>
                  Sunday : closed
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*<!-- ========== End Address ========== -->*/}

      {/* <!-- ========== Start Contactform ========== -->*/}
      <section className="py-4" style={{background:'linear-gradient(to bottom, rgba(255, 246, 209, 0.5), rgba(255, 246, 209, 0.5)),url(/bg/pattern1.jpg)',backgroundSize:'cover',backgroundPosition:'bottom'}}>
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center ">
            <div className="col-lg-12 shadow">
              <div className="row">
                <div className="col-md-6 col-12 p-0 d-flex align-items-center justify-content-center"
                  style={{background:'url(/clinic.webp)',position:'relative',borderTopLeftRadius: '20px',borderBottomLeftRadius: '20px'}}>                 
                  <div
                    style={{
                      background: "rgba(0, 0, 0, 0.5)",
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      borderTopLeftRadius: '20px',borderBottomLeftRadius: '20px'
                    }}
                  ></div>
                </div>
                <div className="col-md-6 col-12 shadow py-3 d-flex align-items-center justify-content-center" style={{background:'radial-gradient(at bottom, #193bac, #03113f)',borderTopRightRadius: '20px',borderBottomRightRadius: '20px'}}>
                  <div className="container px-5">
                    <h1 className="mb-3 text-center" style={{color:'var(--yellow)'}}>
                      <b>Contact With Us</b>
                    </h1>
                    <form className="text-center">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Name"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          placeholder="Mobile number"
                          pattern="[0-9]{10,}"
                          title="Please enter a mobile number with at least 10 digits"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="city"
                          placeholder="City"
                          required
                        />
                      </div>
                      <button type="submit" className="hsbtn px-3 py-2">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<!-- ========== End Contactform ========== -->*/}

      <section>
        <div className="container-fluid">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.9965703169814!2d72.8308025740464!3d19.195352148217097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6ea046bb8c7%3A0xc6de8082195cfd44!2sThe%20Hair%20And%20Shape%20Clinic!5e0!3m2!1sen!2sin!4v1713171338280!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
