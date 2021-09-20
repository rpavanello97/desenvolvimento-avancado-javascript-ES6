//EventeEmitter

const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('User logged', data => {
    console.log(data);
});

emitter.emit('User logged', { user: 'rlbp@gft.com'});



class Users extends EventEmitter {
    userLogged(data) {
        this.emit('User logged', data);
    }
}

const users = new Users();

users.on('User logged', data => {
    console.log(data);
})

users.userLogged([{user: "rpavanello97"},{fullName: "Rafael Bertolim Pavanello"}]);

//EventTarget woprks on browser
