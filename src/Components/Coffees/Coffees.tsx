import React, { useContext } from 'react'
import CafeContext  from '../Cafe/CafeContext'
function Coffees() {
    const context = useContext(CafeContext)
    const buyCoffeeHandler = () => {
        context.dispatch({
            type: "buyCoffee",
          })
    }
    const addCoffeeHandler = () => {
        context.dispatch({
            type: "addCoffee",
          })
    }
    return (
        
        <div className="division">
            <h1>Coffees</h1>
            <h2>Available Coffees {context.state.Coffees}</h2>
            <button className='buyButton' onClick={buyCoffeeHandler}>Buy a Coffee</button>
            <button className='addButton' onClick={addCoffeeHandler}>Add a Coffee</button>
        </div>

    )
}

export default Coffees
