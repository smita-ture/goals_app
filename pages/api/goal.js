// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const response = await fetch(`https://unstats.un.org/sdgapi/v1/sdg/Goal/${req?.body?.goalcode}/Target/List`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
    })   
    const data = await response.json()
    if(response.ok){
      res.status(200).json(data)
    } else {
      res.status(500).json({error: true, message: 'Server error'})
    }
}
