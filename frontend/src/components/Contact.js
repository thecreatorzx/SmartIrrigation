import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <div className="contact-container">
        <div className="contact-form">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
        <div className="contact-info">
          <div className="imgx"></div>
          <div className="quote">
            "Efficient irrigation practices lead to better yields and a
            sustainable future."
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
