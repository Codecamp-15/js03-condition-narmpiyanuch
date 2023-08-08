let username = prompt('usename:')
let password = prompt('password:')

if (username === '' && password === '' ){
    alert("username is required");
}
else if (username === 'admin' && password === '1234') {
    alert("Hello");
}
else if (username === 'john' && password === 'qwerty') { 
    alert("Hello" + "john");
}
else alert("Invalid username or password");