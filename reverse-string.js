const greetings = 'Hello, how are you?';

function reverseString (text)
{
    let reverse = '';
   for(const letter of text) 
   {
       console.log(letter);
       reverse = letter + reverse;
   }
   return reverse;
}

var reverse = reverseString(greetings);
console.log(reverse);