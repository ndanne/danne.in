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
	
}
console.log("Min valu of array is :"+minVal);
console.log("Max valu of array is :"+maxVal);