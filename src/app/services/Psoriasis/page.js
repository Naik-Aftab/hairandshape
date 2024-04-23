import React from 'react';

const PsoriasisPage = () => {
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
                                <h2>Psoriasis</h2>
                                <p>Psoriasis is a skin disease that causes a rash with itchy, scaly patches, most commonly on the knees, elbows, trunk, and scalp.</p>
                                <p>Psoriasis is a common, long-term (chronic) disease with no cure. It can be painful, interfere with sleep, and make it hard to concentrate. The condition tends to go through cycles, flaring for a few weeks or months, then subsiding for a while. Common triggers in people with a genetic predisposition to psoriasis include infections, cuts or burns, and certain medications.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ========== End About ========== */}

            {/* ========== Start main content ========== */}
            <section className="py-5">
                <div className="container">
                    <h2>Common signs and symptoms of psoriasis</h2>
                    <ul>
                        <li>A patchy rash that varies widely in how it looks from person to person, ranging from spots of dandruff-like scaling to major eruptions over much of the body</li>
                        <li>Rashes that vary in color, tending to be shades of purple with gray scale on brown or Black skin and pink or red with silver scale on white skin</li>
                        <li>Small scaling spots (commonly seen in children)</li>
                        <li>Dry, cracked skin that may bleed</li>
                        <li>Itching, burning, or soreness</li>
                        <li>Cyclic rashes that flare for a few weeks or months and then subside</li>
                    </ul>

                    <h2>Causes</h2>
                    <p>Psoriasis is thought to be an immune system problem that causes skin cells to grow faster than usual. In the most common type of psoriasis, known as plaque psoriasis, this rapid turnover of cells results in dry, scaly patches.</p>
                    <p>The cause of psoriasis isn&apos;t fully understood. It&apos;s thought to be an immune system problem where infection-fighting cells attack healthy skin cells by mistake. Researchers believe that both genetics and environmental factors play a role. The condition is not contagious.</p>

                    <h2>Psoriasis triggers</h2>
                    <p>Many people who are predisposed to psoriasis may be free of symptoms for years until the disease is triggered by some environmental factor. Common psoriasis triggers include:</p>
                    <ul>
                        <li>Infections, such as strep throat or skin infections</li>
                        <li>Weather, especially cold, dry conditions</li>
                        <li>Injury to the skin, such as a cut or scrape, a bug bite, or a severe sunburn</li>
                        <li>Smoking and exposure to secondhand smoke</li>
                        <li>Heavy alcohol consumption</li>
                        <li>Certain medications — including lithium, high blood pressure drugs, and antimalarial drugs</li>
                        <li>Rapid withdrawal of oral or injected corticosteroids</li>
                    </ul>
                </div>
            </section>
            {/* ========== End main content ========== */}
        </>
    );
};

export default PsoriasisPage;
