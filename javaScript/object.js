let myObject = {
    Name: "Milon",
    ID: 18,
};
myObject.Name = "Tapu";
myObject.ID = 10;
console.log(myObject);

// Using Constractor
function Student(name, id, age, cgpa) {
    this.name = name;
    this.id = id;
    this.age = age;
    this.cgpa = cgpa;

    // Function in Constractor
    this.displayInfo = function() {
        console.log(this.name);
        console.log(this.id);
        console.log(this.age);
        console.log(this.cgpa);
    };
}

let student1 = new Student("Milon", 18, 19, 3.77);
let student2 = new Student("Tapu", 18, 19, 3.77);
let student3 = new Student("Ria", 28, 21, 3.92);
student1.displayInfo();