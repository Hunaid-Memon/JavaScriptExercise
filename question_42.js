let magician_names = ['Kamran', 'Sajid', 'Sultan', 'Rashid', 'Majid'];


const make_great = (message,names) => {
    for(var i = 0 ; i < names.length ; i++) {
        console.log(message + names[i]);
    }
}

make_great('Great ', magician_names)