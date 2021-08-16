import React from 'react';

const Contact = () => {
    return (
        <div>
             <section class="content-info py-5">
        <div class="container py-md-5">
            <div class="text-center px-lg-5">
                <h3 class="heading text-center mb-3 mb-sm-5">Contact Us</h3>
                <div class="title-desc text-center px-lg-5">
                    <p class="px-lg-5 sub-wthree">Praesent ullamcorper dui turpis.At vero eos et accusam et justo duo dolores et ea rebum.Integer sit amet mattis quam, sit amet ultricies velit. Praesent ullamcorper dui turpis.
                        Praesent ullamcorper dui turpis.</p>
                </div>
            </div>
            <div class="contact-w3pvt-form mt-5">
                <form action="#" class="w3layouts-contact-fm" method="post">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="form-group">
                                <label>First Name</label>
                                <input class="form-control" type="text" name="Name" placeholder="" required=""/>
                            </div>
                            <div class="form-group">
                                <label>Last Name</label>
                                <input class="form-control" type="text" name="Name" placeholder="" required=""/>
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input class="form-control" type="email" name="Email" placeholder="" required=""/>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group">
                                <label>Write Message</label>
                                <textarea class="form-control" name="Message" placeholder="" required=""></textarea>
                            </div>
                        </div>
                        <div class="form-group mx-auto mt-3">
                            <button type="submit" class="btn submit">Submit</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </section>
    
    <div class="map-w3layouts">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58403.658901232004!2d90.3272611!3d23.8104659!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d9ae523a79%3A0x1648b46bce5571e5!2sSher-e-Bangla%20National%20Cricket%20Stadium!5e0!3m2!1sen!2sbd!4v1629095502072!5m2!1sen!2sbd" allowfullscreen=""></iframe>
    
    </div>
        </div>
    );
}

export default Contact;
