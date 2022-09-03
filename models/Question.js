
export class Question{
 
    /**
     * 
     * @param {string} text this is a text of the question
     * @param {string[]} choices this is a choices of question
     * @param {string} answer this is answer of question
     */
    constructor(text, choices, answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    }
    /**
     * 
     * @param {string} choice some texto to guess
     * @returns {boolean}   return true if the answer is correct
     */
    correctAnswer(choice){
        return choice === this.answer
    }

} 