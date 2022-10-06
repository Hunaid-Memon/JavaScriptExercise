

function make_shirt(size, text= 'I Love JavaScript') {
    if(size == 'Large' || size == 'Medium') {
        console.log('The size of t-shirt is ' + size + ' Message ' + text);
    } else {
       console.log('The size of t-shirt is ' + size + ' Hello ');
    }
}


make_shirt('Large')