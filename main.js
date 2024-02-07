class Hamburger {
    constructor(size, filling, toppings) {
        this.size = size;
        this.filling = filling;
        this.toppings = toppings;
    }

    static size_small = {
        price: 50,
        calories: 20,
    }

    static size_big = {
        price: 100,
        calories: 40,
    }

    static filling_cheese = {
        price: 10,
        calories: 20,
    }

    static filling_salad = {
        price: 20,
        calories: 5,
    }

    static filling_potato = {
        price: 15,
        calories: 10,
    }

    static toppings_spice = {
        price: 15,
        calories: 0,
    }

    static toppings_mayo = {
        price: 20,
        calories: 5,
    }

    static toppings_none = {
        price: 0,
        calories: 0,
    }

    countCalories(){
        let caloriesSum = this.size.calories + this.filling.calories + this.toppings.calories;
        return caloriesSum;
    }

    countPrice () {
        let fullPrice = this.size.price + this.filling.price + this.toppings.price;
        return fullPrice;
    }
}

do {
    let hamburgerSize;
    do {
        hamburgerSize = prompt("Which size of hamburger do you want?", "big/small");
        if(hamburgerSize == "big") {
            hamburgerSize = Hamburger.size_big;
        } else if(hamburgerSize == "small") {
            hamburgerSize = Hamburger.size_small;
        } else {
            alert("We don't serve such size(")
        }
    } while (hamburgerSize != Hamburger.size_big && hamburgerSize != Hamburger.size_small);

    let hamburgerFilling;
    do {
        hamburgerFilling = prompt("What filling do you want?", "cheese/salad/potato");
        if(hamburgerFilling == "cheese") {
            hamburgerFilling = Hamburger.filling_cheese;
        } else if(hamburgerFilling == "salad") {
            hamburgerFilling = Hamburger.filling_salad;
        } else if(hamburgerFilling == "potato") {
            hamburgerFilling = Hamburger.filling_potato;
        } else {
            alert("We don't serve such filling(")
        }
    } while (hamburgerFilling != Hamburger.filling_cheese && hamburgerFilling != Hamburger.filling_salad && hamburgerFilling != Hamburger.filling_potato);

    let hamburgerToppings;

    let hamburgerToppingsCheck = confirm("Do you want some toppings?");
    if(hamburgerToppingsCheck == true) {
        do {
            hamburgerToppings = prompt("What toppings do you want?", "spice/mayo");
            if(hamburgerToppings == "spice") {
                hamburgerToppings = Hamburger.toppings_spice;
            } else if(hamburgerToppings == "mayo") {
                hamburgerToppings = Hamburger.toppings_mayo;
            } else {
                alert("We don't serve such toppings(")
            }
        } while (hamburgerToppings != Hamburger.toppings_spice && hamburgerToppings != Hamburger.toppings_mayo)

    } else {
        hamburgerToppings = Hamburger.toppings_none;
    } 

    let hamburger = new Hamburger(hamburgerSize, hamburgerFilling, hamburgerToppings);
    let check = true;

    function addToppings() {
        do {
            hamburgerToppings = prompt("What toppings do you want?", "spice/mayo");
            if(hamburgerToppings == "spice") {
                hamburgerToppings = Hamburger.toppings_spice;
            } else if(hamburgerToppings == "mayo") {
                hamburgerToppings = Hamburger.toppings_mayo;
            } else {
                alert("We don't serve such toppings(")
            }
        } while (hamburgerToppings != Hamburger.toppings_spice && hamburgerToppings != Hamburger.toppings_mayo);
    }

    do {
        switch (prompt(`
            1. Count price.
            2. Count calories.
            3. Add toppings.
            4. Exit.
        `)) {
            case "1" || "Count price":
                alert(`The price of your order is: ${hamburger.countPrice()} tugriks`);
                break;
            case "2" || "Count calories":
                alert(`The amount of calories in your order: ${hamburger.countCalories()} calories`);
                break;
            case "3" || "Add toppings":
                addToppings();
                hamburger = new Hamburger(hamburgerSize, hamburgerFilling, hamburgerToppings);
                break;
            default:
                check = false;
                break;
        }
    } while (check);
} while (confirm("Make new order?"));