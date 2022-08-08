//Find The largest Number: 
// function maxInArray(numbers){
//         let largest = numbers[0];

//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const  element = numbers[index];
//         if(element > largest){
//             largest = element;
//         }
//     }
//     return largest;
// }
// const heights = [167, 190, 120, 165, 137, 933]
// const tallest = maxInArray(heights);
// console.log('The Tallest Person is: ' ,tallest);
//Find The Lowest Number
function lowInArray(num){
    let lower = num[0];
    for(i = 0; i < num.length; i++){
        const index = i;
        const element = num[index];
    if(element < lower){
        lower = element;
    }
    }
    return lower;
}
const arr = [23, 46, 33, 65, 34, 77, 7];
const lowest = lowInArray(arr);
console.log('The Lowest Number is: ', lowest);