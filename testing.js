// function obj(name){
//     this.name = name
//     this.setNewname =(value)=>{
//         this.name = value;
//     }
//     this.__proto__.getName=()=>{
//         return this.name;
//     }
// }



const colorizeWordle = (guessedWord, hiddenWord) => {
    let tempHidden = hiddenWord.toUpperCase().split('');

    let i = 0;
    let result = '';
    let len = tempHidden.length;
    for(i = 0;i<len;i++){
        let character = guessedWord.toUpperCase().charAt(i);
        let hiddenCharacter = tempHidden[i];
        if(character === hiddenCharacter){
            result+='G';
            tempHidden[i] = '-1';
        }
        else{
            if(tempHidden.indexOf(character) === -1){
                result+='B';
            }
            else{
                let remainingStr = guessedWord.toUpperCase().slice(0,i)+'-'+guessedWord.toUpperCase().slice(i+1);
                if(remainingStr.indexOf(character) === -1){
                  result+= 'Y';
                  tempHidden[tempHidden.indexOf(character)] = '-1';
                }
                else{
                    let tempPos = remainingStr.indexOf(character);
                    let tempPos2 =tempHidden.indexOf(character);
                    if(tempPos2 != tempPos){
                        result+= 'Y';
                        tempHidden[tempHidden.indexOf(character)] = '-1';
                    }
                    else{
                        result += 'B';
                    }

                }
                
            }
        }
    } 
    return result;
};

//let result = colorizeWordle('apipe','egipe');

// console.log(result);

function maximumProfitFromStock(arg){
    if(arg.length <= 1) return 0; 
    let tempArr = [];
    let startIndex = 0;
    let tempEnd = arg.length;
    let end = arg.length -1;
    while(end != 0){
        const num = arg[startIndex];
        for(let i =startIndex+1;i<tempEnd;i++){
            let tempNum = arg[i];
            if(num < tempNum){
                tempArr.push(tempNum - num);
            }
        }
        
        startIndex++;
        end--;
    }
    if(tempArr.length == 0) return 0;
    return tempArr.sort((a,b)=> b-a)[0];
    

}


//console.log(maximumProfitFromStock([6,2,0,-1,10]))

const solution = (s) => {
    // Type your solution here
    let resultArr = [];
    let end = s.length - 1;
    let currentIndex = 0;
    let len = end;
    let i;
    while(end != 0){
        let obj = {};
        for(i = currentIndex;i<= len;i++){
            let char = s[i];
           if(i == currentIndex){
               obj[char] = 1;
           }
           else{
               if(obj[char]) break;
               else{
                  obj[char] = 1;
               }
           }
        
        }
        resultArr.push(Object.keys(obj));
        currentIndex++;
        end--;
    }
    return resultArr.sort((a,b)=> b-a)[0];
};



// console.log(solution('nndN'));



var longestPalindrome = function(s) {
    let currentIndex = 0;
    let strLen = s.length;
    let result = []
    let tempS = s;
    const checkPalindrome = (word) =>{
        if (typeof word == "undefined" || word == "") return false;

        const checkHelper = (word, start, last) => {
            if (start >= last) {
            return true;
            } else {
            if (word.charAt(start) == word.charAt(last)) {
                return checkHelper(word, (start += 1), (last -= 1));
            } else {
                return false;
            }
            }
        };

        return checkHelper(word, 0, word.length - 1);
        
    }
    if(strLen > 1){
       while(strLen > 1){
            let count = 0;
            let char = tempS.charAt(currentIndex);
            result.push(char);
            let lastIndex = tempS.split('').lastIndexOf(char);
            if(lastIndex == currentIndex){
                tempS = tempS.slice(1);
                strLen = tempS.length;
                currentIndex = 0;
                continue;
            }
            let backStart = lastIndex;
            let frontStart = 0;
            for(let i = frontStart;i <= backStart;){
                let letterA = tempS.charAt(i);
                let letterB = tempS.charAt(backStart);
                if(letterA == letterB){
                    if((i == backStart) || i+1 == backStart ){
                        
                        let strObj = tempS.slice(0,lastIndex+1);
                        let check = checkPalindrome(strObj);
                        if(check)result.push(strObj);
                        tempS = tempS.slice(1);
                        currentIndex = 0;
                        console.log(lastIndex,strObj,count);
                        break;
                    }
                }
                else{
                    
                    let testS = tempS.split('');
                    testS[lastIndex] = '-';
                    let newLast = testS.lastIndexOf(char);
                    if(newLast != currentIndex){
                        //console.log(newLast,tempS);
                        backStart = newLast;
                        currentIndex = 0;
                        i = 0;
                        continue;
                    }  
                    else{
                        
                        tempS = tempS.slice(1);
                        currentIndex = 0;
                        strLen = tempS.length;
                        break;
                    }
                }
                i+=1;backStart-=1;
            }       
              
        }

    }
    else{
        return s;
    }

    //console.log(result,'result');  
    let highest = Math.max(...result.map(str => str.length ));
    let arr = result.filter(str => str.length == highest)[0];

    return arr;
  };

  var longestPalindrome2 = function(s) {
    let currentIndex = 0;
    let strLen = s.length;
    let result = []
    let tempS = s;
    const checkPalindrome = (word) =>{
        if (typeof word == "undefined" || word == "") return false;

        const checkHelper = (word, start, last) => {
            if (start >= last) {
            return true;
            } else {
            if (word.charAt(start) == word.charAt(last)) {
                return checkHelper(word, (start += 1), (last -= 1));
            } else {
                return false;
            }
            }
        };

        return checkHelper(word, 0, word.length - 1);
        
    }
    if(strLen > 1){
       while(strLen > 1){
            let count = 0;
            let char = tempS.charAt(currentIndex);
            result.push(char);
            let lastIndex = tempS.split('').lastIndexOf(char);
            if(lastIndex == currentIndex){
                tempS = tempS.slice(1);
                strLen = tempS.length;
                currentIndex = 0;
                continue;
            }
            let backStart = lastIndex;
            let frontStart = 0;
            
            for(;tempS.length > 1;){
                let word = tempS.slice(frontStart,backStart);
                let check = checkPalindrome(word);
                if(check){
                    result.push(word);
                    tempS = tempS.slice(1);
                    frontStart = 0;
                }
                else{
                    
                    let testS = tempS.split('');
                    testS[lastIndex] = '-';
                    let newLast = testS.lastIndexOf(char);
                    if(newLast != currentIndex){
                        backStart = newLast;
                        currentIndex = 0;
                        i = 0;
                        continue;
                    }  
                    else{
                        
                        tempS = tempS.slice(1);
                        currentIndex = 0;
                        strLen = tempS.length;
                        break;
                    }
                }
                i+=1;backStart-=1;
            }       
              
        }

    }
    else{
        return strLen;
    }

    //console.log(result,'result');  
    let highest = Math.max(...result.map(str => str.length ));
    let arr = result.filter(str => str.length == highest)[0];

    return arr;
  };


const longestPalindrome3 = function(s){
    let tempS = s;
    let len = tempS.length;
    let result = [];

    const checkPalindrome = (word) =>{
        if (typeof word == "undefined" || word == "") return false;

        const checkHelper = (word, start, last) => {
            if (start >= last) {
                return true;
            } 
            else {
                if (word.charAt(start) == word.charAt(last)) {
                    return checkHelper(word, (start += 1), (last -= 1));
                } else {
                    return false;
                }
            }
        };

        return checkHelper(word, 0, word.length - 1);
        
    }

    if(len > 1){
        while(len > 1){
            let tString = tempS;
            let char = tString.charAt(0);
            let lastIndex = tString.split('').lastIndexOf(char);
            let testString = tString.slice(0,lastIndex+1);
            let check = false;
        
            while(!check){
                let check = checkPalindrome(testString);
                if(check){
                    result.push(testString);
                    tempS = tempS.slice(1);
                    len = tempS.length;
                    break;
                }  
                else{
                    let newTemp = testString.slice(0,lastIndex);
                    let newLastIndex = newTemp.split('').lastIndexOf(char);
                    if(newLastIndex == 0){
                        check == true;
                        tempS = tempS.slice(1);
                        len = tempS.length;
                        break;
                    } else{
                        lastIndex = newLastIndex;
                        testString = testString.slice(0,lastIndex+1)

                    }
                }
            }
        }
        let highest = Math.max(...result.map(str => str.length ));
        let arr = result.filter(str => str.length == highest)[0];
        return arr;
    }
    else{
        return tempS;

    }
}

//console.log(longestPalindrome3('babddadd'))

const isValid = function(s){
    let tempS = s;
    let len = tempS.length;
    if(len == 0 || len == 1){
        console.log("invalid");
        return false;
    }
    let status = true;
    let obj= {
        "(":")",
        "[":"]",
        "{":"}"
    }
    while(len > 0 && status == true ){
        for(let i = 0;i<len;i++){
            let current = tempS[i];
            let next = tempS[i+1];
    
            if(next == undefined){
                status = false;
                break;
            }
            if(obj[current] === next){
                if(i == 0){
                    tempS=tempS.slice(i+2);
                }
                else if(i+2 == len){
                    tempS = tempS.slice(0,i);
                }
                else{
                    tempS= tempS.slice(0,i)+tempS.slice(i+2);
                }
                len = tempS.length;
                status = true;
                break;
            }
        }
    }
    if (len == 0 && status){
        console.log("valid");
        return true;
    }
    console.log("invalid");
    return false;
}

//let str = "))";
//isValid(str);

const nSolution = (s)=>{
    let len = s.length;
    let letter = -1;
    let highest = 0;
    let cnt;
    let hash = {};
    for(cnt=0;cnt<len;cnt++){
        const char = s[cnt];
        if(/[a-zA-Z]/.test(char)){
            hash[char] = (hash[char] || 0)+1;
            if(hash[char] > highest){
                highest = hash[char];
                letter = char;
            }
        }

    }
    console.log(letter,highest);
}

let str ='rrrdududuuu374733DS';
//nSolution(str);


var maxArea = function(height) {
    let count = height.length;
    if(count === 1) return 0;
    let h = 0;
    let start = 0;
    while(start < count-1){
        let highest = 0;
        for(let i=start+1;i<count;i++){
            let a = height[start];
            let b = height[i];

            let mul = a * (i-start);
            if(a>b) mul = b * (i-start);               
            else mul = a * (i-start);
            if(mul > highest) highest = mul;
        }
        if(highest > h) h = highest;        
        start++;
    }
    return h;
    
};

console.log(maxArea(arr));

user.integrations('tf');