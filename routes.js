var JSX = require('node-jsx').install(),
    React = require('react'),
    WxlApp = require('./components/WxlApp.react');

module.exports = {

  index: function(req, res) {

      var markup = React.renderComponentToString(
          WxlApp()
      );

      res.render('home', {
          markup: markup,
          state: JSON.stringify({test: "test"})
      });

  }/*,

  signup: function(req, res) {

      var markup =

      res.render('home', {
          markup: "I'm still a duck",
          state: JSON.stringify({ test: "another test" })
      });
  }*/

};