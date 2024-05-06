"use client"
import React from 'react'
import { useState } from 'react';

export const Enquire = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className=''>

              {/* <!-- ========== Start modal ========== --> */}
              {show && <div className="modal-backdrop fade show"></div>}
          <div className={`modal ${show ? 'd-block' : ''}`} tabIndex="-1" role="dialog">
            <div class="modal-dialog modal-sm modal-dialog-centered">
                <div class="modal-content" style={{backgroundColor: '#f8fbff'}}>
                    <div class="modal-body">
                        <div class="container">
                            <div class="row">
                                <div class="text-end">
                                    <button type="button" class="btn-close" onClick={handleClose}>
                                    </button>
                                </div>
                                <div class="col-12  text-center">
                                    <h2 class="py-2" style={{color:'var(--yellow)'}}><b>Calculate Your Cost</b></h2>
                                </div>
                            </div>
                            <div class="row justify-content-center py-2">
                                <div class="col-md-12">
                                    <form class="contact" >
                                        <div class="form-row text-center">
                                            <div class="form-group py-2">
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--yellow)" class="bi bi-person-circle" viewBox="0 0 16 16">
                                                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"></path>
                                                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"></path>
                                                            </svg></span>
                                                    </div>
                                                    <input type="text" class="form-control" id="name" name="name" placeholder="Full Name" required=""/>
                                                </div>
                                            </div>

                                            <div class="form-group py-2">
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--yellow)" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"></path>
                                                            </svg></span>
                                                    </div>
                                                    <input type="email" class="form-control" id="email" name="email" placeholder="Email Address" required=""/>
                                                </div>
                                            </div>


                                            <div class="form-group py-2">
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--yellow)" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"></path>
                                                            </svg></span>
                                                    </div>
                                                    <input type="tel" class="form-control" id="phone" name="phone" placeholder="Phone No" required="" pattern="[0-9]{10,}"/>
                                                </div>
                                            </div>

                                            <div class="form-group py-2">
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--yellow)" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"></path>
                                                            </svg></span>
                                                    </div>
                                                    <input type="text" class="form-control" id="city" name="city" placeholder="Your Location" required=""/>
                                                </div>
                                            </div>

                                            <button class="hsbtn mt-3 py-2 px-3" id="submitBtn" type="submit">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- ========== End modal ========== --> */}

          <button onClick={handleShow} className='eqn-btn d-md-block d-none'>Enquire Now</button>
          <button onClick={handleShow} className='eqn-sm-btn d-md-none d-block py-1'>Enquire Now</button>
        </div>
  )
}
