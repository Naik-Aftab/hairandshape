import ContactForm from '@/app/components/contact-form';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>6 Pack Creation</title>
      </Head>

      {/* Start About */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-6 d-flex justify-content-center align-items-center">
            <Image src="/image.jpg" alt="about image" width={500} height={500} />
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <div className="about">
                <h2>6 Pack Creation</h2>
                <p>Abdominal six-pack surgery is a surgical operation that involves sucking the fat around the abdominal area. Many men and women devote a large portion of their exercises to build abdominal muscles. However, even with exercise, not everybody can achieve that athletic six-pack definition. Some people find it challenging to increase the thickness of the abdominal muscles, even with strenuous abdominal activities. Six-pack surgery or abdominal etching works for people who do not exercise. This procedure can be combined with liposuction of other areas such as the flanks and lower back</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About */}

      {/* Start main content */}
      <section>
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
      <ContactForm />
    </div>
  );
}
