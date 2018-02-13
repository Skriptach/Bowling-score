'use strict';

let roll = '\\d',
	strike ='X',
	spare = `(${roll}/)`,
	turn = `${strike}|${spare}|${roll}{2}|${roll}$`,
	rollRX = new RegExp(roll),
	strikeRX = new RegExp(strike),
	spareRX = new RegExp(spare),
	turnRX = new RegExp(turn, 'gi');

function getTurnData (turnCode) {
	let isStrike = strikeRX.test(turnCode),
		isSpare = !isStrike && spareRX.test(turnCode);
	return {
		firstRollScore: isStrike? 10 : +turnCode[0],
		secondRollScore: isStrike? 0 : isSpare? 10-turnCode[0] : +turnCode[1],
		isSpare,
		isStrike
	};
}

var BowlingScore = (sequenceFrames) => {
	let series = sequenceFrames
		.replace(/-/g, '0')
		.match(turnRX);

	return series
			.map((curentTurnCode) => getTurnData(curentTurnCode))
			.reduce((totalScore, current, i, array) => {
				if(i>9){return totalScore};

				function lookAhead() {
					return  current.isSpare  ? array[i+1].firstRollScore :
							current.isStrike ?
								(array[i+1].isStrike? 10 + array[i+2].firstRollScore : array[i+1].firstRollScore + array[i+1].secondRollScore)
							:0;
				}

				return totalScore + (current.firstRollScore + current.secondRollScore) + lookAhead() ;
			}, 0);
};

try {
	module.exports.BowlingScore = BowlingScore;
} catch(e) {
	// run in browser. mute it.
}