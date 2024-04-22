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
            <section className="py-5">
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
        </>
    );
};

export default HairRemovalPage;
