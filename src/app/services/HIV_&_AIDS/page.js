import React from 'react';

const HivAidsPage = () => {
    return (
        <>
            {/* ========== Start About ========== */}
            <section className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">

                            <img className='img-fluid shadow rounded mb-3' src="..\Assets\service-imgs\HIV_AIDS.jpg" alt="about image" height={300} />
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                            <div className="about">
                                <h2>Hiv & Aids</h2>
                                <p>HIV (human immunodeficiency virus) is a virus that damages the cells in your immune system and weakens your ability to fight everyday infections and disease.</p>
                                <p>AIDS (acquired immune deficiency syndrome) is the name used to describe a number of potentially life-threatening infections and illnesses that happen when your immune system has been severely damaged by the HIV virus.</p>
                                <p>While AIDS cannot be transmitted from 1 person to another, the HIV virus can.</p>
                                <p>There&apos;s currently no cure for HIV, but there are very effective drug treatments that enable most people with the virus to live a long and healthy life.</p>
                                <p>With an early diagnosis and effective treatments, most people with HIV will not develop any AIDS-related illnesses and will live a near-normal lifespan.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ========== End About ========== */}

            {/* ========== Start main content ========== */}
            <section className="pb-5">
                <div className="container">
                    <h2>Symptoms of HIV infection</h2>
                    <ul>
                        <li>people with a current or previous partner with HIV</li>
                        <li>people with a current or previous partner who is from an area with high HIV rates</li>
                        <li>people who are from an area with high HIV rates</li>
                        <li>people who engage in chemsex (using drugs to help or enhance sex)</li>
                        <li>men who have unprotected sex with men</li>
                        <li>women who have unprotected sex with men who have sex with men</li>
                        <li>people who inject drugs and share equipment</li>
                        <li>people who have unprotected sex with somebody who has injected drugs and shared equipment</li>
                        <li>people who share sex toys with someone infected with HIV</li>
                        <li>people with a history of sexually transmitted infections, hepatitis B or hepatitis C</li>
                        <li>people who have had multiple sexual partners</li>    
                        <li>people who have been raped</li>
                        <li>people who have received a blood transfusion, transplant or other risk-prone procedures in countries that do not have strong screening for HIV</li>
                        <li>healthcare workers who could accidentally prick themselves with an infected needle – but this risk is extremely low</li>
                        <li>babies born from a parent with untreated HIV</li>                        
                    </ul>

                    <h2>Causes of HIV infection</h2>
                    <p>HIV is found in the body fluids of an infected person. This includes semen, vaginal and anal fluids, blood and breast milk.</p>
                    <p>It's a fragile virus and does not survive outside the body for long.</p>
                    <p>HIV cannot be transmitted through sweat, urine or saliva.</p>                        
                    <p>The most common way of getting HIV in the UK is through having anal or vaginal sex without a condom.</p>
                    <p>Other ways of getting HIV include:
                        <ul>
                            <li>sharing needles, syringes or other injecting equipment</li>
                            <li>transmission from mother to baby during pregnancy, birth or breastfeeding</li>
                        </ul>
                    </p>
                    <p>The chance of getting HIV through oral sex is very low and will be dependent on many things, such as whether you receive or give oral sex and the oral hygiene of the person giving the oral sex.</p>


  
                    <h2>Treatment for HIV</h2>
                    <p>Antiretroviral medicines are used to treat HIV. They work by stopping the virus replicating in the body, allowing the immune system to repair itself and preventing further damage.</p>
                    <p>These come in the form of tablets, which need to be taken every day.</p>
                    <p>HIV is able to develop resistance to a single HIV medicine very easily, but taking a combination of different medicines makes this much less likely.</p>
                    <p>Most people with HIV take a combination of medicines. It's vital these are taken every day as recommended by your doctor.</p>
                    <p>The goal of HIV treatment is to have an undetectable viral load. This means the level of HIV virus in your body is low enough to not be detected by a test.</p>
                </div>
            </section>
            {/* ========== End main content ========== */}
        </>
    );
};

export default HivAidsPage;
