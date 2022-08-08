function findLeapYear(array){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        index = i;
        element = array[index];
        if(element % 4 ==0){
           newArray.push(element);
        }
    }
    return newArray;
}
const year = [2022, 2023, 2024, 2028, 2030];
const isLeapYear = findLeapYear(year);
console.log('This', isLeapYear, 'are leap Year!');
