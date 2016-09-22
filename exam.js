var pos = 0, test, test_status, question, choice, choices, chA, chB, chC = null, chD=null, correct = 0, wrong=0;
var questions = [
	[ "Are you ready for exam?", "Yes", "No", null, null, "A"],
    [ "What is 10 + 4?", "12", "14", "16", null, "B" ],
	[ "What is 20 - 9?", "7", "13", "11", null, "C" ],
	[ "What is 7 x 3?", "21", "24", "25", null, "A" ],
	[ "What is 8 / 2?", "10", "2", "4", null, "C" ],
	[ "What is sq-root 12?", "10", "2", "14", "144", "D" ],
	[ "What is LMC of 8, 6, 14?", "10", "2", "4", "some big", "D" ]
];
function _(x){
	return document.getElementById(x);
}
function renderQuestion(){
	test = _("test");
	
	correct = 0;
	_("test").style.backgroundColor = "#fff";
	_("test_status").innerHTML = "Total Question "+questions.length;
	for(var i=0; i < questions.length; i++){
		//test.innerHTML +="";
		question = questions[i][0];
		chA = questions[i][1];
		chB = questions[i][2];
		chC = questions[i][3];
		chD = questions[i][4];	
		//<div class='ques' id='qus"+i+"'>
		test.innerHTML += "<h3>"+[i+1]+") "+question+"</h3>";
		test.innerHTML += "<label id='optA"+i+"'>A. <input type='radio' name='choices"+i+"' onclick='checkAnswer("+i+", `optA"+i+"`)' value='A'> "+chA+"</label>";
		test.innerHTML += "<label id='optB"+i+"'>B. <input type='radio' name='choices"+i+"' onclick='checkAnswer("+i+", `optB"+i+"`)' value='B'> "+chB+"</label>";
		if(chC != null){
			test.innerHTML += "<label id='optC"+i+"'>C. <input type='radio' name='choices"+i+"' onclick='checkAnswer("+i+", `optC"+i+"`)' value='C'> "+chC+"</label>";
		}
		if(chD != null){
			test.innerHTML += "<label id='optD"+i+"'>D. <input type='radio' name='choices"+i+"' onclick='checkAnswer("+i+", `optD"+i+"`)' value='D'> "+chD+"</label>";
		}
		
		test.innerHTML += "<hr/>";		
	}

	test.innerHTML += "<br><button name='scores' class='btn' onclick='checkSore()'>Check Score</button>";	
}

function checkAnswer(num, optId){
	var choices = document.getElementsByName("choices"+num);
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
		choices[i].disabled = true;
	}

	if(choice == questions[num][5]){
		_(optId).style.backgroundColor = "#9CBA7F";
		correct++;
	} else{
		_(optId).style.backgroundColor = "#FF6666";
		wrong++;
	}	

	
}
function checkSore(){
	var checqus = correct+wrong;
	if(questions.length > checqus){
		alert("You did not anwer "+ (questions.length - checqus )+" questions")
	}
	_("score").innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
	_("score").innerHTML += "<p>Test Completed<p>";
	window.scrollTo(0,document.body.scrollHeight);
}
window.addEventListener("load", renderQuestion, false);
