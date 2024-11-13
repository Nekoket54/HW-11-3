//№1
const person = {
    name:'bogdan',
    age:'16',
    gender:'male',
    showPerson: function(){
        alert(`${this.name},${this.age},${this.gender}`)
    }
}
person.showPerson()



//№2
const hello = [
    {
        studentName: 'Marcus',
        age: 20,
        gender: "male",
        grade: 200
    },
    {
        studentName: 'Connor',
        age: 20,
        gender: "male",
        grade: 1
    },
    {
        studentName: 'Kara',
        age: 20,
        gender: "female",
        grade: 10
    },
    {
        studentName: 'Anderson',
        age: 7890,
        gender: "male",
        grade: 10
    }
];

function grade(students) {
    let totalGrade = 0;
    for (let index = 0; index < students.length; index++) {
        console.log(students[index]);
        totalGrade += students[index].grade;
    }
    return totalGrade / students.length;
}

console.log(grade(hello));



//№3
const book = {
    title: '48 законів влади',
    author: 'Роберт Грін',
    year: 1998,
    genre: 'нон-фикшен'
}

book.year = 2000;
book.author = 'Грін Роберт'
console.log(book);



//№4
const car = {
    brand: 'Chevrolet',
    model: 'Bel Air',
    year: 1957,
    color: 'червоний з білим дахом',
    infoCar: function(){
        alert(`Бренд - '${this.brand}',модель - '${this.model}',рік - '${this.year}',колір - '${this.color}'`)
    }
}
car.infoCar()



//№5
const restaurant = {
    name: 'КАНАПА',
    cuisine: 'сучасна українська',
    address: 'Андріївський узвіз, 19, Київ, Україна',
    rating: '4.5/5'
}

restaurant.address = 'Андріївський узвіз, 20, Харків, Україна';
restaurant.rating = '4.6/5'
console.log(restaurant);

//це мій варіант





const restaurant = {
    name: 'КАНАПА',
    cuisine: 'сучасна українська',
    address: 'Андріївський узвіз, 19, Київ, Україна',
    rating: '4.5/5',
    
    updateDetails(newAddress, newRating) {
        this.address = newAddress;
        this.rating = newRating;
    }
};

restaurant.updateDetails('Андріївський узвіз, 20, Харків, Україна', '4.6/5');

console.log(restaurant);

//це варіант чату gpt; я розумію як це працює але не розумію який варіант краще