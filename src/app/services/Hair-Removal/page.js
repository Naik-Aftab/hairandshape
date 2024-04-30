import React from 'react';

const HairRemovalPage = () => {
    return (
        <>
            {/* ========== Start About ========== */}
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center"><img src="/" alt="about image" /></div>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div className="about">
                                <h2>Hair Removal</h2>
                                <p>Laser hair removal is a convenient, noninvasive method for permanently reducing or removing unwanted facial or body hair. Laser hair removal requires multiple treatments to eradicate all or most of the hair (the lasers only hit hairs in a certain growth phase and only a percentage of the hairs are in that phase at any time). Today, laser hair removal is one of the most common aesthetic procedures performed in the United States.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ========== End About ========== */}

            {/* ========== Start main content ========== */}
            <section className="pb-5">
                <div className="container">
                    <h2>Why get laser hair removal?</h2>
                    <p>If you have unwanted facial or body hair that makes you feel self-conscious or you have dark hair and light skin and are looking for an alternative to waxing, electrolysis, shaving, and bleaching, laser hair removal may be right for you.</p>
                    <p>Below are some of the benefits of laser hair removal:</p>
                    <ul>
                        <li>Get smoother and silkier skin</li>
                        <li>Save time, money, and aggravation by eliminating the need to shave or wax your face or body hair</li>
                        <li>Make your skin color and complexion more uniform</li>
                        <li>Improve your self-image and self-confidence</li>                
                    </ul>

                    <h2>What should I consider before getting laser hair removal?</h2>
                    <ul>
                        <li>Laser hair removal is a gentle hair removal technique that can treat both small and larger areas effectively with minimal discomfort and no downtime.</li>
                        <li>Laser hair removal is safe for all parts of the body, including the face, but you&apos;ll need to wear a protective eye cover during your procedure. Commonly treated areas include the underarm, bikini line, back, and face (such as your chin, upper lip, or cheek).</li>
                        <li>Multiple treatments are usually required to achieve complete removal. Most patients have permanent hair loss after an average of three to eight sessions.</li>
                        <li>Patients with darker skin may not respond well to this treatment due to a lack of contrast between skin and hair colors. Blonde or gray/white hair is less responsive due to a lack of ample pigment in the hair. Typically patients with dark hair and light skin see the best results.</li>
                        <li>Age, ethnicity, medication, hormone levels, and body area affect the length, coarseness, and color of body hair, which will influence the results of any laser treatment.</li>
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

export default HairRemovalPage;
