let genArray = (length,min,max) =>{
    let arr = [];
    let i = 0;
    for(i = 0;i<length;i++){
        arr.push(Math.floor(Math.random() * max-min+1)+min)
    }
    return arr;
}

const quick_sort = (arr) =>{
    if(arr.length <= 1){
        return arr;
    }

    let pivot = arr[arr.length-1];
    let leftArr = [];
    let rightArr = [];
    let len = arr.length;
    let i;
    for(i = 0;i<len-1;i++){
        if(arr[i]<pivot){
            leftArr.push(arr[i]);
        }
        else if(arr[i] >= pivot){
            rightArr.push(arr[i]);
        }
    }
  
    return [...quick_sort(leftArr),pivot,...quick_sort(rightArr)]

}

let result = quick_sort(genArray(50,0,1000));
console.log(result);

