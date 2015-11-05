var LoginForm = React.createClass({

    render: function() {

        return (
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <a href="/signup">
                        <span className="glyphicon glyphicon-user"></span> Sign Up
                    </a>
                </li>
                <li className="dropdown">
                    <a className="dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        <span className="glyphicon glyphicon-log-in"></span> Log In
                        <span className="glyphicon glyphicon-caret"></span>
                    </a>
                </li>
            </ul>
        )

    }

});