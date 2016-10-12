import React, { Component } from 'react';
import {getMembers} from '../../api/admin';
import moment from 'moment';
export default class Member extends Component {

	constructor(props){
		super(props);
	}	
	render(){
		const {firstName,lastName,email,membershipRenewedAt} = this.props;
		// set date for display purposes
		var date = moment(membershipRenewedAt).format('YYYY-MM-DD');
		// check renewed at date against current date.
		// if difference (in years) > 0 then inactive.
		// moment().format() messes up the object so .diff() won't work
		var status = moment().diff(moment(membershipRenewedAt),'years')==0?"Active":"Inactive";
		console.log(status);
		return(
			<tr>
				<td>{firstName}</td>
				<td>{lastName}</td>
	            <td>{email}</td>
	            <td>{date}</td>
	            <td>{status}</td>
            </tr>
		);
	}
}
