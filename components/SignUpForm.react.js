/** @jsx React.DOM */

var React = require('react');

module.exports = SignUpForm = React.createClass({

    handleSubmit: function(e) {
        // Create the User
    },

    render: function() {

        return (
            <form className="signupForm" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email" className="sr-only">E-mail Address</label>
                    <input type="text" id="email" placeholder="ima.writer@example.com" />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input type="password" id="password" placeholder"Password" />
                </div>
                <div className="form-group">
                    <label htmlFor="rePassword" className="sr-only">Re-type Password</label>
                    <input type="password" id="rePassword" placeholder"Re=type Password" />
                </div>
                <div className="form-group">
                    <input htmlFor="firstName" className="sr-only">First Name</label>
                    <input type="text" id="firstName" placeholder="Ima" />
                </div>
                <div className="form-group">
                    <input htmlFor="lastName" className="sr-only">First Name</label>
                    <input type="text" id="LastName" placeholder="Writer" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Sign Up</button>
                </div>
            </form>
        )

    }

});