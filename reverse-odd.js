//Given a string, reverse all the words which have odd length. The even length words are not changed.
function reverseOdd(str) {
	var arr=[];
	
	result=""
	for(var i=0;i<arr.length;i++){
		if(arr[i].length % 2!=0){
			temp="";
			for(var k=arr[i].length-1;k>-1;k--){
				temp+=arr[i][k];
			}
			//console.log(temp)
			result+=temp;
		}
		else{
			result+=arr[i];
		}
		result+=" ";
	}
	return result.trim();
	
}
//added a comment
//console.log(reverseOdd("One two three four") )
//➞ "enO owt eerht four"
