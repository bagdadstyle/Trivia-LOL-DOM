export class UI{
    constructor(){}

    /**
     * 
     * @param {string} text Question to render
     */
    showQuestion(text){
        const questionTitle = document.getElementById('question')
        questionTitle.innerHTML = text
    }
    /**
     * 
     * @param {string[]} choices choices of the questions
     */
    showChoices(choices, callback){
     const choicesContainer =  document.getElementById('choices');
     choicesContainer.innerHTML = '';

     for(let i = 0; i < choices.length; i++){
      const button =  document.createElement('button')
      button.innerHTML = choices[i];
      button.className = 'button';
      button.addEventListener('click', () => callback(choices[i]));

      choicesContainer.append(button);
     }
    }
    /**
     * 
     * @param {number} score the total score
     */
    showScores(score){
        const quizEndHTML = `
        <h1>Resultado</h1>
        <h2>Your Score: ${score}</h2>
        `
        const element = document.getElementById('quiz')
        element.innerHTML = quizEndHTML;
    }
    /**
     * 
     * @param {number} currentIndex the current index of the quiz
     * @param {number} total    total question number
     */
    showProgress(currentIndex, total){
        const element = document.getElementById('progress');
        element.innerHTML = `Question ${currentIndex} of ${total}`;
    }
}