let individualPersons = [{
        name: 'Jimmy',
        age: 21,
        city: 'Kolkata',
        salary: 35000,
    },
    {
        name: 'Prince',
        age: 22,
        city: 'Dheradun',
        salary: 45000,
    },
    {
        name: 'Rohan',
        age: 21,
        city: 'Chennai',
        salary: 75000,
    },
    {
        name: 'Rishav',
        age: 22,
        city: 'Delhi',
        salary: 60000,
    }
];


function display(individualPersons) {
    let persondata = '';
    let Sl_No = 1;

    individualPersons.forEach(function(ele, index) {
        let currentrow = `<tr>
                <td>${Sl_No}</td>
                <td>${ele.name}</td>
                <td>${ele.age}</td>
                <td>${ele.city}</td>
                <td>${ele.salary}</td>
                <td><button onclick="delete_ele(${index})" class="del_btn">Delete</button></td>`;

        persondata += currentrow;
        Sl_No++;

    });

    document.getElementsByClassName("tablebody")[0].innerHTML = persondata;
};



function insert(event) {
    event.preventDefault()
    let person = {};
    let p_name = document.getElementById("p_name").value;
    let in_age = document.getElementById("in_age").value;
    let in_city = document.getElementById("in_city").value;
    let in_salary = document.getElementById("in_salary").value;

    person.name = p_name;
    person.age = Number(in_age);
    person.city = in_city;
    person.salary = Number(in_salary);
    // console.log(in_salary);

    individualPersons.push(person);

    display(individualPersons);
    // return false;


    document.getElementById("p_name").value = "";
    document.getElementById("in_age").value = "";
    document.getElementById("in_city").value = "";
    document.getElementById("in_salary").value = "";
}


display(individualPersons);


function searchByName() {
    let seaValue = document.getElementById("searchname").value;
    let newdata = individualPersons.filter(function(individualPersons) {
        return (individualPersons.name.toUpperCase().indexOf(seaValue.toUpperCase()) != -1);
    });

    display(newdata);
}

function searchByCity() {
    let seaValue1 = document.getElementById("searchcity").value;
    let newdata1 = individualPersons.filter(function(individualPersons) {
        return (
            individualPersons.city.toUpperCase().indexOf(seaValue1.toUpperCase()) != -1
        );
    });
    display(newdata1);
}

function delete_ele(index) {
    console.log(index);
    individualPersons.splice(index, 1);
    display(individualPersons);


}