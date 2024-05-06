import React from 'react';

const ThreadLiftPage = () => {
    return (
        <>
            {/* ========== Start About ========== */}
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <img className='img-fluid shadow rounded mb-3' src="..\Assets\service-imgs\Thigh Contouring.jpeg" alt="about image" height={300}/>
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div className="about">
                                <h2>Thread Lifts</h2>
                                <p>A thread lift is a nonsurgical procedure that lifts sagging, aging skin and stimulates collagen production to give your face or neck a more youthful appearance. Plastic surgeons place medical-grade thread under the skin to pull the skin into position. These threads activate the body&apos;s natural healing response, triggering the increase of collagen. Threads come in several different materials and lengths.</p>
                                <p>Unlike a facelift, a thread lift is a nonsurgical procedure that creates subtle changes. It&apos;s often called a “lunchtime facelift” because it&apos;s such a quick procedure with minimal downtime.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ========== End About ========== */}

            {/* ========== Start main content ========== */}
            <section className="pb-5">
                <div className="container">
                    <h2>How long does a thread lift last?</h2>
                    <p>Results from a thread lift are temporary, lasting from one to three years. Over time, the threads dissolve, and your body absorbs them. If you like your results, you can have another thread lift procedure.</p>
                    
                    <h2>Who&apos;s a good candidate for a thread lift?</h2>
                    <p>A thread lift is generally best for people who:</p>
                    <ul>
                        <li>Are experiencing early signs of aging.</li>
                        <li>Are in their late 30s to early 50s.</li>
                        <li>Don&apos;t expect dramatic results.</li>
                        <li>Don&apos;t want to have cosmetic surgery.</li>
                        <li>Had a facelift (rhytidectomy) or neck lift and want to refresh their results.</li>                
                    </ul>

                    <h2>What types of thread lifts are available?</h2>
                    <p>There are several types of thread lifts, including:</p>
                    <ul>
                        <li><b>Cat or fox eye thread lift:</b> This involves lifting the eyebrows toward the temples to give your eyes a catlike look.</li>
                        <li><b>Eyebrow thread lift:</b> A plastic surgeon lifts sagging or furrowed eyebrows and tightens your skin.</li>
                        <li><b>Nose thread lift:</b> A plastic surgeon injects threads to lift, straighten or slim your nose. In some cases, they may combine a nose thread lift with dermal fillers.</li>
                        <li><b>Neck thread lift:</b> This procedure lifts the loose skin on your neck or smooths neck lines.</li>
                    </ul>
                  
                </div>
            </section>
            {/* ========== End main content ========== */}

        </>
    );
};

export default ThreadLiftPage;
