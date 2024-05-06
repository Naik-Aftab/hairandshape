import React from 'react';

const GFCPage = () => {
    return (
        <>
            {/* ========== Start About ========== */}
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <img className='img-fluid shadow rounded mb-3' src="..\Assets\service-imgs\gfc-treatment.jpg" alt="about image" height={250} /></div>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div className="about">
                                <h2>Growth Factor Concentrate Therapy (GFC)</h2>
                                <p>GFC Therapy is a next-generation hair loss treatment that delivers increased concentrations of one&apos;s growth factors.</p>
                                <p>In this treatment, increased concentrations of the individual&apos;s own growth factors are utilized to stimulate the natural regenerative processes in the scalp.</p>
                                <p>The process typically involves extracting a small amount of the patient&apos;s blood, isolating and concentrating the growth factors, and then reintroducing them into the scalp.</p>
                                <p>These growth factors play a pivotal role in promoting cell growth, tissue repair, and the development of new blood vessels, all of which contribute to healthier and thicker hair.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ========== End About ========== */}

            {/* ========== Start main content ========== */}
            <section className='pb-5'>
                <div className="container">
                    <p>GFC therapy is renowned for its effectiveness in fostering natural hair regeneration, and it is considered a safe and minimally invasive option for individuals experiencing hair loss. The treatment&apos;s focus on using the patient&apos;s own blood eliminates concerns related to compatibility and reduces the likelihood of adverse reactions. It&apos;s like giving your hair a personalized boost from within, harnessing the power of your body&apos;s natural growth factors to revitalize and rejuvenate your hair follicles.</p>
                    <h2>Who needs GFC?</h2>
                    <ul>
                        <li><b>Mild to Moderate Hair Loss:</b> Individuals with early-stage or moderate hair loss who are seeking a non-surgical solution.</li>
                        <li><b>Genetic Hair Loss (Androgenetic Alopecia):</b> Those with a family history of hair loss or a genetic predisposition to androgenetic alopecia.</li>
                        <li><b>Thinning Hair:</b> People with thinning hair who want to improve overall hair density and quality.</li>
                        <li><b>Men and Women:</b> GFC therapy is applicable to both men and women experiencing hair loss.</li>
                        <li><b>Preventative Measures:</b> Individuals looking to proactively address hair thinning before it becomes more pronounced.</li>
                        <li><b>Preference for Natural Solutions:</b> People who prefer natural treatments and are cautious about the potential side effects of more aggressive interventions.</li>
                    </ul>
                    <p>It&apos;s crucial for candidates to consult with a healthcare professional or a qualified specialist to determine if GFC therapy is the right option for their specific situation.</p>

                    <h2>Procedure:</h2>
                    <ul style={{ listStyleType: 'none' }}>
                        <li><b>Step 1 - Blood Collection :</b> Gather the patient&apos;s blood using specialized GFC tubes.</li>
                        <li><b>Step 2 - Platelet Activation and Growth Factor Release:</b> Gently mix the collected blood and let the tubes stand for 30 minutes. This process activates and releases growth factors such as PDGF, VEGF, EGF, and IGF-1 from α-grains in platelets.</li>
                        <li><b>Step 3 - GFC Separation:</b> Utilize centrifugation at 3800 rpm for 10 minutes to separate the Growth Factor Concentrate (GFC).</li>
                        <li><b>Step 4 - GFC Collection:</b> Invert the tube to collect the prepared GFC, ensuring a yield of over 16 ml.</li>
                        <li><b>Step 5 - Application:</b> The obtained GFC is now ready for use in the targeted area. This meticulous process ensures the effective harnessing of growth factors for the desired outcome.</li>
                    </ul>
                    <h2>Advantages:</h2>
                    <p>Growth Factor Concentrate (GFC) Therapy, an advanced solution for combating hair loss, comes with a host of advantages:</p>
                    <ul>
                        <li>Exceptionally potent, fostering the natural and enhanced regeneration of hair.</li>
                        <li>Ensures a reliable and statistically significant boost in both hair count and thickness.</li>
                        <li>100 percent safe, crafted from the candidate&apos;s own blood.</li>
                        <li>Eliminates red and white blood cells, minimizing the chances of discomfort and inflammation.</li>
                        <li>Prioritizes convenience and maintains a high standard of quality through its technique.</li>
                        <li>Optimal results are achieved with a reduced number of sessions, adding to the treatment&apos;s efficiency.</li>
                    </ul>
                </div>
            </section>
            {/* ========== End main content ========== */}

                        {/* ========== Start FAQ ========== */}
                        {/* <section className="pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <img src="/faq.jpg" className="img-fluid" alt="image" />
                        </div>
                        <div className="col-12 col-md-7">
                            <div className="section-header">
                                <h1 className="text-center py-4 m-0"><b>Frequently Asked Questions</b></h1>
                            </div>
                            <div className="accordion" id="accordionExample">
                            <div className="accordion-item" style={{ marginBottom: "0px" }}>
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-controls="collapseOne" aria-expanded="false">
                                            <b>Q. What is Gynecomastia?</b>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                        Gynecomastia is a male breast reduction surgery. This procedure is designed for men who have developed excess breast tissue on one or both breasts, commonly due to fluctuations in hormones or from a weight gain. Patients with gynecomastia are not able to lose the excess breast tissue with weight-loss.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item" style={{ marginBottom: "0px" }}>
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <b>Q. Who is a good candidate for gynecomastia?</b>
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                        Any male patient that has excessive breast growth on one or both breasts, and who is also in generally good health.                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item" style={{ marginBottom: "0px" }}>
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <b>Q. Can gynecomastia be covered by my insurance? </b>
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                        In some circumstances, yes. This is a difficult procedure for insurance to approve. It is necessary to come in for a consultation and allow The Hair and Shape Clinic to evaluate you to see if he thinks you are a good candidate for this procedure. If you meet the requirements for insurance coverage, our office will apply for prior authorization, which can take 2-3 weeks or more.

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item" style={{ marginBottom: "0px" }}>
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            <b>Q. What will my recovery be like?</b>
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                        Most patients prefer to take 1 to 2 weeks off of work for their recovery. You will also have physical restrictions for at least 4 to 6 weeks following surgery. During this time, you cannot exercise, go to the gym, or engage in any strenuous activity. You will need to minimize your arm movements as well, to help optimize recovery (no lifting, pulling, or stretching).

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* ========== End FAQ ========== */}


        </>
    );
};

export default GFCPage;
