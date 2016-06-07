
// ADP test for generating unique code
(function(){
document.getElementById('sub').onclick = function() {
	var inputstr = document.getElementById('instrt').value;

	if(inputstr.length == 0){
	 	alert("Please enter encode string");
		return false; 
	} else if(inputstr.length > 0) {
		if(!inputstr.match(/[a-z]+$/)){				
			alert("Pleae enter only string a-z and only lowercase to encode");  
			 document.getElementById('inputstr').focus();
 			return false;  
		}
	}
	inputstr = inputstr.toUpperCase(); //toString()
	var inputfch = inputstr[0];
	var encod = inputstr.substr(1);
	var encodArr = encod.split('');
	var encodStr = inputfch;
	//var encodStr0='', encodStr1='', encodStr2='', encodStr3='', encodStr4='', encodStr5='', encodStr6='';
	console.log(encodArr);
	for(var i=0; i < encodArr.length; i++){
		//A, E, I, O, U //agaraju /N162
			if((encodArr[i] == 'A') || (encodArr[i] == 'I') || encodArr[i] == 'E' || encodArr[i] == 'U'){
					encodStr0 += ''; 
			}
			else if(encodArr[i] == 'B' || encodArr[i] == 'F' || encodArr[i] == 'G') {
				encodStr1 += '1'; 
				//console.log(encodStr1);
			}
			else if( encodArr[i] == 'C' || encodArr[i] == 'K' || encodArr[i] == 'D' || encodArr[i] == 'S' || encodArr[i] == 'Q' || encodArr[i] == 'J') {
				encodStr2 += '2'; //console.log(encodStr2)
			}
			else if('H' || 'P' || 'T' || 'X'){
				encodStr3 += '3'; //console.log(encodStr3)
			}
			else if(encodArr[i] == 'L'){
				encodStr4 += '4'; //console.log(encodStr4)
			}
			else if(encodArr[i] == 'M' || encodArr[i] == 'N'){
				encodStr5 += '5'; //console.log(encodStr5)
			}
			else if(encodArr[i] == 'R' || encodArr[i] == 'Z'){
				encodStr6 += '6'; //console.log(encodStr6)
			}
		
	}
	//encodStr = encodStr + encodStr0 + encodStr1 + encodStr2 + encodStr3 + encodStr4 + encodStr5 + encodStr6;
		alert(encodStr);
		document.getElementById("finalStr").innerHTML = encodStr;

	}
})();

/*Arrat Shoting -> here we used Insertion Sort*/ 

var arr = [22, 15, 38, 14, 9, 30, 34];
for( var i=1; i<arr.length; i++){ 
	var ind = arr[i];
	var j = i;
	while(j > 0 && arr[j-1] > ind){
		arr[j] = arr[j-1]; 
		j--; 
	}
	arr[j] = ind; 
}
console.log(arr);

/* Find Min & Max in an Array Using Minimum Comparisons */
var arr = [22, 15, 38, 14, 9, 30, 34];
if (arr == null || arr.length < 1){
	return;
}
	var minVal, maxVal;
	if(arr[0] > arr[1]) { 
		maxVal = arr[0];
		minVal = arr[1]; } 
	else { 
		maxVal = arr[1]; 
		minVal=arr[0];
	}

	for(var i=2; i <=arr.length-1; i++){
		if(maxVal < arr[i]){
			maxVal = arr[i]; 
		} else if(minVal > arr[i]){ 
			minVal = arr[i];
		}
	}

console.log("Min valu of array is :"+minVal);
console.log("Max valu of array is :"+maxVal);

