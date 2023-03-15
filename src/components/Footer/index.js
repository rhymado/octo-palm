import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <section className="personal-info">
          <p className="name">Amanda Kerr</p>
          <p className="description">
            Experienced marketing consultant. I’m excited to take whatever challenges you have to
            throw at me.
          </p>
        </section>
        <section className="contacts">
          <p className="title">Contacts</p>
          <p className="info">
            hello@kerr.com <br />
            +5363-84635-837
          </p>
        </section>
      </footer>
    );
  }
}

export default Footer;
