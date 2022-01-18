const sentence = 'hello there from lighthouse labs';

let wordArray = sentence.split('')
const typeWriter = function () {
  for (let i = 0; i < wordArray.length; i++) {
    setTimeout(() => process.stdout.write(wordArray[i]), (i + 1) * 50 )
  }
  setTimeout(() => console.log('\n'), wordArray.length * 50);
}

typeWriter();