const hasLicence = true;
const age = 18;
const isDrunk = false;

const canDrive = (hasLicence === true && age >= 18 && isDrunk === false) ? 'может' : 'не может';
console.log(canDrive);