var pos = 0, test=[], test_status, question, choice, choices, chA, chB, chC = null, chD=null, correct = 0;
var timeoutID;
var questions = [
	[ "Are you satsified with exam", "Yes", "No", null, null, "A"],
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
	
	if(pos >= questions.length){
		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
		_("test_status").innerHTML = "Test Completed";
		pos = 0;
		correct = 0;
		return false;
	}
	_("test").style.backgroundColor = "#fff";
	_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
	for(var i=0; i < questions.length; i++){
		//test.innerHTML +="";
	question = questions[i][0];
	chA = questions[i][1];
	chB = questions[i][2];
	chC = questions[i][3];
	chD = questions[i][4];
	
		
		test.innerHTML += "<div id='qus"+[i]+"'> <h3>"+question+"</h3>";
		test.innerHTML += "A. <input type='radio' name='choices"+[i]+"' value='A'> "+chA+"<br>";
		test.innerHTML += "B. <input type='radio' name='choices"+[i]+"' value='B'> "+chB+"<br>";
		if(chC != null){
			test.innerHTML += "C. <input type='radio' name='choices"+[i]+"' value='C'> "+chC+"<br>";
		}
		if(chD != null){
			test.innerHTML += "D. <input type='radio' name='choices"+[i]+"' value='D'> "+chD+"<br>";
		}
		test.innerHTML += "<br><button onclick='checkAnswer("+[i]+")'>Submit Answer</button>";
		test.innerHTML += " </div>";
	}
}

function checkAnswer(num){	
	
	var choices = document.getElementsByName("choices"+num);
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}

	if(choice == questions[num][5]){
		_("qus"+num).style.backgroundColor = "#9CBA7F";
		correct++;
	} else{
		_("qus"+num).style.backgroundColor = "#FF6666";
	}
	pos++;

	//timeoutID = setTimeout(function(){ renderQuestion() }, 1000);
}

window.clearTimeout(timeoutID);
window.addEventListener("load", renderQuestion, false);
