var pos = 0,
  test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;

var questions = [{ //1
    question: "What is Dazai's power from Bungo Stray Dogs?",
    a: "No Longer Human",
    b: "For the Tainted Sorrow",
    c: "Rashomon",
    d: "Unbreakable",
    answer: "A",
    
    img: "https://blog.qwant.com/wp-content/uploads/sites/3/2016/01/test.jpg"
  }];

function get(x) {
  return document.getElementById(x);
}
function get(x) {
  return document.getElementById(x);
}

function renderQuestion() {
  test = get("test");
  if (pos >= questions.length) {
    test.innerHTML = "<h2>You got " + correct + " of " + questions.length + " questions correct</h2>";
    get("test_status").innerHTML = "Test completed";

    pos = 0;
    correct = 0;

    return false;
  }
  get("test_status").innerHTML = "Question " + (pos + 1) + " of " + questions.length;

  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;
  chD = questions[pos].d;
  img = questions[pos].img;

  test.innerHTML = "<h3>" + question + "</h3>";
  
  
  test.innerHTML += "<img src=\"" + img + "\" width=\"200\" height=\"200\"><br>";

  test.innerHTML += "<label> <input type='radio' name='choices' value='A'> " + chA + "</label><be>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='B'> " + chB + "</label><be>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='C'> " + chC + "</label><be>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='D'> " + chD + "</label><br><be>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer() {
  choices = document.getElementsByName("choices");
  for (var i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      choice = choices[i].value;
    }
  }

  if (choice == questions[pos].answer) {
    correct++;
  }

  pos++;

  renderQuestion();
}

window.addEventListener("load", renderQuestion);
