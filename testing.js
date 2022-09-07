function obj(name){
    this.name = name
    this.setNewname =(value)=>{
        this.name = value;
    }
    this.__proto__.getName=()=>{
        return this.name;
    }
}



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
function test (){
    console.log(this);
}

const test2 = ()=>{
    console.log(this);
}


