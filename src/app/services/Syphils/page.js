import React from 'react';

const SyphilisPage = () => {
    return (
        <>
            {/* ========== Start About ========== */}
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <img src="assets/images/" alt="about image" />
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div className="about">
                                <h2>Syphilis</h2>
                                <p>Syphilis is a sexually transmitted infection (STI) that can cause serious health problems without treatment. Infection develops in stages (primary, secondary, latent, and tertiary). Each stage can have different signs and symptoms.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ========== End About ========== */}

            {/* ========== Start main content ========== */}
            <section className="py-5">
                <div className="container">
                    <h2>How is syphilis spread?</h2>
                    <ul>
                        <li>toilet seats</li>
                        <li>doorknobs</li>
                        <li>swimming pools</li>
                        <li>hot tubs</li>
                        <li>bathtubs</li>
                        <li>sharing clothing, or eating utensils</li>
                    </ul>

                    <h2>Prevention</h2>
                    <ul>
                        <li>Have safe sex or no sex. The only certain way to avoid contact with syphilis bacteria is not to have sex. This is called abstinence. If a person is sexually active, safer sex means a long-term relationship in which you and your partner have sex only with each other, and neither of you is infected. Before you have sex with someone new, you should both get tested for syphilis and other sexually transmitted infections (STIs).</li>
                        <li>Use a latex condom. Condoms can lower your risk of getting or spreading syphilis. But condoms work only if they cover an infected person&apos;s syphilis sores. Other types of birth control do not lower your risk of syphilis.</li>
                        <li>Be careful with alcohol and stay away from street drugs. Drinking too much alcohol or taking drugs can get in the way of your judgment. Either can lead to unsafe sex.</li>
                        <li>Do not douche. It can remove some of the healthy bacteria that&apos;s usually in the vagina. And that might raise your risk of getting STIs.</li>
                        <li>Breastfeed with caution. Syphilis can pass from a parent to a baby during breastfeeding if sores are on one or both breasts. This can happen when the baby or pumping equipment touches a sore. To keep that from happening, pump or hand-express breastmilk from the breast with sores. Do so until the sores heal. If your pump touches a sore, get rid of the milk you just pumped.</li>
                    </ul>
                </div>
            </section>
            {/* ========== End main content ========== */}
        </>
    );
};

export default SyphilisPage;
