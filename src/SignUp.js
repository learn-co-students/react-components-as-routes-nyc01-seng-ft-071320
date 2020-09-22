import React from 'react'

export default class SignUp extends React.Component {
    render(){
        return(
            <div>
                <input type='text' placeholder="First Name" />
                <input type='text' placeholder="Last Name" />
                <input type='email' placeholder="Email" />
                <input type='submit' value='SignUp' />
            </div>
        )
    }
}