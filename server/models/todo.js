var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
  	type: String,
  	required: true,
  	minlength: 1,
  	trim: true
  },
  completed: {
  	type: Boolean,
  	default: false
  },
  completedAt: {
  	type: Number,
  	defalult: null
  }
});

module.exports = { Todo };