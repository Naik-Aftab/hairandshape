import React from 'react';

const ChemicalPeelPage = () => {
    return (
        <>
            {/* ========== Start About ========== */}
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 pb-5 d-flex justify-content-center align-items-center">
                            <img className='shadow rounded img-fluid' src="..\Assets\service-imgs\Chemical Peels.jpeg" alt="about image" height={300} />
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div className="about">
                                <h2>Chemical Peel</h2>
                                <p>Chemical peel treatment is a type of procedure during which a substance is applied to the skin resulting in faster skin cell turnover (exfoliation or peeling). The goal of Chemical peeling treatment is to rejuvenate the skin or address a specific problem such as acne, acne scars, razor bumps, blemishes, Melasma wrinkles, sun damage or fine lines.</p>
                                <p>Even if you don’t have a specific skin problem, getting a chemical peel is a great way to restore or maintain a glowing complexion. Given then their effectiveness, safety, and affordability, chemical peels are a very popular Dermatologic procedure.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ========== End About ========== */}

            {/* ========== Start main content ========== */}
            <section className="pb-5">
                <div className="container">
                    <h2>Types of Chemical Peels Treatment</h2>
                    <p>There are different types of chemical peels treatment which offer different benefits and risks. People of all ethnic backgrounds can enjoy the benefits of a chemical peel so long as they are under the care of a qualified professional who knows how to select the right peel for the right patient.</p>
                    <ul>
                        <li>Super Ficial</li>
                        <li>Medium</li>
                        <li>Deep</li>
                    </ul>

                    <h2>Procedures:</h2>
                    <ul>
                        <li>The procedure usually takes no more than 20 minutes. After cleansing the face, or other areas to be treated, a peeling agent is applied.</li>
                        <li>Depending on which agent is used, it may be washed off or left on the skin. The chemical peeling process usually begins 1-3 days after the procedure and is completed in 5-7 days.</li>
                        <li>The skin may appear dry and flaky during this time. Moisturizer and sunscreen must be used regularly during the 5-7 days after the peel. The use of these products helps achieve better healing and masks the peeling process.</li>
                        <li>You will be able to return to work or other activities immediately after your chemical peel treatment. Peels can be repeated in 2-4 weeks. More than one peel may be required depending on your goals and condition.</li>
                    </ul>

                    <h2>Textual Problems</h2>
                    <p>Chemical Peel is largely used to correct textual problems. The treatment varies with the severity of the condition and are used to treat the following skin conditions as follows:</p>
                    <ul>
                        <li><b>Acne complications:</b> Athropics scars, Hyper-pigmentation and enlarged skin pores</li>
                        <li><b>Skin lesions:</b> Rosacea in remission, Acne Vulgaris</li>
                        <li><b>Wrinkles:</b> Solar origin</li>
                        <li><b>Other skin conditions:</b> Freckles, Facial Melanoses, Pigmentation, Melasma & Lentigines</li>
                    </ul>
                </div>
            </section>
            {/* ========== End main content ========== */}
        </>
    );
}

export default ChemicalPeelPage;
