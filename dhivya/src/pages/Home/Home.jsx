import React from 'react'
import { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'

function Home() {
  return (
    <div>
        <Navbar/>
            <div className='main-container'>
                <h1>"hiiiiiiiiiii all</h1>
            </div>
            <Voting name="Samsung" price="877887"/>
            <Voting name="Apple" price="78878787"/>
    </div>
  )
}
export function Voting(props)
{
    const[Likes,setLikes]=useState(0)
    const[Dislikes,setDislikes]=useState(0)
    return(
        <div>
            <h1>{props.name}</h1>
            <h2>{props.price}</h2>
            <button onClick={() => setLikes(Likes+1)}>Likes {Likes}</button>
            <button onClick={()=> setDislikes(Dislikes+1)}>Likes {Dislikes}</button>
            <h5>hiiii</h5>
        </div>
    )
}
export default Home