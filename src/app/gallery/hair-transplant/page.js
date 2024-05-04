"use client";
import React, { useState } from "react";

export default function HT(){
  return (
    <>
      <section className="py-5">
        
<div className='d-flex justify-content-center'>
<ul class="nav nav-pills mb-3 d-flex justify-content-center py-1 px-2 px-md-5 mx-3" id="pills-tab" role="tablist" style={{ background:'var(--yellow)',borderRadius:'25px'}}>
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Image Testimonials</button>
  </li>
  <li class="nav-item " role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Video Testimonials</button>
  </li>  
</ul>
</div>

<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">

  <div className="container">
                <div className="row">
                    <div className='col-md-4 col-12 py-3 d-flex justify-content-center align-items-center'>
                     <img
                        src="Assets\HT\HT-NEW\ht1.jpg"
                        class="img-fluid rounded"
                        alt="result"
                     />
                     
                    </div>
                    <div className='col-md-4 col-12 py-3 d-flex justify-content-center align-items-center'>
                    <img
                        src="Assets\HT\HT-NEW\ht2.jpg"
                        class="img-fluid rounded"
                        alt="result"
                     />
                    </div>
                    <div className='col-md-4 col-12 py-3 d-flex justify-content-center align-items-center'>
                    <img
                        src="Assets\HT\HT-NEW\ht3.jpg"
                        class="img-fluid rounded"
                        alt="result"
                     />
                    </div>
                    <div className='col-md-4 col-12 py-3 d-flex justify-content-center align-items-center'>
                    <img
                        src="Assets\HT\HT-NEW\ht4.jpg"
                        class="img-fluid rounded"
                        alt="result"
                     />
                    </div>
                    <div className='col-md-4 col-12 py-3 d-flex justify-content-center align-items-center'>
                    <img
                        src="Assets\HT\HT-NEW\ht5.jpg"
                        class="img-fluid rounded"
                        alt="result"
                     />
                    </div>
                    {/* <div className='col-md-4 col-12 py-3 d-flex justify-content-center align-items-center'>
                    <img
                        src="Assets\HT\HT-NEW\ht6.jpg"
                        class="img-fluid rounded"
                        alt="result"
                     />
                    </div> */}
                    <div className='col-md-4 col-12 py-3 d-flex justify-content-center align-items-center'>
                    <img
                        src="Assets\HT\HT-NEW\ht7.jpg"
                        class="img-fluid rounded"
                        alt="result"
                     />
                    </div>
                    <div className='col-md-4 col-12 py-3 d-flex justify-content-center align-items-center'>
                    <img
                        src="Assets\HT\HT-NEW\ht8.jpg"
                        class="img-fluid rounded"
                        alt="result"
                     />
                    </div>
                    <div className='col-md-4 col-12 py-3 d-flex justify-content-center align-items-center'>
                    <img
                        src="Assets\HT\HT-NEW\ht9.jpg"
                        class="img-fluid rounded"
                        alt="result"
                     />
                    </div>
                    <div className='col-md-4 col-12 py-3 d-flex justify-content-center align-items-center'>
                    <img
                        src="Assets\HT\HT-NEW\ht10.jpg"
                        class="img-fluid rounded"
                        alt="result"
                     />
                    </div>
                    <div className='col-md-4 col-12 py-3 d-flex justify-content-center align-items-center'>
                    <img
                        src="Assets\HT\HT-NEW\ht11.jpg"
                        class="img-fluid rounded"
                        alt="result"
                     />
                    </div>
                    <div className='col-md-4 col-12 py-3 d-flex justify-content-center align-items-center'>
                    <img
                        src="Assets\HT\HT-NEW\ht12.jpg"
                        class="img-fluid rounded"
                        alt="result"
                     />
                    </div>
                    <div className='col-md-4 col-12 py-3 d-flex justify-content-center align-items-center'>
                    <img
                        src="Assets\HT\HT-NEW\ht13.jpg"
                        class="img-fluid rounded"
                        alt="result"
                     />
                    </div>                    

                </div> 
                
            </div>

  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
  
  <div className="container">
                <div className="row">
                    <div className='col-md-4 col-12 py-3 d-flex justify-content-center align-items-center'>
                    <iframe width="560" height="250" src="https://www.youtube.com/embed/92ytntt-B38?si=YzYQ7j0Cvv-84DeL" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className='col-md-4 col-12 py-3 d-flex justify-content-center align-items-center'>
                    <iframe width="550" height="250" src="https://www.youtube.com/embed/VY5a120ll2k?si=HiYNZDBfIA9CaAFD" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
                    </div>
                    <div className='col-md-4 col-12 py-3 d-flex justify-content-center align-items-center'>
                    <iframe width="550" height="250" src="https://www.youtube.com/embed/PSe75NBng_U?si=xoKhkZOgXSVtw8I-" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
                    </div>
                    <div className='col-md-4 col-12 py-3 d-flex justify-content-center align-items-center'>
                    <iframe width="550" height="250" src="https://www.youtube.com/embed/6HLO5VNTCzs?si=itFzh2TsFdmnuhdr" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
                    </div>
                    <div className='col-md-4 col-12 py-3 d-flex justify-content-center align-items-center'>
                    <iframe width="560" height="250" src="https://www.youtube.com/embed/NkVbbus1n3E?si=m9FXcjQOuGKmxvZf" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
                    </div>
                    <div className='col-md-4 col-12 py-3 d-flex justify-content-center align-items-center'>
                    <iframe width="550" height="250" src="https://www.youtube.com/embed/8F-DTMzQhyI?si=7I63X-_xKprK9CO8" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
                    </div>
                    <div className='col-md-4 col-12 py-3 d-flex justify-content-center align-items-center'>
                    <iframe width="550" height="250" src="https://www.youtube.com/embed/CqSMjumjMjQ?si=R9G475b_u8Iargtr" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
                    </div>                   
                    <div className='col-md-4 col-12 py-3 d-flex justify-content-center align-items-center'>
                    <iframe width="560" height="250" src="https://www.youtube.com/embed/EBYJnYHtHPQ?si=uMjCyGGO4dHZJyNu" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>           
                    <div className='col-md-4 col-12 py-3 d-flex justify-content-center align-items-center'>
                    <iframe width="560" height="250" src="https://www.youtube.com/embed/CkGwbwq0X2U?si=tik4-AYVGRYuLLtD" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>                   
                    <div className='col-md-4 col-12 py-3 d-flex justify-content-center align-items-center'>
                    <iframe width="560" height="250" src="https://www.youtube.com/embed/z4GqdIQrgO4?si=ytJneqYFe20hYGyD" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>                   
                    <div className='col-md-4 col-12 py-3 d-flex justify-content-center align-items-center'>
                    <iframe width="560" height="250" src="https://www.youtube.com/embed/amNbb2drM5c?si=KKrwlH6W-5n0n3IE" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>                   

                </div> 
                
            </div>


  </div>
</div>
      </section>
    </>
  );
};

