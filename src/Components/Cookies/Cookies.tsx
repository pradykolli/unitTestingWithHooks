import React from 'react'

function Cookies() {
     const [count, setCount] = React.useState(30);

  return (
    <>
        <h1>Cookies</h1>
        <h2>Available Coffees {count}</h2>
        <span>
        <button id="count-up" type="button" onClick={() => setCount(count + 1)}>BUY COOKIE</button>
        <button id="count-down" type="button" onClick={() => setCount(count - 1)}>ADD COOKIE</button>
        </span>
    </>
  );
}

export default Cookies
