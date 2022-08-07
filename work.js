//Write a function that will take 3 numbers will return the max number
//Write a function that will take 3 parameters and will return the min number
//and and frist time do it using if else
//second time do it using Math.max() & Math.min();
function getNumber(num1, num2, num3){
    // if(num1 > num2 && num1 > num3){
    //     console.log('The Max Number is: ', num1);
    // }
    // else if(num2 > num1 && num2 > num3){
    //     console.log('The Max Number is: ', num2);
    // }
    // else{
    //     console.log('The Max Number is: ', num3);
    // }
   
    

}
// const number = getNumber(22, 444, 88);

//Problem 2
function getParameter(para1, para2, para3){
    if(para1 < para2 && para1 < para3){
        console.log('The Min Number is: ', para1);
    }
    else if(para2 < para1 && para2 < para3){
        console.log('The Min Number is: ', para2);
    }
    else{
        console.log('The Min Number is: ', para3);
    }
}
const paraNumber = getParameter(33, 22, 13);
///Same Problem Find With Math.max
