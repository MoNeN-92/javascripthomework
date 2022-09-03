
// let myQuestions = [
//     {
//         question: "რა გქვია",
//         answers: {
//             A: 'შაკო',
//             B: 'პაკო',
//             C: 'გაკო',
//             D: 'შალვა',
//         },
//         correctAnswer: 'A'
//     },
//     {
//         question: "რამდენი წლის ხარ",
//         answers: {
//             A: '20',
//             B: '24',
//             C: '28',
//             D: '30',
//         },
//         correctAnswer: 'D'
//     },
//     {
//         question: "სიმაღლეში რამდენი სანტიმეტრი ხარ",
//         answers: {
//             A: '150 სმ',
//             B: '160 ნახტომში',
//             C: '170 სმ',
//             D: '180 სმ',
//         },
//         correctAnswer: 'D'
//     },
//     {
//         question: "რამდენი კილოგრამი ხარ ",
//         answers: {
//             A: '18',
//             B: '58',
//             C: '68',
//             D: '78',
//         },
//         correctAnswer: 'D'
//     }, {
//         question: "It step academy საუკეთესოა",
//         answers: {
//             A: 'რათქმაუნდა',
//             B: 'რათქმაუნდა არა',
//             C: 'დაიკიდე',
//             D: 'არა',
//         },
//         correctAnswer: 'A'
//     }, {
//         question: "ჯავასკრიპტი რთულია",
//         answers: {
//             A: 'ძალიან',
//             B: 'არც ისე',
//             C: 'მარტივია ',
//             D: 'არ ვიცი',
//         },
//         correctAnswer: 'A'
//     }, {
//         question: "რას სწავლობ It step academy ",
//         answers: {
//             A: 'FRONT END',
//             B: 'BACK END',
//             C: 'არაფერს',
//             D: 'WEB DESIGN',
//         },
//         correctAnswer: 'A'
//     }, {
//         question: "It step academy რამდენ თვიან კურსს გადიხარ",
//         answers: {
//             A: '2',
//             B: '4',
//             C: '6',
//             D: '286',
//         },
//         correctAnswer: 'C'
//     }
// ];

// let quizContainer = document.getElementById('quests');
// let answers = document.getElementById('answers');
// let submitButton = document.getElementById('btn');






















// var myQuestions = [
//     {
//         question: "What is 10/2?",
//         answers: {
//             a: '3',
//             b: '5',
//             c: '115'
//         },
//         correctAnswer: 'b'
//     },
//     {
//         question: "What is 30/3?",
//         answers: {
//             a: '3',
//             b: '5',
//             c: '10'
//         },
//         correctAnswer: 'c'
//     }
// ];

// var quizContainer = document.getElementById('quests');
// var answers = document.getElementById('answers');
// var submitButton = document.getElementById('submit');

// generateQuiz(myQuestions, quizContainer, answers, submitButton);

// function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

//     function showQuestions(questions, quizContainer) {
//         // we'll need a place to store the output and the answer choices
//         var output = [];
//         var answers;

//         // for each question...
//         for (var i = 0; i < questions.length; i++) {

//             // first reset the list of answers
//             answers = [];

//             // for each available answer...
//             for (letter in questions[i].answers) {

//                 // ...add an html radio button
//                 answers.push(
//                     '<label>'
//                     + '<input type="radio" name="question' + i + '" value="' + letter + '">'
//                     + letter + ': '
//                     + questions[i].answers[letter]
//                     + '</label>'
//                 );
//             }

//             // add this question and its answers to the output
//             output.push(
//                 '<div class="question">' + questions[i].question + '</div>'
//                 + '<div class="answers">' + answers.join('') + '</div>'
//             );
//         }

//         // finally combine our output list into one string of html and put it on the page
//         quizContainer.innerHTML = output.join('');
//     }


//     function showResults(questions, quizContainer, resultsContainer) {

//         // gather answer containers from our quiz
//         var answerContainers = quizContainer.querySelectorAll('.answers');

//         // keep track of user's answers
//         var userAnswer = '';
//         var numCorrect = 0;

//         // for each question...
//         for (var i = 0; i < questions.length; i++) {

//             // find selected answer
//             userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

//             // if answer is correct
//             if (userAnswer === questions[i].correctAnswer) {
//                 // add to the number of correct answers
//                 numCorrect++;

//                 // color the answers green
//                 answerContainers[i].style.color = 'lightgreen';
//             }
//             // if answer is wrong or blank
//             else {
//                 // color the answers red
//                 answerContainers[i].style.color = 'red';
//             }
//         }

//         // show number of correct answers out of total
//         resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
//     }

//     // show questions right away
//     showQuestions(questions, quizContainer);

//     // on submit, show results
//     submitButton.onclick = function () {
//         showResults(questions, quizContainer, resultsContainer);
//     }

// }