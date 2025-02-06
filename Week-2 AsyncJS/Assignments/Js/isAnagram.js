/*
Write a function to check if two strings are anagrams or not.
*/

function isAnagram(string1, string2) {
    sortedString1 = [...string1].sort().join('');
    sortedString2 = [...string2].sort().join('');

    return sortedString1 === sortedString2;
}

console.log(isAnagram("hello", "olelh"));