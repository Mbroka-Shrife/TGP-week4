// Exercise 1 – Sum of Numbers
//Write a function sumArray(arr) that takes an array of numbers and returns the sum of all numbers.

  function calculateUserSum() {
        
            const inputString = prompt("Enter the Numbers you would like to add");

            if (inputString === null || inputString.trim() === "") {
                document.getElementById("result").textContent = "No Numbers";
                return;
            }

            // 
            const Numbers = inputString
                .split(',')          
                .map(numStr => {     
                    const number = parseFloat(numStr.trim()); 
                    return isNaN(number) ? 0 : number; 
                });

            // 
            const sumArry = Numbers.reduce((total, currentNumber) => total + currentNumber, 0);

            // 
            document.getElementById("result").textContent =` The final total is: ${sumArry}`;
            
        
        }
        //Exercise 2
        // Given an array of names, write a function longNames(names) that returns an array of names longer than 4 characters.
        //Hint: You can use filter() and string properties

function longNames(names) {
    return names.filter(name => name.trim().length > 4);
}

function startFilteringProcess() {
    const resultElement = document.getElementById('resultDisplay');

    if (!resultElement) {
        return;
    }

    const inputString = prompt("List the names you want");

    if (inputString === null || inputString.trim() === "") {
        resultElement.textContent = "No Name";
        return;
    }

    const namesArray = inputString
        .split(',')
        .map(nameStr => nameStr.trim())
        .filter(name => name.length > 0);

    const namesLongerThanFour = longNames(namesArray);
    const namesShorterOrEqualFour = namesArray.filter(name => name.trim().length <= 4);

    let outputMessage = "";

    outputMessage += "Names with more than 4 letters :";
    if (namesLongerThanFour.length > 0) {
        outputMessage += namesLongerThanFour.join(', ') + ". ";
    } else {
        outputMessage += "Undfind";
    }

    outputMessage += "Names with less then 4 letters";
    if (namesShorterOrEqualFour.length > 0) {
        outputMessage += namesShorterOrEqualFour.join(', ') + ".";
    } else {
        outputMessage += "Undfind";
    }

    resultElement.textContent = outputMessage;
}

//Exercise 3
//Write a function countWords(str) that:
//Removes extra spaces
//Splits the sentence into words
//Counts how many times each word appears
//Returns an object with the results
//Example:
//Input: countWords("hello world hello");
//Expected output: { hello: 2, world: 1 }
function countWords(str) {

    const lowerStr = str.toLowerCase();

    const cleanStr = lowerStr
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
        .replace(/\s{2,}/g, " ")
        .trim();


    const wordsArray = cleanStr.split(' ');


    const wordCounts = {};

    wordsArray.forEach(word => {
        if (word === "") {
            return; 
        }
   
        wordCounts[word] = (wordCounts[word] || 0) + 1;
    });

    return wordCounts;
}


function processWordCounting() {
  
    const inputElement = document.getElementById('textInput');

    const outputElement = document.getElementById('outputResult');

   
    const text = inputElement.value;
    
    if (text.trim() === "") {
        outputElement.textContent = "Please enter the text for counting";
        return;
    }

    const results = countWords(text);
    
    //لم اجد طرقة للعرض مشت امعيا الا عرض النتيجة بصيغة JSON منظمة
    outputElement.textContent = JSON.stringify(results, null, 2);
}
