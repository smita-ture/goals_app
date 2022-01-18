import { useState, useEffect } from 'react'
import Link from 'next/link'

const RenderGoals = () => {
 const [error, setError] = useState(false)
 const [goalsList, setGoalsList] = useState([])
 // get goals
 
 useEffect(async ()=>{
    const response = await fetch('/api/goals', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
        })   
        
        if(response.ok) {
            const data = await response.json()
            setGoalsList(data)
        } else {
            setError(true)
        }
 },[])

 return (
     <>
     <div className="flex flex-wrap -mx-1 lg:-mx-4">
       {!error && goalsList.length > 0 && goalsList.map((list, index) => (
         <div  key={`card-${index}`}  className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
           <article role="goal" className="overflow-hidden rounded-lg shadow-lg bg-stone-200/100">
              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                      <Link  href={list?.code}>
                        <a className="no-underline hover:underline text-black">
                        {list?.code}. {list?.title.substring(0,50)} ...
                        </a>
                        </Link>
                    </h1>
                </header>
           </article>
         </div>  
       ))}
       
      </div>
       {error && <h3>Something went wrong! Please try again later.</h3>}
     </>
 )
}

export default RenderGoals