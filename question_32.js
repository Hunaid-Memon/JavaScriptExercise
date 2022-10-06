let current_users = ['Kamran', 'Sajid', 'Sultan', 'Rashid', 'Majid'];

let new_users = ['Imtiaz', 'sajid', 'Umair', 'Rashid', 'Imran'];

for(var i = 0; i < new_users.length ; i++) {
    for(var j = 0; i < current_users.length ; i++) {
        if(new_users[i].toLowerCase() === current_users[i].toLowerCase()) {

            // console.log(new_users[i]);
            console.log('The person will need to enter a new username ' + current_users[i] + ' is already entered.');
        } else {
            console.log(new_users[i] + ' username is available.');
        }
    }
}

