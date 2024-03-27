import React from 'react';
import { CardHeader, CardBody, CardText } from 'reactstrap';



export default class ClassComponentForm extends React.Component {
    constructor() {
        super();
        this.state = {
            formData: {
                username: "",
                email: ""
            }
        }
    }

    handleChange = e => {
        this.setState({
            formData: { ...this.state.formData, [e.target.name]: e.target.value }
          });
    }

    handleSubmit = e => {
        e.preventDefault()

        this.setState({formData:{username:"",email:""}})
    }


    render() {

        return (
            <>
            <CardHeader>Class Component Form</CardHeader>
            <CardBody>
                <CardText>Username: {this.state.formData.username}</CardText>
                <CardText>Email: {this.state.formData.email}</CardText>
                <form onSubmit={this.handleSubmit}>
                    <section className='form-body'>
                        <label>username
                            <input
                            type="text"
                            name="username"value={this.state.formData.username} onChange={this.handleChange} />
                        </label>
                        <label>email
                            <input type="email" name="email" value={this.state.formData.email} onChange={this.handleChange} required />
                        </label>
                    </section>
                    <footer>
                        <button type='submit'>Submit</button>
                    </footer>
                </form>
            
            </CardBody>
            </>
        )
    }
}