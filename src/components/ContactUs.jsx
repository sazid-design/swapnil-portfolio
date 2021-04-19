import emailjs from "emailjs";
import React from "react";
import "../components/contactUs.css";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ifuaead",
        "template_gh9kjda",
        e.target,
        "user_IyOgyRSmXjHcxNHgAQvb0"
      )
      .then(
        (result) => {
          alert("Thank You! We will be responding soon");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="form-items">
            <div className="input-fields">
              <input
                type="text"
                className="input"
                placeholder="Name"
                name="name"
              />

              <input
                type="email"
                className="input"
                placeholder="name@example.com"
                name="email"
              />

              <input
                type="text"
                className="input"
                placeholder="01XXXXXXXXX"
                name="phone_number"
              />
            </div>

            <div className="txt-area">
              <textarea
                className="input"
                id=""
                placeholder="Type it Out"
                name="message"
              ></textarea>
              <div className="btn-submit">
                <input
                  type="submit"
                  className="submit-btn"
                  value="Send Now"
                ></input>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
