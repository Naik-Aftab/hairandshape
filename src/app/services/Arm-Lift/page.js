// pages/arm-lift.js

import Head from 'next/head';
import Image from 'next/image';

export default function ArmLift() {
  return (
    <div>
      <Head>
        <title>Arm Lift (Brachioplasty)</title>
      </Head>

      {/* Start About */}
      <section className='py-5'>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 pb-4 d-flex justify-content-center align-items-center">
              <img className='shadow rounded img-fluid' src="\Assets\service-imgs\Arm Contouring.jpeg" alt="about image" height={300} />
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
              <div className="about">
                <h2>Arm Lift (Brachioplasty)</h2>
                <p>Brachioplasty is a type of cosmetic surgery that can improve the appearance of your upper arms. It involves tightening sagging skin and supportive tissue. Surgeons also remove pockets of fat. It makes your arms appear more sculpted in a way that exercise and diet alone can&apos;t.</p>
                <p>This procedure, also known as an arm lift, is a type of cosmetic surgery. It helps improve tone and definition in your upper arms by:</p>
                <ul>
                  <li>Reducing pockets of fat.</li>
                  <li>Removing excess skin.</li>
                  <li>Tightening supportive tissue.</li>
                  <li>Smoothing over remaining skin.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About */}

      {/* Start main content */}
      <section className="pb-5">
        <div className="container">
        <h2>Who is this procedure for?</h2>
            <p>You may benefit from brachioplasty surgery if your upper arms are drooping or sagging. This area may take on a batwing-like appearance with a flap of skin that hangs down when you raise your arms.</p>
            <p>This may occur due to:</p>
            <ul>
                <li>Changes in skin elasticity that occur with age.</li>
                <li>Losing a lot of weight with or without obesity surgery and maintaining a healthy lifestyle.</li>
                <li>Having certain genetic factors that cause your skin to sag.</li>
                <li>Lymphedema.</li>
            </ul>
            <h2>Is exercise a possible substitute for brachioplasty surgery?</h2>
            <p>Exercise, especially resistance training, like lifting weights, improves upper arm muscle tone. But exercise can&apos;t tighten loose skin. After an arm lift, these healthy habits can help you maintain good results for as long as possible.</p>
            <h2>Is an arm lift right for me?</h2>
            <p>You may benefit from brachioplasty if you:</p>
            <ul>
                <li>Have loose skin in your upper arms.</li>
                <li>Can accept the appearance of an arm lift scar, which typically runs the length of your upper arm and can be unsightly.</li>
                <li>Are of a stable weight, meaning you&apos;re not likely to gain or lose significant weight in the long term.</li>
                <li>Don&apos;t have medical conditions, such as anemia, that raise your risk of surgical complications.</li>
                <li>Don&apos;t smoke.</li>
            </ul>

            <h2>Procedure Details</h2>
            <p>If brachioplasty surgery is right for you, here&apos;s what to expect:</p>
            <ul>
                <li>You receive medication to stay comfortable. This may include general anesthesia, which puts you to sleep and blocks sensation. Or you may receive a local anesthetic, which numbs the surgical area and helps you relax.</li>
                <li>Surgeons make an incision on the inside or back of your arm. The size of the incision depends on how extensive the procedure is.</li>
                <li>Your surgeon removes excess skin by cutting it away and sometimes, excess fat by using liposuction.</li>
                <li>They use stitches (sutures) to tighten supportive tissue.</li>
                <li>Before completing the procedure, surgeons close the incision with sutures. They also bandage your arm with sterile gauze to reduce the risk of infection.</li>
            </ul>
        </div>
      </section>
      {/* End main content */}
    </div>
  );
}
