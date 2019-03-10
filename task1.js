(function () {

    // Напишите функцию, которая получает в качестве аргумента массив объектов координат и превращает его в строку,
    // подходящую для атрибута points  svg-тега <polygon>.
    // Пример массива: [{x:12, y:13}, {x:56, y: 45}, ...]

    'use strict'

    let star = [{x:70, y:5}, {x:90, y: 41}, {x:136, y: 48}, {x:103, y:80}, {x:111, y:126}, {x:70, y:105}, {x:29, y:126}, {x:36, y:80}, {x:5, y:48}, {x:48, y:41}];
    let points = star.map((e) => (`${e.x},${e.y}`)).join(" ");

    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    document.body.appendChild(svg);
    svg.appendChild(polygon);
    polygon.setAttribute("points", points);

})();
