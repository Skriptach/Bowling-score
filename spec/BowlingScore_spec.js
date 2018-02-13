'use strict';

var BowlingScore = require('../BowlingScore').BowlingScore;

describe('Bowling-score', () => {
	it('should be a function', () => {
		expect(BowlingScore).toEqual(jasmine.any(Function));
	});
});