import React from 'react';

const HivAidsPage = () => {
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
                                <h2>Hiv & Aids</h2>
                                <p>HIV (human immunodeficiency virus) is a virus that damages the cells in your immune system and weakens your ability to fight everyday infections and disease.</p>
                                <p>AIDS (acquired immune deficiency syndrome) is the name used to describe a number of potentially life-threatening infections and illnesses that happen when your immune system has been severely damaged by the HIV virus.</p>
                                <p>While AIDS cannot be transmitted from 1 person to another, the HIV virus can.</p>
                                <p>There&apos;s currently no cure for HIV, but there are very effective drug treatments that enable most people with the virus to live a long and healthy life.</p>
                                <p>With an early diagnosis and effective treatments, most people with HIV will not develop any AIDS-related illnesses and will live a near-normal lifespan.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ========== End About ========== */}

            {/* ========== Start main content ========== */}
            <section className="py-5">
                <div className="container">
                    <h2>Symptoms of HIV infection</h2>
                    <ul>
                        <li>people with a current or previous partner with HIV</li>
                        <li>people with a current or previous partner who is from an area with high HIV rates</li>
                        {/* Add other list items */}
                    </ul>

                    <h2>Causes of HIV infection</h2>
                    <p>HIV is found in the body fluids of an infected person. This includes semen, vaginal and anal fluids, blood and breast milk.</p>
                    {/* Add other paragraphs and lists */}

                    <h2>Treatment for HIV</h2>
                    <p>Types of vitiligo include:</p>
                    <ul>
                        <li>Antiretroviral medicines are used to treat HIV. They work by stopping the virus replicating in the body, allowing the immune system to repair itself and preventing further damage.</li>
                        {/* Add other list items */}
                    </ul>
                </div>
            </section>
            {/* ========== End main content ========== */}
        </>
    );
};

export default HivAidsPage;
