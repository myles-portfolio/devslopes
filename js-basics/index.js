    // Variables in JavaScript

    // (var) - Prior ES2015 / ES6
    var userName = 'Mylesh';
    var totalWins = 30;
    var totalLosses = 10;

    // (let, const) - ES2015 / ES6
    let name = 'Myles'
    const userAge = 33;

    /* Variable Rules */

    // Should have a meaningful name
    // Cannot contain a hyphen (-) or space
    // Cannot start with a number
    // Cannot use a reserved word
    // Variables are case sensitive

    // JavaScript Data Types

    /* Primitive / Value Types */

    /*var firstName = 'Myles'; // string
    var age = 33; // number
    var recedingHairline = false; // boolean
    var favFood;// undefined
    var toiletPaper = null; // null

    toiletPaper = 24;
    toiletPaper = null;
    toiletPaper = 'Triple Ply';*/

    /* Reference Types / Structural Types */

    // Objects
    /*var person = {
        firstName: 'Myles',
        userAge: 33,
        recedingHairline: false,
        favFood,
        toiletPaper: 206,
    }
    // Arrays
    var students = ['Orion', 'Kingston', 'Shayla', 'Chloe'];

    // Functions
    var myFunc = function() {
        // rune some code
    }
    
    console.log('Value: ', typeof myFunc);
    console.log('Type: ', typeof myFunc);*/

    /* Exercise: Variables */

    /*var vehicleMake = 'Toyota';
    var vehicleModel = 'Tacoma';
    var vehicleYear = 2019;
    var vehicleColor = 'White';
    var isManualTransmission = false;
    var numSeats = 4;
    var mileage = 40345;*/

    // JavaScript Strings

    // String Concatenation

    /*var myRide = vehicleMake + ' ' + vehicleModel;
    var myBraggingRights = 'I drive a ' + vehicleYear + ' ' + myRide;

    console.log(myBraggingRights);*/

    // Exercise: Strings

    /*var dateOfBirth = '11/07/89';
    var myAge = 33;
    var isOrganDonor = true;
    var streetAddress = '123 Sesame Street';
    var city = 'Dallas';
    var state = 'Texas';
    var postalCode = 99999;
    var idNumber = 98765432;

    var myDriversLicense = 'Hi, my name is ' + firstName + ' and I was born on ' + dateOfBirth + '. I live on ' + streetAddress + ' in ' + city + ', ' + state + '. My postal code is ' + postalCode + ' and my ID number is ' + idNumber + '.';

    console.log(myDriversLicense);*/

    // JavaScript Numbers

    /*var totalUsers = 42; // JavaScript is only accurate up to 15-digits or 17 decimal points
    var purchase = 46.99;

    var sciNot = 123e5; // Scientific notation

    var numVal = 5 + 5; // + (addition), - (subtraction), * (multiplication), / (division), % (remainder)

    var decVal = (0.1 * 10 + 0.2 * 10) / 10; //PEMDAS

    console.log(decVal);*/

    // Exercise: Numbers

    /* var firstItem = 12.5;
    var secondItem = 23.4;
    var thirdItem = 13.6;
    var fourthItem = 7.5;
    var fifthItem = 10.5;
    var sixthItem = 11;

    var priceOfItems = firstItem + secondItem + thirdItem + fourthItem + fifthItem + sixthItem;

    var coupon = 0.25;
    var taxRate = 7.75 / 100;
    var priceAfterDiscount = priceOfItems - (priceOfItems * coupon);
    var taxes = priceAfterDiscount * taxRate;

    var finalPrice = priceAfterDiscount + taxes;

    console.log(finalPrice);*/

    // JavaScript Comparison Operators

    // == equal to (===)
    // != not equal to (!==)
    // > greater than
    // < less than
    // >= greater than or equal to
    // <= less than or equal to

    /*var currentAccountBalance = 74.98;
    var myPurchase = 74.99;
    var freeLavaLampVoucher = true;

    if (myPurchase <= currentAccountBalance) {
        console.log('Lava lamps for days!!')
    } else if (freeLavaLampVoucher) {
        console.log('Free stuff rocks!!');
    } else {
        console.log('You broke, bruh!'); 
    }*/

    // JavaScript Logical Operators

    // && and
    // || or
    // ! note

    /*var skater1 = 9.5;
    var skater2 = 9;
    var skater3 = 9;
    var isJackedUpOnCaffeine = true;

    if (skater2 > skater3 && skater2 <= skater1 && skater1 < 100) {
        console.log('Move skater2 into next round');
    } else if (skater3 < skater2 || skater3 === skater2 && skater2 < skater1 && !isJackedUpOnCaffeine) {
        console.log('skater3 is steppin\' up their game!');
    } else if (skater3 > 5 && isJackedUpOnCaffeine) {
        console.log('skater3 take home the Gold')
    }*/

    // Exercise: Booleans & conditional logic

/*     var currentLightColor = 'Red';
    var nextLightColor = 'Green';

    if (currentLightColor === 'Red') {
        console.log('Stop!');
    } else if (!currentLightColor && !nextLightColor) {
        console.log('Prepare to stop!')
    } */

    // JavaScript Arrays

    var tvShows = [
        'The Office', 
        'Community', 
        'Parks and Recreation'
    ];



/*         userSavedMovies.push('The Sandlot');
    userSavedMovies.push('The Matrix');
    userSavedMovies.push('The Shinning'); // Adds new array element

    userSavedMovies.pop(); // Removes last array element

    console.log(userSavedMovies.length); */

    // JavaScripts Loops
    
/*     var completedItems = [];
    var toDos = [
        { title: 'Item 1', completed: true },
        { title: 'Item 2', completed: false },
        { title: 'Item 3', completed: false },
        { title: 'Item 4', completed: true }
    ];

    for (var x = 0; x < toDos.length; x++) {
        if (toDos[x].completed) {
            completedItems.push(toDos[x]);
        }
    }

    var bottles = 99;
    while (bottles > 0) {
        if (bottles !== 1) {
          console.log(bottles + ' bottles of beer on the wall');
        } else {
          console.log(bottles + ' bottle of beer on the wall');  
        }
        bottles -= 1; 
    } */

    /* console.log(toDos);
    console.log(completedItems); */

    /* for (var i = 0; i < tvShows.length; i++) {
        console.log(tvShows[i]);
    } */

    // 0 < 3 = true; 0 + 1 = 1
    // 1 < 3 = true; 1 + 1 = 2
    // 2 < 3 = true; 2 + 1 = 3
    // 3 < 3 = false; 3 + 1 = 4

    // JavaScripts Functions

/*     var warrior = {
        name: 'Super Tuffy',
        attack: 70,
        defense: 55,
        mana: 100
    }

    function levelUp(prop, val) {
        warrior[prop] += val;
    }

    levelUp('attack', 2); // warrior.attack += 2;
    levelUp('defense', 8); // warrior.defense += 6;
    levelUp('mana', 17); // warrior.mana += 12;

    console.log(warrior);


    function toCelsius(f) {
        var temp = (5/9) * (f - 32);
        return temp.toFixed(2);
    }

    var weather = 'The temperature outside is ' + toCelsius(46) + ' Celsius!'; */

    // console.log(weather);

    
    /* function calcArea(w, l) {
        return w * l;
    }

    var kitchenArea = calcArea(15, 18);
    var bedroomArea = calcArea(12, 10); */

    // console.log(kitchenArea);
    // console.log(bedroomArea);

    // JavaScript Objects

    var person1 = {
        firstName: 'Myles',
        surnameInitial: 'H',
        age: 33,
        hobbies: ['gaming', 'coding', 'hiking'],
        face: {
            eyeColor: 'brown',
            glasses: false,
        },
        greeting: function() {
            return 'My name is ' + this.firstName + ' and I\'m ' + this.age + ' years old.'
        }
    }

    // console.log(person1);
    // console.log(person1.face.eyeColor);
    // console.log(person1.greeting());
    // console.log(person1['surnameInitial']);

    var person2 = new Object();
    var person3 = {};

    person3.name = 'Jeremy';
    person3.age = 28;
    person3.greeting = function() {
        return 'My name is ' + this.name + ' and I\'m ' + this.age + ' years old.'
    }

    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.greeting = function() {
        return 'My name is ' + this.name + ' and I\'m ' + this.age + ' years old.'
        }
    }

    var humans = [];

    humans.push(new Person('Lars', 21));
    humans.push(new Person('Ana', 37));
    humans.push(new Person('Holly', 45));
    humans.push(new Person('Erik', 29));

    for (var i = 0; i < humans.length; i++) {
        var human = humans[i];
        console.log(human.greeting());
    }

    console.log(humans);

    // console.log(new Person('Lars', 21));
    // console.log(new Person('Ana',37));