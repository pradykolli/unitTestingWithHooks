import React, { useContext } from 'react'
import { CafeContext } from '../Cafe/Cafe'
function Bagels() {
    const context = useContext(CafeContext)
    const buyBagelHandler = () => {
        context.dispatch({
            type: "buyBagel",
          })
    }
    const addBagelHandler = () => {
        context.dispatch({
            type: "addBagel",
          })
    }
    return (
        
        <div className="division">
            <h1>Bagels</h1>
            <h2>Available Bagels {context.state.Bagels}</h2>
            <button className='buyButton' onClick={buyBagelHandler}>Buy a Bagel</button>
            <button className='addButton' onClick={addBagelHandler}>Add a Bagel</button>
        </div>

    )
}

export default Bagels
