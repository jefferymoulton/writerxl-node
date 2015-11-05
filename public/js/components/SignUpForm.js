var SignUpForm = React.createClass({

    render: function() {

        return (

            <form>

                <div className="form-group">
                    <label className="sr-only" for="email">E-mail Address</label>
                    <input type="text" id="email" placeholder="E-mail Address" />
                </div>
                <div className="form-group">
                    <label className="sr-only" for="password">Password</label>
                    <input type="password" id="password" placeholder="Password" />
                </div>
                <div className="form-group">
                    <label className="sr-only" for="re-password">Re-type Password</label>
                    <input type="password" id="re-password" placeholder="Re-type Password" />
                </div>
                <div className="form-group">
                    <label className="sr-only" for="firstName">First Name</label>
                    <input type="text" id="firstName" placeholder="Agatha" />
                </div>
                <div className="form-group">
                    <label className="sr-only" for="lastName">Last Name</label>
                    <input type="text" id="lastName" placeholder="Christie" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Sign In</button>
                </div>

            </form>

        )

    }

});