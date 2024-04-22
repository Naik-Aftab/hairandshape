import React from 'react';

const ThighLiftPage = () => {
    return (
        <>
            {/* ========== Start About ========== */}
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <img src="assets/images/" alt="about image" />
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div className="about">
                                <h2>Thigh Lift</h2>
                                <p>A thigh lift (thighplasty) is a cosmetic procedure that can improve the contours and tone of your thighs. This surgery works by removing excess fat and sagging skin. You may choose to get a thigh lift if you&apos;ve lost a lot of weight. You should see the full results of your thigh lift after six months.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ========== End About ========== */}

            {/* ========== Start main content ========== */}
            <section className="py-5">
                <div className="container">
                    <h2>Who is a Candidate?</h2>
                    <ul>
                        <li>Don&apos;t smoke.</li>
                        <li>Have any underlying medical conditions that are well managed (like diabetes), or you don&apos;t have any conditions that can complicate your recovery.</li>
                        <li>Have maintained your goal weight for a year, and don&apos;t plan to lose more.</li>
                    </ul>

                    <h2>What happens during a thigh lift?</h2>
                    <ul>
                        <li>Before the procedure, your surgeon marks incision lines while you’re standing. They may position the sagging skin at different angles to guide these efforts.</li>
                        <li>Your anesthesiologist will give you anesthesia to put you to sleep so you won’t feel any pain during the surgery.</li>
                        <li>Your surgeon makes an incision in your groin. Depending on the type of thigh lift you have, the incision may extend around the back of your thigh, down toward your knee or around your hip and back.</li>
                        <li>Your surgeon removes fat, repositions tissue and tightens nearby muscles. They also trim away excess skin.</li>
                        <li>Stitches (sutures) help secure tissue deep in your thigh to support your new shape.</li>
                        <li>Before completing the procedure, your surgeon uses stitches, clips or a special skin adhesive to close the incision.</li>
                    </ul>

                    <h2>Benefits of Thigh Lift</h2>
                    <ul>
                        <li>Smoother thighs.</li>
                        <li>Reshaped thighs.</li>
                        <li>Reduced appearance of stretch marks.</li>
                        <li>Reduced friction rashes.</li>
                        <li>Tighter muscles.</li>
                        <li>Less sagging skin.</li>
                        <li>More confidence in your appearance.</li>
                    </ul>
                </div>
            </section>
            {/* ========== End main content ========== */}
        </>
    );
};

export default ThighLiftPage;
