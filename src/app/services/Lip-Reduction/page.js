import React from 'react';

const LipReductionPage = () => {
    return (
        <>
            {/* ========== Start About ========== */}
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <img className='img-fluid shadow rounded mb-3' src="..\Assets\service-imgs\Lip Reduction.jpg" alt="about image" height={300}/>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div className="about">
                                <h2>Lip Reduction</h2>
                                <p>Lip Reduction is a cosmetic surgery that aims to enhance facial appeal and overall appearance. It intends to achieve a better balance or ratio between the upper and lower lips while providing ease in their usual function. We perform upper lip reduction and lower lip reduction based on the requirement.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ========== End About ========== */}

            {/* ========== Start main content ========== */}
            <section className="pb-5">
                <div className="container">
                    <h2>Lip Reduction Procedure</h2>
                    <p>Lip reduction adjusts the posture or shape of the lips by removing the excess tissue that contributes to its volume. Tissues are removed to provide an enhanced appearance. It can give confidence and boost your morale by getting you the good looking lips.</p>
                    <p>Also, this procedure is performed for medical reasons such as poor speech, drooling, and other similar challenges.</p>
                    
                    <h2>How is the Lip reduction surgery done?</h2>
                    <p>Lip Reduction surgery entails removing the mucosa & submucosa tissues on either one or both upper and lower lips as per your requirement. On-consultation, you can discuss your requirements in detail with your surgeon. The surgery is done under local anesthesia. Then, an incision is made on the inner portion of your lip to minimize the scarring effect post-recovery. The tissues are removed meticulously and the incision is stitched with absorbable stitches which falls within 2-3 weeks.</p>

                    <h2>Benefits of Lip Reduction</h2>
                    <ul>
                        <li>Removes excess lip tissues and products to restore natural shape</li>
                      <li>Improves overall facial harmony and proportionality</li>
                      <li>Restores optimal proportions between the upper and lower lips</li>
                      <li>Performed under local anesthesia as an outpatient procedure</li>
                      <li>Concludes within an hour</li>
                      <li>Minimal downtime and recovery period</li>
                      <li>No visible scars because the incision marks are concealed in the natural skin folds</li>
                      <li>Can address medical concerns and improve functionality</li>
                      <li>Improve overall confidence and self-esteem</li>
                    </ul>
                </div>
            </section>
            {/* ========== End main content ========== */}
        </>
    );
};

export default LipReductionPage;
