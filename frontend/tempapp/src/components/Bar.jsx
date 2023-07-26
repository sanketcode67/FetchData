import React from 'react'

const Bar = ({test}) => {
  return (
    <div className='bar'>
        <button onClick={(e)=>{
            test(e.target.name)
        }} name='banglore'>Banglore</button>
        <button onClick={(e)=>{
            test(e.target.name)
        }} name='delhi'>Delhi</button>
        <button onClick={(e)=>{
            test(e.target.name)
        }} name="kolkata">Kolkata</button>
    </div>
  )
}

export default Bar