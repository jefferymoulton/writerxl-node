/** @jsx React.DOM */

var React = require('react');
var WxlApp = require('./components/WxlApp.react');

// Snag the initial state that was passed from the server side
var initialState = JSON.parse(document.getElementById('initial-state').innerHTML);

// Render the components, picking up where react left off on the server
React.renderComponent(
    <TweetsApp tweets={initialState}/>,
    document.getElementById('wxl-app')
);