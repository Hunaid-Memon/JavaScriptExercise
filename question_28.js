const age = 30;

if(age >= 0 && age < 2) {
    console.log('Person is baby ' + age);
} else if(age >= 2 && age < 4) {
    console.log('Person is toddler ' + age);
} else if(age >= 4 && age < 13) {
    console.log('Person is kid ' + age);
}else if(age >= 13 && age < 20) {
    console.log('Person is teenager ' + age);
} else if(age >= 20 && age < 65) {
    console.log('Person is Adult ' + age);
} else if(age > 65) {
    console.log('Person is an elder. ' + age);
} else{
    console.log('kindly enter correct age');
}