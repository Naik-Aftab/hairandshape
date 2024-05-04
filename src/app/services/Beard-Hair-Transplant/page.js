import Head from 'next/head';
import Image from 'next/image';

export default function BeardHairTransplant() {
  return (
    <div>
      <Head>
        <title>Beard Hair Transplant</title>
      </Head>

      {/* Start About */}
      <section className='py-5'>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 pb-4 d-flex justify-content-center align-items-center">
              <img className='shadow rounded img-fluid' src="Assets\service-imgs\Beard Transplant.jpeg" alt="about image" height={300} />
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
              <div className="about">
                <h2>Beard Hair Transplant</h2>
                <p>Growing a beard isn&apos;t a simple task for a lot of guys. Some try a razor to grow a beard but it doesn&apos;t grow uniformly on the face, resulting in patchy facial hair instead of a stylish beard. Beards are a sign of masculinity for men, some men like elegant beards and some like a clean shaved look. Each individual has a unique pattern of beard, some have thick and coarse beard hairs.</p>
                <p>Unfortunately, some individuals reach adulthood but are unable to grow adequate beards. For men who are looking to grow their beard and aren’t able to gain hair then a beard hair transplant is ideal for you.</p>
                <p>Under this procedure, the hairs are transplanted in the beard region after taking out from other parts of the body.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About */}

      {/* Start main content */}
      <section className='pb-5'>
        <div className="container">
          <h2>Causes of Beard Hair Loss</h2>
          <p>The cause of the bread hair loss commonly differs from one patient to another are as follows:</p>
          <ul>
            <li>
              <strong>Medication:</strong> You may lose hair if you underwent or currently undergoing any medical treatment or medication
            </li>
            <li>
              <strong>Trauma:</strong> Prolonged stress can lose trigger facial hair loss
            </li>
            <li>
              <strong>Scars:</strong> Injuries from scars and poor shaving
            </li>
          </ul>

          <h2>The procedure of Beard Hair Transplant</h2>
          <ul>
            <li>Surgical planning will be done with the patients followed by markings over the beard region</li>
            <li>4 out of 5 sample grafts are taken out and the average length of grafts is calculated. Slits are made in the desired area of the beard using cut-to-size blades.</li>
            <li>The procedure involves some steps as FUE or FUT. A normal density of 40-80 hairs/sq.cm is natural. Usually, 2000 to 2500 grafts are necessary for a good aesthetic.</li>
            <li>Eventually, the grafts are implanted using implanters as in the decided beard region.</li>
          </ul>
          <h2>Benefits of Beard Hair Transplant</h2>
          <ul>
            <li>Ideal beautifying approaches</li>
            <li>Natural results</li>
            <li>Improves confidence</li>
            <li>Younger looks</li>
            <li>Transplanted hairs function as normal</li>
            <li>New beard can be trimmed and shaved as usual</li>
          </ul>
        </div>
      </section>
      {/* End main content */}

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


    </div>
  );
}
