let genArray = (length,min,max) =>{
    let arr = [];
    let i = 0;
    for(i = 0;i<length;i++){
        arr.push(Math.floor(Math.random() * max-min+1)+min)
    }
    return arr;
}

const insertion_sort=(arr) =>{
    // let array = arr.slice();
    // console.log(array)
    let result = [];
    let i;
    let len = arr.length;
    for(i = 0;i<len;i++){
    
        result.push(arr[i]);
        let len2 = result.length;
        for(j = len2-1;j > 0;j--){
            if(result[j] < result[j-1]){
                const temp = result[j];
                result[j] = result[j-1];
                result[j-1] = temp;
            }
            else{
                break;
            }
        }
           
    }
    return result;
}


const result = insertion_sort(genArray(200,0,500));
console.log(result);