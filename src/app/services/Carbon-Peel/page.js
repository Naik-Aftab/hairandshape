import React from 'react';

const CarbonPeelPage = () => {
    return (
        <>
            {/* ========== Start About ========== */}
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 pb-4 d-flex justify-content-center align-items-center">
                            <img className='shadow rounded img-fluid' src="\Assets\service-imgs\carbon_peel_blog.jpg" alt="about image" height={300} />
                            </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div className="about">
                                <h2>Carbon Peel</h2>
                                <p>A carbon peel is a high-tech laser treatment that&apos;s painless and won&apos;t keep you waiting. It works wonders on various skin issues, giving you quick results without any side effects or downtime. It&apos;s perfect for all skin types, especially if you struggle with oily skin, blackheads, large pores, dull complexion, uneven texture, or acne.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ========== End About ========== */}

            {/* ========== Start main content ========== */}
            <section className="pb-5">
                <div className="container">
                    <h2>Procedures:</h2>
                    <ul>
                        <li>Laser carbon peels follow a 2-steps procedure to brighten and clear skin.</li>
                        <li>It begins by applying a layer of activated carbon to the entire face.</li>
                        <li>It begins by applying a layer of activated carbon to the entire face.</li>
                        <li>Once the cream penetrates the pores, the laser is passed over the carbon layer which heats and destroys the carbon particles on the surface of the skin and within the pores, achieving a deep skin resurfacing effect and immediate skin smoothing.</li>
                        <li>Our specialized laser energy focuses on melanin skin cells, breaking them down. Once the melanin is fragmented, your body naturally eliminates it, resulting in a brighter complexion. Furthermore, as the laser energy warms the dermis, the skin tightens and encourages the production of collagen, enhancing skin tone and minimizing the appearance of lines and wrinkles.</li>
                    </ul>

                    <h2>Benefits Of A Carbon Laser Peel (Hollywood Peel) :</h2>
                    <ul>
                        <li>Instant glow with smoother feeling skin</li>
                        <li>Skin rejuvenation</li>
                        <li>Pore reduction</li>
                        <li>Improves overall skin tone</li>
                        <li>Collagen stimulation</li>
                        <li>No downtime. No peeling of the skin</li>
                        <li>Deeply exfoliate skin</li>
                        <li>Lighten age spots and dark spots</li>
                    </ul>

                    <h2>Post Treatment Care :</h2>
                    <p>No special care required after the treatment. You just have to apply sun screen lotion on regular basis.</p>
                </div>
            </section>
            {/* ========== End main content ========== */}
        </>
    );
}

export default CarbonPeelPage;
