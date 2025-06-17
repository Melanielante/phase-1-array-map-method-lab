const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


function titleCased() {
  let preservedWords = ['OO', 'API', 'NaN', 'JSONP', 'StopPropagation', 'PreventDefault'];

  return tutorials.map(title => {
    return title
      .split(" ")
      .map(word => {
        // Remove punctuation (only trailing) temporarily for comparison
        let trailing = '';
        if (/[^\w]$/.test(word)) {
          trailing = word.slice(-1);
          word = word.slice(0, -1);
        }

        let preserved = preservedWords.find(preservedWord =>
          preservedWord.toLowerCase() === word.toLowerCase()
        );

        if (preserved) {
          return preserved + trailing; // Add punctuation back
        }

        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + trailing;
      })
      .join(" ");
  });
}
