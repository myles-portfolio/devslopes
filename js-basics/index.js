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

    var firstName = 'Myles'; // string
    var age = 33; // number
    var recedingHairline = false; // boolean
    var favFood;// undefined
    var toiletPaper = null; // null

    toiletPaper = 24;
    toiletPaper = null;
    toiletPaper = 'Triple Ply';

    /* Reference Types / Structural Types */

    // Objects
    var person = {
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
    console.log('Type: ', typeof myFunc);

    /* Exercise: Variables */

    var vehicleMake = 'Toyota';
    var vehicleModel = 'Tacoma';
    var vehicleYear = 2019;
    var vehicleColor = 'White';
    var isManualTransmission = false;
    var numSeats = 4;
    var mileage = 40345;

    // JavaScript Strings

    // String Concatenation

    var myRide = vehicleMake + ' ' + vehicleModel;
    var myBraggingRights = 'I drive a ' + vehicleYear + ' ' + myRide;

    console.log(myBraggingRights);

    // Exercise: Strings

    var dateOfBirth = '11/07/89';
    var myAge = 33;
    var isOrganDonor = true;
    var streetAddress = '123 Sesame Street';
    var city = 'Dallas';
    var state = 'Texas';
    var postalCode = 99999;
    var idNumber = 98765432;

    var myDriversLicense = 'Hi, my name is ' + firstName + ' and I was born on ' + dateOfBirth + '. I live on ' + streetAddress + ' in ' + city + ', ' + state + '. My postal code is ' + postalCode + ' and my ID number is ' + idNumber + '.';

    console.log(myDriversLicense);

    // JavaScript Numbers

    var totalUsers = 42; // JavaScript is only accurate up to 15-digits or 17 decimal points
    var purchase = 46.99;

    var sciNot = 123e5; // Scientific notation

    var numVal = 5 + 5; // + (addition), - (subtraction), * (multiplication), / (division), % (remainder)

    var decVal = (0.1 * 10 + 0.2 * 10) / 10; //PEMDAS

    console.log(decVal);

    // Exercise: Numbers

    var firstItem = 12.5;
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

    console.log(finalPrice);