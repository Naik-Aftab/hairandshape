import Image from 'next/image';
import Head from 'next/head';

export default function Botox() {
  return (
    <div>
      <Head>
        <title>Botox</title>
      </Head>

      {/* Start About */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <Image src="/beard.jpg" alt="about image" width={500} height={500} />
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
              <div className="about">
                <h2>Botox</h2>
                <p>Botulinum toxin is commonly known as Botox. It is a protein made from the bacteria clostridium botulinum. Well, the same toxin causes botulism when it is used in the right way. This can give a plethora of benefits for treating wrinkles and fine lines. It is popular to cure the ageing problem and it is non-invasive.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About */}

      {/* Start main content */}
      <section className="py-5">
        <div className="container">
          <h2>Botox Treatments</h2>
          <ul>
            <li>It can lead to temporary paralysis of the muscle due to no contractions</li>
            <li>The chemical acetylcholine connects with the receptors non each muscle which leads to the contraction</li>
            <li>Injecting to treat wrinkles the muscles contacts which leads to an almost prompt reduction on the facial lines</li>                
          </ul>

          <h2>Benefits of Botox Treatment</h2>
          <p>Botox can efficiently treat wrinkles and facial lines which are a part of the ageing process. In case you are wondering whether you should get anti-wrinkles treatment or not, it would be wise to look at all the benefits you can gain with botox injections</p>
          <ul>
            <li>Reduces wrinkles and fine lines promptly</li>
            <li>It is minimally invasive</li>
          </ul>
        </div>
      </section>
      {/* End main content */}
    </div>
  );
}
