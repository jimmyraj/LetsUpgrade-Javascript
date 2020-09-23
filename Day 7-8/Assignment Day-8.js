let Fashion = [{
        id: 1,
        name: "Classic Tux",
        size: "L",
        color: "Black",
        price: 9000,
        image: "image/Check Black Fit Suit.jpg",
        description: "Classic Tuxedo",
    },
    {
        id: 2,
        name: "Blue Tuxedo",
        size: "M",
        color: "Dark Blue",
        price: 7000,
        image: "image/suit.jpg",
        description: "Blue Tux",
    },

    {
        id: 3,

        name: "Cotton Tailored Blue Suit",
        size: "L",
        color: "Light Blue",
        price: 9000,
        image: "image/Cotton Tailored Blue Suit.jpg",
        description: "Double Shorts And Suit",
    },

    {
        id: 4,
        name: "Shoes",
        size: "8",
        color: "Green",
        price: 3500,
        image: "image/Driving Shoes.jpg",
        description: "Diving Shoes",
    },

    {
        id: 5,
        name: "Red tux",
        size: "L",
        color: "Red",
        price: 8000,
        image: "image/Suits Red Plain Havana.jpg",
        description: "Party wear Red Plain Havana Suit",
    },

    {
        id: 6,
        name: "Sweat Pant",
        size: "30",
        color: "Red",
        price: 1600,
        image: "image/Wild SweatPant.jpg",
        description: "Wild Sweat Pant",
    },
    {
        id: 7,
        name: "Zara Cotton Suit",
        size: "M",
        color: "Grey",
        price: 7000,
        image: "image/Zara Cotton Suit.jpg",
        description: "Zara Cotton Suit",

    },
    {
        id: 8,
        name: "Jacket",
        size: "S",
        color: "blue",
        price: 8000,
        image: "image/Wax Jacket.jpg",
        description: "Wax Jacket",
    },
    {
        id: 9,
        name: "Specs",
        size: "-",
        color: "Black",
        price: 1900,
        image: "image/specs.png",
        description: "Classy Specs",
    },
    {
        id: 10,
        name: "Watch",
        size: "-",
        color: "Comando",
        price: 10000,
        image: "image/Casio Gold Watch.jpg",
        description: "Casio Gold Watch",
    },
    {
        id: 11,
        name: "Skinny Fit Ripped Jeans",
        size: "34",
        color: "Black",
        price: 4000,
        image: "image/Blacked Skinny Fit Ripped Jeans.jpg",
        description: "Blacked Skinny Fit Ripped Jeans",
    },
    {
        id: 12,
        name: "Loafer",
        size: "9",
        color: "Henna",
        price: 12000,
        image: "image/Loafer Shoes.jpg",
        description: "Loafer Shoes",
    },
    {
        id: 13,
        name: "Jeans",
        size: "32",
        color: "Grey",
        price: 12000,
        image: "image/Skinny Fit Mid Rise Ripped Jeans.jpg",
        description: "Skinny Fit Mid Rise Ripped Jeans",
    },
    {
        id: 14,
        name: "Cotton Fit Suit",
        size: "L",
        color: "Light Green",
        price: 12000,
        image: "image/Green Cotton Fit Suit.jpg",
        description: "Green Cotton Fit Suit",
    },
    {
        id: 15,
        name: " Jogger",
        size: "Xl",
        color: "Grey",
        price: 12000,
        image: "image/Skinny Fit Smart Jogger.jpg",
        description: "Skinny Fit Smart Jogger",

    },
    {
        id: 16,
        name: "Suit",
        size: "M",
        color: "Light Grey",
        price: 2000,
        image: "image/mihai-stefan.jpg",
        description: "Mihai - Stefan",
    },
    {
        id: 17,
        name: "Check T-Shirt",
        size: "L",
        color: "Light Red",
        price: 2000,
        image: "image/Check Sketer OverSized T-Shirt.jpg",
        description: "Check Sketer OverSized T-Shirt",
    },
    {
        id: 18,
        name: "Pixabay Suit",
        size: "L",
        color: "White",
        price: 2000,
        image: "image/Pixabay.jpg",
        description: "Pixabay White Suit",
    },
];
let cart = [];
let count = 0;

function displaymerch(fashd, type = "main", place = "card") {
    console.log(fashd);
    let strfash = "";
    let arrfash = "";
    fashd.forEach(function(ele, index) {
        if (type == "main") {
            strfash = ` <div class="productcardbg">
          <div class="image">
            <img src="${ele.image}" width="100%" />
          </div>
          <div>
          <h3 style="font-family : 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding-left : 10px">${ele.name}</h3>
          <p>Size : ${ele.size}</p>
          <p>Color : ${ele.color}</p>
          <p>price : ${ele.price}</p>
          <h5 style="font-family : 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding-left : 10px ;padding-top : 10px">${ele.description}</h5>
          <p style="padding-top: 5px">
            <button class="buttonbg" onclick="addToCart(${ele.id})">Add to Cart</button>
          </p>
        </div>
        </div>`;
            arrfash += strfash;
        }

        if (type == "cartd") {
            strfash = ` <div class="productcardbg">
          <div class="image">
            <img src="/images/${ele.image}" width="100%" />
          </div>
          <div>
          <h3 style="font-family : 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding-left : 10px">${ele.name}</h3>
          <p>Size : ${ele.size}</p>
          <p>Color : ${ele.color}</p>
          <p>price : ${ele.price}</p>
          <h5 style="font-family : 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding-left : 10px ;padding-top : 10px">${ele.description}</h5>
          <p style="padding-top: 5px">
            <button class="buttonbg" onclick="deletemerch(${ele.id})">Delete item</button>
          </p>
        </div>
        </div>`;

            arrmfash += strfash;

        }
    });

    document.getElementById(place).innerHTML = arrfash;

}


function getProductByID(fasha, id) {
    return fasha.find(function(ele) {
        return ele.id == id;
    });
}
let flag = false;

function addToCart(id) {
    flag = false;
    let item = getProductByID(Fashion, id);

    cart.forEach(function(element) {
        if (element.id == item.id) {
            flag = true;

        }


    })
    if (flag) {
        alert("Heeeyyyyy Hoooo!!\nDont Add The Same Product Again");
        return 0;
    }
    cart.push(item);
    count += 1;
    document.getElementById("numb").innerText = count;
    let type = "cartd";
    let place = "cartcard";
    displaymerch(cart, type, place);

}



function search() {
    console.log("calling");
}

function deletemerch(id) {
    let item = getProductByID(Fashion, id);
    let index = cart.findIndex(function(item1) {
        return item1.id == id;
    });
    cart.splice(index, 1);
    count -= 1;
    document.getElementById("numb").innerText = count;
    let type = "cartd";
    let place = "cartcard";
    displaymerch(cart, type, place);
}

function filter() {
    let minv = document.getElementById("minp").value;
    let maxv = document.getElementById("maxp").value;
    let items = Fashion.filter(function(itemsl) {
        return itemsl.price >= minv && itemsl.price <= maxv;
    })
    displaymerch(items);
    document.getElementById("minp").value = "";
    document.getElementById("maxp").value = "";
}

function search() {
    let str = document.getElementById("serstr").value;
    console.log(str);
    let items = Fashion.filter(function(ele) {
        return ele.name.indexOf(str) != -1;
    });
    displaymerch(items);


}
displaymerch(Fashion);