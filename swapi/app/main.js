import ComicAnswerController from "./Controllers/ComicAnswerController.js";


class App {

  comicAnswerController = new ComicAnswerController();

}

window["app"] = new App();
