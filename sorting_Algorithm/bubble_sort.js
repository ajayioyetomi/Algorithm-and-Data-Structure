let genArray = (length,min,max) =>{
    let arr = [];
    let i = 0;
    for(i = 0;i<length;i++){
        arr.push(Math.floor(Math.random() * max-min+1)+min)
    }
    return arr;
}

const bubble_sort = (arr) =>{
    let array = arr.slice();
    let i ;
    let len = array.length - 1;
    for(i = 0;i<len;i++){
        let j;
        let len2 = len-i;
        for(j =0;j<len2;j++){
            if(array[j] > array[j+1]){
                [array[j],array[j+1]] = [array[j+1],array[j]];

            }
        }
    }
    return array;
}

let result = bubble_sort(genArray(200,1,500));
console.log(result);