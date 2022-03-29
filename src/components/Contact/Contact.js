import React from 'react';

const Contact = () => {
    return (
        <div>
            <section className="mb-4 mx-5 p-2">



<h2 className="h1-responsive font-weight-bold text-center my-4"><span>Contact</span> Us</h2>

<p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
    a matter of hours to help you.</p>

<div className="row">

    {/* <!--Grid column--> */}
    <div className="col-md-9 mb-md-0 mb-5">
        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

            {/* <!--Grid row--> */}
            <div className="row">

                {/* <!--Grid column--> */}
                <div className="col-md-6">
                    <div className="md-form mb-0">
                        <input type="text" id="name" name="name" class="form-control"/>
                        <label for="name" class="">Your name</label>
                    </div>
                </div>
                {/* <!--Grid column--> */}

                {/* <!--Grid column--> */}
                <div className="col-md-6">
                    <div class="md-form mb-0">
                        <input type="text" id="email" name="email" class="form-control"/>
                        <label for="email" class="">Your email</label>
                    </div>
                </div>
                {/* <!--Grid column--> */}

            </div>
            {/* <!--Grid row--> */}

            {/* <!--Grid row--> */}
            <div className="row">
                <div className="col-md-12">
                    <div className="md-form mb-0">
                        <input type="text" id="subject" name="subject" class="form-control"/>
                        <label for="subject" class="">Subject</label>
                    </div>
                </div>
            </div>
            {/* <!--Grid row--> */}

            {/* <!--Grid row--> */}
            <div className="row">

                {/* <!--Grid column--> */}
                <div className="col-md-12">

                    <div class="md-form">
                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                        <label for="message">Your message</label>
                    </div>

                </div>
            </div>
            {/* <!--Grid row--> */}

        </form>

        <div className="text-center text-md-left">
            <a className="btn btn-danger px-4" onclick="document.getElementById('contact-form').submit();">Send</a>
        </div>
        <div className="status"></div>
    </div>
    {/* <!--Grid column--> */}

    {/* <!--Grid column--> */}
    <div className="col-md-3 text-center">
        <ul className="list-unstyled mb-0">
            <li><i className="fas fa-map-marker-alt fa-2x"></i>
                <p>San Francisco, CA 94126, USA</p>
            </li>

            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                <p>+ 01 234 567 89</p>
            </li>

            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>contact@mdbootstrap.com</p>
            </li>
        </ul>
    </div>
    {/* <!--Grid column--> */}

</div>

</section>

        
            
        </div>
    );
};

export default Contact;