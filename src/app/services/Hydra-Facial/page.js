import React from 'react';

const HydraFacialPage = () => {
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
                                <h2>Hydra Facial</h2>
                                <p>A HydraFacial is a cosmetic procedure that uses special devices to cleanse and hydrate your skin. It usually uses patented technology to clean the pores and get rid of the skin&apos;s dead skin cells. The treatment starts with loosening and opening the pores and then prepping the skin using a mix of glycolic acid, salicylic acid, and several botanical ingredients for better cleansing. Once the pores are open enough, the professional uses vacuum-powered extraction equipment that gets rid of the dirt and oils clogged inside the pores. It is a non-invasive procedure and is practically painless.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ========== End About ========== */}

            {/* ========== Start main content ========== */}
            <section className="py-5">
                <div className="container">
                    <h2>What are the benefits of Hydrafacial?</h2>
                    <ul>
                        <li><b>Gentle on the skin:</b> The vacuum equipment used in hydrafacial is extremely gentle on the skin and gets rid of the gunk, clogged dirt, and oil inside the pores with ease. It cleans out the pores and helps with deeper penetration of the other creams and products applied on the skin.</li>
                        {/* Add other list items */}
                    </ul>

                    <h2>What Does Hydrafacial Do for Your Skin?</h2>
                    <ul>
                        <li><b>Cleansing:</b> the first step of the procedure is cleansing. The specialist will likely use cleansing products meant for your skin type and then cleanse your entire face to provide a smooth canvas for further procedures in the treatment. The cleansing process often involves exfoliation as well, to get rid of the excess oils and dead skin cells in the pores.</li>
                        {/* Add other list items */}
                    </ul>
                </div>
            </section>
            {/* ========== End main content ========== */}
        </>
    );
};

export default HydraFacialPage;
