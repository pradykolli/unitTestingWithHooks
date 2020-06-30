import React, { useContext } from 'react'
import { CafeContext } from '../Cafe/Cafe'

function Cakes() {
    const context = useContext(CafeContext)
    const buyCakeHandler = () => {
        context.dispatch({
            type: "buyCake",
          })
    }
    const addCakeHandler = () => {
        context.dispatch({
            type: "addCake",
          })
    }
    return (
        
        <div className="division">
            <h1>Muffins</h1>
            <h2>Available Muffins {context.state.Cakes}</h2>
            <button className='buyButton' onClick={buyCakeHandler}>Buy a Muffin</button>
            <button className='addButton' onClick={addCakeHandler}>Add a Muffin</button>
        </div>

    )
}

export default Cakes
