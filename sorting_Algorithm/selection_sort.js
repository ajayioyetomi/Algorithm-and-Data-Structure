let genArray = (length,min,max) =>{
    let arr = [];
    let i = 0;
    for(i = 0;i<length;i++){
        arr.push(Math.floor(Math.random() * max-min+1)+min)
    }
    return arr;
}

const selection_sort = (arr) =>{
    let array = arr.slice();
    let i ;
    let len = array.length;
    for(i = 0;i<len;i++){
        let j;
        let min = i;
        for(j = i+1;j< len;j++){
            if(array[j] < array[min]){
                min = j
            }
        }
        const temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}

let result = selection_sort(genArray(25,1,20))
console.log(result);