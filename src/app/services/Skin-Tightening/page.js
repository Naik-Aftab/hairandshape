import React from 'react';

const SkinTighteningPage = () => {
    return (
        <>
        {/* ========== Start About ========== */}
        <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <img className='img-fluid shadow rounded mb-3' src="..\Assets\service-imgs\tighten-skin.jpg" alt="about image" style={{height:'400px'}}/>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div className="about">
                                <h2>Skin Tightening</h2>
                                <p>Skin tightening is a nonsurgical procedure that tightens facial or body skin and improves skin quality. There are different devices and technologies that provide noninvasive skin tightening solutions. Skin tightening procedures are popular because they provide a nonsurgical alternative to more invasive procedures.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ========== End About ========== */}
        <section className="pb-5">
            <div className="container">
                <h2>Why get skin tightening?</h2>
                <p>As we age, skin loses elasticity. If you are looking for a nonsurgical way to address loose skin on your face or body, skin tightening may be right for you.</p>
                <p>Skin tightening is a great option if you have any of the below concerns:</p>
                <ul>
                    <li>You have mild to moderate loose skin on your face, neck, arms, or body.</li>
                    <li>You have residual skin laxity after an operation, weight loss, or pregnancy.</li>
                    <li>You cannot or do not want to undergo a more invasive surgical procedure to correct skin laxity.</li>
                    <li>You had a facelift or other surgical procedure and want to prolong your results.</li>
                    <li>You have minimal to no laxity but are looking to help prevent or delay the onset of skin laxity.</li>
                </ul>

                <h2>Benefits of Skin Tightening</h2>
                <ul>
                    <li>Tighten facial or body skin</li>
                    <li>Get firmer, smoother skin with improved elasticity</li>
                    <li>Avoid invasive, surgical skin tightening procedures with this noninvasive approach</li>
                    <li>Prevent or delay the onset of skin laxity</li>
                    <li>Look younger</li>
                    <li>Improve your self-image and self-confidence</li>
                </ul>

                <h2>What should I consider before getting skin tightening?</h2>
                <ul>
                    <li>You need to be in good general health.</li>
                    <li>Skin tightening can help all skin types.</li>
                    <li>Results are less extensive and dramatic than a facelift or body contouring procedures (neck lift, lower body lift, thigh lift, upper body lift, tummy tuck, upper arm lift).</li>
                    <li>You will likely need multiple treatments to achieve optimal results. You may need to repeat treatments every 18-24 months, and results may take months to appear.</li>
                    <li>Laser skin tightening side effects may include discomfort, skin redness, temporary swelling or numbness, or volume loss around the treated area(s).</li>
                    <li>Noninvasive skin tightening requires little to no downtime.</li>
                </ul>
            </div>
        </section>
        </>
    );
};

export default SkinTighteningPage;
