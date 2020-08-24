/* Hello Dawid. 
That is a quest that I have heard about while listening to some  podcast while 
I was running in Ozansk. The point was to make short function - that is able to revers only some of the words,
not the full sentence. One of ideas was to reverse only words that are equal/longer that 4 characters.

Mistake I made was forgetting about assignment there: sentenceSplit[i] = reverseStr(sentenceSplit[i], 
I just wrote reverseStr(sentenceSplit[i].

Silly me.

By this morning tried to use bash with init, add, commit, status, log, diff and other basic commands. Did not went through branches and the others. Then I  moved straight to Visual Studio Code.
Btw I used terminal Bash in VSC to push that files. 

Added to see if and how it works.

Checking push with -u origin
*/

let sentence = 'trzech synów matka miała i coś ma dla nich';
console.log(sentence);
const sentenceSplit = sentence.split(' ');
//console.log(sentenceSplit);


function reverseStr(str) {
    const splitStr = str.split('');
    const revStr = splitStr.reverse();
    const resStr = revStr.join('');
    return resStr;
}

for (let i = 0; i < sentenceSplit.length; i++) {
    //console.log(sentenceSplit[i].length);    put to check if it works
    sentenceSplit[i].length >= 5 ? sentenceSplit[i] = reverseStr(sentenceSplit[i]) : sentenceSplit[i] = sentenceSplit[i];
    //console.log(sentenceSplit);  put to check if it works
}
//console.log(sentenceSplit.join('zzz')); //  put to check how and if it works
//console.log(sentenceSplit.join('--')); //  put to check how it works
console.log(sentenceSplit.join(' '));


//another exercise. Aim is to check if length of 3 arrays is the same, if yes combine them in one console.log output.

const userAge = [12, 7, 13, 8, 9, 14];
const userName = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6'];
const userHeight = [186, 168, 155, 143, 122, 138];

if (userAge.length == userName.length && userHeight.length == userAge.length) {
    for (let i = 0; i < userAge.length; i++) {
        console.log(`Ktoś o imieniu ${userName[i]} ma ${userAge[i]} lat i ma ${userHeight[i]} cm wzrostu`)
    }
} else {
    console.log('Tablica jest do dupy');
}