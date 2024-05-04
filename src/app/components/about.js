

export const About = () => {

    return (
        <>
            <section className='py-3 px-3' style={{ background: 'url(/Assets/patterns/bg-image3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff' }}>
                <div className="container about-container">
                    <div className="row">
                        <div className="pt-3 col-12 col-md-6 d-flex justify-content-center align-items-center" data-aos="zoom-in" data-aos-delay="50">
                            <img src="\Assets\clinic\cropped-clinic.png" className="img-fluid rounded" alt="clinic image" style={{ border: '1px solid var(--yellow)', boxShadow: '0 0 15px 2px var(--yellow)' }} />
                        </div>
                        <div className="col-12 col-md-6 py-5 d-flex justify-content-center align-items-center" data-aos="fade-up">
                            <div>
                                <h5 className='text-center text-md-start' >About Our Clinic</h5>
                                <h3 className='text-center text-md-start' style={{ color: 'var(--yellow)' }}>Your Ultimate Aesthetic Destination</h3>
                                <p>The Hair and Shape clinic is a five-bed nursing home dedicated to aesthetic procedures and surgeries. The clinic was established in 2018 as the brainchild of Dr. Umang Kothari, an expert plastic surgeon in India. In the last 5.5 years, we have developed multiple techniques and protocols for safety and the best outcome for our aesthetic patients.</p>
                                <p>With our consistent and appreciable results delivered to our patients, we have gained some fame and name among our clients and patients. Dr. Umang Kothari is the global trainer for the laser-assisted liposuction for the company REVEAL. The Hair and shape clinic is the center of excellence in the entire world for laser assisted liposuction by REVEAL company. </p>
                                <p>The center also has training for academic interest where plastic surgeons and dermatologists from different regions of the country and outside the country have visited and observed the functionality of the Hair and shape clinic.</p>
                                {/* <div className="container p-4">
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
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
