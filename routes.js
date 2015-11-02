var JSX = require('node-jsx').install(),
    React = require('react'),
    WxlApp = require('./components/WxlApp.react');

module.exports = {

  index: function(req, res) {
    res.render('home', {
      markup: "Hi, I'm a duck",
      state: JSON.stringify({ "test": "test" })
    });
  }

};