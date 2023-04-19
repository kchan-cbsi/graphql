const resolvers = {
    Query: {
        car: (parent, args, {models}) => {
            const vehicles = models.cars.filter(car=>car.id === args.id);
            return vehicles[0];
        },
        cars: (parent, args, {models}) => models.cars

    },
    Mutation: {
        makeCar: (parent, {id, make, model, ownedBy}, {models}) => {
            const newCar = {
                id,
                make,
                model,
                ownedBy
            }

            models.cars.push(newCar);
            return newCar
        },
        removeCar: (parent, {id}, {models}) => {
            let found = false;

            cars = models.cars.filter(car=>{
                if(car.id === id) {
                    found = true;
                } else {
                    return car;
                }
            });

            if (found) {
                return true;
            } else {
                return false;
            }

        }
    },
    Car: {
        owner: (parent, args, {models}) => {
            const owner = models.users.filter(user=>user.id === parent.ownedBy);
            return owner[0]
        }
    }
};

module.exports = resolvers