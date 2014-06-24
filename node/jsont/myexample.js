var jsont = require('jsont')();

var template = require('./my-template.json');

var options = {
    user: {
      name: "Arun",
      birthday: "17th Nov"
      }
  };

jsont.render(template, options, function(err, out) {
    console.log(out);
});
