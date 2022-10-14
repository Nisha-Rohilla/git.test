const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

let index = 0;
let total = quizData.length
const queBox = document.getElementById('queBox')
const options = document.querySelectorAll('.options')
let right = 0, wrong = 0;

const loadQuestion = () =>{
    if(index === total){
        return endQuiz()
    }
    reset(); 
    const data = quizData[index]
    
    
    // console.log(data);
    queBox.innerText = `${index+1}) ${data.question}`
    options[0].nextElementSibling.innerText=data.a;
    options[1].nextElementSibling.innerText=data.b;
    options[2].nextElementSibling.innerText=data.c;
    options[3].nextElementSibling.innerText=data.d;

} 

const submitQuiz = () => {
    const data = quizData[index]
    const ans = getAnswer()
    if(ans===data.correct){
        right++
    }
    else{
        wrong++
    }
    index++;
    loadQuestion();
    return;

}

const getAnswer = () => {
    let answer;
    options.forEach(
        (input) =>{
        if(input.checked){
             answer =  input.value;
            // console.log('yes');
}
    })
    return answer;
}

const reset = () =>{
    options.forEach(
        (input) =>{
            input.checked = false
        }
    )
}
const endQuiz = () => {
    document.getElementById('box').innerHTML=`
    <h3>Thank you for playing the quiz</h3>
    <h2> ${right} / ${total} are correct</h2>
    `
}

// initial call
loadQuestion();

