import Head from 'next/head';
import Image from 'next/image';

export default function BreastLift() {
    return (
        <div>
            <Head>
                <title>Breast Lift</title>
            </Head>

            {/* Start About */}
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 pb-4 d-flex justify-content-center align-items-center">
                            <img className='shadow rounded img-fluid mb-3' src="..\Assets\service-imgs\breast-lift-.jpeg" alt="about image" height={300} />
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div className="about">
                                <h2>Breast Lift</h2>
                                <p>Breasts may begin to droop and lose their firmness due to factors such as age, pregnancy, or nursing. Breast lift surgery, also called mastopexy, can help give your breasts firmness and a more youthful-looking silhouette. If you have also lost volume in your breasts, you may choose to combine this procedure with breast augmentation. Implants often help many of our patients regain the breasts of their youth.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End About */}

            {/* Start main content */}
            <section className='pb-5'>
                <div className="container">
                    <h2>Am I a Breast Lift Candidate?</h2>
                    <p>Breast lift surgery generally provides the best results in women who have small to moderate sized breasts that show signs of sagging. It is possible to treat larger and/or heavier breasts as well, but the weight of such breasts has tendency to undo the effects of the breast lift in a shorter amount of time.</p>
                    <p>Because pregnancy and breastfeeding tend to enlarge the breasts, it is usually a good decision to postpone your breast lift until after you are finished having children. Also, if you have decided to get breast implants in conjunction with a lift, The Hair and Shape Clinic will discuss with you in more detail the combined procedure.</p>

                    <h2>The Breast Lift Procedure</h2>
                    <p>The incision for breast lift surgery is very similar to that used in a breast reduction; however, instead of removing excess tissue, The Hair and Shape Clinic will simply tighten up the existing skin and reposition the nipple to a more flattering location. If the areolas have expanded due to pregnancy, you may choose to have their size reduced at this time.</p>
                    <p>To add more fullness to their breasts, many of our breast lift patients request augmentation with implants as well. Having these procedures completed at the same time helps to minimize recovery time and scarring.</p>

                    <h2>Recovery After the Breast Lift Procedure</h2>
                    <p>Immediately after surgery, you will be asked to spend at least one week to recover in the comfort of your home. During this time, it is important that you rest and minimize your arm movements as much as possible. You will be given post-operative instructions prior to surgery, and it is important that you follow these instructions.</p>
                    <p>Most patients can return to normal, non-strenuous daily activities after one week. For more strenuous activities, such as exercise, it is important to wait at least 4 weeks or until given clearance by Dr. Umang Kothari.</p>
                    <p>If you’ve been considering changing the appearance or size of your breasts, talk to The Hair and Shape Clinic to find out if you would be an appropriate candidate for this procedure. Whether you are seeking breast augmentation with implants, breast reduction, or a breast lift, he can combine artistic skill and medical expertise to give you a beautiful, natural-looking profile.</p>

                </div>
            </section>
            {/* End main content */}

            {/* Start FAQ */}
            {/* <section className="pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5">
                         
                            <img src="/faq.jpg" alt="faq image" width={500} height={500} />
                        </div>
                        <div className="col-12 col-md-7">
                            <div className="section-header">
                                <h1 className="text-center py-4 m-0"><b>Frequently Asked Questions</b></h1>
                            </div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item" style={{ marginBottom: "0px" }}>
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-controls="collapseOne" aria-expanded="false">
                                            <b>Q. Is a breast lift the same as a mastopexy? </b>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Yes. A mastopexy is another term for a breast lift.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item" style={{ marginBottom: "0px" }}>
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <b>Q. Can I have breast implants with my breast lift?</b>
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Absolutely! This is one of our most commonly combined procedures. Many patients are concerned with both drooping of the breasts as well as a loss of volume. This is usually associated with childbirth, weight loss, or age. A breast lift combined with breast augmentation will help to both lift the breast and add the volume and firmness you desire.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item" style={{ marginBottom: "0px" }}>
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <b>Q. Should I finish having children before I consider having a breast lift? </b>
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Having a breast lift will in no way affect your ability to have children. However, if you are considering having more children in the near future, it would be in your best interest to wait for a breast lift. You may require a revision procedure should you choose to have this done prior to having more children. This is a personal choice for all of our patients. It is important to discuss this with Dr. Umang Kothari so he can help you come to the best decision.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item" style={{ marginBottom: "0px" }}>
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            <b>Q. Where are the incisions for a breast lift?</b>
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            There are three types of breast lift. A donut mastopexy has an incision that goes around the areola only and is appropriate when a moderate lift is needed. This lift is generally used in combination with breast augmentation. A vertical lift has an incision that goes around the areola and down the lower front of the breast. This type of lift is appropriate for most patients. The third type of breast lift uses an anchor-like incision that goes around the areola, down the lower front of the breast and along the crease beneath the breast. Severe drooping of the breast may require this type of breast lift. These incisions typically are easily concealed by your undergarments or bathing suit top.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* End FAQ */}
        </div>
    );
}
