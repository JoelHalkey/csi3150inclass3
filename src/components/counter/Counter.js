import React from 'react'
import "./counter.css"

const Counter = () => {
    //Getting state of counter
    const [counter, setCounter] = React.useState(0);

    // Function that increments counter by using the setter
    function add(e) {
        console.log(counter);
        e.preventDefault();
        console.log("added");
        setCounter(counter + 1);
    }

    // Function that decrements counter by using the setter
    function subtract(e){
        console.log(counter);
        e.preventDefault();
        console.log("subtracted");
        setCounter(counter- 1);
    }

    //Allows for the change of the input field
    function handleChange(e){
        e.preventDefault();

        const inputValue = e.target.value;
        if (inputValue === '' || isNaN(inputValue)) {
            setCounter(0); // Set count to 0 if the input is empty or not a number
          } else {
            setCounter(parseInt(inputValue)); // Parse input value to integer and update count
          }

        console.log(counter);
    }

    

    

    return (
        <div>
            <div className='counter-form'>
                <input type='text' value={counter} name='number-counter' className='number-counter' onChange={handleChange}/>
                <div className='button-container'>
                    <button className='subtract-button' onClick={subtract}>-</button>
                    <button className='add-button' onClick={add}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Counter