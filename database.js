// temp database

// just store things in memory as objects, forgets all data on reboot

// todo move names from greeter handler to here

let users = [
    {username: 'mary', password: 'salted password support to be added'},
    {username: 'mark', password: 'salted password support to be added'},
    {username: 'anon', password: 'salted password support to be added'}
]

const getUser = nameToFind => users.reduce((res, user) => user.username === nameToFind ? user : res, null);

const adduser = name => {
    if (getUser(name) !== null) {
        return false;
    } else {
        users.push({username: name, password: 'todo'});
        return true;
    }
};

module.exports = {getUser, adduser};