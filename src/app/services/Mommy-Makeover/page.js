import React from 'react';

const MommyMakeoverPage = () => {
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
                                <h2>Mommy Makeover</h2>
                                <p>For most women, childbirth and becoming a mother are two of the most beautiful and transforming experiences in life. However, childbirth can affect the body in many different ways. Some patients are lucky enough that with proper diet and exercise, they are able to return to their pre-baby body. For others, even with the strictest of diets and exercise, the pre-baby body is still unattainable. This could be due to genetics, hormones, breast feeding, or simply an excess of skin from body growth during pregnancy, which typically no amount of diet or exercise can reduce.</p>
                                <p>If you have noticed excess skin and an inability to bounce back to your pre-pregnancy state, we encourage you to read further and see if a Mommy Makeover might be a good option for you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ========== End About ========== */}

            {/* ========== Start FAQ ========== */}
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5">
                            {/* Update the image source with the correct path or use a placeholder image */}
                            <img src="/faq.jpg" className="img-fluid" alt="FAQ image" />
                        </div>
                        <div className="col-12 col-md-7">
                            <div className="section-header">
                                <h1 className="text-center py-4 m-0"><b>Frequently Asked Questions</b></h1>
                            </div>
                            <div className="accordion" id="accordionExample">
                                {/* Add FAQ items */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ========== End FAQ ========== */}
        </>
    );
};

export default MommyMakeoverPage;
