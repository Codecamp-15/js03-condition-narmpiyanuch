let user = prompt('user:');

if (user === 'codecamp') {
    let password = +prompt('password:');
        if (password === +123456) {
            user = 'codecamp';
        } else {
            alert("Wrong password");
        }
}
else if (user === null || user.trim() === '' || isNaN(user)) {
       user = 'guest';
}
alert("Welcome" + user);