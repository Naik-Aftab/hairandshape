import React from 'react';

const FillersPage = () => {
    return (
        <>
            {/* ========== Start About ========== */}
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <img className='img-fluid shadow rounded mb-3' src="..\Assets\service-imgs\Filler Treatment.jpeg" alt="about image" height={300}/></div>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div className="about">
                                <h2>Fillers</h2>
                                <p>Fillers are used in a variety of surgical procedures to add volume, support, or definition to an area. They can be used in facial plastic surgery, breast augmentation, and even reconstructive surgery. The most common type of filler used in surgery is hyaluronic acid (HA). HA is a naturally occurring substance found in the skin that helps to keep it hydrated and plump. It is also a major component of cartilage and bone. HA fillers are available in a variety of forms, including gels, injections, and implants.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ========== End About ========== */}

            {/* ========== Start main content ========== */}
            <section className="pb-5">
                <div className="container">
                    <h2>Used to:</h2>
                    <ul>
                        <li>Fill in wrinkles and lines</li>
                        <li>Augment the lips or cheeks</li>
                        <li>Improve the appearance of scars</li>
                        <li>Create a more youthful appearance</li>
                        <li>Support tissues</li>
                        <li>Define features</li>
                    </ul>

                    <h2>Why are fillers used in Surgery</h2>
                    <ul>
                        <li><b>To restore volume:</b> As we age, our faces naturally lose volume, leading to wrinkles, folds, and creases. Fillers can help to restore lost volume and create a more youthful appearance.</li>
                        <li><b>To augment features:</b> Fillers can be used to augment features such as the lips, cheeks, and chin. This can help to create a more balanced and symmetrical appearance.</li>
                        <li><b>To fill in scars:</b> Fillers can be used to fill in scars caused by acne, surgery, or trauma. This can help to improve the appearance of the scar and make it less noticeable.</li>
                        <li><b>To support tissues:</b> Fillers can be used to support tissues that have lost elasticity or support. This can help to prevent sagging and improve skin elasticity.</li>
                        <li><b>To define features:</b> Fillers can be used to define features such as the jawline, cheekbones, and brow bone. This can help to create a more sculpted and defined look.</li>
                    </ul>

                </div>
            </section>
            {/* ========== End main content ========== */}
        </>
    );
};

export default FillersPage;
