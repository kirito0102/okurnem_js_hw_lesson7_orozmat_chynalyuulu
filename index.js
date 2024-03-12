// >>>>>> БИРИНЧИ ТАПШЫРМЫ <<<<<<<

// let number = [];
// for (let i = 2; i <= 100; i += 2){
//     number.push(i);
// }
// console.log(number);








// >>>>>>>>>>>>>>>>ЭКИНЧИ ТАПШЫРМА <<<<<<<<<<<<<<






// let frac = [1.456, 2.125, 3.32, 4.1, 5.34];

// let round = frac.map(number => Math.round(number * 10) / 10);

// console.log(round);




// let number = [1.456, 2.125, 3.32, 4.1, 5.34];

// for (let i = 0; i < number.length; i++) {
//     number[i] = Math.round(number[i] * 10) / 10;
// }

// console.log(number);








//>>>>>>>>>>>>> учунчуу тапшырма <<<<<<<<<<<<<<<<<< 








// let dateString = '2024-03-01';
// let dateParts = dateString.split('-');

// let dateObject = {
//     год: dateParts[0],
//     месяц: dateParts[1],
//     день: dateParts[2]
// };

// console.log(dateObject);







//>>>>>>>>>>>>>>>>>> тортунчу тапшырма <<<<<<<<<<<<<<<







// let array = [3, 2, 1];
// let result = '';

// for (let i = 0; i < array.length; i++) {
//     result += 'больше ' + array[i];
//     if (i !== array.length - 1) {
//         result += ', ';
//     }
// }

// console.log(result);



// let input = prompt("Введите массив чисел через запятую:");
// let array = input.split(',').map(Number); // преобразование строки в массив чисел

// let result = '';

// for (let i = 0; i < array.length; i++) {
//     result += 'больше ' + array[i];
//     if (i !== array.length - 1) {
//         result += ', ';
//     }
// }

// console.log(result);


//>>>>>>>>>>>>>>>>>> бешинчи тапшырма .<<<<<<<<<<<<<<<<


// let stars = '';
// for (let i = 1; i <= 7; i++) {
//     stars += '*';
//     console.log(stars);
// }





//>>>>>>>>>>>>>>>>>>>>> алтынчы тапшырма<<<<<<<<<<<<<<<<<<<<<
// function checkStringLength(array, length) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].length < length) {
//             console.log("Длина этого текста меньше " + length);
//         } else if (array[i].length > length) {
//             console.log("Длина этого текста больше " + length);
//         } else {
//             console.log("Длина этого текста от " + length + " до 10");
//         }
//     }
// }

// let input = prompt("Введите строки через запятую:");
// let strings = input.split(',');

// let lengthInput = parseInt(prompt("Введите контрольную длину:"));

// checkStringLength(strings, lengthInput);



// let inputStrings = prompt("Введите строки через запятую: ").trim();
// let lengthInput = parseIntя(prompt("Введите контрольную длину: "));

// let strings = inputStrings.split(',').map(item => item.trim());

// for (let i = 0; i < strings.length; i++) {
//     if (strings[i].length < lengthInput) {
//         console.log("Длина этого текста меньше " + lengthInput);
//     } else if (strings[i].length > lengthInput) {
//         console.log("Длина этого текста больше " + lengthInput);
//     } else {
//         console.log("Длина этого текста от " + lengthInput + " до 10");
//     }
// }

// function azema(array, length) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].length < length) {
//             console.log("Длина этого текста меньше " + length);
//         } else if (array[i].length > length) {
//             console.log("Длина этого текста больше " + length);
//         } else {
//             console.log("Длина этого текста от " + length + " до 10");
//         }
//     }
// }

// let strings = ["узун", "орточо", "кыска", "кичингекей", "чооон"];
// let Input1 = 5;

// azema(strings, Input1);

