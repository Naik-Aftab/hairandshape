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
                            <img src="assets/images/placeholder.jpg" alt="about image" />
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div className="about">
                                <h2>PRP Hair Loss Treatments</h2>
                                <p>Platelet Rich Plasma, or PRP as it is also known as, considered to be a revolutionary treatment that consists of a high concentration of rich platelets created from the patient’s own blood. This high concentrated platelet rich plasma is then injected into the balding scalp to potentially stimulate thin (miniaturized) hair to grow into thicker (terminal) hairs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ========== End About ========== */}

            {/* ========== Start main content ========== */}
            <section className='py-5'>
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
        </>
    );
};

export default PRPHairLossTreatmentsPage;
