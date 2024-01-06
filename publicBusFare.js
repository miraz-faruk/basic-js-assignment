// 4. Public bus fare calculator

function publicBusFare(person) {
    if (Number.isInteger(person)) {
        // Declare capacity and fares as instructed
        const reservedBusCapacity = 50;
        const microbusCapacity = 11;
        const publicBusFarePerPerson = 250;

        if (person < 50) {
            const microbusRemaining = person % microbusCapacity;
            const publicBusFareTotal = microbusRemaining * publicBusFarePerPerson;
            return publicBusFareTotal;
        }
        else {
            const busRemaining = person % reservedBusCapacity;
            const microbusRemaining = busRemaining % microbusCapacity;
            const publicBusFareTotal = microbusRemaining * publicBusFarePerPerson;
            return publicBusFareTotal;
        }
    }
    else {
        return "Please provide a valid input"
    }
}

// const totalFare = publicBusFare(263);
// console.log(totalFare);