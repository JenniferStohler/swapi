import { ProxyState } from "../AppState.js";
import Comic from "../Models/Comics.js";
import { api } from "./AxiosService.js";

class ComicsService {
   async prev() {
     let res = await api.get(ProxyState.previous)
   ProxyState.next = res.data.next
    ProxyState.previous = res.data.previous
   }
  }


     let comics = res.data.results.map(c => new Comics(c))
   ProxyState.comics = comics


   
  
  


  // NOTE async indicates the function will take an undetermined amount of time, can be waited for or 'fired and forgot'
  async getAllComics(url = "comics") {
    // response from the request, type get, appending 'people' to the baseURL, 
    // await the response and then set the value
    // res is an AXIOS object
    let res = await api.get(url)
    // AXIOS will always put the response in the data property
    console.log(res.data.results)
  
  

    // Next and previous are unique to this API 
    


    // MAP itterates over the array of results and turns each one into a 'Person' object and returns a new array of Person's
    let comics = res.data.results.map(c => new Comic(c))
    ProxyState.comics = comics
  
  }


