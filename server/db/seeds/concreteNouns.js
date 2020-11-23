exports.seed = function (knex) {
    return knex('concreteNouns').del()
      .then(function () {      
        return knex('concreteNouns').insert([
        { id: 1, name: 'Rocks'},
        { id: 2, name: 'Pizzas'},
        { id: 3, name: 'Pot Plants'},
        { id: 4, name: 'Rubber bands'},
        { id: 5, name: 'Kilograms of Belly-button Lint'},
        { id: 6, name: 'Ornate Singing Bowls'},
        { id: 7, name: 'Used Tissues'},
        { id: 8, name: 'Periodic Tables'},
        { id: 9, name: 'Wet Sponge'},
        { id: 10, name: 'Unfulfilled Promises'},
        { id: 11, name: 'Peaches'}
      ])
    })
  }