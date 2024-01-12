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
//JavaScript arrow function named navBar that takes an object as its parameter. The object has a property called company
// ({ company }): This is the parameter list for the arrow function, and it uses object destructuring to 
// extract the company property from the passed object.
// It's equivalent to writing (props) => { const company = props.company; }, but in a more concise way.
navBar({ company: "aman" }); //calling navBar with an object. 
