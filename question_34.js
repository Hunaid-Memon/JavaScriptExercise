let pizza = ['Chicken Tikka Pizza', 'Chicken fajita Pizza', 'Chicken Special Malai Pizza'];

for(var i = 0 ; i < pizza.length ; i++) {
    console.log(pizza[i]);
}

for(var i = 0 ; i < pizza.length ; i++) {
    if(pizza[i].length !== 0) {
        console.log( 'I Like ' + pizza[i]);
    }
}
console.log('I realy love Pizza');