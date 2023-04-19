const resolvers = {
    Query: {
        me: (parent, args, {me}) => me,
        user: (parent, args, {models}) => {
            const user = models.users.filter(user=>user.id === args.id);
            return user[0];
        },
        users: (parent, args, {models}) => models.users

    },
    Mutation: {
        makeUser: (parent, {id, name}, {models}) => {
            const user = {
                id,
                name
            };
            models.users.push(user);
            return user;
        },
        removeUser: (parent, {id}, {models}) => {
            let found = false;

            users = models.users.filter(user=>{
                if(user.id === id) {
                    found = true;
                } else {
                    return user;
                }
            });

            if (found) {
                return true;
            } else {
                return false;
            }
        }
    },
    User: {
        vehicles : (parent, arg, {models }) => {
            let arr = parent.carsOwned.map((owned) => {
                // console.log(cars);
                let c =  models.cars.filter(car=>car.id === owned)[0]
                return c
            })

            return arr
        }
    }
};

module.exports = resolvers;