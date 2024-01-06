// 3. Calculate oil price

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    if (Number.isInteger(dieselQuantity) && Number.isInteger(petrolQuantity) && Number.isInteger(octaneQuantity)) {
        // Declare diesel, petrol and octane price as instructed
        const diesel = 114;
        const petrol = 130;
        const octane = 135;
        const totalPrice = (diesel * dieselQuantity) + (petrol * petrolQuantity) + (octane * octaneQuantity);
        return totalPrice;
    }
    else {
        return "Please provide a valid input"
    }
}

// const totalOilPrice = oilPrice(2, 3, 4);
// console.log(totalOilPrice);
