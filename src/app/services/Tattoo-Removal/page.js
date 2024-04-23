import React from 'react';

const TattooRemovalPage = () => {
    return (
        <>
            {/* ========== Start About ========== */}
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <img src="/" alt="about image" />
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div className="about">
                                <h2>Tattoo Removal</h2>
                                <p>Laser tattoo removal is a non-invasive procedure that uses a Q-switched laser device to break down the pigment colors of an unwanted tattoo while causing minimal damage to surrounding tissue. Laser tattoo removal often requires multiple laser sessions.</p>
                                <p>Alternatively, tattoo removal surgery removes the tattoo with one procedure but results in some scarring, is higher risk and less common.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ========== End About ========== */}

            {/* ========== Start main content ========== */}
            <section className="py-5">
                <div className="container">
                    <h2>Why get tattoo removal?</h2>
                    <p>If you have an unwanted tattoo that makes you self-conscious or you are unhappy with changes in your tattoo caused by the natural aging of your skin, tattoo removal may be right for you.</p>
                    <h2>Benefits:</h2>
                    <ul>
                        <li>Remove unwanted tattoos</li>
                        <li>Get permanent results with minimal side effects and little to no downtime</li>
                        <li>Improve your self-image and self-confidence</li>
                    </ul>

                    <h2>What should I consider before getting a tattoo removal procedure?</h2>
                    <ul>
                        <li>Tattoo ink lives underneath the top layer of skin, making it difficult to remove, often requiring multiple laser sessions to remove a tattoo or, in some cases, surgical removal.</li>
                        <li>You may experience scarring and changes in skin color or texture.</li>
                        <li>Your treatment area will likely have a slightly elevated, white discoloration (sometimes accompanied by pinpoint bleeding) immediately following treatment.</li>
                        <li>Laser tattoo removal is a non-surgical procedure (no incisions) with little to no downtime. Surgical tattoo removal is a surgical procedure (incisions) with minimal downtime.</li>
                    </ul>
                </div>
            </section>
            {/* ========== End main content ========== */}
        </>
    );
};

export default TattooRemovalPage;
