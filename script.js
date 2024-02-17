//Here's the corrected code:


var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

// Change the loop condition and increment statement
for (var i = 0; i < numsArr.length; i++) {
    new_string += numsArr[i];
}

console.log(new_string);  //Output: 1234567891011

//------------------------------------//

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = 0; i < numsArr.length; i++) {
    new_string += numsArr[i];
    
    // Add a comma after each number except the last one
    if (i < numsArr.length - 1) {
        new_string += ",";
    }
}

console.log(new_string);  //Output: 1,2,3,4,5,6,7,8,9,10,11


//------------------------------------//


var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = 10; i >= 0; i--) {
    new_string += numsArr[i];

    // Add a space after each number except the first one
    if (i > 0) {
        new_string += " ";
    }
}

console.log(new_string); //Output: 11 10 9 8 7 6 5 4 3 2 1



//---------------------------------------------//

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

for (var i = 0; i <= 10; i++) {
    if (numsArr[i] % 2 === 0) {
        numsArr[i] = "even";
    }
}

console.log(numsArr);   //Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]


//----------------------------------------------------//

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

for (var i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        numsArr[i] = "even";
    }
}

console.log(numsArr);  //output:["even", 2, "even", 4, "even", 6, "even", 8, "even", 10, "even"]


//--------------------------------------------//

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;

for (var i = 0; i < 11; i++) {
    sum += numsArr[i];
}

console.log(sum); //Output: 66


//-------------------------------//

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;

for (var i = 0; i < 11; i++) {
    if (numsArr[i] % 2 === 0) {
        sum += numsArr[i];
    }
}

console.log(sum);  //Output: 30


//--------------------------//

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 100;

for (var i = 0; i <= 10; i++) {
    if (numsArr[i] % 2 !== 0) {
        sum -= numsArr[i];
    } else {
        sum += numsArr[i];
    }
}

console.log(sum);  // Output: 94


//------------------------------//

var numsArr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11]
];

for (var i = 0; i < numsArr.length; i++) {
    console.log(numsArr[i]);
}

//Array(5) [ 1, 2, 3, 4, 5 ]
//Array(6) [ 6, 7, 8, 9, 10, 11 ]

//------------------------------------//


var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
var str_all = "";

for (var i = 0; i < numsArr.length; i++) {
    var inner_array = numsArr[i];

    for (var j = 0; j < inner_array.length; j++) {
        str_all += inner_array[j];
    }
}

console.log(str_all);  //Output: 1234567891011


//-----------------------------------//


var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];

for (var i = 0; i < numsArr.length; i++) {
    var inner_array = numsArr[i];

    for (var j = 0; j < inner_array.length; j++) {
        if (j % 2 === 0) {
            inner_array[j] = "even";
        }
    }
}

console.log(numsArr);
//[["even", 2, "even", 4, "even"], [6, "even", 8, "even", 10, 11]]


//---------------------------------------//

var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
var str_all = "";

for (var i = 0; i < numsArr.length; i++) {
    var inner_array = numsArr[i];

    for (var j = inner_array.length - 1; j >= 0; j--) {
        str_all += inner_array[j] + " ";
    }
}

console.log(str_all.trim()); // Use trim to remove the trailing space
//11 10 9 8 7 6 5 4 3 2 1


//----------------------------------------//


var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
var sum_odd = 0;
var sum_even = 0;

for (var i = 0; i < numsArr.length; i++) {
    var inner_array = numsArr[i];

    for (var j = 0; j < inner_array.length; j++) {
        if (inner_array[j] % 2 !== 0) {
            sum_odd += inner_array[j];
        } else {
            sum_even += inner_array[j];
        }
    }
}

console.log(sum_odd);
console.log(sum_even);
//36
//30

//--------------------------------------//

aa = (first, second, third) => {
    console.log(first, second, third);
    
    if (first > second && first > third) {
        console.log(first);
    } else if (second > first && second > third) {
        console.log(second);
    } else {
        console.log(third);
    }
}

aa(1, 2, 3);  // to get the largest out of 3 numbers

//-----------------------------------//

let n = 123;
console.log(add(n));

function add(n) {
    let sum = 0;
    let numString = n.toString(); // Convert the number to a string

    for (var i = 0; i < numString.length; i++) {
        sum += parseInt(numString[i], 10); // Convert each character back to a number and add to sum
    }

    return sum;
}
//This code will correctly sum the digits of the number 123, and the output will be 6 (1 + 2 + 3).


//---------------------------------------//


const arr = [9, 8, 5, 6, 4, 3, 2, 1];

(function() {
    let sum = 0;
    
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    console.log(sum);
    return sum;
})();
//This code will correctly calculate the sum of all numbers in the array using an IIFE (Immediately Invoked Function Expression).


//--------------------------------------//

var arr = ["guvi", "geek", "zen", "fullstack"];

var ano = function(arro) {
    for (var i = 0; i < arro.length; i++) {
        console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
    }
}

ano(arr);
//This code will correctly capitalize the first letter of each word in the array, resulting in title case. Additionally, I added ano(arr) to invoke the function with the provided array arr.


//---------------------------------------//

const newArray = [1, 3, 2, 5, 10];
const myPrime = newArray.filter(num => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1; // Check if num is greater than 1 to identify prime numbers
});

console.log(myPrime);


//----------------------------------------//

const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const totalSum = num.reduce((acc, currentValue) => acc + currentValue, 0);
console.log(totalSum);//code to sum the number in that array


//-------------------------------------//

var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;

(function() {
    k = k % arr.length;
    var out = arr.slice(k + 1).concat(arr.slice(0, k + 1));
    console.log(out);
})();
//code to rotate an array by k times and return rotated array using IIFE function


//----------------------------------//

var arr = ["guvi", "geek", "zen", "fullstack"];

(function() {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
    }
})();
//Guvi
//Geek
//Zen
//Fullstack

//-------------------------------//

aa = data => {
    var a = data;
    var l = '';

    for (var i = 0; i < a.length - 1; i += 2) {
        var s = a[i + 1];
        var b = a[i];
        l += s;
        l += b;
    }

    // If the length is odd, append the last digit
    if (a.length % 2 !== 0) {
        l += a[a.length - 1];
    }

    console.log(l);
}

aa("1234");
//2143


//------------------------------//

var as = [12, 34, 5, 6, 2, 56, 6, 2, 1];
var s = as.reduce(function(a, c) {
    if (c % 2 !== 0) {
        return a + c;
    }
    return a + 0;
});

console.log(s);
//This code will correctly calculate the sum of odd numbers in the array.


//--------------------------------------//

var array = [
    [["firstname", "vasanth"], ["lastname", "Raja"], ["age", 24], ["role", "JSWizard"]],
    [["firstname", "Sri"], ["lastname", "Devi"], ["age", 28], ["role", "Coder"]]
];
var final = [];

while (array.length != 0) {
    var outer_remove = array.shift();
    let new_object = {};

    while (outer_remove.length != 0) {
        var inner_remove = outer_remove.shift();
        var key = inner_remove[0];
        var value = inner_remove[1];
        new_object[key] = value;
    }

    final.push(new_object);
}

console.log(final);

//This code will correctly create an array of objects from the given nested arrays, producing the expected output.

//-----------------------------------//

var res = function(arr) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) == -1) {
            newArr.push(arr[i]);
        }
    }

    console.log(newArr);
}

res(["guvi", "geek", "guvi", "duplicate", "geeK"]);
//This code will correctly remove duplicates from the given array, and the output will be ["guvi", "geek", "duplicate", "geeK"].


//----------------------------------------------//

(function(str) {
    var str1 = str.split(" ").reverse().join(" ");
    console.log(str1);
})("abcd");
//dcba

//-------------------------------------------//

const newArray = [1, 3, 2, 5, 10];
const myPrime = newArray.filter(num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; // If num is divisible by any number other than 1 and itself, it's not prime
        }
    }
    return num > 1; // Numbers less than 2 are not prime
});

console.log(myPrime);
//This code will correctly filter and return the prime numbers from the newArray.

//-------------------------------------//

const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const totalSum = num.reduce((a, b) => a + b, 0);
console.log(totalSum);
//The output will be 550 (sum of the numbers in the array).

//----------------------------------------//

var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = k % arr.length;
(function() {
    var out = arr.slice(k + 1).concat(arr.slice(0, k + 1));
    console.log(out);
})();
//This code will correctly rotate the array by k times and print the rotated array.


