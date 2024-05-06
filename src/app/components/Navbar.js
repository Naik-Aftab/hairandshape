"use client"
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {

  const [hoveredAccordion, setHoveredAccordion] = useState(null);

  const handleAccordionHover = (accordionName) => {
    setHoveredAccordion(accordionName);
  };

  const isAccordionHovered = (accordionName) => {
    return hoveredAccordion === accordionName;
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{background:'var(--blue)', color:'var(--yellow)'}}>
      <div className="container-fluid">
        <Link href="/" className="navbar-brand mx-3 p-0">
          <img src="Assets\icons\has-logo.png" alt="logo" width="90px" style={{filter: 'drop-shadow(0px 0px 5px #fff)'}} />
        </Link>
        <button className="navbar-toggler border-0 shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="var(--yellow)" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
        </button>
        <div className="navbar-collapse collapse" id="navbarNav">
          <div className='col-lg-9 navbar-lists'>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                <b>Home</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                <b>About Us</b>
              </Link>
            </li>
            <li className="nav-item dropdown has-megamenu">
              <Link className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"><b>Services</b></Link>
              <div className="dropdown-menu megamenu" role="menu">
                <div className="row g-3">
                  <div className="col-lg-3 col-6">
                    <div className="col-megamenu">
                      <h6 className="title"><b>Trichology</b></h6>
                      <ul className="list-unstyled">
                        <li><Link href="/services/Hair-Transplant-FUT">Hair Transplant FUT</Link></li>
                        <li><Link href="/services/Hair-Transplant-BIO-FUE">Hair Transplant BIO FUE</Link></li>
                        <li><Link href="/services/Hair-Transplant-BIG-FUE">Hair Transplant BIG FUE</Link></li>
                        <li><Link href="/services/Beard-Hair-Transplant">Beard Hair Transplant</Link></li>
                        <li><Link href="/services/Mustache-Hair-Transplant">Mustache Hair Transplant</Link></li>
                        <li><Link href="/services/PRP">PRP</Link></li>
                        <li><Link href="/services/GFC">GFC</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div className="col-megamenu">
                      <h6 className="title"><b>Plastic Surgery</b></h6>
                      <ul className="list-unstyled"> 
                      <li onMouseEnter={() => handleAccordionHover('face')}
                          onMouseLeave={() => handleAccordionHover(null)}>
                          <div
                            className={`accordion-toggle accordion-face ${isAccordionHovered('face') ? 'show' : ''}`}
                          >
                            <b>Facial Surgery</b><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#fff" className="bi bi-caret-down-fill ms-3" viewBox="0 0 16 16">
                              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                          </div>
                          <div className={`collapse ${isAccordionHovered('face') ? 'show' : ''}`} id="collapseFace">
                            <ul className="list-unstyled ms-2">
                              <li><Link href="/services/Rhinoplasty">Rhinoplasty</Link></li>
                              <li><Link href="#">Chin Surgery</Link></li>
                              <li><Link href="/services/Face-Lift">Face Lift</Link></li>
                              <li><Link href="/services/Brow-Lift">Brow Lift</Link></li>
                              <li><Link href="/services/Lip-Reduction">Lip Reduction</Link></li>
                              <li><Link href="/services/Eyelid-Surgery">Eyelid Surgery</Link></li>
                            </ul>
                          </div>
                        </li>                     
                        <li onMouseEnter={() => handleAccordionHover('female')}
                          onMouseLeave={() => handleAccordionHover(null)}>
                          <div className={`accordion-toggle accordion-female py-2 ${isAccordionHovered('female') ? 'show' : ''}`}>
                            <b>Breast Surgery</b><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#fff" className="bi bi-caret-down-fill ms-3" viewBox="0 0 16 16">
                              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                          </div>
                          <div className={`collapse ${isAccordionHovered('female') ? 'show' : ''}`} id="collapseFemale">
                            <ul className="list-unstyled ms-2">
                              <li><Link href="/services/Breast-Augmentation">Breast Augmentation</Link></li>
                              <li><Link href="/services/Breast-Lift">Breast Lift</Link></li>
                              <li><Link href="/services/Breast-Reduction">Breast Reduction</Link></li>
                              <li><Link href="/services/Inverted-Nipple">Inverted Nipple</Link></li>
                              <li><Link href="/services/Gynecomastia">Gynecomastia (Male Boobs)</Link></li>
                            </ul>
                          </div>
                        </li>
                        <li onMouseEnter={() => handleAccordionHover('body')}
                          onMouseLeave={() => handleAccordionHover(null)}>
                          <div
                            className={`accordion-toggle accordion-body pb-2 ${isAccordionHovered('body') ? 'show' : ''}`}
                          >
                            <b>Body Surgery</b><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#fff" className="bi bi-caret-down-fill ms-3" viewBox="0 0 16 16">
                              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                          </div>
                          <div className={`collapse ${isAccordionHovered('body') ? 'show' : ''}`} id="collapseBody">
                            <ul className="list-unstyled ms-2">
                              <li><Link href="/services/Liposuction">Liposuction</Link></li>
                              <li><Link href="/services/6-Pack-Creation">Hi-Definition Liposuction</Link></li>
                              <li><Link href="/services/Tummy-Tuck">Tummy Tuck</Link></li>
                              <li><Link href="/services/Mommy-Makeover">Mommy Makeover</Link></li>
                              <li><Link href="/services/Butt-Lift">Butt Contouring</Link></li>
                              <li><Link href="/services/Arm-Lift">Arm Contouring</Link></li>
                              <li><Link href="/services/Thigh-Lift">Thigh Contouring</Link></li>
                            </ul>
                          </div>
                        </li>
                       
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="col-megamenu">
                      <h6 className="title"><b>Laser & Medispa</b></h6>
                      <ul className="list-unstyled">
                        <li><Link href="/services/Hydra-Facial">Hydra Facial</Link></li>
                        <li><Link href="/services/Carbon-Peel">Carbon Peel</Link></li>
                        <li><Link href="/services/Chemical-Peel">Chemical Peel</Link></li>
                        <li><Link href="/services/Skin-Brightening">Skin Brightening</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="col-megamenu">
                      <h6 className="title"><b>Dermatology</b></h6>
                      <ul className="list-unstyled">
                        <li><Link href="/services/Acne">Acne</Link></li>
                        <li><Link href="/services/Psoriasis">Psoriasis</Link></li>
                        <li><Link href="/services/Vitiligo">Vitiligo</Link></li>
                        <li><Link href="/services/HIV_&_AIDS">HIV & AIDS</Link></li>
                        <li><Link href="/services/Syphils">Syphilis</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-6">
                    <div className="col-megamenu">
                      <h6 className="title"><b>Aesthetic Medicine</b></h6>
                      <ul className="list-unstyled">
                        <li><Link href="/services/Hair-Removal">Hair Removal</Link></li>
                        <li><Link href="/services/Tattoo-Removal">Tattoo Removal</Link></li>
                        <li><Link href="/services/Skin-Tightening">Skin Tightening</Link></li>
                        <li><Link href="/services/Depigmentation">Depigmentation</Link></li>
                        <li><Link href="/services/Botox">Botox</Link></li>
                        <li><Link href="/services/Fillers">Fillers</Link></li>
                        <li><Link href="/services/Thread-Lifts">Thread Lifts</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li> 
            <li className="nav-item dropdown result-menu">
              <Link href="#" className="nav-link dropdown-toggle" id="galleryDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <b>Before & After</b>
              </Link>
              <ul className="dropdown-menu result-item" aria-labelledby="galleryDropdown">
                <li><Link href="/gallery/hair-transplant" className="dropdown-item">Hair Transplant</Link></li>
                <li><Link href="/gallery/prp" className="dropdown-item">PRP</Link></li>
                <li><Link href="/gallery/liposuction" className="dropdown-item">Liposuction</Link></li>
                <li><Link href="/gallery/thigh-contouring" className="dropdown-item">Thigh Liposuction</Link></li>
                <li><Link href="/gallery/tummy-tuck" className="dropdown-item">Tummy Tuck</Link></li>
                <li><Link href="/gallery/gynecomastia" className="dropdown-item">Gynecomastia</Link></li>
                <li><Link href="/gallery/breast-augmentation" className="dropdown-item">Breast Augmentation</Link></li>
                <li><Link href="/gallery/breast-reduction" className="dropdown-item">Breast Reduction</Link></li>
                <li><Link href="/gallery/arm-contouring" className="dropdown-item">Arm Lift</Link></li>
                <li><Link href="/gallery/rhinoplasty" className="dropdown-item">Rhinoplasty</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">
                <b>Contact Us</b>
              </Link>
            </li>           
          </ul>
          </div>
         <div className='col-lg-3'>               
          <Link href="http://www.thegendercare.com/">
          {/* <img src='Assets\icons\GCC.png' alt='header-img' className='' width={170}/>         */}
          <button className='hsbtn'><img src='Assets\icons\gendercare.png' className='me-2'/>Click Here For Gender Reassignment Surgery</button>
        </Link>
         </div>               
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
