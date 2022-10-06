var guestList = ['Asif', 'Imran', 'Rafay'];

var guest = guestList.splice(1,1, 'Jamil') 

for(var i = 0 ; i < guestList.length ; i++) {
    console.log("Dear Mr." + guestList[i] + ", We are gladly inviting you to join us on 4 Oct as we plan to arrange a delicious dinner party");
}


console.log('Not included' + guest);
