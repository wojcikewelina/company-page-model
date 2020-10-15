import React, { Component } from "react";
import ContactHeading from "../components/contactView/contactHeading";
import Form from "react-bootstrap/form";

class ContactView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: "",
      emailSent: null
    };
  }

  render() {
    return (
      <div>
        <ContactHeading />
        <article>
          <Form />
        </article>
      </div>
    );
  }
}

export default ContactView;
