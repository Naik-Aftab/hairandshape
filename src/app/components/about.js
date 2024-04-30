

export const About = () => {

    return (
        <>
            <section className='py-3 px-3' style={{ background: 'url(/bg/bg-image3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff' }}>
                <div className="container about-container">
                    <div className="row">
                        <div className="pt-3 col-12 col-md-6 d-flex justify-content-center align-items-center" data-aos="zoom-in" data-aos-delay="50">
                            <img src="/cropped-clinic.png" className="img-fluid rounded" alt="clinic image" style={{ border: '1px solid var(--yellow)', boxShadow: '0 0 15px 2px var(--yellow)' }} />
                        </div>
                        <div className="col-12 col-md-6 py-5 d-flex justify-content-center align-items-center" data-aos="fade-up">
                            <div>
                                <h5 className='text-center text-md-start' style={{ color: 'var(--yellow)' }}>About Our Clinic</h5>
                                <h3 className='text-center text-md-start'>Your Ultimate Aesthetic Destination</h3>
                                <p>The Hair And Shape Clinic is a Day Care Aesthetic Centre that brings to you a wide array of services all under one roof ranging from Hair Transplant, Laser and Cosmetology (Peels, Skin rejuvenation treatments, Botox, fillers and may more), Plastic surgery (Liposuction, Tummy tucks, Breast Implants, Bodycontouring, and similar) and Integrated Obesity Clinic (Physician / Dietician /Yoga Therapist/Bariatric Surgery/Plastic Surgeon).</p>
                                <div className="container p-4">
                                    <div className="row">
                                        <div className="col-6 py-2">
                                            <div className="card text-center d-flex justify-content-center align-items-center  py-2" style={{ height: '100px', border: '1px solid var(--yellow)', boxShadow: '0 0 10px 0.5px var(--yellow)' }}>
                                                <div className="counter">
                                                <p className="counter-number text-center m-2">10+</p>
                                                    <p className="counter-text text-center m-2">Years of Experience</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 py-2">
                                            <div className="card text-center d-flex justify-content-center align-items-center " style={{ height: '100px', border: '1px solid var(--yellow)', boxShadow: '0 0 10px 0.5px var(--yellow)' }}>
                                                <div className="counter">
                                                <p className="counter-number text-center m-2">50000+</p>
                                                    <p className="counter-text text-center m-2">Happy Patients</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 py-2">
                                            <div className="card  text-center d-flex justify-content-center align-items-center" style={{ height: '100px', border: '1px solid var(--yellow)', boxShadow: '0 0 10px 0.5px var(--yellow)' }}>
                                                <div className="counter">
                                                <p className="counter-number text-center m-2">20+</p>
                                                    <p className="counter-text text-center m-2">Treatments</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 py-2">
                                            <div className="card  text-center d-flex justify-content-center align-items-center" style={{ height: '100px', border: '1px solid var(--yellow)', boxShadow: '0 0 10px 0.5px var(--yellow)' }}>
                                                <div className="counter">
                                                <p className="counter-number text-center m-2">5+</p>
                                                    <p className="counter-text text-center m-2">Awards &amp; Achievement</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
