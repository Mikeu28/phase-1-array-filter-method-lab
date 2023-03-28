function findMatching (arrayData, name) {
    return arrayData.filter (firstName => firstName.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch (arrayData, name) {
    return arrayData.filter (function (driver) {
        return driver.toLowerCase().substring(0, name.length) === name.toLowerCase()
    })
}

function matchName (arrayData, firstName) {
    return arrayData.filter(driver => driver.name === firstName)
}