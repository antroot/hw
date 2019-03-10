(function () {

    'use strict'
    
    // Напишите функцию, которая получает в качестве аргумента массив объектов координат и превращает его в строку,
    // подходящую для атрибута points  svg-тега <polygon>.
    // Пример массива: [{x:12, y:13}, {x:56, y: 45}, ...]

    let star = [{x:70, y:5}, {x:90, y: 41}, {x:136, y: 48}, {x:103, y:80}, {x:111, y:126},
                  {x:70, y:105}, {x:29, y:126}, {x:36, y:80}, {x:5, y:48}, {x:48, y:41}];

    let points = star.map((e) => (`${e.x},${e.y}`)).join(" ");

    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    document.body.appendChild(svg);
    svg.appendChild(polygon);
    polygon.setAttribute("points", points);

    // Напишите функцию, которая будет получать в качестве аргумента массив чисел,
    // и будет возвращать массив только тех чисел, которые не повторяются.

    let arr = [1, 2, 2, 2, 2, 3, 4, 4, 5, 6, 6, 6];

    function duplicateRemove(items) {
        let sorted_arr = items.slice().sort();
        let results = [];
        for (let i = 0; i < sorted_arr.length - 1; i++) {
            if (sorted_arr[i-1] != sorted_arr[i] && sorted_arr[i+1] != sorted_arr[i]) {
                results.push(sorted_arr[i]);
            }
        }
        return results;
    }

    console.log(duplicateRemove(arr));

    // Напишите функцию, которая в качестве аргумента будет получать string-у с многострочным текстом,
    // и будет преобразовывать её в string с html-кодом, где текст с первой строки должен стать заголовком первого уровня,
    // а все остальные строки должны стать абзацами.



})();

