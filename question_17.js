guestList = ['Asif', 'Imran', 'Rafay'];

guestList.unshift('Rashid');
guestList.splice(2,0, 'Kamran') 
guestList.push('Jabbar');

for(var i = 1 ; i <= guestList.length ; i++) {
    if(i <= 3) {
        // console.log(i);
        var remove = guestList[i]
        console.log(remove + ', Your are not invited in Dinner');

    }
    else {
        var add = guestList[i]
        if(add !== undefined) {
            console.log(add + ', Your are invited in Dinner');
        }else {

            console.log('List is empty');
        }
    }
  }
