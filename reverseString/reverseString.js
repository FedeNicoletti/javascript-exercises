const reverseString = function(word) {
arr = Array.from(word);
rev = arr.reverse();
return rev.join('');
}

module.exports = reverseString
