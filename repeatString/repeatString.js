const repeatString = function(hey, number) {
 var string = hey;
 if(number < 0) return 'ERROR';
 if(number === 0) return '';
 if(!hey) return '';
 for (i = 1; i < number; i++) {
     string = string + 'hey';
   }
   return string;
}

module.exports = repeatString
