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
        country: "India",
        hobbies: ["badminton", "tv", "sleeping", "taikondo"]
    },
    {
        name: "Michael Jhonson",
        age: 18,
        country: "USA",
        hobbies: ["reading manga", "naruto fan", "kick boxing"]
    }
]


console.log("__________________________________________________________");

function dislayAges(individualPersons) {
    console.log("People with the Age less than 30");

    console.log("__________________________________________________________");
    individualPersons.forEach(old => {
        if (old.age < 30) {
            console.log(old);
        }
    })
}

dislayAges(individualPersons);

console.log("____________________________________________________________");

function dislayCountry(individualPersons) {
    console.log("People with Country as India");

    console.log("___________________________________________________________");
    individualPersons.forEach(loc => {
        if (loc.country == "India") {
            console.log(loc);
        }
    })
}


dislayCountry(individualPersons);