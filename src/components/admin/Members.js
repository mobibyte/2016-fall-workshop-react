import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { createMember, getMembers } from '../../api/admin';

import MemberListItem from './MemberListItem'
import NewMember from './NewMember';

export default class Members extends Component {

  constructor(props) {
    super(props);

    this.state = {
      newMemberForm: {
        show: false,
        error: null,
      },
      memberList:null
    }
    this.updateMemberList();
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
  updateMemberList = () =>{
    getMembers().then(data =>{
      this.setState({memberList:data})
      console.log(this.state.memberList);
    });
  }


  showNewMemberForm = (show) => {
    const { newMemberForm } = this.state;
    newMemberForm.show = show;
    this.setState({ newMemberForm });
  }

  render() {
    const { newMemberForm, memberList } = this.state;
    let memberListBlock =null;
    if(memberList){
      memberListBlock = memberList.map(member =>(
          <MemberListItem
            key={member._id}
            firstName={member.firstname}
            lastName={member.lastname}
            email ={member.email}
            membershipRenewedAt = {member.membershipRenewedAt}/>
      ));
    }
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
        <div>
          <table className="table table-striped table-hover ">
            <thead>
              <tr className="info">
                <th>#</th>
                <th>Student Name</th>
                <th>Student Email</th>
                <th>Membership Renewed At</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {memberListBlock}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
