import React from 'react';

const SkinBrighteningPage = () => {
    return (
        <>
            {/* ========== Start About ========== */}
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            {/* Update the image source with the correct path or use a placeholder image */}
                            <img src="assets/images/placeholder.jpg" alt="about image" />
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div className="about">
                                <h2>Skin Brightening</h2>
                                <p>Skin-brightening is the process by which people reduce the melanin pigment in the skin to give a whiter complexion. Those with dark complexion have more melanin and the quantity of melanin determines the color of a person’s skin. Melanin is manufactured by cells called melanocytes. The melanin quantity of a person’s skin depends upon the genetic buildup. The production of melanin is affected by exposure to the sun, the degree of damaged skin, and exposure to chemicals.</p>
                                <p>Often people take recourse to skin brightening methods to deal with problems such as freckles, age spots, scars, moles, acne, birthmarks and also by people who wish to have fair skin, especially those with a darker tone of the skin. People use brightening or lightening products such as bleaching creams, fading creams, chemical peels, and laser treatment.</p>
                                <p>These products work by disturbing the tyrosinase enzyme which is instrumental for the melanin production and thereby reducing its amount in the skin. The melanocyte cells which manufacture melanin are situated at the very bottom of the skin’s epidermal layer. Sometimes the over-production of the melanin pigment could lead to various hyperpigmentation problems.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ========== End About ========== */}

            {/* ========== Start main content ========== */}
            <section className="py-5">
                <div className="container">
                    <h2>How is the skin brightening treatment done?</h2>
                    <p>The first step towards a skin brightening procedure would be to schedule an appointment with a dermatologist and tell him/her what kind of skin tone you have in mind. To get a clearer idea across it would be best if you carried a picture with you of the person with the desired skin tone that you have in mind. After discussing with your dermatologist, you may go and talk to the plastic surgeon. You can also show him/her the picture so that he/she knows what it is you exactly want.</p>
                    <p>After consulting with both the dermatologist and plastic surgeon you decide on the option that you want based on your health, requirements and financial position- you can go for a skin bleaching treatment or something as expensive as surgery. Aside from being extremely expensive skin brightening procedures are also very painful and you need to be prepared for both.</p>
                    <p>You need to plan out the recovery time after you complete your treatment; laser treatments and chemical peels take a few weeks and permanent skin brightening surgery takes more time. After treatment, you need to take care of your skin by using certain maintenance products. Sunscreen is very important to prevent you from getting sunburns and also lower chances of your skin getting darker.</p>

                    <h2>How can I whiten my skin fast?</h2>
                    <p>These are the ways in which skin brightening can be done fast:</p>
                    <ul>
                        <li>By trying fresh lemon juice.</li>
                        <li>Using skin lightening cream</li>
                        <li>By applying a facial mask.</li>
                        <li>Quit smoking</li>
                        <li>Drink lots of water.</li>
                        <li>By following a healthy diet.</li>
                    </ul>
                </div>
            </section>
            {/* ========== End main content ========== */}
        </>
    );
};

export default SkinBrighteningPage;
