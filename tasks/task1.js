const string = 'This is a typical sentance';

function revercestring(str) {
    let newstring = '';
    for (let i= str.length - 1; i>= 0; i--) {
      newstring = newstring + str[i];
    //   console.log(newstring);
    }
    return newstring;
  }

function reverseString(str) {
    if (typeof str === 'string'){

      const words = str.split(' ');
      for (let i = 0; i < words.length; i++) {
        if (words[i].length > 5) {
          words[i] = revercestring(words[i]);
        //   console.log(words[i]);
        }
      }
      return words.join(' ');
  }
}
  
    const reverse = reverseString(string);
  console.log(reverse);