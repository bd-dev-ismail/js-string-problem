const lyrics =  'Tu athi hai chine mai..jab jab sache barte hu';
const searchString = 'Athi'
// const doesExist = lyrics.includes(searchString);
// const lower = lyrics.toLowerCase();
// // const doesExist = lower.includes(searchString);
// const searchStringLower = searchString.toLowerCase();
// const doesExist = lower.includes(searchStringLower);
const doesExist = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExist);

console.log(lyrics.indexOf('jab'))
console.log(lyrics.indexOf('Tu'));
if(lyrics.indexOf('hu') !== -1){
    console.log('Exist inside the String');
}
else{
    console.log('Cannot Find It');
}
//Start With
console.log(lyrics.startsWith('Tu'));

//endswtih
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';
console.log(fileName.endsWith('pdf'));