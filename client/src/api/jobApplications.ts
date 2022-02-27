
export const fetchJobs = async () => {
  const response = await fetch('/jobs')
  
  return response.json()
}

export const fetchLocations = async () => {
  const response = await fetch('/locations')
  
  return response.json()
}

export const fetchHeardFroms = async () => {
  const response = await fetch('/heardFroms')
  
  return response.json()
}

export const submitJobApplication = async (payload: unknown) => {
  const response = await fetch('/submitJobApplication', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    body: JSON.stringify(payload)
  })

  return response.status
}