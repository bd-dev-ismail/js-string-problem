const lyrics =  'Tu athi hai chine mai..jab jab sache barte hu';
const searchString = 'Athi'
// const doesExist = lyrics.includes(searchString);
// const lower = lyrics.toLowerCase();
// // const doesExist = lower.includes(searchString);
// const searchStringLower = searchString.toLowerCase();
// const doesExist = lower.includes(searchStringLower);
const doesExist = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExist);