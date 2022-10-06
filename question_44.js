let person = ['Kamran', 'Sajid', 'Sultan'];

const sandwich = (person) => {
    for(var i = 0 ; i < person.length ; i++) {
        console.log(person[i] + ' wants a sandwich');
    }
}

sandwich(person)