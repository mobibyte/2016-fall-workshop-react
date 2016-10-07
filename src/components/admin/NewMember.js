import React, { Component } from 'react';
import Formsy from 'formsy-react';
import moment from 'moment';
import { Input, Select, Checkbox } from 'formsy-react-components';
import { Modal } from 'react-bootstrap';

export default class NewMember extends Component {

  constructor(props) {
    super(props);

    this.state = {
      formValid: false
    }
  }

  enableSubmit = () => {
    this.setState({ formValid: true });
  }

  disableSubmit = () => {
    this.setState({ formValid: false });
  }

  submit = (data) => {

  }

  render() {
    const { formValid } = this.state;
    const { show, submit, error, cancel } = this.props;

    const shirtOptions = [
      {label: 'Select'},
      {value: 'sm', label: 'Small'},
      {value: 'md', label: 'Medium'},
      {value: 'lg', label: 'Large'},
      {value: 'xl', label: 'X Large'},
      {value: 'xxl', label: '2X Large'},
      {value: 'xxxl', label: '3X Large'}
    ];

    const claimedShirtOptions = [
      {label: 'Select'},
      {value: 'true', label: 'Yes'},
      {value: 'false', label: 'No'},
    ]

    const today = moment().format('YYYY-MM-DD');

    return (
      <div>
        <Modal show={show}>
          <Modal.Header>
            <Modal.Title>Add new member</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Formsy.Form
              onValidSubmit={submit}
              onValid={this.enableSubmit}
              onInvalid={this.disableSubmit}>

              <Input
                name="firstname"
                label="First name"
                layout="vertical"
                required />

              <Input
                name="lastname"
                label="Last name"
                layout="vertical"
                required />

              <Input
                name="email"
                label="Email"
                layout="vertical"
                required />

              <Input
                name="studentId"
                label="Mav's 1000 #"
                type="number"
                layout="vertical"
                required />

              <hr/>

              <Select
                name="shirtSize"
                label="T-Shirt Size"
                layout="vertical"
                options={shirtOptions}
                required />

              <Select
                name="shirtClaimed"
                label="Received T-Shirt"
                layout="vertical"
                options={claimedShirtOptions}
                required />

              <Input
                name="payedAt"
                type="date"
                label="Payment date"
                layout="vertical"
                value={today}
                required />

              <Input
                name="paymentAmount"
                type="number"
                step="0.01"
                label="Payment amount"
                layout="vertical"
                value="15.00"
                required />

              { error &&
                <div className="alert alert-danger">{error}</div>
              }

              <button
                type="submit"
                disabled={!formValid}
                className="btn btn-primary btn-raised">
                Submit
              </button>

              <button
                onClick={cancel}
                type="button"
                className="btn btn-danger">
                Cancel
              </button>

            </Formsy.Form>

          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
