import { ProxyState } from "../AppState.js";
import { comicsService } from "../Services/ComicsService.js";


//Private
function _draw() {
  let comics = ProxyState.comics;
  let template = ''
  comics.forEach(c => template += c.Template)

  document.getElementById("app").innerHTML = ` 
  <div className="card-columns comics">
  <button ${ProxyState.previous ? '' : 'disabled="true"'} class="btn btn-success" onclick="app.comicsController.getAll('${ProxyState.previous}')" >Previous</button>
  <button ${ProxyState.next ? '' : 'disabled="true"'} class="btn btn-info" onclick="app.comicsController.getAll('${ProxyState.next}')" >Next</button>
      ${template}
  </div>
  `
}


//Public
export default class ComicAnswerController {
  constructor() {

        // REGISTER LISTENERS BEFORE REQUESTING DATA
        ProxyState.on("comics", _draw);
    
    
        comicsService.getAllComics()
        loadState()
        _draw()
      }
    
    
      getAllComics() {
        comicsService.getAllComics()
      }

  


  getAllComics() {
  
  }
}
  
  
