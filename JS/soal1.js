var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

var sentence = `${word} ${second} ${third} ${fifth} ${sixth} ${seventh}`;

// Menampilkan hasilnya di elemen dengan id "output-container"
var outputContainer = document.getElementById('output-container');
outputContainer.textContent = sentence;

console.log(sentence);
