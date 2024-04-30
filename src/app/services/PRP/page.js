import React from 'react';

const PRPHairLossTreatmentsPage = () => {
    return (
        <>
            {/* ========== Start About ========== */}
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            {/* Update the image source with the correct path or use a placeholder image */}
                            <img src="/placeholder.jpg" alt="about image" />
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div className="about">
                                <h2>What is Platelet Rich Plasma (PRP)</h2>
                                <p>Platelet Rich Plasma, or PRP as it is also known as, considered to be a revolutionary treatment that consists of a high concentration of rich platelets created from the patient’s own blood. This high concentrated platelet rich plasma is then injected into the balding scalp to potentially stimulate thin (miniaturized) hair to grow into thicker (terminal) hairs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ========== End About ========== */}

            {/* ========== Start main content ========== */}
            <section className='pb-5'>
                <div className="container">
                    <h2>PRP for Hair Loss</h2>
                    <p>The Platelet Rich Plasma (PRP) commonly used in hair restoration is “autologous,” meaning that it is derived from the patient&apos;s own blood. To obtain PRP, a patient&apos;s blood is spun in a centrifuge to separate the solid from liquid components and platelet activators, such as thrombin, calcium chloride and sometimes collagen, are added. The separated “solid” portion of the blood is PRP (platelet rich plasma).</p>

                    <h2>Mechanism of Action</h2>
                    <ul>
                        <li>Reversing the hair miniaturization seen in androgenetic alopecia by using PRP to stimulate the growth of follicles.</li>
                        <li>The introduction of platelets through platelet rich plasma (PRP) can amplify the body&apos;s naturally-occurring wound healing mechanism.</li>
                        <li>It is also proposed that PRP can actually stimulate the stem cells (dermal papilla) of the newly transplanted hair follicles.</li>
                    </ul>
                    <h2>What are the Indications for PRP for Hair Loss?</h2>
                    <ul>
                        <li>Male and Female pattern baldness (androgenetic alopecia).</li>
                        <li>Patients with thinning, but not totally bald, areas would be the best candidates.</li>
                    </ul>
                </div>
            </section>
            {/* ========== End main content ========== */}

                        {/* ========== Start FAQ ========== */}
                        <section className="pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <img src="/faq.jpg" className="img-fluid" alt="image" />
                        </div>
                        <div className="col-12 col-md-7">
                            <div className="section-header">
                                <h1 className="text-center py-4 m-0"><b>Frequently Asked Questions</b></h1>
                            </div>
                            <div className="accordion" id="accordionExample">
                            <div className="accordion-item" style={{ marginBottom: "0px" }}>
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-controls="collapseOne" aria-expanded="false">
                                            <b>Q. What is Gynecomastia?</b>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                        Gynecomastia is a male breast reduction surgery. This procedure is designed for men who have developed excess breast tissue on one or both breasts, commonly due to fluctuations in hormones or from a weight gain. Patients with gynecomastia are not able to lose the excess breast tissue with weight-loss.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item" style={{ marginBottom: "0px" }}>
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <b>Q. Who is a good candidate for gynecomastia?</b>
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                        Any male patient that has excessive breast growth on one or both breasts, and who is also in generally good health.                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item" style={{ marginBottom: "0px" }}>
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <b>Q. Can gynecomastia be covered by my insurance? </b>
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                        In some circumstances, yes. This is a difficult procedure for insurance to approve. It is necessary to come in for a consultation and allow The Hair and Shape Clinic to evaluate you to see if he thinks you are a good candidate for this procedure. If you meet the requirements for insurance coverage, our office will apply for prior authorization, which can take 2-3 weeks or more.

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item" style={{ marginBottom: "0px" }}>
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            <b>Q. What will my recovery be like?</b>
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                        Most patients prefer to take 1 to 2 weeks off of work for their recovery. You will also have physical restrictions for at least 4 to 6 weeks following surgery. During this time, you cannot exercise, go to the gym, or engage in any strenuous activity. You will need to minimize your arm movements as well, to help optimize recovery (no lifting, pulling, or stretching).

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ========== End FAQ ========== */}


        </>
    );
};

export default PRPHairLossTreatmentsPage;
