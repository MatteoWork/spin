function reverseWords(phrase) {
    let words = phrase.split('');

    for(let i = 0; i < words.length; i++) {
        if(words[i].length >= 5) {
            words[i] = words[i].split('').reverse().join('');
        }
    }
    
    return words.join(' ');
} 

let inpString = "Lorem ipsus magicaa astroungarico ciao";
let reversed = reverseWords(inpString);
console.log(reversed);