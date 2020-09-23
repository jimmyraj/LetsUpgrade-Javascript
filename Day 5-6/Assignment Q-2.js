window.onload = function() {
    let initialBuses = [];
    if (localStorage.getItem("iniialBuses") == null) {
        let stringbuses = JSON.stringify(initialBuses);

        console.log(stringbuses);
        localStorage.setItem("initialBuses", stringbuses);
    }
};

function display(bus_data = undefined) {
    let resbuses;
    let samplearray = '';
    if (bus_data == undefined) {
        resbuses = JSON.parse(localStorage.getItem("initialBuses"));
    } else {
        resbuses = bus_data;
    }

    resbuses.forEach(function(ele, index) {
        let presetrow = `<tr>
            <td>${index+1}</td>
    <td>${ele.name}</td>
    <td>${ele.source}</td>
    <td>${ele.destination}</td>
    <td>${ele.number}</td>
    <td>${ele.passengerCapacity}</td>
    <td>
        <button onclick="delete_ele(${index})" class="del_btn">delete</button>
    </td>
    </tr>`;
        samplearray += (presetrow);


    });

    // console.log(typeof(resbuses));
    document.getElementById('tablerows').innerHTML = samplearray;
}

function insertBus(event) {
    event.preventDefault()
    let bus = {};
    let bname = document.getElementById("bname").value;
    let bsource = document.getElementById("bsource").value;
    let bdest = document.getElementById("bdest").value;
    let bnumber = document.getElementById("bnumber").value;
    let bpasscap = document.getElementById("bpasscap").value;

    bus.name = bname;
    bus.source = bsource;
    bus.destination = bdest;
    bus.number = bnumber;
    bus.passengerCapacity = bpasscap;

    let retbus = JSON.parse(localStorage.getItem("initialBuses"));
    retbus.push(bus);
    strrtbuses = JSON.stringify(retbus);
    localStorage.setItem("initialBuses", strrtbuses);
    let retbus1 = JSON.parse(localStorage.getItem("initialBuses"));

    display(retbus1);
    return false;
}

display(retbus1);

function search() {
    let search_ele = document.getElementById("searching").value;
    let arr_bus = JSON.parse(localStorage.getItem("initialBuses"));
    let bus_arr = arr_bus.filter(function(element) {
        if (element.source.indexOf(search_ele) != -1) {
            return element.source.indexOf(search_ele) != -1;
        } else if (element.destination.indexOf(search_ele) != -1) {
            return element.destination.indexOf(search_ele) != -1;
        };
    })

    display(bus_arr);
}

function delete_ele(index) {
    let r_buses1 = JSON.parse(localStorage.getItem("initialBuses"));
    r_buses1.splice(index, 1);
    display(r_buses1);
    localStorage.setItem("initialBuses", JSON.stringify(r_buses1));
}