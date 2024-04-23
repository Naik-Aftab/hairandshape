import React from 'react';

const InvertedNipplePage = () => {
    return (
        <>
            {/* ========== Start About ========== */}
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            {/* Update the image source with the correct path or use a placeholder image */}
                            <img src="/placeholder.jpg" alt="about image" />
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div className="about">
                                <h2>Inverted Nipple</h2>
                                <p>According to research, about 10% of women have partially or entirely inverted nipples, which can cause psychological discomfort and various health problems. Inverted nipples can complicate breastfeeding, while insufficient areola hygiene leads to the recurrence of nipple inflammation, and women become insecure. Plastic surgery can help regain the aesthetic appearance of the breasts and avoid health issues.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ========== End About ========== */}

            {/* ========== Start main content ========== */}
            <section>
                <div className="container">
                    <h2>When can inverted nipples should be performed?</h2>
                    <p>Women have inverted nipples for several reasons. Genetically retracted nipples form due to unusually short milk ducts or insufficient supporting tissue. Nipple defects can also occur after trauma, infectious or oncological breast diseases, or complicated breastfeeding.</p>
                    {/* Add other paragraphs */}

                    <h2>Nipple inversion degrees</h2>
                    <ul style={{ listStyleType: 'none' }}>
                        <li><b>Grade I.</b> The nipple pops out and retains its shape by gently clicking the areola. Breastfeeding is usually not complicated at the first degree of nipple inversion, making this more of an aesthetic problem.</li>
                        {/* Add other list items */}
                    </ul>
                    {/* Add other paragraphs */}

                    <p><strong>Important :</strong> The operation cannot be performed if the patient suffers from severe breast disease.</p>

                    <h2>How do you prepare for nipple correction?</h2>
                    <p>First, before the operation, the desired result is discussed with the doctor, and all the necessary tests are done. You should tell your doctor if you have any diseases and allergies or if you are taking any medication. It is recommended not to use anti-inflammatory drugs before surgery as they may increase the risk of bleeding. We advise stopping smoking for at least four weeks before and after surgery.</p>
                    {/* Add other paragraphs */}

                    <h2>How is the inverted nipple surgery performed?</h2>
                    <p>There are two types of inverted nipple surgeries. In one of them, the shortened milk duct gets disconnected from the nipple while it stays untouched during the other. If it is necessary to disconnect the milk duct, you will not be able to breastfeed after having surgery.</p>
                    {/* Add other paragraphs */}
                </div>
            </section>
            {/* ========== End main content ========== */}
        </>
    );
};

export default InvertedNipplePage;
