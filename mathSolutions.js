document.getElementById("btn").addEventListener('click', function(){

let userInput = document.getElementById("userInput").value;
checkPalindrome(userInput)

})

// function to check if the string is palindrome or not

function checkPalindrome(userInput) {
   
  
    // converting string into array
    const arrayValues = userInput.split('');
   
    // reversing the array value
    const reverseArrayValue = arrayValues.reverse();

    // converting array into string
    const reverseString = reverseArrayValue.join('');

    // check whether a string is palindrome or not
    if(userInput.length <= 10){

        if (userInput == reverseString) {
            console.log("It is a palindrome");
            document.getElementById("result").innerHTML;
            alert("It is a palindrome");

        }
        else{
            console.log("It is not a palindrome");
            document.getElementById("result").innerHTML;
            alert("It is not a palindrome");
        }
    }
    else{
console.log("hello");
document.getElementById("result").innerHTML;
alert("Given string should be of 10 characters");    }
    

    // take input
    // const userInput = prompt('Enter a value ');




}