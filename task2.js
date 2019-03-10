(function () {

    'use strict'

    // Напишите функцию, которая будет получать в качестве аргумента массив чисел,
    // и будет возвращать массив только тех чисел, которые не повторяются.
    
    let arr = [1, 2, 77, 2, 2, 3, 4, 4, 5, 6, 66];

    function duplicateRemove(items) {
        let sorted_arr = items.slice().sort();
        let results = [];
        for (let i = 0; i < sorted_arr.length; i++) {
            if (sorted_arr[i-1] != sorted_arr[i] && sorted_arr[i+1] != sorted_arr[i]) {
                results.push(sorted_arr[i]);
            }
        }
        return results;
    }

    console.log(`Исходный массив: ${arr.join(' ')}`);
    console.log(`Обработанный массив: ${duplicateRemove(arr).join(' ')}`);

})();
