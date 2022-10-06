const carModel = (car) => {
    return 'Company ' + car.manufacturer + ' Model '+ car.model + ' Color ' + car.color
 }
 
 car1 = {
    manufacturer : 'Suzuki',
     model: '2014',
     color: 'Blue'
 }
 
 car2 = {
    manufacturer : 'Honda',
    model: '2015',
    color: 'Blue'
}

 console.log(carModel(car1));
 console.log(carModel(car2));