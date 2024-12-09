// 1. Об’явити масив з довільними елементами. За допомогою циклу вивести всі елементи масиву послідовно в консоль

// const arr = [1, 'Hello', 154, 555, 'December'];
// console.log('arr :>> ', arr);


// 2.  Дан масив з цілими числами. За допомогою циклу вивести елементи масива, які є парними числами

// const arr1 = [1, 2, 4, 5, 7, 8, 9, 6];
// for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] % 2 === 0){
//         console.log('arr1[i] :>> ', arr1[i]);
//     }
// }


// 3. Дано два масива: [1, 2, 3] і [4, 5, 6]. Об'єднати їх разом 

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2];
// console.log('arr3 :>> ', arr3);


// 4. Даний масив [6, 5, 4]. Зробити з нього масив [4, 5,6]

// const arr = [6, 5, 4];
// const reverced = arr.reverse();
// console.log('reverced :>> ', reverced);


// 5. Даний масив [1, 2, 3]. Додати йому в кінець елементи 4, 5, 6

// const numbers = [1, 2, 3];
// numbers.push(4, 5, 6);
// console.log('numbers :>> ', numbers);


// 6. Даний масив [7, 8, 9]. Додати йому на початок 1, 2, 3

// const numbers = [7, 8, 9];
// numbers.unshift(1, 2, 3);
// console.log('numbers :>> ', numbers);


// 7. Даний масив ['aaa', 'bbb', 'ccc']. Виведіть в консоль перший елемент та видаліть його.

// const arr = ['aaa', 'bbb', 'ccc'];
// console.log(arr[0]);
// arr.shift();
// console.log('arr :>> ', arr);


// 8. Даний масив ['aaa', 'bbb', 'ccc']. Виведіть в консоль та видаліть останній елемент

// const arr = ['aaa', 'bbb', 'ccc'];
// console.log(arr[2]);
// const removeElement = arr.pop();
// console.log('removeElement :>> ', removeElement);
// console.log(arr);


// 9. Даний масив [9, 10, 11, 12, 13]. Скопіювати в новий масив елементи з другого по п'ятий

// const arr = [9, 10, 11, 12, 13];
// const copyArrayPart = arr.slice(1, 5);
// console.log('copyArrayPart :>> ', copyArrayPart);
// console.log('arr :>> ', arr);


// 10. З масиву [1, 2, 3, 4, 5] зробити масив [1, 4, 5] (оригінальний має змінитись)

// const arr = [1, 2, 3, 4, 5];

// const newArrayPart = arr.splice(1, 2);
// console.log('newArrayPart :>> ', newArrayPart);
// console.log('arr :>> ', arr);


// 11. З масиву [1, 2, 3, 4, 5] скопіювати в новий масив [3, 4, 5]

// const arr = [1, 2, 3, 4, 5];
// const arrCopy = arr.slice(2);
// console.log('arrCopy :>> ', arrCopy);
// console.log('arr :>> ', arr);


// 12. З масиву  [1, 2, 3, 4, 5] (не однією командою) зробити масив [1, 'w', 'trtr', 2, 3, 4, 'vvv', 'a', 'hello']

// const arr =  [1, 2, 3, 4, 5];
// const removeElements = arr.splice(1);
// console.log('removeElements :>> ', removeElements);
// console.log('arr :>> ', arr);

// arr.push('w', 'trtr', 2, 3, 4, 'vvv', 'a', 'hello');

// // arr.push('w', 'trtr');
// // arr.push(2, 3, 4);
// // arr.push('vvv', 'a', 'hello');

// console.log('arr :>> ', arr);



