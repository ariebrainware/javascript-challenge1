/**
 * Calculator: Shape
 * Level 17-18
 */

function square(x, y, operation) {
    this.calculateSquareArea = function () {
        return x * y;
    };

    this.calculateSquarePerimeter = function () {
        return 4 * x;
    };

    let value = 0;
    if (operation == "calculateSquareArea") {
        value = this.calculateSquareArea();
    } else if (operation == "calculateSquarePerimeter") {
        value = this.calculateSquarePerimeter();
    } else {
        return "Doesnt recognize the input!";
    }
    return value;
}

function circle(r, operation) {
    const phi = 3.14;
    this.calculateCircleArea = function () {
        return phi * Math.pow(r, 2);
    };

    this.calculateCircleCircumference = function () {
        return phi * r + r;
    };
    let value = 0;
    if (operation == "calculateCircleArea") {
        value = this.calculateCircleArea();
    } else if (operation == "calculateCircleCircumference") {
        value = this.calculateCircleCircumference();
    } else {
        return "Doesnt recognize the input!";
    }
    return value;
}

function cube(x, operation) {
    this.calculateCubeArea = function () {
        return 6 * x * x;
    };

    this.calculateCubeVolume = function () {
        return Math.pow(r, 3);
    };

    let value = 0;
    if (operation == "calculateCubeArea") {
        value = this.calculateCubeArea();
    } else if (operation == "calculateCubeVolume") {
        value = this.calculateCubeVolume();
    }
    return value;
}

function tube(r, t, operation) {
    const phi = 3.14;
    this.calculateTubeArea = function () {
        return 2 * phi * Math.pow(r, 2) + phi * r * 2 * t;
    };

    this.calculateTubeVolume = function () {
        return phi * Math.pow(r, 2) * t;
    };

    let value = 0;
    if (operation == "calculateTubeArea") {
        value = this.calculateTubeArea();
    } else if (operation == "calculateTubeVolume") {
        value = this.calculateTubeVolume();
    } else {
        return "Doenst recognize the input!";
    }
    return value;
}

console.log(cube(12, "calculateCubeArea"));
whitespace();

// Level 19

var val1 = 20;
var val2 = 2;
var val3 = 10;
var val4 = 3;

var addition = (x,y) => {
    return x + y
}
var res = square(addition(val1, val2),addition(val3, val4),"calculateSquareArea");
console.log(res);

function calculateTubeVolumeWithCircle(x, t) {
    return x * t;
}
var rC = 7;
var resCircleArea = circle(rC, "calculateCircleArea");

console.log(calculateTubeVolumeWithCircle(resCircleArea, 28));