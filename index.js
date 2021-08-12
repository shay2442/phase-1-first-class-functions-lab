const returnFirstTwoDrivers = function(driversArray) {
    let firstTwoArray = []
    firstTwoArray.push(driversArray[0], driversArray[1])
    return firstTwoArray
}


const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const returnLastTwoDrivers = function(driversArray) {
    return driversArray.slice(-2)
   
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] 

const createFareMultiplier = function(integer) {
    return function(fare) {
        return fare * integer
    }
} 

const fareDoubler = function(value) {
    return (value*2)
    }

const fareTripler = function(value) {
    return (value*3)
}

const selectDifferentDrivers = function(driversArray, callbackFunction) {
    return callbackFunction(driversArray)
}

//selectDifferentDrivers(drivers, returnFirstTwoDrivers)
//selectDifferentDrivers(drivers, returnLastTwoDrivers)