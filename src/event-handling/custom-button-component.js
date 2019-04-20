import React from 'react';

export class CustomButtonComponent extends React.Component {

    constructor(props) {
        super(props);
        this.showMoreInformation = this.showMoreInformation.bind(this);
        this.state = {
            userName : 'Unknown',
            userFirstName : 'Unknown',
            userLastName : 'Unknown'
        }
    }

    render() {
        return (
            <div>
                Please check more information&nbsp;&nbsp;
                <h4>User Information : </h4>
                User ID   : {this.state.userName},<br/>
                User Name : {this.state.userFirstName} {this.state.userLastName}<br/>
                <button onClick={this.showMoreInformation}>
                    Click Here
                </button>
            </div>
        );
    }

    showMoreInformation() {
        // IMP this.props only used after binding it with class object. function is available with class not with instance.
        // IMP this.state only used after binding it with class object. function is available with class not with instance.
        
        console.log('User Name - ' + this.props.userInfo.username); 
        console.log('User Email Address - ' + this.props.userInfo.emailAddress);
        
        // alert(this.props.userInfo.username + " : " + this.props.userInfo.emailAddress);
        
        /* 
        //This will not going to trigger change event by react JS lib
        this.state = {
            userName : this.props.userInfo.username,
            userFirstName : 'Bhushan',
            userLastName : 'Patil'
        }; */
        
        this.setState({
            userName : this.props.userInfo.username,
            userFirstName : 'Bhushan',
            userLastName : 'Patil'
        });
    }
}