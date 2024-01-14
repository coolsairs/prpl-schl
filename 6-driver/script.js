hasLisence = true;
age = 18;
isDrunk = false;

const isDrivingAvailable = (hasLisence === true && age >= 18 && isDrunk === false) ? 'может' : 'не может';
console.log(isDrivingAvailable);