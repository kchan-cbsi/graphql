let users = [
    {
        id: 1,
        name: "Kenny",
        carsOwned: [20,30]
    },
    {
        id: 2,
        name: "Susan",
        carsOwned: []
    },
    {
        id: 3,
        name: "Lea",
        carsOwned: [10]
    },

];

let cars = [
    {
        id: 10,
        make: "Ford",
        model: "F150",
        ownedBy: 1
    },
    {
        id: 20,
        make: "Toyota",
        model: "Rav 4",
        ownedBy: 1
    },
    {
        id: 30,
        make: "Honda",
        model: "RidgeLine",
        ownedBy: 2
    }
]

module.exports = {
    users, cars
};