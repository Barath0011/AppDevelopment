import React, { Component } from 'react';
import './Feedback.css';
import { Link } from 'react-router-dom';

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      feedback: '',
      errors: {
        name: '',
        email: '',
        feedback: '',
      },
      submitted: false, // Track if the form has been submitted
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  validateForm = () => {
    const { name, email, feedback } = this.state;
    let errors = {
      name: '',
      email: '',
      feedback: '',
    };
    let isValid = true;

    if (!name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = 'Invalid email format';
      isValid = false;
    }

    if (!feedback.trim()) {
      errors.feedback = 'Feedback is required';
      isValid = false;
    } else if (feedback.trim().length < 20) {
      errors.feedback = 'Feedback must be at least 20 characters long';
      isValid = false;
    }

    this.setState({ errors });
    return isValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.validateForm()) {
      // Form is valid, you can send the data to a server or handle it as needed here
      console.log('Form data submitted:', this.state);

      // Optionally, reset the form
      this.setState({
        name: '',
        email: '',
        feedback: '',
        errors: {
          name: '',
          email: '',
          feedback: '',
        },
        submitted: true, // Set submitted to true
      });
    }
  };

  render() {
    const { name, email, feedback, errors, submitted } = this.state;

    return (
        
      <div className="feedback-form"> <div className="top-text">
      <Link to="/que">Dashboard</Link>
    </div>  
        <div className="heading3">FEEDBACK FORM</div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              <div className="t">Name:</div>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={this.handleChange}
              required
            />
            <span className="error">{errors.name}</span>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              <div className="t">Email:</div>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={this.handleChange}
              required
            />
            <span className="error">{errors.email}</span>
          </div>
          <div className="form-group">
            <label htmlFor="feedback">
              <div className="t">Feedback:</div>
            </label>
            <textarea
              name="feedback"
              id="feedback"
              value={feedback}
              onChange={this.handleChange}
              required
            />
            <span className="error">{errors.feedback}</span>
          </div>
          <button type="submit">
            <div className="bu">Submit</div>
          </button>
        </form>
        {submitted ? (
          // Display a confirmation message if submitted is true
          <div className="confirmation-message">
            Thank you for your feedback! Form submitted successfully.
          </div>
          
        ) : null}
      </div>
    );
  }
}

export default Feedback;
