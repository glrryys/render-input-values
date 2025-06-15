import {useState} from 'react';

function LOL() {

//define variables
const [name, setName] = useState(''); // string - storing TEXT INPUT names, emails, messages
const [age, setAge] = useState(0); // number - storing NUMERIC DATA age, counters, scores
// const [tasks, setTasks] = useState([])  // array - storing LIST OF ITEMS todos, users, posts, search results

const [data, setData] = useState({}); // managing group of related values such as user profiles and form data
// ^ will hold the name and age to be displayed



// function to allow 'to handle form submission'
const submitForm = () => { // when someone clicks, run the submitForm function which means this updates
  // right here is when you filled the data with stuff (name and age)
  setData({name, age}); // store values to render for later
  // what does render mean? - create this and display it to the user
};

// so const [name, setName] = useState(''); const [age, setAge] = useState(0); is just understanding what variables u are creating 
// since('") is text input and (0) is number outputs. 
// and then setData is just saying that this is the data we are outputing when inputted


// Every time the user types something in the input box, read what they typed (e.target.value) and store it in the zipcode variable using setZipcode.

  
  // e = the event of typing

// e.target = the input box

// e.target.value = what the user typed



  
// e.target.value - This is the current text inside the input box.
 // onChange - run this function every time the input value changes.
  // e means EVENT - when you type this event gets triggered
  // e.target.value means whatever is typed into the box
  // setName means it stores the name variable with the new value that is typed
return (
  <div>
     {/* INPUT FIELD FOR NAME */}
  <div>
  <label htmlFor="name:">Name:</label>
  <input 
  type='text' 
  value={name} 
  onChange={e => setName(e.target.value)}
  /> {/* ^ is the lines that CREATE the input box */}

    </div>
  {/* INPUT FIELD FOR AGE */}
    <div> 
    <label hmtlFor="age" >Age:</label>
    <input type="number" value={age} onChange={e => setAge(e.target.value)} 
    />
    </div>

{/* SUBMIT BUTTON */}
{/* submitForm is the function when the button is clicked,
updating the data state with current name and age,
when it re-displays the output */}
{/* onClick={submitForm} allows button to be clicked */}

  <button onClick={submitForm}>Submit</button>

{/* RENDER = DISPLAY  */}
  {/* data is where you said setData{()} and the 
  .age and .name you set as variables */}

  <h1>{data.name}</h1> 
  <h2>{data.age} </h2>
  </div>

);
}
export default LOL;
// so you can use it in another file
// i believe it doesn't need to be here
