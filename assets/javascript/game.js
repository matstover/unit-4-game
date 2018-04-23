var hiddenScore;
var shownScore;
var goalScore;
var pinkGemNumbe;
var yellowGemNumber;
var greenGemNumber;
var blueGemNumber;

// Press Start to Start

// Randomly assign a (hidden) number to each crystal between 1-12
(blueGemNumber) = Math.floor((Math.random() * 12) + 1);
(greenGemNumber) = Math.floor((Math.random() * 12) + 1);
(pinkGemNumber) = Math.floor((Math.random() * 12) + 1);
(yellowGemNumber) = Math.floor((Math.random() * 12) + 1);
console.log(greenGemNumber)
// Randomly generate goal score 19-120
(goalScore)= Math.floor((Math.random()*120)+1)
console.log(goalScore)
// Upon crystal clickup add that number to the score

// if/else loop to check if new score is less then, equal to, or over score

// ----if less than continue game
if (shownScore) < hiddenScore true return false
// ----if/else equal to hidden number add one to the win score
if (shownScore) ===  {
    
} else {
    
}
// ----if/else if over hidden number (game over) add one to lose score

// If game over reset with start button clickup