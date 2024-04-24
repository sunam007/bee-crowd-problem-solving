const proverbsArr = [
  "Actions speak louder than words.",
  "A penny saved is a penny earned.",
  "A stitch in time saves nine.",
  "All good things come to those who wait.",
  "Better late than never.",
  "Don't count your chickens before they hatch.",
  "Every cloud has a silver lining.",
  "Fortune favors the bold.",
  "Haste makes waste.",
  "If it ain't broke, don't fix it.",
  "Necessity is the mother of invention.",
  "Out of sight, out of mind.",
  "Practice makes perfect.",
  "Rome wasn't built in a day.",
  "The early bird catches the worm.",
  "The grass is always greener on the other side.",
  "The pen is mightier than the sword.",
  "There's no place like home.",
  "Two heads are better than one.",
  "When in Rome, do as the Romans do.",
  "You can't judge a book by its cover.",
  "You reap what you sow.",
  "A bird in the hand is worth two in the bush.",
  "A watched pot never boils.",
  "Don't put all your eggs in one basket.",
  "Easy come, easy go.",
  "Every man for himself.",
  "If the shoe fits, wear it.",
  "If you can't beat them, join them.",
  "Ignorance is bliss.",
  "Keep your friends close and your enemies closer.",
  "Like father, like son.",
  "Misery loves company.",
  "No pain, no gain.",
  "One man's trash is another man's treasure.",
  "The road to hell is paved with good intentions.",
  "There's no time like the present.",
  "To each his own.",
  "What goes around comes around.",
  "Where there's smoke, there's fire.",
  "You can lead a horse to water, but you can't make him drink.",
  "A picture is worth a thousand words.",
  "All's fair in love and war.",
  "Don't cry over spilled milk.",
  "Great minds think alike.",
  "If you want something done right, do it yourself.",
  "It's never too late to learn.",
  "Look before you leap.",
  "The squeaky wheel gets the grease.",
];

const lines = [3];

const N = parseInt(lines.shift());

function truncateArray(arr, n) {
    return arr.slice(0, n);
  }

  const truncatedArray = truncateArray(proverbsArr, N);

// console.log(truncatedArray);


