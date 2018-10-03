const examples = [
    ['leave', 'eave'],
    ['reset', 'rest'],
    ['dragoon', 'dragon'],
    ['eave', 'leave'],
    ['sleet', 'lets'],
    ['skiff', 'ski'],
];
 
const funnel = (wordOne, wordTwo) => {
    for(let i = 0; i < wordOne.length; i++) {
        const wordToCheck = wordOne.slice(0, i) + wordOne.slice(i + 1, wordOne.length);
 
        // match
        if(wordTwo === wordToCheck){
            return true;
        }
    }
 
    return false;
}
 
examples.forEach(
    (set) => {
        console.log( funnel(set[0], set[1]) );
    }
);