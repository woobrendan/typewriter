const sentence = 'hello there from lighthouse labs';
const otherSentence = 'This is a string'

const typeWriter = function(string) {
  let wordArray = string.split('');
  for (let i = 0; i < wordArray.length; i++) {
    setTimeout(() => process.stdout.write(wordArray[i]), (i + 1) * 50);
  }
  setTimeout(() => console.log('\n'), wordArray.length * 50);
};

typeWriter(otherSentence);