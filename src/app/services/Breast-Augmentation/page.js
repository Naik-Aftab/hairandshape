import Head from 'next/head';
import Image from 'next/image';

export default function BreastAugmentation() {
    return (
        <div>
            <Head>
                <title>Breast Augmentation</title>
            </Head>

            {/* Start About */}
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 pb-4 d-flex justify-content-center align-items-center">
                            <img className='shadow rounded img-fluid' src="\Assets\service-imgs\Breast Augmentation.jpeg" alt="about image" height={300} />
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div className="about">
                                <h2>Breast Augmentation</h2>
                                <p>Breast augmentation, or the placement of breast implants, is a surgical procedure designed to enhance the volume and shape of the breasts. For most of our patients, the ultimate goal of breast augmentation is to increase the size of the breasts while maintaining a desirable form, firmness, and natural appearance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End About */}

            {/* Start main content */}
            <section className="pb-5">
                <div className="container">
                    <h2>Good Candidates for Breast Implants</h2>
                    <p>If you are considering breast implants, you may have a very different reason than someone else for desiring surgery. Many women who come into our office seeking breast implants are eager to know if they are good candidates for breast augmentation surgery. Dr.Umang Kothari has provided the following preliminary checklist with the understanding that it is impossible to know whether you are a good candidate without undergoing a medical review.</p>

                    <h2>You may be a good candidate for breast augmentation if you:</h2>
                    <ul>
                        <li>Have been dissatisfied with the size of your breasts for several years and would like to enlarge them.</li>
                        <li>Would like to balance out breasts that are different sizes.</li>
                        <li>Have lost breast volume as a result of aging, weight loss, or pregnancy.</li>
                        <li>Have a hard time finding flattering clothing because your breasts are a disproportionate size to the rest of your body.</li>
                        <li>Have had a previous breast augmentation and would now like to have a smaller or larger size than what was originally placed.</li>
                    </ul>
                    <p>Age is an important consideration as well. Dr.Umang Kothari understands that many young women may be dissatisfied with their current breast size. However, they should wait until their breasts have fully developed before undergoing breast augmentation surgery.</p>
                    <h2>The Breast Augmentation Procedure</h2>
                    <p>Breast augmentation is performed under general anesthesia at The Hair And Shape Clinic in Mumbai. Depending on the type and size of breast implants you have chosen, Dr.Umang Kothari may choose to make the incision in one of three locations:</p>
                    <ul>
                        <li>Within the crease underneath the breast</li>
                        <li>Around the edge of the areola</li>
                        <li>Just inside the armpit</li>
                    </ul>
                    <p>This decision will be made with you, before the surgery, during your consultation with Dr.Umang Kothari. After making the incision, Dr.Umang Kothari will insert the breast implants either above or beneath the pectoral muscle. Again, you will be able to make this decision with Dr.Umang Kothari based on your body type and activity level.</p>

                    <h2>After the Breast Augmentation Procedure</h2>
                    <p>When the breast augmentation is complete, you will be fitted for a surgical support bra. The discomfort you feel for the first few days after surgery can often be controlled with prescription medication. Immediately after surgery, you will be asked to recover for at least one week in the comfort of your home. During this time, it is important that you rest and minimize your arm movements as much as possible. You will be given post-operative instructions prior to surgery, and it is crucial that you follow these instructions.</p>
                    <p>Most patients can return to normal, non-strenuous daily activities after one week. For more strenuous activities, such as exercise, it is important to wait at least 4 weeks or until given clearance by Dr.Umang Kothari.</p>
                    <p>During these first few weeks, moderate swelling is common. As your healing progresses and your swelling goes down, your new silhouette will emerge, and you will be ready to enjoy your breast implants!</p>

                </div>
            </section>
            {/* End main content */}

            {/* Start FAQ content */}
            {/* <section className="py-5">
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
              <div className="accordion-item" style={{ marginBottom: '0px' }}>
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-controls="collapseOne" aria-expanded="false">
                    <b>Q. Are breast implants safe? </b>
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    In the past, silicone-filled breast implants were often in the news due to concerns of leaks of the liquid silicone once placed in the body. Today, the formulation of the silicone within breast implants has changed to a cohesive gel formulation that holds together uniformly, while still creating a breast that looks and feels natural. These breast implants are FDA approved and regulated. An alternative type of implant is saline implants. These implants are filled with a saline solution (salt water), which already exists in the body. It poses no known health concerns if an implant leak should occur.
                  </div>
                </div>
              </div>
              <div className="accordion-item" style={{ marginBottom: '0px' }}>
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <b>Q. What is the difference between saline and silicone implants?</b>
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Silicone breast implants are FDA-approved and contain a sterile cohesive gel formulation that holds together uniformly, typically creating results that look and feel more natural. Saline breast implants are also FDA-approved and are filled with a sterile salt-water solution (a naturally-occurring substance in your body). Saline implants are typically firmer than silicone implants, but because they are filled with a naturally-existing body fluid, some patients prefer saline implants.
                  </div>
                </div>
              </div>
              <div className="accordion-item" style={{ marginBottom: '0px' }}>
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <b>Q. What risks are involved in having a breast augmentation procedure?</b>
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    As with any surgical procedure, there are always certain risks involved. During your initial consultation, Dr. Umang Kothari will review your medical history with you and will discuss any risks involved that are specific to your health history.
                  </div>
                </div>
              </div>
              <div className="accordion-item" style={{ marginBottom: '0px' }}>
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    <b>Q. How old do I need to be to have breast augmentation?</b>
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    The Hair and Shape Clinic performs cosmetic saline implant breast augmentation starting at 18 years of age. FDA guidelines on silicone implants stipulate that patients undergoing placement of silicone breast implants for cosmetic reasons be at least 22 years of age.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
 {/* End FAQ content */}
        </div>
    );
}
