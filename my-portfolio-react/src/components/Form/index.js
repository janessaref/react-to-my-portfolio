import React from 'react';
import emailjs from 'emailjs-com';
import "./style.css";

// form component for Contact page
function Form() {

  function sendEmail(e) {
    e.preventDefault();

    // when the form is submitted by a user, I will recieve an email
    emailjs.sendForm('service_mj345ul', 'template_uy010zi', e.target, 'user_gNMYhYEd30sKsE25XsVvW')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    //   my contact form
    <form className="contact-form" onSubmit={sendEmail}>
        {/* makes an id for each form sent */}
        <input type="hidden" name="contact_number" />
            <div className="form-group">
                <label for="exampleFormControlInput1">Full Name</label>
                <input type="text" className="form-control" name="name" id="nameInput" placeholder="Full Name" />
            </div>

            <div class="form-group">
                <label for="exampleFormControlInput2">Email</label>
                <input type="email" className="form-control" name="email" id="emailInput" placeholder="Email" />
            </div>

            <div class="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea className="form-control" id="messageInput" name="message" rows="3" placeholder="Message"></textarea>
            </div>
            <button type="submit" value="send" className="btn btn-outline-dark mt-3 submitBtn">Submit</button>
    </form>
  );
};

export default Form;