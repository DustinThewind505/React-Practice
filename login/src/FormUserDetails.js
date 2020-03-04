import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
//import RadioButton from 'material-ui/RadioButton';

export class FormUserDetails extends Component {
continue = event => {
    event.preventDefault();
    this.props.nextStep();
}
    
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    {/* <AppBar title='Enter User Details'/> */}
                    <TextField 
                    hintText='Enter Your First Name'
                    floatingLabelText='First Name'
                    onChange={handleChange}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default FormUserDetails;