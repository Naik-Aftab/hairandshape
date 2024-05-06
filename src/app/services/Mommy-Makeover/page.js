import React from 'react';

const MommyMakeoverPage = () => {
    return (
        <>
            {/* ========== Start About ========== */}
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <img className='img-fluid shadow rounded mb-3' src="..\Assets\service-imgs\Mommy Makeover.jpeg" alt="about image" style={{height:'400px'}}/>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div className="about">
                                <h2>Mommy Makeover</h2>
                                <p>For most women, childbirth and becoming a mother are two of the most beautiful and transforming experiences in life. However, childbirth can affect the body in many different ways. Some patients are lucky enough that with proper diet and exercise, they are able to return to their pre-baby body. For others, even with the strictest of diets and exercise, the pre-baby body is still unattainable. This could be due to genetics, hormones, breast feeding, or simply an excess of skin from body growth during pregnancy, which typically no amount of diet or exercise can reduce.</p>
                                <p>If you have noticed excess skin and an inability to bounce back to your pre-pregnancy state, we encourage you to read further and see if a Mommy Makeover might be a good option for you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ========== End About ========== */}

        </>
    );
};

export default MommyMakeoverPage;
