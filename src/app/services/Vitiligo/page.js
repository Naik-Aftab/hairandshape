import React from 'react';

const VitiligoPage = () => {
    return (
        <>
            {/* ========== Start About ========== */}
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <img className='img-fluid shadow rounded mb-3' src="..\Assets\service-imgs\vitiligo.jpg" alt="about image" height={300}/>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div className="about">
                                <h2>Vitiligo</h2>
                                <p>Vitiligo causes your skin to lose color or pigmentation. Smooth white or light areas called macules or patches appear on your skin. It generally starts on your hands, forearms, feet and face. Globally, about 1% of the population has vitiligo. Treatment isn’t necessary, but it’s available if you don’t like the changes to your skin tone.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ========== End About ========== */}

            {/* ========== Start main content ========== */}
            <section className="pb-5">
                <div className="container">
                    <h2>Who does vitiligo affect?</h2>
                    <p>Vitiligo affects all races and sexes equally. It’s more visible in people with darker skin tones. Although vitiligo can develop in anyone at any age, macules or patches usually become apparent before age 30.</p>
                    <p>You might be at a higher risk of developing vitiligo if you have certain autoimmune conditions like:</p>
                    <ul>
                        <li>Addison’s disease.</li>
                        <li>Anemia.</li>
                        <li>Diabetes (Type 1)</li>
                        <li>Lupus</li>
                        <li>Psoriasis.</li>
                        <li>Rheumatoid arthritis.</li>
                        <li>Thyroid disease.</li>
                    </ul>

                    <h2>How does vitiligo start and progress?</h2>
                    <p>Vitiligo usually starts with a few small white macules or patches that may gradually spread over your body. Vitiligo typically begins on your hands, forearms, feet and face, but can develop on any part of your body, including your mucous membranes (the moist lining of your mouth, nose, genital and rectal areas), your eyes and inner ears</p>
                    <p>Sometimes, larger patches continue to widen and spread, but they usually stay in the same place for years. The location of smaller macules shifts and changes over time, as certain areas of skin lose and regain their pigment.</p>
                    <p>The amount of affected skin varies for each person diagnosed with vitiligo. Some people experience a few depigmented areas, while others have a widespread loss of skin color.</p>
                   
                    <h2>What are the types of vitiligo?</h2>
                    <p>Types of vitiligo include:</p>
                    <ul>
                        <li><strong>Generalized:</strong> This is the most common type of vitiligo that causes macules to appear in various places on your body.</li>
                        <li><strong>Segmental:</strong> This type only affects one side of your body or one area, such as your hands or face.</li>
                        <li><strong>Mucosal:</strong> Mucosal vitiligo affects mucous membranes of your mouth and/or genitals.</li>
                        <li><strong>Focal:</strong> Focal vitiligo is a rare type where the macules develop in a small area and don’t spread in a certain pattern within one to two years.</li>
                        <li><strong>Trichome:</strong> This type causes a bullseye with a white or colorless center, then an area of lighter pigmentation, and an area of your natural skin tone.</li>
                        <li><strong>Universal:</strong> This rare type of vitiligo causes more than 80% of your skin to not have pigment.</li>
                    </ul>

                    <h2>Symptoms of Vitiligo</h2>
                    <ul>
                        <li>Patches of skin or mucous membranes that lose color. These can appear white or lighter than your natural skin tone.</li>
                        <li>Patches of hair on your body turn silver, gray or white.</li>
                        <li>Symptoms can be mild and only affect a small area of your body or severe and affect a large area of your skin. Some people with vitiligo experience itchy skin before depigmentation starts.</li>
                    </ul>
                    
                    <p><b>Symptoms of vitiligo can appear anywhere on the skin of your body. The most common places to have symptoms of vitiligo include on your:</b></p>
                    <ul>
                        <li>Hands</li>
                        <li>Feet</li>
                        <li>Arms</li>
                        <li>Face</li>
                        <li>Mucous membranes (inside of your mouth, lips and nose)</li>
                        <li>Genitals (penis).</li>
                    </ul>
                </div>
            </section>
            {/* ========== End main content ========== */}
        </>
    );
};

export default VitiligoPage;
