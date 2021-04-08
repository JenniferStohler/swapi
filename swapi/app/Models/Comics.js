export default class Comics {
    // OBJECT DESTRUCTURING MUST USE {} to do this
    // first arugment is an object, pull the specified properties off of it
    constructor({ category, type, difficulty, question, correct_answer, incorrect_answers }) {
      this.category = category
      this.type = type
      this.difficulty = difficulty
      this.question = question
      this.correct_answer = correct_answer
      this.incorrect_answers = incorrect_answers
    
    }
  
    get Template() {
  
      return /*html*/`
      <div class="card bg-dark text-light d-flex ml-5" style = "height: 10rem; width: 20rem">
      <div class="card-body p-2">
          ${this.question}
          <div>
      <button type = "submit" class = "btn btn-primary p-2">
      </button>
      <div>
      <button type = "submit" class = "btn btn-primary p-2"></button>
      </div>
      <div> <button type = "submit" class = "btn btn-primary p-2"></button></div>
      <div> <button type = "submit" class = "btn btn-primary p-2"></button></div>
      </div>
      </div>
    </div>
        <div class="card p-2 value">
            ${this.category}
            ${this.type}
            ${this.difficulty}
            ${this.question}
            ${this.correct_answer}
            ${this.incorrect_answer}
        </div>
        `
    }
  }
  
  
  
  /**
   *  {
            
  "response_code": 0,
  "results": [
    {
      "category": "Entertainment: Comics",
      "type": "multiple",
      "difficulty": "hard",
      "question": "In what Homestuck Update was [S] Game Over released?",
      "correct_answer": "October 25th, 2014",
      "incorrect_answers": [
        "April 13th, 2009",
        "April 8th, 2012",
        "August 28th, 2003"
      ]
    },
    {
      "category": "Entertainment: Comics",
      "type": "multiple",
      "difficulty": "hard",
      "question": "When was the Garfield comic first published?",
      "correct_answer": "1978",
      "incorrect_answers": [
        "1982",
        "1973",
        "1988"
      ]
    },
    {
      "category": "Entertainment: Comics",
      "type": "multiple",
      "difficulty": "hard",
      "question": "In the webcomic &quot;Ava&#039;s Demon&quot;, what sin is &quot;Nevy Nervine&quot; based off of? ",
      "correct_answer": "Envy ",
      "incorrect_answers": [
        "Sloth",
        "Wrath ",
        "Lust"
      ]
    },
    {
      "category": "Entertainment: Comics",
      "type": "multiple",
      "difficulty": "hard",
      "question": "In 1978, Superman teamed up with what celebrity, to defeat an alien invasion?",
      "correct_answer": "Muhammad Ali",
      "incorrect_answers": [
        "Mike Tyson",
        "Sylvester Stallone",
        "Arnold Schwarzenegger"
      ]
    },
    {
      "category": "Entertainment: Comics",
      "type": "multiple",
      "difficulty": "hard",
      "question": "Which of the following rings from the DC Comics&#039; &quot;Lantern Corps&quot; are classified as Parasitic?",
      "correct_answer": "Indigo (Compassion)",
      "incorrect_answers": [
        "Green (Willpower)",
        "White (Life)",
        "Yellow (Fear)"
      ]
    }
  ]
}
          }
   */