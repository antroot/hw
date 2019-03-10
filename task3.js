(function () {

    'use strict'

    // // Напишите функцию, которая в качестве аргумента будет получать string-у с многострочным текстом,
    // // и будет преобразовывать её в string с html-кодом, где текст с первой строки должен стать заголовком первого уровня,
    // // а все остальные строки должны стать абзацами.

    function splitString(stringToSplit, separator) {
        let arrayOfStrings = stringToSplit.split(separator);
        let result = [];
        for (let i=0; i < arrayOfStrings.length; i++) {
            if (i===0) {
                result.push(`<h1>${arrayOfStrings[i]}</h1>`);
            }
            else {
                result.push(`<p>${arrayOfStrings[i]}</p>`);
            }
        }
        return result.join('\n');
    }

    let tempestString = 'Hello World!\nАбзац первый\nАбзац второй\nАбзац третий.';
    let br = '\n';

    document.body.innerHTML = splitString(tempestString, br);

})();
