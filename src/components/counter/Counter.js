import React from 'react'
import "./counter.css"

const Counter = () => {
    const [counter, setCounter] = React.useState(0);

    function add(e) {
        console.log(counter);
        e.preventDefault();
        console.log("added");
        setCounter(counter + 1);
    }

    function subtract(e){
        console.log(counter);
        e.preventDefault();
        console.log("subtracted");
        setCounter(counter- 1);
    }

    function handleChange(e){
        e.preventDefault();
        setCounter(parseInt(e.target.value));
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