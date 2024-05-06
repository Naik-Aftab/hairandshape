import React from 'react';

const EyelidSurgeryPage = () => {
    return (
        <>
            {/* ========== Start About ========== */}
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 pb-5 d-flex justify-content-center align-items-center">
                            <img className='shadow rounded img-fluid mb-3' src="..\Assets\service-imgs\Eyelid Surgery.jpeg" alt="about image" height={300} />
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div className="about">
                                <h2>Eyelid Surgery</h2>
                                <p>The eyes, the natural focal point of the face, are often the first areas to show signs of aging or environmental effects. Symptoms typically include sagging upper eyelids, baggy lower eyelids, and excess fat deposits around the eyes, which can make some patients appear tired, sad, or older than they really are. Severe skin inelasticity can sometimes even lead to impaired vision. Eyelid surgery, also called blepharoplasty, seeks to correct these issues by removing excess skin and fat from around the eyes to produce a more youthful, rested appearance. One of the most popular facial rejuvenation procedures available, eyelid surgery at our Walnut Creek practice can often do more than refresh the eyes – it can also improve confidence in your appearance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ========== End About ========== */}

            {/* ========== Start main content ========== */}
            <section className="pb-5">
                <div className="container">
                    <h2>Eyelid Surgery Procedure</h2>
                    <p>During the initial consultation, our plastic surgeon, The Hair and Shape Clinic, will examine your eyes and develop a treatment plan tailored to your needs. There are a number of techniques available that address various conditions affecting the upper and lower eyelids, and The Hair and Shape Clinic will discuss which options are right for you. A basic overview of what to expect during eyelid surgery includes:</p>
                    <ol>
                        <li><b>Upper Eyelid</b>: As skin ages and stretches, it can cause sagging on the upper eyelids, potentially impairing vision. To correct this, The Hair and Shape Clinic will make an incision in the natural crease of the upper eyelid through which he will remove excess skin and fatty tissue. The incision scar is typically well concealed by the natural crease of the eyelid and may be virtually undetectable once healed.</li>
                        <li><b>Lower Eyelid</b>: For concerns about excess skin, fine wrinkles, and/or bagginess of the lower eyelids, The Hair and Shape Clinic will make an incision just below the lash line of the lower eyelid and remove excess skin and fatty tissue. This procedure is designed to create a smoother, more youthful appearance in the lower eye area by reducing puffiness and adding volume to the semicircular hollow beneath the eyes. If necessary, the underlying muscles will be tightened using a procedure called canthopexy</li>
                        <li><b>Transjunctival Blepharoplasty</b>: Also addressing the lower eyelid, transjunctival blepharoplasty is a surgical approach that removes and/or relocates excess fat through an incision made on the interior of the lower eyelid. This method is appropriate for individuals with under-eye fat pockets but minimal excess skin. As this technique requires no external incisions, there are typically no visible scars.</li>
                    </ol>
                    <h2>Eyelid Surgery Recovery</h2>
                    <p>The Hair and Shape Clinic will provide you with detailed post-operative instructions prior to your procedure. You should expect to take at least one week off work and avoid all strenuous activity for approximately four weeks following surgery. The Hair and Shape Clinic will let you know when it is appropriate to return to normal activities.</p>
                    <p>Some bruising and minor swelling is common post-surgery. While most side effects will typically fade after a few weeks, the skin around your eyes must be treated with extra care for several months. The Hair and Shape Clinic advises wearing dark-tinted sunglasses and sunblock during the day to help protect your eyes from sun and wind. Once healed, your eyes should appear younger, fresher, and more alert. You should keep in mind that your face will continue to age at its natural pace; however, the results of our cosmetic eyelid surgery are typically long-lasting.</p>
                </div>
            </section>
            {/* ========== End main content ========== */}

            {/* ========== Start FAQ ========== */}
            <section className="pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <img src="..\Assets\icons\faq.jpg" className="img-fluid" alt="image" />
                        </div>
                        <div className="col-12 col-md-7">
                            <div className="section-header">
                                <h1 className="text-center py-4 m-0"><b>Frequently Asked Questions</b></h1>
                            </div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item" style={{ marginBottom: '0px' }}>
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-controls="collapseOne" aria-expanded="false">
                                            <b>Q. What is a blepharoplasty? </b>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Blepharoplasty, also called eyelid surgery, is a procedure designed to treat excess skin and fatty tissue of the upper and lower eyelids.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item" style={{ marginBottom: '0px' }}>
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <b>Q. Can I combine upper and lower eyelid surgery?</b>
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Absolutely. In fact, for many of our patients, combining upper and lower blepharoplasty can offer the most optimal results.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item" style={{ marginBottom: '0px' }}>
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <b>Q. Where is the incision located?</b>
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Each approach utilizes a different method. For example, in upper eyelid surgery, the incision is typically made in the natural crease of the eyelid. In lower eyelid surgery, the incision is made either along the lash line or on the inside of the lid. Regardless of the location, the incision is created to remain as concealed as possible.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item" style={{ marginBottom: '0px' }}>
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                            <b>Q. Can BOTOX® Cosmetic provide similar results as blepharoplasty?</b>
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            No. BOTOX® Cosmetic is designed to relax the muscles around the eyes, helping reduce the appearance of wrinkles. It cannot correct sagging or excess skin or remove fatty tissue, which is the purpose of blepharoplasty.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item" style={{ marginBottom: '0px' }}>
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            <b>Q. How long do results last?</b>
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Results of eyelid surgery typically last many years, depending on a variety of individual factors. The effects, however, are not permanent. You can often extend the outcome by maintaining good health following surgery.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ========== End FAQ ========== */}
        </>
    );
};

export default EyelidSurgeryPage;
