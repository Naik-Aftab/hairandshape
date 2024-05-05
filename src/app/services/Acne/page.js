import Head from 'next/head';
import Image from 'next/image';

export default function Acne() {
    return (
        <div>
            <Head>
                <title>Acne</title>
            </Head>

            {/* Start About */}
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 pb-4 d-flex justify-content-center align-items-center">
                            <img className='shadow rounded img-fluid' src="..\Assets\service-imgs\Acne .jpeg" alt="about image" style={{height:'500px'}} />
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div className="about">
                                <h2>Acne</h2>
                                <p>Acne is a common skin condition that happens due to dead skin cells. It causes pimples on the face, chest, upper back and forehead. This skin condition occurs because the dead skin cells and hair follicles become clogged with oil. Acne can cause blackheads, pimples or whiteheads. It is most common among teenagers and it affects people of all ages.</p>
                                <p>Acne can cause distress which can leave a scar on the skin. As soon as you treat your acne the lower the risk of such problems. It can happen due to various reasons including fluctuating hormone levels, high humidity, stress and genetics. There are four main reasons due to which acne occurs are as follows:</p>
                                <ul>
                                    <li>Bacteria</li>
                                    <li>Inflammation</li>
                                    <li>Excess oil</li>
                                    <li>Hair follicles blocked by oil</li>
                                    <li>Dead skin cells</li>
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
                    <h2>Various Techniques</h2>
                    <p>Acne treatment can be done by various techniques are as follows:</p>
                    <ul>
                        <li>Corticosteroid injection</li>
                        <li>Oral contraceptives</li>
                        <li>Oral antibiotics</li>
                        <li>Isotretinoin</li>
                        <li>Topical antimicrobials</li>
                    </ul>

                    <h2>Causes</h2>
                    <ul>
                        <li>Pimples are commonly seen from teenage years upto 35 years of age in both females and males.</li>
                        <li>Genetic trait, stress, hormonal changes like PCOD</li>
                        <li>Threading and waxing of hair, usage of steroid creams.</li>
                        <li>Excess sebum production and clogged pores</li>
                        <li>Oily food / dairy products</li>
                        <li>Certain medications</li>
                    </ul>
                </div>
            </section>
            {/* End main content */}
        </div>
    );
}
