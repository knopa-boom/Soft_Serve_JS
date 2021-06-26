var obj = {
    users: [{
            name: 'John',
            age: 28,
            experience: 1,
            languages: ['Java', 'JavaScript', 'SQL'],
        },
        {
            name: 'Bill',
            age: 30,
            experience: 5,
            languages: ['HTML', 'CSS', 'JavaScript'],
        },

        {
            name: 'Mike',
            age: 32,
            experience: 4,
            languages: ['Python', 'SQL'],
        },
    ],

}


console.log(obj.users[0].name);
console.log(obj.users[1].languages[0]);
console.log(obj.users[2].experience);


var users = {
    user1: {
        name: 'Peter',
        age: 28,
        experience: 1,
        languages: ['Java', 'JavaScript', 'SQL'],
    },

    user2: {
        name: 'Ivam',
        age: 30,
        experience: 5,
        languages: ['HTML', 'CSS', 'JavaScript'],
    },

    user3: {
        name: 'Jake',
        age: 32,
        experience: 4,
        languages: ['Python', 'SQL'],
    },
}


console.log(users.user1.name);
console.log(users.user1.languages[1]);