  

// Exports the "helper" axios who fires all the requests to the provided API
// @ts-ignore
export const api = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=5&category=29&difficulty=hard&type=multiple',
  timeout: 10000
})

