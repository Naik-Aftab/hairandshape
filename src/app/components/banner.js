import React from 'react'

export const Banner = () => {
    return (
        <>
            {/* <!-- ========== Start Section ========== --> */}

            
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
                         {/* Start desktop view */}
                         <section class="d-none d-md-block" id="banner" style={{ height: '550px', backgroundImage: 'url(Assets/patterns/banner-img2.jpg)', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                        <div class="container">
                            <div class="row">
                                <div class=" col-lg-8 pt-5 mt-5 d-flex justify-content-center align-items-center">
                                    <div class="banner-content">
                                        <h2>Laser Liposuction for <br/><span style={{ color: 'var(--yellow)' }}> Ultimate Body Contouring !</span>
                                        </h2>
                                        <h4 style={{color:'#fff'}} data-aos="fade-down" data-aos-delay="200" class="aos-init aos-animate">Eliminate excess fat with <span style={{ color: 'var(--yellow)' }}><strong>Advanced<br />
                                            Liposuction Surgery</strong></span> in Mumbai</h4>

                                        <button data-aos="fade-down" data-aos-delay="300" class="hsbtn my-3 px-3 py-2">Get
                                            Estimate Cost </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* End desktop view */}
                    {/* Start Mobile view */}
                    <section class="d-block d-md-none" id="mob-banner" style={{ height: '650px', backgroundImage: 'url(Assets/patterns/banner-img-mob.jpg)', backgroundPosition: 'bottom', backgroundSize: 'cover' }}>
                        <div class="container">
                            <div class="row">
                                <div class=" col-12 py-2  pt-5 d-flex justify-content-center align-items-center">
                                    <div class="banner-content" style={{textAlign:'center'}}   >
                                        <h2 class="pb-1 text-center" style={{fontSize:'18px'}}>Laser Liposuction for <span style={{ color: 'var(--yellow)' }}> Ultimate Body
                                            Contouring! </span></h2>
                                        <h4 data-aos="fade-down" data-aos-delay="200" class="text-center" style={{fontSize:'14px'}}>Eliminate excess fat with <span style={{ color: 'var(--yellow)' }}><strong>Advanced<br />
                                            Liposuction Surgery</strong></span> in Mumbai</h4>


                                        <button data-aos="fade-down" data-aos-delay="300" class="hsbtn my-3 px-3 py-2 text-center" >Get
                                            Estimate Cost </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* End Mobile view */}
    </div>
    <div class="carousel-item" data-bs-interval="2000">
           {/* Start Desktop View */}
           <section class="d-none d-md-block" style={{ height: '550px', backgroundImage: 'url(Assets/patterns/dek-banner.png)', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                        <div class="container">
                            <div class="row">
                                <div class=" col-lg-8 pt-5 mt-5 d-flex  align-items-center">
                                    <div class="banner-content">
                                        <h2 style={{ color: 'var(--yellow)' }}>Best Hair Transplant <br /> Clinic in Mumbai
                                        </h2>
                                        <div class="points">
                                            <p data-aos="fade-down"><img src="Assets\icons\hair-transplant.png" width="20px" class="mx-2" />5000+
                                                Successful Hair Transplants</p>
                                            <p data-aos="fade-down" data-aos-delay="300" ><img src="Assets\icons\google-white.png" width="20px" class="mx-2" />480+
                                                Google Reviews</p>
                                            <p data-aos="fade-down" data-aos-delay="500"><img src="Assets\icons\fda-approve.webp" width="25px" class="mx-2" />US FDA
                                                Approved
                                            </p>
                                            <button class="hsbtn my-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ border: '2px solid var(--yellow)' }}>BOOK CONSULTATION </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </section>
                    {/* End Desktop View */}

                    {/* Start Mobile View */}
                    <section class="d-block d-md-none" style={{ height: '650px', backgroundImage: 'url(Assets/patterns/mob-banner.webp)', backgroundPosition: 'bottom', backgroundSize: 'cover' }}>
                        <div class="container">
                            <div class="row">
                                <div class=" col-12 py-3 pt-5 d-flex justify-content-center align-items-center">
                                    <div class="banner-content" style={{textAlign:'center'}}>
                                        <h2 class="pb-1" style={{ color: 'var(--yellow)',fontSize:'25px' }}>Best Hair Transplant <br /> Clinic in Mumbai
                                        </h2>
                                        <div class="points">
                                            <p data-aos="fade-down" class="text-center"><img src="Assets\icons\hair-transplant.png" width="20px" class="mx-2" />5000+
                                                Successful Hair Transplants</p>
                                            <p data-aos="fade-down" data-aos-delay="300" class="text-center"><img src="Assets\icons\google-white.png" width="20px" class="mx-2" />480+
                                                Google Reviews</p>
                                            <p data-aos="fade-down" data-aos-delay="500" class="text-center"><img src="Assets\icons\fda-approve.webp" width="25px" class="mx-2" />US FDA
                                                Approved
                                            </p>
                                            <button class="hsbtn my-2" style={{ border: '2px solid var(--yellow)' }}>BOOK CONSULTATION </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* End Mobile View */}  
    </div>
  </div>
  {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> */}
</div>






            <section>                
                    {/* Start desktop view */}
                    {/* <section class="d-none d-md-block" id="banner" style={{ height: '630px', backgroundImage: 'url(Assets/patterns/banner-img2.jpg)', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                        <div class="container">
                            <div class="row">
                                <div class=" col-lg-8 pt-5 mt-5 d-flex justify-content-center align-items-center">
                                    <div class="banner-content">
                                        <h2>Laser Liposuction for <br/><span style={{ color: 'var(--yellow)' }}> Ultimate Body Contouring !</span>
                                        </h2>
                                        <h4 style={{color:'#fff'}} data-aos="fade-down" data-aos-delay="200" class="aos-init aos-animate">Eliminate excess fat with <span style={{ color: 'var(--yellow)' }}><strong>Advanced<br />
                                            Liposuction Surgery</strong></span> in Mumbai</h4>

                                        <button data-aos="fade-down" data-aos-delay="300" class="hsbtn my-3 px-3 py-2">Get
                                            Estimate Cost </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    {/* End desktop view */}
                    {/* Start Mobile view */}
                    {/* <section class="d-block d-md-none" id="mob-banner" style={{ height: '650px', backgroundImage: 'url(Assets/patterns/banner-img-mob.jpg)', backgroundPosition: 'bottom', backgroundSize: 'cover' }}>
                        <div class="container">
                            <div class="row">
                                <div class=" col-12 py-2 d-flex justify-content-center align-items-center">
                                    <div class="banner-content" style={{textAlign:'center'}}   >
                                        <h2 class="pb-1 text-center" style={{fontSize:'18px'}}>Laser Liposuction for <span style={{ color: 'var(--yellow)' }}> Ultimate Body
                                            Contouring! </span></h2>
                                        <h4 data-aos="fade-down" data-aos-delay="200" class="text-center" style={{fontSize:'14px'}}>Eliminate excess fat with <span style={{ color: 'var(--yellow)' }}><strong>Advanced<br />
                                            Liposuction Surgery</strong></span> in Mumbai</h4>


                                        <button data-aos="fade-down" data-aos-delay="300" class="hsbtn my-3 px-3 py-2 text-center" >Get
                                            Estimate Cost </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    {/* End Mobile view */}


                    {/* Start Desktop View */}
                    {/* <section class="d-none d-md-block" style={{ height: '650px', backgroundImage: 'url(Assets/patterns/dek-banner.webp)', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                        <div class="container">
                            <div class="row">
                                <div class=" col-lg-8 pt-5 mt-5 d-flex  align-items-center">
                                    <div class="banner-content">
                                        <h2 style={{ color: 'var(--yellow)' }}>Best Hair Transplant <br /> Clinic in Mumbai
                                        </h2>
                                        <div class="points">
                                            <p data-aos="fade-down"><img src="Assets\icons\hair-transplant.png" width="20px" class="mx-2" />5000+
                                                Successful Hair Transplants</p>
                                            <p data-aos="fade-down" data-aos-delay="300" ><img src="Assets\icons\google-white.png" width="20px" class="mx-2" />480+
                                                Google Reviews</p>
                                            <p data-aos="fade-down" data-aos-delay="500"><img src="Assets\icons\fda-approve.webp" width="25px" class="mx-2" />US FDA
                                                Approved
                                            </p>
                                            <button class="hsbtn my-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ border: '2px solid var(--yellow)' }}>BOOK CONSULTATION </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </section> */}
                    {/* End Desktop View */}

                    {/* Start Mobile View */}
                    {/* <section class="d-block d-md-none" style={{ height: '780px', backgroundImage: 'url(Assets/patterns/mob-banner.webp)', backgroundPosition: 'bottom', backgroundSize: 'cover' }}>
                        <div class="container">
                            <div class="row">
                                <div class=" col-12 py-3 d-flex justify-content-center align-items-center">
                                    <div class="banner-content" style={{textAlign:'center'}}>
                                        <h2 class="pb-1" style={{ color: 'var(--yellow)' }}>Best Hair Transplant <br /> Clinic in Mumbai
                                        </h2>
                                        <div class="points">
                                            <p data-aos="fade-down" class="text-center"><img src="images/hair-transplant.png" width="20px" class="mx-2" />5000+
                                                Successful Hair Transplants</p>
                                            <p data-aos="fade-down" data-aos-delay="300" class="text-center"><img src="images/google-white.png" width="20px" class="mx-2" />480+
                                                Google Reviews</p>
                                            <p data-aos="fade-down" data-aos-delay="500" class="text-center"><img src="images/fda-approve.webp" width="25px" class="mx-2" />US FDA
                                                Approved
                                            </p>
                                            <button class="hsbtn my-2" style={{ border: '2px solid var(--yellow)' }}>BOOK CONSULTATION </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    {/* End Mobile View */}                
            </section>

        </>
    )
}
