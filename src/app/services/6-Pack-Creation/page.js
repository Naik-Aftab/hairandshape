import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>6 Pack Creation</title>
      </Head>

      {/* Start About */}
      <section className='py-5'>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 pb-3 d-flex justify-content-center align-items-center">
            <img className="shadow rounded img-fluid mb-3" src="Assets\service-imgs\Hi-Definition Liposuction.jpeg" alt="about image" style={{height:'400px',width:'100%'}} />
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
              <div className="about">
                <h2>Hi-Defination Lipo /6 Pack Creation</h2>
                <p>Abdominal six-pack surgery is a surgical operation that involves sucking the fat around the abdominal area. Many men and women devote a large portion of their exercises to build abdominal muscles. However, even with exercise, not everybody can achieve that athletic six-pack definition. Some people find it challenging to increase the thickness of the abdominal muscles, even with strenuous abdominal activities. Six-pack surgery or abdominal etching works for people who do not exercise. This procedure can be combined with liposuction of other areas such as the flanks and lower back</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About */}

      {/* Start main content */}
      <section className='pb-5'>
        <div className="container">
          <h2 className="">Who can be Candidate?</h2>
          <ul className="text-justify">
            <li>You can be a candidate for 6 pack abs surgery if you are in good overall health, physically fit and have a good muscle build. We do not advise this surgery for overweight people.</li>
            <li>If you have lower than 20% of fat and you are healthy, you might be a candidate for abdominal etching.</li>
          </ul>
          <h2>How to prepare for an Abdominal Etching procedure?</h2>
          <ul>
            <li>Prohibit smoke. This is critical since nicotine has been shown to restrict blood vessels, making your surgery and recovery process more difficult.</li>
            <li>Drinking alcohol pre and post-surgery is not recommended. Alcohol inhibits the body&apos;s normal blood-clotting reaction, resulting in increased bleeding during surgical operation and recovery.</li>
            <li>Stay away from blood thinners like aspirin and ibuprofen. This is critical because, similar to alcohol, the body’s natural response after surgery is to clot, controlling the body from losing too much blood during surgery. On the other hand, natural clotting is impossible when the blood is weaker. You may raise the possibility of losing too much blood following surgery if your blood is thinned.</li>
            <li>Arrange for transportation home. Because you will be sedated throughout your abdominal etching process, you will not be able to drive yourself home following the operation.</li>
          </ul>
          <h2>Benefits</h2>
          <ul>
            <li><b>A Chiselled, Sculpted Appearance</b> 6-pack abs are the hallmark of a true athlete as per the fitness industry. But in reality, they are hard to achieve and even harder to maintain – especially as you age over the years. By using liposuction around your abdominal muscles, Dr. Umang can strategically underline your naturally resting muscle. In his procedure, he uses a cannula to extract enveloping fat from the area, including the abdomen.</li>
            <li><b>Minimal Downtime</b> Because Dr. Umang uses advanced and the latest liposuction techniques, recovery from this procedure is less than traditional liposuction procedures. Whether through tumescent, ultrasound-assisted, or laser-assisted liposuction, Dr Umang’s contemporary approach to liposuction is more effective and requires far lesser downtime than most other traditional techniques.</li>
            <li><b>Permanent Results</b> After recovery from this procedure, there is no worrying about returning the extracted fat cells. The fatty tissue that has been discarded, is gone permanently. But this doesn’t mean new fatty tissue can’t replace it. At this stage, it is important to remain at relatively the same weight you were when you underwent the abdominal etching procedure. This will ensure that your results stay permanent and unaltered.</li>
          </ul>
        </div>
      </section>
      {/* End main content */}

              {/* ========== Start FAQ ========== */}
              {/* <section className="pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <img src="Assets\icons\faq.jpg" className="img-fluid" alt="image" />
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
