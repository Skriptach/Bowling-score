'use strict';

let roll = '(\\d|-)',
	strike ='X',
	spare = `(${roll}/)`,
	turn = `${strike}|${spare}|${roll}{2}`,
	rollRX = new RegExp(roll),
	strikeRX = new RegExp(strike),
	spareRX = new RegExp(spare),
	turnRX = new RegExp(turn, 'g');

var BowlingScore = (sequenceFrames) => {
	let series = sequenceFrames.match(turnRX);
	return;
};

try {
	module.exports.BowlingScore = BowlingScore;
} catch(e) {
	// run in browser. mute it.
}