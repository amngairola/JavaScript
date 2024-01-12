const course = {
  cosurseName: "js in hindi",
  price: "4000",
  courseInstructor: "aman",
};

// const { courseInstructor } = course;
// console.log(courseInstructor);

const { courseInstructor: inst } = course;
console.log(inst);

//object destructting
const navBar = ({ company }) => {};
navBar({ company: "aman" });
