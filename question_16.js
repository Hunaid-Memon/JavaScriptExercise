guestList = ['Asif', 'Imran', 'Rafay'];



guestList.unshift('Rashid');
guestList.splice(2,0, 'Kamran') 
guestList.push('Jabbar');

for(var i = 0 ; i < guestList.length ; i++) {
    console.log("Dear Mr." + guestList[i] + ", We are gladly inviting you to join us on 4 Oct as we plan to arrange a delicious dinner party");
}