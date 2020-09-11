let individualPersons = [{
        name: "Abhishek Raj",
        age: 23,
        country: "India",
        hobbies: ["playing", "music", "manga", "movies"]
    },
    {
        name: "Jhon Scott",
        age: 32,
        country: "England",
        hobbies: ["playing", "sleeping", "coding"]
    },
    {
        name: "Surya Prakash",
        age: 44,
        country: "Insia",
        hobbies: ["badminton", "tv", "sleeping", "taikondo"]
    },
    {
        name: "Michael Jhonson",
        age: 18,
        country: "USA",
        hobbies: ["reading manga", "naruto fan", "kick boxing"]
    }
]

function f1() {
    console.log(individualPersons);
}
f1();

function f2() {
    if (individualPersons.age <= 30) {
        console.log(individualPersons);
    }
}
f2();