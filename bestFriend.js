// 5. Best friend checker

function isBestFriend(person1, person2) {
    if (typeof person1 === 'object' && typeof person2 === 'object') {
        if (person1.name === person2.friend && person1.friend === person2.name) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return "Please provide a valid input"
    }
}

// const person1 = { name: 'Tom', friend: 'Rock' };
// const person2 = { name: 'Rock', friend: 'Tom' };

// const result = isBestFriend(person1, person2);
// console.log(result);
