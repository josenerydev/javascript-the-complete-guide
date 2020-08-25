class Course {
  #price;
  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.#price = price;
  }

  get price() {
    return `\$${this.#price}`;
  }

  set price(value) {
    if (value < 0) throw new Error("Price should be positive number!");
    this.#price = value;
  }

  // pricePerLength() {
  //   const val = this._price / this.length;
  //   console.log(val.toFixed(2));
  // }

  // courseSummary() {
  //   console.log(`Course: ${this.title}`);
  //   console.log(`Length: ${this.length}`);
  //   console.log(`Price: ${this._price}`);
  // }
}

const course1 = new Course("Javascript - The Complete Guide", 2, 19.99);
// const course2 = new Course("NodeJs", 4, 29.99);
course1.price = 100;
console.log(course1.price);
// console.log(course2);

// course1.pricePerLength();
// course1.courseSummary();
// course2.pricePerLength();
// course2.courseSummary();

// class PracticalCourse extends Course {
//   constructor(title, length, price, numOfExercises) {
//     super(title, length, price);
//     this.numOfExercises = numOfExercises;
//   }
// }

// class TheoreticalCourse extends Course {
//   constructor(title, length, price) {
//     super(title, length, price);
//   }

//   publish() {
//     console.log("Author: Max");
//   }
// }

// const practicalCourse = new PracticalCourse(
//   "CSS - The Complete Guide",
//   4,
//   19.99,
//   50
// );
// practicalCourse.courseSummary();
// practicalCourse.pricePerLength();
// console.log(practicalCourse);

// const theoreticalCourse = new TheoreticalCourse(
//   "Understanding TypeScript",
//   5,
//   19.99
// );

// console.log(theoreticalCourse);
// theoreticalCourse.publish();
