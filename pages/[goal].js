import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Goal() {
  const [error, setError] = useState(false)
  const [goalDescription, setGoalDescription] = useState([])
  const router = useRouter()
  const code = router?.query?.goal || null

  useEffect(async ()=>{
    const response = await fetch('/api/goal', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({goalcode: code})
        })   
        
        if(response.ok) {
            const data = await response.json()
            setGoalDescription(data)
        } else {
            setError(true)
        }
 },[code])
  return (
    <>
        <div class="overflow-hidden rounded-lg p-2 shadow-lg bg-stone-200/100 bold">
        {!error && goalDescription.length > 0 && goalDescription.map((list, index) => (
            <>
            <div  className="flex items-center justify-between leading-tight p-2 md:p-4">
                    Title : {list?.title}
           </div>
            <div  className="flex items-center justify-between leading-tight p-2 md:p-4">
                 Description: {list?.description}
            </div>
          </>
       ))}
        </div>
    </>
  )
}