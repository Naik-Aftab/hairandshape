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
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
              <Image src="/beard.jpg" alt="about image" width={200} height={200} />
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
      <section className='py-5'>
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
    </div>
  );
}
