class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    incressAge() {
        this.age++
    }
}

let sudheer = new Person('Sudheer', 30);
// console.log(sudheer)


let Arr = [1, 5, 4, 5, 1, 2, 4];
let arrSet = new Set(Arr);
// console.log(Array.from(arrSet));
let newArr = [];

function bubbleSort(array) {
    var done = false;
    while (!done) {
        done = true;
        for (var i = 1; i < array.length; i += 1) {
            if (array[i - 1] > array[i]) {
                done = false;
                var tmp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tmp;
            }
        }
    }

    return array;
}

// bubbleSort(Arr);

function customSort(array) {
    let done = false;
    while (!done) {
        done = true;
        for (let i = 1; i < array.length; i++) {
            if (array[i - 1] > array[i]) {
                done = false;
                let tmp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tmp;
            }
        }
    }
    return array;
};

const people = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 28 }
];

// Combining objects using reduce()
const combinedPerson = people.reduce((accumulator, currentObj) => {
    const combinedName = accumulator.name + ' ' + currentObj.name;
    const combinedAge = accumulator.age + currentObj.age;
    return { name: combinedName, age: combinedAge };
});
// console.log(customSort(Arr))


function fibbinacciSerice(number) {
    if (number && typeof number == 'number') {
        let Arr = [];
        for (let index = 1; index <= number; index++) {
            if (index == 1) {
                Arr.push(0);
            } else {
                Arr.push(index == 2 ? 1 : (Arr[index - 2] + Arr[index - 3]));
            }
        }
        return Arr;
    } else {
        return [];
    }
}

// console.log(fibbinacciSerice(10));


let A = () => {
    return 1;
}
function B() {
    setTimeout(() => {
        return 2;
    }, 1000);
}
function C() {
    return 3;
}

const total = A() + B() + C();



