

let allQuestion = [

    {
        question: "HTML stand for?",
        Option: [

            { answer: "Hypertext Makeup Language", isCorrect: false },
            { answer: "Hypertext Make Language", isCorrect: false },
            { answer: "Hypertext Markup Language", isCorrect: true },

        ]
    },


    {
        question: "ul stand for?",
        Option: [

            { answer: "unorder lit", isCorrect: false },
            { answer: "unorder list", isCorrect: true },
            { answer: "under list", isCorrect: false },

        ]
    },


    {
        question: "UI stand for?",
        Option: [

            { answer: "User Interface", isCorrect: true },
            { answer: "Under Interface", isCorrect: false },
            { answer: "Umbrella Interface", isCorrect: false },

        ]
    },


]



let index = 0
  function displayQues(){

    document.getElementById("displayques").innerHTML = allQuestion[index].question

    let btn = ""

    allQuestion[index].Option.forEach((opt) => {
        btn += ` <button class = "btn btn-outline-warning  text-dark">${opt.answer}</button> `
    })
    document.getElementById('btn').innerHTML = btn
}




function next() {
    index++
    document.getElementById("displayques").innerHTML = allQuestion[index].question
    displayQues()
}

function back() {
    index--
    document.getElementById("displayques").innerHTML = allQuestion[index].question
    displayQues()
}


displayQues()









