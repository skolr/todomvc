/* jshint node:true */
/* global equal:true, module:true, S:true, test:true */
'use strict';

module('skolr client: agilityjs', {
	setup: function () {
		S.open('http://localhost:4444/architecture-examples/agilityjs/index.html');
	}
});

test('add new todo', function () {
	S('#new-todo').click().type('make sure skolr works');
	equal(S('#todo-list>li').size(), 1, 'there is 1 todo item');
});
