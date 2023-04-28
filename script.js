// created variables
var timeElement = document.querySelector("#time");
var wrapperElement = document.querySelector(".wrapper");
var btnElement = document.querySelector("#start");
var divContEL = document.querySelector(".divContainer");
var hElement = document.querySelector("#title");
var orderListEl = document.querySelector("#q-list");
var finishDiv = document.querySelector(".finish-section");
var finalScore = document.querySelector("#result");
var errMsg = document.querySelector("#errorSmg");
var initialInput = document.querySelector("#inputInitial").value;
var submitEl = document.querySelector(".btn btn-primary mb-2");
var responsDiv = document.querySelector("#response");
var finaPageEl = document.querySelector(".final-page");
var initialAndScore = document.querySelector("#staticEmail");
var firstPageEl = document.querySelector(".first-page");

// Create an  array of questions
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses",
    },
    {
        title: "There are 3 different ways in which a JavaScript code can be involved in an HTML file. Selct the one that's not correct.",
        choices: ["Inline", "Import", "External", "Internal"],
        answer: "Import",
    },
    {
        title: "How to create an array in js ?",
        choices: ["var A[]=", "var A{}=", "var A=[]", "var A={}"],

        answer: "var A=[]",
    },
    {   
        title: "HTML element that can be accessed in a Javascript code: Chose the one that will return an array of elements",
        choices: ["getElementById('idname')", "getElementsByClass('classname')", 
        "getElementsByTagName('tagname')", "querySelectorAll()"],
        answer: "querySelectorAll()",
    }
]