import React from 'react';

const DepigmentationPage = () => {
    return (
        <>
            {/* ========== Start About ========== */}
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 pb-4 d-flex justify-content-center align-items-center">
                            <img className='shadow rounded img-fluid' src="Assets\service-imgs\Depigmentation.jpeg" alt="about image" style={{height:"400px"}} />
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div className="about">
                                <h2>Depigmentation</h2>
                                <p>Pigmentation is a condition that causes dark spots on your skin. There are different kinds of pigmentations. These include superficial pigmentation, which can be caused by mild sun tan and sun damage, frictional pigmentation that is caused due to constant rubbing, and deep pigmentation, which is difficult to treat, like melasma, deep sun tan, hyperpigmentation and more.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ========== End About ========== */}

            {/* ========== Start main content ========== */}
            <section className="pb-5">
                <div className="container">
                    <h2>Ideal candidate for treatments to reduce pigmentation</h2>
                    <p>To be an ideal candidate for these treatments, you will need to meet certain conditions. Firstly, you must be in good physical condition. Some of the procedures to treat pigmentation require you to be healthy, so you can recover well after the treatment. Ideal candidates should meet certain other criteria:</p>
                    <ul>
                        <li>They must be able to stick to strict usage of sunscreen application</li>
                        <li>They must be non-smokers as they show better result</li>
                        <li>They must have less exposure to the sun</li>
                        <li>They must follow a good skin care routine</li>
                        <li>They must not have any kind of skin condition like an active viral skin infection</li>
                    </ul>
                </div>
            </section>
            {/* ========== End main content ========== */}
        </>
    );
}

export default DepigmentationPage;
