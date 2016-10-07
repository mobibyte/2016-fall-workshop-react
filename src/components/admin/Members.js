import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { createMember } from '../../api/admin';

import NewMember from './NewMember';

export default class Members extends Component {

  constructor(props) {
    super(props);

    this.state = {
      newMemberForm: {
        show: false,
        error: null,
      }
    }
  }

  submitNewMember = (data) => {
    this.setState({ error: null });

    createMember(data)
      .then(res => {
        this.showNewMemberForm(false);
      })
      .catch(e => {
        const { newMemberForm } = this.state;
        newMemberForm.error = e.message;
        this.setState({ newMemberForm });
      });
  }

  showNewMemberForm = (show) => {
    const { newMemberForm } = this.state;
    newMemberForm.show = show;
    this.setState({ newMemberForm });
  }

  render() {
    const { newMemberForm } = this.state;

    return(
      <div>
        <NewMember
          error={newMemberForm.error}
          show={newMemberForm.show}
          cancel={() => this.showNewMemberForm(false)}
          submit={this.submitNewMember} />

        <h2>Members</h2>
        <button
          onClick={() => this.showNewMemberForm(true)}
          className="btn btn-primary btn-raised">
          Add member
        </button>
      </div>
    );
  }
}
