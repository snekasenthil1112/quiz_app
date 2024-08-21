const quizques = [
    {
        question: "which language is used for backend",
        opt1: "javascript",
        opt2: "java",
        opt3: "c",
        opt4: "html",
        correct: "opt1",
    },
    {
        question: "Which object in Javascript doesn’t have a prototype?",
        opt1: "None of the above",
        opt2: "All objects have prototype",
        opt3: "None have prototype",
        opt4: "Base object",
        correct: "opt4",
    },
    {
        question: "Which of the following are closures in Javascript?",
        opt1: "Variables",
        opt2: "Objects",
        opt3: "Functions",
        opt4: "All of the above",
        correct: "opt4",
    },
    {
        question: "Which of the following are closures in Javascript?",
        opt1: "Node",
        opt2: "Cassandra",
        opt3: "React",
        opt4: "vue",
        correct: "opt2",
    },
];
let question_num = document.getElementById("question-number");
let question_txt = document.getElementById("question-head");
let option_1 = document.getElementById("option1");
let option_2 = document.getElementById("option2");
let option_3 = document.getElementById("option3");
let option_4 = document.getElementById("option4");
let next_button = document.getElementById("next-button");
let time_element = document.getElementById("timer");

let current_que=0;
let score=0;
let time;
const total_time = 8;
let sec = total_time;
function timer(){
    time_element.innerHTML = sec;
    sec--;
    if(sec==0){
        sec = total_time;
        clearInterval(time);
        current_que++;
        showQuestion();
    }    
}
function showQuestion(){
    sec = total_time; 
    clearInterval(time);
    timer();
    time = setInterval(timer,1000);
    document.querySelectorAll("input[name = opt]").forEach(option=> option.checked=false)
    
    if(current_que>=quizques.length){
        goToResultPage();
    }
    question_num.innerHTML = (current_que+1) + ". ";
    question_txt.innerHTML = quizques[current_que].question;
    option_1.innerHTML = quizques[current_que].opt1;
    option_2.innerHTML = quizques[current_que].opt2;
    option_3.innerHTML= quizques[current_que].opt3;
    option_4.innerHTML= quizques[current_que].opt4;   
}
next_button.addEventListener('click',()=>{
    let optionIdSelected = document.querySelector('input[name = opt]:checked');
            
    let option_correct = quizques[current_que].correct;
    if(optionIdSelected!=null)
    {            
        if(optionIdSelected.id==option_correct){
            score++;        
        }
    }
    current_que ++;
    if(current_que>=quizques.length){
        goToResultPage();        
    }else{
        showQuestion();
    }
});
showQuestion();
function goToResultPage(){
    current_que = 0;
    localStorage.setItem("score", score);
    location.href = "result1.html";
}
