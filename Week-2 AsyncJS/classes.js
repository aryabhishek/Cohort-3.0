class Rectangle {
  constructor(height, width, color) {
    this.height = height;
    this.width = width;
    this.color = color;
  }

  area() {
    return this.height * this.width;
  }

  paint() {
    console.log(`The rectangle is painted with ${this.color}.`);
  }
}

// const rect = new Rectangle(10, 4, 'blue')
// console.log(rect.area());
// rect.paint()

const rect = {
  height: 10,
  width: 4,
  color: "blue",
  area: function () {
    return this.height * this.width;
  },
  paint: function () {
    console.log(`The rectangle is painted with ${this.color}.`);
  },
};

// console.log(rect.area());

const map = new Map();
map.set("Name", "Aryabhishek Verma");
map.set("Age", 20);
map.set("Occupation", "Student");
// console.log(map.get("Age"));

const setTimeoutPromisified = function(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    // returns a promise object when the resolve() is called [after 'ms' miliseconds of delay in this case]
}

function greet() {
    console.log("Hello, World!");
}

setTimeoutPromisified(3000).then(greet); // calls greet after 3 seconds