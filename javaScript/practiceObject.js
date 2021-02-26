function Student(name, id, age) {
    this.name = name,
        this.id = id,
        this.age = age

    //         this.displatInfo = function() {
    //             console.log(this.name);
    //             console.log(this.age);
    //             console.log(this.id);
    //         }
    // 

}
let firstStudent = new Student("Milon Mondal", 18, 19);
let secondStudent = new Student("Tapu", 28, 20);
console.log(firstStudent);
console.log(secondStudent);