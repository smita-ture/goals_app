// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  try{
    const response = await fetch('https://unstats.un.org/sdgapi/v1/sdg/Goal/List?includechildren=false', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      }
      })   
      
      if(response.ok){
        res.status(200).json(await response.json())
      } else {
        res.status(500).json({error: true, message: 'Server error'})
      }
  } catch(err) {
    throw new Error(err)
  }
  
}
