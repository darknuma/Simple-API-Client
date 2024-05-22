import users from '../data/user.data.js';

// read user 
const get = (userId) => users.find((user) => user.id === userId);
 

// create user
const insert = (details) => {
    //users[0]
    const newUser =  {...details, id:users.length+1}
    users.push(newUser);

    return newUser;
};

const getAll = () => users;


// update user
const update = (userId, newDetails) => {
    let existingUser = null;
    let userIndex;

    users.map((user, index) => {
        if (user.id === userId){
            existingUser = user;
            userIndex = index;
        };
    });

    if (!existingUser){
        return false;
    }

    const updatedUser = { ...existingUser,
         ...newDetails}

    users.splice(userIndex, 1, updatedUser);

    return updatedUser;
};


// delete user
const remove = (userId) => {
    const deleteUser = (user, index) => {

        if (user.id === userId) { 
            users.splice(index, 1);
        }
    };
    return users.find(deleteUser);   
};


export default {
    get,
    insert,
    getAll,
    update,
    remove
};

