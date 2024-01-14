// let adressLat = 10;
// let adressLong = 12;
// let positionLat = 11;
// let positionLong = 13;

// const wayLength = Math.sqrt(((adressLat - positionLat) ** 2) + (adressLong - positionLong) ** 2);

// console.log(wayLength);

// const wayLength = (adressLat, adressLong, positionLat, positionLong ) => {
//     const pathCalculation = Math.sqrt(((adressLat - positionLat) ** 2) + (adressLong - positionLong) ** 2);
//     return pathCalculation;
// }


const wayLength = (adressLat, adressLong, positionLat, positionLong ) => { return Math.sqrt(((adressLat - positionLat) ** 2) + (adressLong - positionLong) ** 2); }
console.log(wayLength(111, 122, 11, 132));