'use strict';

var BowlingScore = require('../BowlingScore').BowlingScore;

describe('Bowling-score', () => {
	it('should be a function', () => {
		expect(BowlingScore).toEqual(jasmine.any(Function));
	});
	it('all strikes should be equal 300', () => {
		expect(BowlingScore('X X X X X X X X X X X X')).toBe(300);
	});
	it('all pairs of 9 and miss should be equal 90', () => {
		expect(BowlingScore('9- 9- 9- 9- 9- 9- 9- 9- 9- 9-')).toBe(90);
	});
	it('should account each try. should be equal 90', () => {
		expect(BowlingScore('18 27 36 45 54 63 72 81 -9 9-')).toBe(90);
	});
	it('all pairs of 5 and spare, with a final 5 should be equal 150', () => {
		expect(BowlingScore('5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5')).toBe(150);
	});
	it('intervaling spare and non-spare should be equal 96', () => {
		expect(BowlingScore('5/ 4- 4/ -5 5/ 36 6/ 23 5/ 7-')).toBe(96);
		// 10+4, 4, 10+0, 5, 10+3, 9, 10+2, 5, 10+7, 7
	});
	it('intervaling strikes and non-strikes should be equal 156', () => {
		expect(BowlingScore('X 34 X -5 X 72 X X 6/ X 44')).toBe(156);
		// 10+3+4, 7, 10+0+5, 5, 10+7+2, 9, 10+10+6, 10+6+4, 10+10, 10+4+4
	});
	it('partial sequence should be equal 54', () => {
		expect(BowlingScore('X 34 X -5 X')).toBe(54);
		// 10+3+4, 7, 10+0+5, 5, 10
	});
	it('partial sequence should be equal 43', () => {
		expect(BowlingScore('5/ 4- 4/ -5 5/')).toBe(43);
		// 10+4, 4, 10+0, 5, 10
	});
	it('extra turns should be ignored. Total score to be equal 132', () => {
		expect(BowlingScore('X 34 X -5 X 72 X 42 6/ X 44 35')).toBe(132);
		// 10+3+4, 7, 10+0+5, 5, 10+7+2, 9, 10+4+2, 6, 10+10, 10+4+4
	});
});